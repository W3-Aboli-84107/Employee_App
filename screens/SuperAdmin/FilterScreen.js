// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   TouchableOpacity,
//   Platform,
//   ScrollView,
// } from 'react-native';
// import DateTimePicker from '@react-native-community/datetimepicker';
// import { Ionicons } from '@expo/vector-icons';

// export default function FilterScreen({ navigation }) {
//   const [selectedFilter, setSelectedFilter] = useState(null);
//   const [selectedYear, setSelectedYear] = useState(null);
//   const [selectedMonth, setSelectedMonth] = useState(null);
//   const [selectedCategory, setSelectedCategory] = useState(null);

//   const [fromDate, setFromDate] = useState(new Date());
//   const [toDate, setToDate] = useState(new Date());
//   const [showFromPicker, setShowFromPicker] = useState(false);
//   const [showToPicker, setShowToPicker] = useState(false);

//   const years = [2022, 2023, 2024, 2025];
//   const months = [
//     'January', 'February', 'March', 'April',
//     'May', 'June', 'July', 'August',
//     'September', 'October', 'November', 'December'
//   ];
//   const categories = ['Visitor', 'Employee', 'Admin'];

//   return (
//     <ScrollView style={styles.container}>
//       {/* Header */}
//       <View style={styles.header}>
//         <TouchableOpacity onPress={() => navigation.goBack()}>
//           <Ionicons name="arrow-back" size={24} color="#fff" />
//         </TouchableOpacity>
//         <Text style={styles.title}>Filters</Text>
//       </View>

//       {/* Filter Options */}
//       <TouchableOpacity style={styles.filterOption} onPress={() => setSelectedFilter('year')}>
//         <Text style={styles.filterText}>Years</Text>
//       </TouchableOpacity>

//       <TouchableOpacity style={styles.filterOption} onPress={() => setSelectedFilter('month')}>
//         <Text style={styles.filterText}>Months</Text>
//       </TouchableOpacity>

//       <TouchableOpacity style={styles.filterOption} onPress={() => setSelectedFilter('category')}>
//         <Text style={styles.filterText}>Categories</Text>
//       </TouchableOpacity>

//       <TouchableOpacity style={styles.filterOption} onPress={() => setSelectedFilter('custom')}>
//         <Text style={styles.filterText}>Custom Date</Text>
//       </TouchableOpacity>

//       {/* Dynamic Filters */}
//       {selectedFilter === 'year' && (
//         <View>
//           {years.map((year) => (
//             <TouchableOpacity key={year} style={styles.optionItem} onPress={() => setSelectedYear(year)}>
//               <Text style={styles.optionText}>{year}</Text>
//             </TouchableOpacity>
//           ))}
//           {selectedYear && <Text style={styles.selectedText}>Selected Year: {selectedYear}</Text>}
//         </View>
//       )}

//       {selectedFilter === 'month' && (
//         <View>
//           {months.map((month, index) => (
//             <TouchableOpacity key={index} style={styles.optionItem} onPress={() => setSelectedMonth(month)}>
//               <Text style={styles.optionText}>{month}</Text>
//             </TouchableOpacity>
//           ))}
//           {selectedMonth && <Text style={styles.selectedText}>Selected Month: {selectedMonth}</Text>}
//         </View>
//       )}

//       {selectedFilter === 'category' && (
//         <View>
//           {categories.map((cat) => (
//             <TouchableOpacity key={cat} style={styles.optionItem} onPress={() => setSelectedCategory(cat)}>
//               <Text style={styles.optionText}>{cat}</Text>
//             </TouchableOpacity>
//           ))}
//           {selectedCategory && <Text style={styles.selectedText}>Selected Category: {selectedCategory}</Text>}
//         </View>
//       )}

//       {selectedFilter === 'custom' && (
//         <View>
//           <TouchableOpacity style={styles.optionItem} onPress={() => setShowFromPicker(true)}>
//             <Text style={styles.optionText}>From: {fromDate.toDateString()}</Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.optionItem} onPress={() => setShowToPicker(true)}>
//             <Text style={styles.optionText}>To: {toDate.toDateString()}</Text>
//           </TouchableOpacity>

//           {showFromPicker && (
//             <DateTimePicker
//               value={fromDate}
//               mode="date"
//               display="default"
//               onChange={(event, selectedDate) => {
//                 setShowFromPicker(false);
//                 if (selectedDate) setFromDate(selectedDate);
//               }}
//             />
//           )}
//           {showToPicker && (
//             <DateTimePicker
//               value={toDate}
//               mode="date"
//               display="default"
//               onChange={(event, selectedDate) => {
//                 setShowToPicker(false);
//                 if (selectedDate) setToDate(selectedDate);
//               }}
//             />
//           )}
//         </View>
//       )}

