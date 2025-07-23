// // File: screens/common/useVisitorHistory.js

// import { useState, useEffect } from 'react';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { useIsFocused } from '@react-navigation/native';

// const formatDateKey = (date) => {
//   return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
// };

// const groupVisitorsByDate = (visitors) => {
//   const grouped = { Today: [], Yesterday: [] };
//   const today = new Date();
//   const yesterday = new Date(today);
//   yesterday.setDate(today.getDate() - 1);

//   const todayKey = formatDateKey(today);
//   const yesterdayKey = formatDateKey(yesterday);

//   visitors.forEach((visitor) => {
//     const visitDate = new Date(visitor.checkInTime);
//     const visitKey = formatDateKey(visitDate);

//     if (visitKey === todayKey) {
//       grouped.Today.push(visitor);
//     } else if (visitKey === yesterdayKey) {
//       grouped.Yesterday.push(visitor);
//     } else {
//       const label = visitDate.toLocaleDateString('en-GB');
//       if (!grouped[label]) grouped[label] = [];
//       grouped[label].push(visitor);
//     }
//   });

//   return grouped;
// };

// export default function useVisitorHistory(searchQuery) {
//   const [groupedVisitors, setGroupedVisitors] = useState({});
//   const isFocused = useIsFocused();

//   const loadVisitors = async () => {
//     const stored = await AsyncStorage.getItem('visitors');
//     const allVisitors = stored ? JSON.parse(stored) : [];

//     const filtered = searchQuery.trim()
//       ? allVisitors.filter((v) =>
//           v.name.toLowerCase().includes(searchQuery.toLowerCase())
//         )
//       : allVisitors;

//     setGroupedVisitors(groupVisitorsByDate(filtered));
//   };

//   useEffect(() => {
//     if (isFocused) {
//       loadVisitors();
//     }
//   }, [isFocused, searchQuery]);

//   return groupedVisitors;
// }


import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useIsFocused } from '@react-navigation/native';

const formatDateKey = (date) => {
  return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
};

const groupVisitorsByDate = (visitors) => {
  const grouped = { Today: [], Yesterday: [] };
  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(today.getDate() - 1);

  const todayKey = formatDateKey(today);
  const yesterdayKey = formatDateKey(yesterday);

  visitors.forEach((visitor) => {
    const visitDate = new Date(visitor.checkInTime);
    const visitKey = formatDateKey(visitDate);

    if (visitKey === todayKey) {
      grouped.Today.push(visitor);
    } else if (visitKey === yesterdayKey) {
      grouped.Yesterday.push(visitor);
    } else {
      const label = visitDate.toLocaleDateString('en-GB');
      if (!grouped[label]) grouped[label] = [];
      grouped[label].push(visitor);
    }
  });

  return grouped;
};

export default function useVisitorHistory(searchQuery) {
  const [groupedVisitors, setGroupedVisitors] = useState({});
  const isFocused = useIsFocused();

  const loadVisitors = async () => {
    const stored = await AsyncStorage.getItem('visitors');
    const allVisitors = stored ? JSON.parse(stored) : [];

    const filtered = searchQuery.trim()
      ? allVisitors.filter((v) =>
          v.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
      : allVisitors;

    setGroupedVisitors(groupVisitorsByDate(filtered));
  };

  useEffect(() => {
    if (isFocused) {
      loadVisitors();
    }
  }, [isFocused, searchQuery]);

  return groupedVisitors;
}
