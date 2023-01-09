import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from '../firebase';
import moment from 'moment';

import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from '@mui/material';

const HabitList = () => {
  let todayMinus0 = moment().format('MMM, Do');
  let todayMinus1 = moment().subtract(1, 'days').format('MMM, Do');
  let todayMinus2 = moment().subtract(2, 'days').format('MMM, Do');
  let todayMinus3 = moment().subtract(3, 'days').format('MMM, Do');
  let todayMinus4 = moment().subtract(4, 'days').format('MMM, Do');
  let todayMinus5 = moment().subtract(5, 'days').format('MMM, Do');

  const [habits, setHabits] = useState([]);
  // Get List of Habits from FS
  useEffect(() => {
    const collectionRef = collection(db, 'habits');

    // Sort by query
    const q = query(collectionRef, orderBy('timestamp', 'desc'));

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      setHabits(
        querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
          timestamp: doc.data().timestamp?.toDate().getTime(),
        }))
      );
    });

    return unsubscribe;
  }, []);
  return (
    <TableContainer component={Paper}>
      <Table aria-label="habit list">
        <TableHead>
          <TableRow>
            <TableCell>Habit</TableCell>
            <TableCell>{todayMinus0}</TableCell>
            <TableCell>{todayMinus1}</TableCell>
            <TableCell>{todayMinus2}</TableCell>
            <TableCell>{todayMinus3}</TableCell>
            <TableCell>{todayMinus4}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {habits.map((habit) => (
            <TableRow key={habit.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell>{habit.title}</TableCell>
              <TableCell>
                {(habit.completed && moment(habit.timestamp).format('MMM, Do') == todayMinus0) ==
                true
                  ? '✅'
                  : '❌'}
              </TableCell>
              <TableCell>
                {(habit.completed && moment(habit.timestamp).format('MMM, Do') == todayMinus1) ==
                true
                  ? '✅'
                  : '❌'}
              </TableCell>
              <TableCell>
                {(habit.completed && moment(habit.timestamp).format('MMM, Do') == todayMinus2) ==
                true
                  ? '✅'
                  : '❌'}
              </TableCell>
              <TableCell>
                {(habit.completed && moment(habit.timestamp).format('MMM, Do') == todayMinus3) ==
                true
                  ? '✅'
                  : '❌'}
              </TableCell>
              <TableCell>
                {(habit.completed && moment(habit.timestamp).format('MMM, Do') == todayMinus4) ==
                true
                  ? '✅'
                  : '❌'}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default HabitList;