//       {/* Apply Button */}
//       <TouchableOpacity style={styles.applyButton}>
//         <Text style={styles.applyText}>Apply</Text>
//       </TouchableOpacity>
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#0C0F14',
//     padding: 20,
//   },
//   header: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: 10,
//     marginBottom: 30,
//   },
//   title: {
//     fontSize: 20,
//     color: '#fff',
//     fontWeight: 'bold',
//     marginLeft: 10,
//   },
//   filterOption: {
//     backgroundColor: '#1C1F26',
//     borderRadius: 10,
//     padding: 15,
//     marginBottom: 15,
//   },
//   filterText: {
//     color: '#fff',
//     fontSize: 16,
//   },
//   applyButton: {
//     backgroundColor: '#E74C3C',
//     padding: 15,
//     borderRadius: 10,
//     marginTop: 30,
//     alignItems: 'center',
//   },
//   applyText: {
//     color: '#fff',
//     fontWeight: 'bold',
//   },
//   optionItem: {
//     backgroundColor: '#2E3239',
//     padding: 10,
//     marginVertical: 5,
//     borderRadius: 8,
//   },
//   optionText: {
//     color: '#fff',
//   },
//   selectedText: {
//     color: '#f0f0f0',
//     marginTop: 10,
//     fontStyle: 'italic',
//   },
// });

// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   TouchableOpacity,
//   Platform,
//   ScrollView,
//   SafeAreaView // Added SafeAreaView for better layout on notched devices
// } from 'react-native';
// import DateTimePicker from '@react-native-community/datetimepicker';
// import { Ionicons } from '@expo/vector-icons';

// // You will need to import your DownloadScreen here if you intend to navigate to it.
// // Make sure the path is correct based on your project structure.
// // For example, if DownloadScreen.js is in the same directory:
// // import DownloadScreen from './DownloadScreen';

// export default function FilterScreen({ navigation }) {
//   const [selectedFilter, setSelectedFilter] = useState(null); // 'year', 'month', 'category', 'custom'
//   const [selectedYear, setSelectedYear] = useState(null);
//   const [selectedMonth, setSelectedMonth] = useState(null);
//   const [selectedCategory, setSelectedCategory] = useState(null);

//   const [fromDate, setFromDate] = useState(new Date());
//   const [toDate, setToDate] = useState(new Date());
//   const [showFromPicker, setShowFromPicker] = useState(false);
//   const [showToPicker, setShowToPicker] = useState(false);

//   // Example data for filters
//   const years = [2022, 2023, 2024, 2025];
//   const months = [
//     'January', 'February', 'March', 'April',
//     'May', 'June', 'July', 'August',
//     'September', 'October', 'November', 'December'
//   ];
//   const categories = ['Visitor', 'Employee', 'Admin'];

//   // Handler for date picker changes
//   const onChangeFromDate = (event, selectedDate) => {
//     const currentDate = selectedDate || fromDate;
//     setShowFromPicker(Platform.OS === 'ios');
//     setFromDate(currentDate);
//   };

//   const onChangeToDate = (event, selectedDate) => {
//     const currentDate = selectedDate || toDate;
//     setShowToPicker(Platform.OS === 'ios');
//     setToDate(currentDate);
//   };

//   // Function to handle applying filters and navigating
//   const handleApplyFilters = () => {
//     // In a real application, you would typically consolidate the selected filter
//     // values into an object and pass it as params to the target screen.
//     const filters = {
//       filterType: selectedFilter,
//       year: selectedYear,
//       month: selectedMonth,
//       category: selectedCategory,
//       fromDate: selectedFilter === 'custom' ? fromDate.toISOString() : null,
//       toDate: selectedFilter === 'custom' ? toDate.toISOString() : null,
//     };

//     console.log("Applying Filters:", filters);

//     // Navigate to the DownloadScreen and pass the filters as parameters
//     // Make sure 'DownloadScreen' is the correct name of your route in navigation stack.
//     navigation.navigate('DownloadScreen', filters);
//   };

//   return (
//     // <SafeAreaView style={styles.safeArea}> {/* Wrap with SafeAreaView */}
//     <SafeAreaView style={styles.safeArea}>

//       <ScrollView style={styles.container}>
//         {/* Header */}
//         <View style={styles.header}>
//           <TouchableOpacity onPress={() => navigation.goBack()}>
//             <Ionicons name="arrow-back" size={24} color="#fff" />
//           </TouchableOpacity>
//           <Text style={styles.title}>Filters</Text>
//         </View>

//         {/* Filter Options */}
//         <TouchableOpacity
//           style={[styles.filterOption, selectedFilter === 'year' && styles.selectedFilterOption]}
//           onPress={() => {
//             setSelectedFilter('year');
//             setSelectedMonth(null); // Clear other selections
//             setSelectedCategory(null);
//           }}>
//           <Text style={styles.filterText}>Years</Text>
//         </TouchableOpacity>

//         <TouchableOpacity
//           style={[styles.filterOption, selectedFilter === 'month' && styles.selectedFilterOption]}
//           onPress={() => {
//             setSelectedFilter('month');
//             setSelectedYear(null); // Clear other selections
//             setSelectedCategory(null);
//           }}>
//           <Text style={styles.filterText}>Months</Text>
//         </TouchableOpacity>

//         <TouchableOpacity
//           style={[styles.filterOption, selectedFilter === 'category' && styles.selectedFilterOption]}
//           onPress={() => {
//             setSelectedFilter('category');
//             setSelectedYear(null); // Clear other selections
//             setSelectedMonth(null);
//           }}>
//           <Text style={styles.filterText}>Categories</Text>
//         </TouchableOpacity>

//         <TouchableOpacity
//           style={[styles.filterOption, selectedFilter === 'custom' && styles.selectedFilterOption]}
//           onPress={() => {
//             setSelectedFilter('custom');
//             setSelectedYear(null); // Clear other selections
//             setSelectedMonth(null);
//             setSelectedCategory(null);
//           }}>
//           <Text style={styles.filterText}>Custom Date</Text>
//         </TouchableOpacity>

//         {/* Dynamic Filters Content based on selectedFilter */}
//         {selectedFilter === 'year' && (
//           <View style={styles.subOptionsContainer}>
//             {years.map((year) => (
//               <TouchableOpacity
//                 key={year}
//                 style={[styles.optionItem, selectedYear === year && styles.selectedSubOptionItem]}
//                 onPress={() => setSelectedYear(year)}>
//                 <Text style={styles.optionText}>{year}</Text>
//               </TouchableOpacity>
//             ))}
//             {selectedYear && <Text style={styles.selectedDisplayText}>Selected Year: {selectedYear}</Text>}
//           </View>
//         )}

//         {selectedFilter === 'month' && (
//           <View style={styles.subOptionsContainer}>
//             {months.map((month, index) => (
//               <TouchableOpacity
//                 key={index}
//                 style={[styles.optionItem, selectedMonth === month && styles.selectedSubOptionItem]}
//                 onPress={() => setSelectedMonth(month)}>
//                 <Text style={styles.optionText}>{month}</Text>
//               </TouchableOpacity>
//             ))}
//             {selectedMonth && <Text style={styles.selectedDisplayText}>Selected Month: {selectedMonth}</Text>}
//           </View>
//         )}

//         {selectedFilter === 'category' && (
//           <View style={styles.subOptionsContainer}>
//             {categories.map((cat) => (
//               <TouchableOpacity
//                 key={cat}
//                 style={[styles.optionItem, selectedCategory === cat && styles.selectedSubOptionItem]}
//                 onPress={() => setSelectedCategory(cat)}>
//                 <Text style={styles.optionText}>{cat}</Text>
//               </TouchableOpacity>
//             ))}
//             {selectedCategory && <Text style={styles.selectedDisplayText}>Selected Category: {selectedCategory}</Text>}
//           </View>
//         )}

//         {selectedFilter === 'custom' && (
//           <View style={styles.subOptionsContainer}>
//             <TouchableOpacity style={styles.optionItem} onPress={() => setShowFromPicker(true)}>
//               <Text style={styles.optionText}>From: {fromDate.toDateString()}</Text>
//             </TouchableOpacity>
//             {showFromPicker && (
//               <DateTimePicker
//                 testID="datePickerFrom"
//                 value={fromDate}
//                 mode="date"
//                 display="default"
//                 onChange={onChangeFromDate}
//               />
//             )}

//             <TouchableOpacity style={styles.optionItem} onPress={() => setShowToPicker(true)}>
//               <Text style={styles.optionText}>To: {toDate.toDateString()}</Text>
//             </TouchableOpacity>
//             {showToPicker && (
//               <DateTimePicker
//                 testID="datePickerTo"
//                 value={toDate}
//                 mode="date"
//                 display="default"
//                 onChange={onChangeToDate}
//               />
//             )}
//             {selectedFilter === 'custom' && (
//               <Text style={styles.selectedDisplayText}>
//                 Selected Range: {fromDate.toDateString()} - {toDate.toDateString()}
//               </Text>
//             )}
//           </View>
//         )}

//         {/* Apply Button */}
//         <TouchableOpacity style={styles.applyButton} onPress={handleApplyFilters}>
//           <Text style={styles.applyText}>Apply</Text>
//         </TouchableOpacity>
//       </ScrollView>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   safeArea: {
//     flex: 1,
//     backgroundColor: '#0C0F14', // Dark background for the entire screen
//   },
//   container: {
//     flex: 1,
//     padding: 20,
//   },
//   header: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 30,
//   },
//   title: {
//     fontSize: 20,
//     color: '#fff',
//     fontWeight: 'bold',
//     marginLeft: 10,
//   },
//   filterOption: {
//     backgroundColor: '#1C1F26', // Background for main filter options
//     borderRadius: 10,
//     padding: 15,
//     marginBottom: 15,
//     borderWidth: 1,
//     borderColor: 'transparent', // Default border
//   },
//   selectedFilterOption: {
//     borderColor: '#E74C3C', // Highlight color for the selected main filter
//     borderWidth: 2,
//   },
//   filterText: {
//     color: '#fff',
//     fontSize: 16,
//   },
//   subOptionsContainer: {
//     marginTop: 10,
//     marginBottom: 20,
//     paddingHorizontal: 10, // Indent sub-options slightly
//   },
//   optionItem: {
//     backgroundColor: '#2E3239', // Background for sub-options (year, month, category items)
//     padding: 12,
//     marginVertical: 5,
//     borderRadius: 8,
//     borderWidth: 1,
//     borderColor: 'transparent', // Default border
//   },
//   selectedSubOptionItem: {
//     backgroundColor: '#3A4250', // Slightly different background for selected sub-option
//     borderColor: '#E74C3C', // Highlight border for selected sub-option
//   },
//   optionText: {
//     color: '#fff',
//     fontSize: 15,
//   },
//   selectedDisplayText: {
//     color: '#A0A0A0', // Lighter grey for selected text display
//     marginTop: 10,
//     fontStyle: 'italic',
//     textAlign: 'center',
//     fontSize: 14,
//   },
//   applyButton: {
//     backgroundColor: '#E74C3C', // Red apply button
//     padding: 15,
//     borderRadius: 10,
//     marginTop: 30,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   applyText: {
//     color: '#fff',
//     fontWeight: 'bold',
//     fontSize: 18,
//   },
// });

import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Ionicons } from '@expo/vector-icons';

export default function FilterScreen({ navigation }) {
  const [selectedFilter, setSelectedFilter] = useState(null);
  const [selectedYear, setSelectedYear] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [fromDate, setFromDate] = useState(new Date());
  const [toDate, setToDate] = useState(new Date());
  const [showFromPicker, setShowFromPicker] = useState(false);
  const [showToPicker, setShowToPicker] = useState(false);

  const years = [2022, 2023, 2024, 2025];
  const months = [
    'January', 'February', 'March', 'April',
    'May', 'June', 'July', 'August',
    'September', 'October', 'November', 'December'
  ];
  const categories = ['Visitor', 'Employee', 'Admin'];

  const handleApplyFilters = () => {
    const filters = {
      filterType: selectedFilter,
      year: selectedYear,
      month: selectedMonth,
      category: selectedCategory,
      fromDate: selectedFilter === 'custom' ? fromDate.toISOString() : null,
      toDate: selectedFilter === 'custom' ? toDate.toISOString() : null,
    };
    console.log("Applying Filters:", filters);
    navigation.navigate('DownloadScreen', filters);
  };

  const renderSummary = (type) => {
    switch (type) {
      case 'year': return selectedYear ? `✓ ${selectedYear}` : '';
      case 'month': return selectedMonth ? `✓ ${selectedMonth}` : '';
      case 'category': return selectedCategory ? `✓ ${selectedCategory}` : '';
      case 'custom': return fromDate && toDate ? `✓ ${fromDate.toDateString()} → ${toDate.toDateString()}` : '';
      default: return '';
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.title}>Filters</Text>
        </View>

        {/* FILTER OPTIONS WITH CHECKBOX-LIKE DISPLAY */}
        {['year', 'month', 'category', 'custom'].map((filterType) => (
          <TouchableOpacity
            key={filterType}
            style={[
              styles.filterOption,
              selectedFilter === filterType && styles.selectedFilterOption
            ]}
            onPress={() => {
              setSelectedFilter(filterType);
              if (filterType !== 'year') setSelectedYear(null);
              if (filterType !== 'month') setSelectedMonth(null);
              if (filterType !== 'category') setSelectedCategory(null);
            }}
          >
            <Text style={styles.filterText}>
              {filterType === 'custom' ? 'Custom Date' : filterType.charAt(0).toUpperCase() + filterType.slice(1)}
            </Text>
            <Text style={styles.summaryText}>{renderSummary(filterType)}</Text>
          </TouchableOpacity>
        ))}

        {/* SUB-OPTIONS RENDERING */}
        {selectedFilter === 'year' && (
          <View style={styles.subOptionsContainer}>
            {years.map((year) => (
              <TouchableOpacity
                key={year}
                style={[
                  styles.optionItem,
                  selectedYear === year && styles.selectedSubOptionItem
                ]}
                onPress={() => setSelectedYear(year)}
              >
                <Text style={styles.optionText}>
                  {selectedYear === year ? '✓ ' : ''}{year}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        )}

        {selectedFilter === 'month' && (
          <View style={styles.subOptionsContainer}>
            {months.map((month) => (
              <TouchableOpacity
                key={month}
                style={[
                  styles.optionItem,
                  selectedMonth === month && styles.selectedSubOptionItem
                ]}
                onPress={() => setSelectedMonth(month)}
              >
                <Text style={styles.optionText}>
                  {selectedMonth === month ? '✓ ' : ''}{month}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        )}

        {selectedFilter === 'category' && (
          <View style={styles.subOptionsContainer}>
            {categories.map((cat) => (
              <TouchableOpacity
                key={cat}
                style={[
                  styles.optionItem,
                  selectedCategory === cat && styles.selectedSubOptionItem
                ]}
                onPress={() => setSelectedCategory(cat)}
              >
                <Text style={styles.optionText}>
                  {selectedCategory === cat ? '✓ ' : ''}{cat}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        )}

        {selectedFilter === 'custom' && (
          <View style={styles.subOptionsContainer}>
            <TouchableOpacity style={styles.optionItem} onPress={() => setShowFromPicker(true)}>
              <Text style={styles.optionText}>From: {fromDate.toDateString()}</Text>
            </TouchableOpacity>
            {showFromPicker && (
              <DateTimePicker
                value={fromDate}
                mode="date"
                display="default"
                onChange={(e, date) => {
                  setShowFromPicker(false);
                  if (date) setFromDate(date);
                }}
              />
            )}

            <TouchableOpacity style={styles.optionItem} onPress={() => setShowToPicker(true)}>
              <Text style={styles.optionText}>To: {toDate.toDateString()}</Text>
            </TouchableOpacity>
            {showToPicker && (
              <DateTimePicker
                value={toDate}
                mode="date"
                display="default"
                onChange={(e, date) => {
                  setShowToPicker(false);
                  if (date) setToDate(date);
                }}
              />
            )}
          </View>
        )}

        {/* APPLY BUTTON */}
        <TouchableOpacity style={styles.applyButton} onPress={handleApplyFilters}>
          <Text style={styles.applyText}>Apply</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#0C0F14',
  },
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  title: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
    marginLeft: 10,
  },
  filterOption: {
    backgroundColor: '#1C1F26',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: 'transparent',
  },
  selectedFilterOption: {
    borderColor: '#E74C3C',
    borderWidth: 2,
  },
  filterText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  summaryText: {
    color: '#aaa',
    fontSize: 14,
    marginTop: 5,
    fontStyle: 'italic',
  },
  subOptionsContainer: {
    marginTop: 10,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  optionItem: {
    backgroundColor: '#2E3239',
    padding: 12,
    marginVertical: 5,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'transparent',
  },
  selectedSubOptionItem: {
    backgroundColor: '#3A4250',
    borderColor: '#E74C3C',
  },
  optionText: {
    color: '#fff',
    fontSize: 15,
  },
  applyButton: {
    backgroundColor: '#E74C3C',
    padding: 15,
    borderRadius: 10,
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  applyText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
