// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   StyleSheet,
//   Modal,
//   FlatList,
//   Platform, // Import Platform to handle OS-specific date picker behavior
//   ScrollView, // Keep ScrollView for the main content
// } from 'react-native';
// import DateTimePicker from '@react-native-community/datetimepicker'; // Import the date picker


// const CheckBox = ({ value, onValueChange }) => (
//   <TouchableOpacity
//     onPress={onValueChange}
//     style={{
//       width: 22,
//       height: 22,
//       borderRadius: 4,
//       borderWidth: 2,
//       borderColor: '#FFF',
//       backgroundColor: value ? '#9566daff' : 'transparent', // Using your color
//       justifyContent: 'center',
//       alignItems: 'center',
//     }}
//   >
//     {value && <Text style={{ color: '#FFF', fontSize: 14 }}>✓</Text>}
//   </TouchableOpacity>
// );

// const filterOptions = {
//   years: ['2025', '2024', '2023', '2022', '2021', '2020', '2019', '2018', '2017', '2016', '2015', '2014'],
//   months: ['January 25', 'February 25', 'March 25', 'April 25', 'May 25', 'June 25', 'July 25', 'August 25', 'September 25', 'October 25', 'November 25', 'December 25'],
//   categories: ['IT', 'Interview', 'Healthcare', 'Digital marketing', 'Training', 'BD', 'Other'],
// };

// const FiltersScreen = () => {
//   const [modalVisible, setModalVisible] = useState(false);
//   const [selectedFilterType, setSelectedFilterType] = useState(null);

//   // Main state for selected items
//   const [selectedYears, setSelectedYears] = useState([]);
//   const [selectedMonths, setSelectedMonths] = useState([]);
//   const [selectedCategories, setSelectedCategories] = useState([]);
//   // Initialize customDateRange with Date objects or null
//   const [customDateRange, setCustomDateRange] = useState({ from: null, to: null });

//   // Temporary selections to track during modal interaction (before "Save")
//   const [tempSelectedItems, setTempSelectedItems] = useState([]);
//   // Temporary state for custom dates inside the modal
//   const [tempCustomDateRange, setTempCustomDateRange] = useState({ from: null, to: null });

//   // State for showing date pickers
//   const [showFromDatePicker, setShowFromDatePicker] = useState(false);
//   const [showToDatePicker, setShowToDatePicker] = useState(false);

//   const openFilterModal = (type) => {
//     setSelectedFilterType(type);

//     switch (type) {
//       case 'years':
//         setTempSelectedItems([...selectedYears]);
//         break;
//       case 'months':
//         setTempSelectedItems([...selectedMonths]);
//         break;
//       case 'categories':
//         setTempSelectedItems([...selectedCategories]);
//         break;
//       case 'customDate':
//         // Initialize temporary date range with the currently saved range
//         setTempCustomDateRange({ ...customDateRange });
//         break;
//       default:
//         setTempSelectedItems([]);
//         break;
//     }
//     setModalVisible(true);
//   };

//   const closeFilterModal = () => {
//     setModalVisible(false);
//     setSelectedFilterType(null);
//     setTempSelectedItems([]);
//     setTempCustomDateRange({ from: null, to: null }); // Clear temp date range
//     setShowFromDatePicker(false); // Hide date pickers
//     setShowToDatePicker(false);
//   };

//   const saveFilterSelection = () => {
//     switch (selectedFilterType) {
//       case 'years':
//         setSelectedYears(tempSelectedItems);
//         break;
//       case 'months':
//         setSelectedMonths(tempSelectedItems);
//         break;
//       case 'categories':
//         setSelectedCategories(tempSelectedItems);
//         break;
//       case 'customDate':
//         // Save the temporary date range to the main state
//         setCustomDateRange(tempCustomDateRange);
//         break;
//       default:
//         break;
//     }
//     closeFilterModal();
//   };

//   const toggleTempCheckbox = (item) => {
//     setTempSelectedItems((prev) =>
//       prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
//     );
//   };

//   // Handler for "From" date picker
//   const onFromDateChange = (event, selectedDate) => {
//     const currentDate = selectedDate || tempCustomDateRange.from;
//     setShowFromDatePicker(Platform.OS === 'ios'); // Keep picker open on iOS until "Done"
//     setTempCustomDateRange((prev) => ({ ...prev, from: currentDate }));
//   };

//   // Handler for "To" date picker
//   const onToDateChange = (event, selectedDate) => {
//     const currentDate = selectedDate || tempCustomDateRange.to;
//     setShowToDatePicker(Platform.OS === 'ios'); // Keep picker open on iOS until "Done"
//     setTempCustomDateRange((prev) => ({ ...prev, to: currentDate }));
//   };

//   const renderFilterContent = () => {
//     if (selectedFilterType === 'customDate') {
//       return (
//         <View style={styles.customDateContainer}>
//           <Text style={styles.modalTitle}>Select Custom Date Range</Text>

//           {/* From Date Picker Trigger */}
//           <TouchableOpacity
//             style={styles.datePickerTrigger}
//             onPress={() => setShowFromDatePicker(true)}
//           >
//             <Text style={styles.datePickerTriggerText}>
//               From: {tempCustomDateRange.from ? tempCustomDateRange.from.toLocaleDateString() : 'Select Date'}
//             </Text>
//           </TouchableOpacity>

//           {/* To Date Picker Trigger */}
//           <TouchableOpacity
//             style={styles.datePickerTrigger}
//             onPress={() => setShowToDatePicker(true)}
//           >
//             <Text style={styles.datePickerTriggerText}>
//               To: {tempCustomDateRange.to ? tempCustomDateRange.to.toLocaleDateString() : 'Select Date'}
//             </Text>
//           </TouchableOpacity>

//           {/* Conditional rendering for DateTimePicker */}
//           {showFromDatePicker && (
//             <DateTimePicker
//               testID="fromDatePicker"
//               value={tempCustomDateRange.from || new Date()} // Default to current date if null
//               mode="date"
//               display={Platform.OS === 'ios' ? 'spinner' : 'default'} // 'spinner' for iOS, 'default' for Android
//               onChange={onFromDateChange}
//               maximumDate={tempCustomDateRange.to || undefined} // 'From' date cannot be after 'To' date
//             />
//           )}

//           {showToDatePicker && (
//             <DateTimePicker
//               testID="toDatePicker"
//               value={tempCustomDateRange.to || new Date()} // Default to current date if null
//               mode="date"
//               display={Platform.OS === 'ios' ? 'spinner' : 'default'}
//               onChange={onToDateChange}
//               minimumDate={tempCustomDateRange.from || undefined} // 'To' date cannot be before 'From' date
//             />
//           )}

//           <View style={styles.modalButtons}>
//             <TouchableOpacity style={styles.modalButton} onPress={closeFilterModal}>
//               <Text style={styles.modalButtonText}>Cancel</Text>
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.modalButton} onPress={saveFilterSelection}>
//               <Text style={styles.modalButtonText}>Save</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       );
//     }

//     const data = filterOptions[selectedFilterType] || [];

//     return (
//       <View style={styles.modalContent}>
//         <Text style={styles.modalTitle}>
//           {selectedFilterType ? selectedFilterType.toUpperCase() : 'Filter'}
//         </Text>
//         <FlatList
//           data={data}
//           keyExtractor={(item) => item}
//           renderItem={({ item }) => (
//             <View style={styles.checkboxContainer}>
//               <Text style={styles.checkboxLabel}>{item}</Text>
//               <CheckBox
//                 value={tempSelectedItems.includes(item)}
//                 onValueChange={() => toggleTempCheckbox(item)}
//               />
//             </View>
//           )}
//         />
//         <View style={styles.modalButtons}>
//           <TouchableOpacity style={styles.modalButton} onPress={closeFilterModal}>
//             <Text style={styles.modalButtonText}>Cancel</Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.modalButton} onPress={saveFilterSelection}>
//             <Text style={styles.modalButtonText}>Save</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     );
//   };

//   const handleApplyFilters = () => {
//     console.log('APPLIED FILTERS:', {
//       selectedYears,
//       selectedMonths,
//       selectedCategories,
//       customDateRange,
//     });
//     // For demonstration, you might want to show a toast or navigate back
//     // alert('Filters Applied! Check console for details.'); // Removed alert as per instructions
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <TouchableOpacity onPress={() => console.log('Go back (implement navigation)')}>
//           <Text style={styles.backButton}>&lt;</Text>
//         </TouchableOpacity>
//         <Text style={styles.headerTitle}>Filters</Text>
//       </View>

//       {/* Original filter options */}
//       <View style={styles.filterOptionsContainer}>
//         <TouchableOpacity style={styles.filterItem} onPress={() => openFilterModal('years')}>
//           <Text style={styles.filterItemText}>Years</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.filterItem} onPress={() => openFilterModal('months')}>
//           <Text style={styles.filterItemText}>Months</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.filterItem} onPress={() => openFilterModal('categories')}>
//           <Text style={styles.filterItemText}>Categories</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.filterItem} onPress={() => openFilterModal('customDate')}>
//           <Text style={styles.filterItemText}>Custom Date</Text>
//         </TouchableOpacity>
//       </View>

//       <TouchableOpacity style={styles.applyButton} onPress={handleApplyFilters}>
//         <Text style={styles.applyButtonText}>Apply</Text>
//       </TouchableOpacity>

//       {/* Moved selected data display AFTER the apply button */}
//       <ScrollView contentContainerStyle={styles.selectedDataContainer}>
//         <Text style={styles.selectedDataTitle}>Current Selections:</Text>
//         <Text style={styles.selectedDataItem}>
//           Years: {selectedYears.length > 0 ? selectedYears.join(', ') : 'None'}
//         </Text>
//         <Text style={styles.selectedDataItem}>
//           Months: {selectedMonths.length > 0 ? selectedMonths.join(', ') : 'None'}
//         </Text>
//         <Text style={styles.selectedDataItem}>
//           Categories: {selectedCategories.length > 0 ? selectedCategories.join(', ') : 'None'}
//         </Text>
//         <Text style={styles.selectedDataItem}>
//           Custom Date: {customDateRange.from && customDateRange.to
//             ? `${customDateRange.from.toLocaleDateString()} - ${customDateRange.to.toLocaleDateString()}`
//             : 'None'}
//         </Text>
//       </ScrollView>

//       <Modal animationType="slide" transparent={true} visible={modalVisible} onRequestClose={closeFilterModal}>
//         <View style={styles.centeredView}>{renderFilterContent()}</View>
//       </Modal>
//     </View>
//   );
// };

// const styles = StyleSheet.create({

//   container: { 
//     flex: 1,
//      backgroundColor: '#1E1E2C',
//       padding: 20, 
//       paddingTop: 50 
//     },

//   header:
//    {
//      flexDirection: 'row', 
//     alignItems: 'center', 
//     marginBottom: 30
//    },

//   backButton:
//    { 
//     color: '#FFF', 
//     fontSize: 24, 
//     marginRight: 15 
//   },

//   headerTitle:
//    { 
//     color: '#FFF', 
//     fontSize: 22, 
//     fontWeight: 'bold' },

//   selectedDataContainer: {
//     backgroundColor: '#2C2C3A',
//     padding: 15,
//     borderRadius: 8,
//     marginTop: 20, // Add some top margin to separate from the apply button
//   },
//   selectedDataTitle: {
//     color: '#FFF',
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   selectedDataItem: {
//     color: '#D3D3D3',
//     fontSize: 14,
//     marginBottom: 5,
//   },
//   filterOptionsContainer: {
//     // No specific styling needed here, items style themselves
//   },
//   filterItem: {
//     backgroundColor: '#2C2C3A',
//     paddingVertical: 18,
//     paddingHorizontal: 15,
//     borderRadius: 8,
//     marginBottom: 15,
//   },
//   filterItemText: { color: '#FFF', fontSize: 16 },
//   applyButton: {
//     backgroundColor: '#FF6347',
//     paddingVertical: 18,
//     borderRadius: 8,
//     alignItems: 'center',
//     marginTop: 30,
//   },
//   applyButtonText:
//    { 
//     color: '#FFF',
//      fontSize: 18,
//       fontWeight: 'bold'
//      },

//   centeredView: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'rgba(0,0,0,0.7)',
//   },

//   modalContent: {
//     backgroundColor: '#333333',
//     borderRadius: 10,
//     padding: 20,
//     width: '85%',
//     maxHeight: '70%',
//   },

//   modalTitle: 
//   { 
//     color: '#FFF', 
//     fontSize: 20,
//      fontWeight: 'bold', 
//      marginBottom: 20, 
//      textAlign: 'center' 
//     },

//   checkboxContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingVertical: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: '#444',
//   },
//   checkboxLabel: 
//   { 
//     color: '#FFF', 
//     fontSize: 16 

//   },

//   modalButtons:
//    {
//      flexDirection: 'row', 
//      justifyContent: 'space-around',
//       marginTop: 20 
//     },

//   modalButton:
//    {
//     backgroundColor: '#555',
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderRadius: 5,
//   },

//   modalButtonText: 
//   {
//      color: '#FFF',
//      fontSize: 16, 
//      fontWeight: 'bold' 
//     },

//   customDateContainer: {
//     backgroundColor: '#333333',
//     borderRadius: 10,
//     padding: 20,
//     width: '85%',
//     alignItems: 'center',
//   },
//   datePickerTrigger: {
//     backgroundColor: '#2C2C3A',
//     padding: 15,
//     borderRadius: 8,
//     marginVertical: 10,
//     width: '100%',
//     alignItems: 'center',
//   },
  
//   datePickerTriggerText: {
//     color: '#FFF',
//     fontSize: 16,
//   },
// });

// export default FiltersScreen;

// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   StyleSheet,
//   Modal,
//   FlatList,
//   Platform,
//   ScrollView,
// } from 'react-native';
// import DateTimePicker from '@react-native-community/datetimepicker';

// const CheckBox = ({ value, onValueChange }) => (
//   <TouchableOpacity
//     onPress={onValueChange}
//     style={{
//       width: 22,
//       height: 22,
//       borderRadius: 4,
//       borderWidth: 2,
//       borderColor: '#FFF',
//       backgroundColor: value ? '#9566daff' : 'transparent',
//       justifyContent: 'center',
//       alignItems: 'center',
//     }}
//   >
//     {value && <Text style={{ color: '#FFF', fontSize: 14 }}>✓</Text>}
//   </TouchableOpacity>
// );

// const filterOptions = {
//   years: ['2025', '2024', '2023', '2022', '2021', '2020', '2019', '2018', '2017', '2016', '2015', '2014'],
//   months: ['January 25', 'February 25', 'March 25', 'April 25', 'May 25', 'June 25', 'July 25', 'August 25', 'September 25', 'October 25', 'November 25', 'December 25'],
//   categories: ['IT', 'Interview', 'Healthcare', 'Digital marketing', 'Training', 'BD', 'Other'],
// };

// const FiltersScreen = () => {
//   const [modalVisible, setModalVisible] = useState(false);
//   const [selectedFilterType, setSelectedFilterType] = useState(null);

//   const [selectedYears, setSelectedYears] = useState([]);
//   const [selectedMonths, setSelectedMonths] = useState([]);
//   const [selectedCategories, setSelectedCategories] = useState([]);
//   const [customDateRange, setCustomDateRange] = useState({ from: null, to: null });

//   const [tempSelectedItems, setTempSelectedItems] = useState([]);
//   const [tempCustomDateRange, setTempCustomDateRange] = useState({ from: null, to: null });

//   const [showFromDatePicker, setShowFromDatePicker] = useState(false);
//   const [showToDatePicker, setShowToDatePicker] = useState(false);

//   const openFilterModal = (type) => {
//     setSelectedFilterType(type);
//     switch (type) {
//       case 'years':
//         setTempSelectedItems([...selectedYears]);
//         break;
//       case 'months':
//         setTempSelectedItems([...selectedMonths]);
//         break;
//       case 'categories':
//         setTempSelectedItems([...selectedCategories]);
//         break;
//       case 'customDate':
//         setTempCustomDateRange({ ...customDateRange });
//         break;
//       default:
//         setTempSelectedItems([]);
//         break;
//     }
//     setModalVisible(true);
//   };

//   const closeFilterModal = () => {
//     setModalVisible(false);
//     setSelectedFilterType(null);
//     setTempSelectedItems([]);
//     setTempCustomDateRange({ from: null, to: null });
//     setShowFromDatePicker(false);
//     setShowToDatePicker(false);
//   };

//   const saveFilterSelection = () => {
//     switch (selectedFilterType) {
//       case 'years':
//         setSelectedYears(tempSelectedItems);
//         break;
//       case 'months':
//         setSelectedMonths(tempSelectedItems);
//         break;
//       case 'categories':
//         setSelectedCategories(tempSelectedItems);
//         break;
//       case 'customDate':
//         setCustomDateRange(tempCustomDateRange);
//         break;
//       default:
//         break;
//     }
//     closeFilterModal();
//   };

//   const toggleTempCheckbox = (item) => {
//     setTempSelectedItems((prev) =>
//       prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
//     );
//   };

//   const onFromDateChange = (event, selectedDate) => {
//     const currentDate = selectedDate || tempCustomDateRange.from;
//     setShowFromDatePicker(Platform.OS === 'ios');
//     setTempCustomDateRange((prev) => ({ ...prev, from: currentDate }));
//   };

//   const onToDateChange = (event, selectedDate) => {
//     const currentDate = selectedDate || tempCustomDateRange.to;
//     setShowToDatePicker(Platform.OS === 'ios');
//     setTempCustomDateRange((prev) => ({ ...prev, to: currentDate }));
//   };

//   const handleApplyFilters = () => {
//     console.log('APPLIED FILTERS:', {
//       selectedYears,
//       selectedMonths,
//       selectedCategories,
//       customDateRange,
//     });
//   };

//   const clearAllFilters = () => {
//     setSelectedYears([]);
//     setSelectedMonths([]);
//     setSelectedCategories([]);
//     setCustomDateRange({ from: null, to: null });
//   };

//   const renderFilterContent = () => {
//     if (selectedFilterType === 'customDate') {
//       return (
//         <View style={styles.customDateContainer}>
//           <Text style={styles.modalTitle}>Select Custom Date Range</Text>

//           <TouchableOpacity style={styles.datePickerTrigger} onPress={() => setShowFromDatePicker(true)}>
//             <Text style={styles.datePickerTriggerText}>
//               From: {tempCustomDateRange.from ? tempCustomDateRange.from.toLocaleDateString() : 'Select Date'}
//             </Text>
//           </TouchableOpacity>

//           <TouchableOpacity style={styles.datePickerTrigger} onPress={() => setShowToDatePicker(true)}>
//             <Text style={styles.datePickerTriggerText}>
//               To: {tempCustomDateRange.to ? tempCustomDateRange.to.toLocaleDateString() : 'Select Date'}
//             </Text>
//           </TouchableOpacity>

//           {showFromDatePicker && (
//             <DateTimePicker
//               testID="fromDatePicker"
//               value={tempCustomDateRange.from || new Date()}
//               mode="date"
//               display={Platform.OS === 'ios' ? 'spinner' : 'default'}
//               onChange={onFromDateChange}
//               maximumDate={tempCustomDateRange.to || undefined}
//             />
//           )}

//           {showToDatePicker && (
//             <DateTimePicker
//               testID="toDatePicker"
//               value={tempCustomDateRange.to || new Date()}
//               mode="date"
//               display={Platform.OS === 'ios' ? 'spinner' : 'default'}
//               onChange={onToDateChange}
//               minimumDate={tempCustomDateRange.from || undefined}
//             />
//           )}

//           <View style={styles.modalButtons}>
//             <TouchableOpacity style={styles.modalButton} onPress={closeFilterModal}>
//               <Text style={styles.modalButtonText}>Cancel</Text>
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.modalButton} onPress={saveFilterSelection}>
//               <Text style={styles.modalButtonText}>Save</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       );
//     }

//     const data = filterOptions[selectedFilterType] || [];

//     return (
//       <View style={styles.modalContent}>
//         <Text style={styles.modalTitle}>
//           {selectedFilterType ? selectedFilterType.toUpperCase() : 'Filter'}
//         </Text>
//         <FlatList
//           data={data}
//           keyExtractor={(item) => item}
//           renderItem={({ item }) => (
//             <View style={styles.checkboxContainer}>
//               <Text style={styles.checkboxLabel}>{item}</Text>
//               <CheckBox
//                 value={tempSelectedItems.includes(item)}
//                 onValueChange={() => toggleTempCheckbox(item)}
//               />
//             </View>
//           )}
//         />
//         <View style={styles.modalButtons}>
//           <TouchableOpacity style={styles.modalButton} onPress={closeFilterModal}>
//             <Text style={styles.modalButtonText}>Cancel</Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.modalButton} onPress={saveFilterSelection}>
//             <Text style={styles.modalButtonText}>Save</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     );
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <TouchableOpacity onPress={() => console.log('Go back (implement navigation)')}>
//           <Text style={styles.backButton}>&lt;</Text>
//         </TouchableOpacity>
//         <Text style={styles.headerTitle}>Filters</Text>
//       </View>

//       <View style={styles.filterOptionsContainer}>
//         <TouchableOpacity style={styles.filterItem} onPress={() => openFilterModal('years')}>
//           <Text style={styles.filterItemText}>Years</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.filterItem} onPress={() => openFilterModal('months')}>
//           <Text style={styles.filterItemText}>Months</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.filterItem} onPress={() => openFilterModal('categories')}>
//           <Text style={styles.filterItemText}>Categories</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.filterItem} onPress={() => openFilterModal('customDate')}>
//           <Text style={styles.filterItemText}>Custom Date</Text>
//         </TouchableOpacity>
//       </View>

//       <TouchableOpacity style={styles.applyButton} onPress={handleApplyFilters}>
//         <Text style={styles.applyButtonText}>Apply</Text>
//       </TouchableOpacity>

//       <TouchableOpacity style={styles.clearButton} onPress={clearAllFilters}>
//         <Text style={styles.clearButtonText}>Clear</Text>
//       </TouchableOpacity>

//       <ScrollView contentContainerStyle={styles.selectedDataContainer}>
//         <Text style={styles.selectedDataTitle}>Current Selections:</Text>
//         <Text style={styles.selectedDataItem}>
//           Years: {selectedYears.length > 0 ? selectedYears.join(', ') : 'None'}
//         </Text>
//         <Text style={styles.selectedDataItem}>
//           Months: {selectedMonths.length > 0 ? selectedMonths.join(', ') : 'None'}
//         </Text>
//         <Text style={styles.selectedDataItem}>
//           Categories: {selectedCategories.length > 0 ? selectedCategories.join(', ') : 'None'}
//         </Text>
//         <Text style={styles.selectedDataItem}>
//           Custom Date: {customDateRange.from && customDateRange.to
//             ? `${customDateRange.from.toLocaleDateString()} - ${customDateRange.to.toLocaleDateString()}`
//             : 'None'}
//         </Text>
//       </ScrollView>

//       <Modal animationType="slide" transparent={true} visible={modalVisible} onRequestClose={closeFilterModal}>
//         <View style={styles.centeredView}>{renderFilterContent()}</View>
//       </Modal>
//     </View>
//   );
// };

import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  FlatList,
  Platform,
  ScrollView,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useNavigation } from '@react-navigation/native'; // ✅ Add this import
import { Ionicons } from '@expo/vector-icons';


const CheckBox = ({ value, onValueChange }) => (
  <TouchableOpacity
    onPress={onValueChange}
    style={{
      width: 22,
      height: 22,
      borderRadius: 4,
      borderWidth: 2,
      borderColor: '#FFF',
      backgroundColor: value ? '#9566daff' : 'transparent',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    {value && <Text style={{ color: '#FFF', fontSize: 14 }}>✓</Text>}
  </TouchableOpacity>
);

const filterOptions = {
  years: ['2025', '2024', '2023', '2022', '2021', '2020', '2019', '2018', '2017', '2016', '2015', '2014'],
  months: ['January 25', 'February 25', 'March 25', 'April 25', 'May 25', 'June 25', 'July 25', 'August 25', 'September 25', 'October 25', 'November 25', 'December 25'],
  categories: ['IT', 'Interview', 'Healthcare', 'Digital marketing', 'Training', 'BD', 'Other'],
};

const FiltersScreen = () => {
  const navigation = useNavigation(); // ✅ Initialize navigation

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedFilterType, setSelectedFilterType] = useState(null);

  const [selectedYears, setSelectedYears] = useState([]);
  const [selectedMonths, setSelectedMonths] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [customDateRange, setCustomDateRange] = useState({ from: null, to: null });

  const [tempSelectedItems, setTempSelectedItems] = useState([]);
  const [tempCustomDateRange, setTempCustomDateRange] = useState({ from: null, to: null });

  const [showFromDatePicker, setShowFromDatePicker] = useState(false);
  const [showToDatePicker, setShowToDatePicker] = useState(false);

  const openFilterModal = (type) => {
    setSelectedFilterType(type);
    switch (type) {
      case 'years':
        setTempSelectedItems([...selectedYears]);
        break;
      case 'months':
        setTempSelectedItems([...selectedMonths]);
        break;
      case 'categories':
        setTempSelectedItems([...selectedCategories]);
        break;
      case 'customDate':
        setTempCustomDateRange({ ...customDateRange });
        break;
      default:
        setTempSelectedItems([]);
        break;
    }
    setModalVisible(true);
  };

  const closeFilterModal = () => {
    setModalVisible(false);
    setSelectedFilterType(null);
    setTempSelectedItems([]);
    setTempCustomDateRange({ from: null, to: null });
    setShowFromDatePicker(false);
    setShowToDatePicker(false);
  };

  const saveFilterSelection = () => {
    switch (selectedFilterType) {
      case 'years':
        setSelectedYears(tempSelectedItems);
        break;
      case 'months':
        setSelectedMonths(tempSelectedItems);
        break;
      case 'categories':
        setSelectedCategories(tempSelectedItems);
        break;
      case 'customDate':
        setCustomDateRange(tempCustomDateRange);
        break;
      default:
        break;
    }
    closeFilterModal();
  };

  const toggleTempCheckbox = (item) => {
    setTempSelectedItems((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  };

  const onFromDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || tempCustomDateRange.from;
    setShowFromDatePicker(Platform.OS === 'ios');
    setTempCustomDateRange((prev) => ({ ...prev, from: currentDate }));
  };

  const onToDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || tempCustomDateRange.to;
    setShowToDatePicker(Platform.OS === 'ios');
    setTempCustomDateRange((prev) => ({ ...prev, to: currentDate }));
  };

  // const handleApplyFilters = () => {
  //   console.log('APPLIED FILTERS:', {
  //     selectedYears,
  //     selectedMonths,
  //     selectedCategories,
  //     customDateRange,
  //   });
  // };

  // Inside FiltersScreen.js
const handleApplyFilters = () => {
  navigation.navigate('DownloadScreen', {
    selectedYears,
    selectedMonths,
    selectedCategories,
    customDateRange,
  });
};

  const clearAllFilters = () => {
    setSelectedYears([]);
    setSelectedMonths([]);
    setSelectedCategories([]);
    setCustomDateRange({ from: null, to: null });
  };

  const renderFilterContent = () => {
    if (selectedFilterType === 'customDate') {
      return (
        <View style={styles.customDateContainer}>
          <Text style={styles.modalTitle}>Select Custom Date Range</Text>

          <TouchableOpacity style={styles.datePickerTrigger} onPress={() => setShowFromDatePicker(true)}>
  <Text style={styles.datePickerTriggerText}>
    From: {tempCustomDateRange.from ? tempCustomDateRange.from.toLocaleDateString() : 'Select Date'}
  </Text>
</TouchableOpacity>

<TouchableOpacity style={styles.datePickerTrigger} onPress={() => setShowToDatePicker(true)}>
  <Text style={styles.datePickerTriggerText}>
    To: {tempCustomDateRange.to ? tempCustomDateRange.to.toLocaleDateString() : 'Select Date'}
  </Text>
</TouchableOpacity>


          {showFromDatePicker && (
            <DateTimePicker
              testID="fromDatePicker"
              value={tempCustomDateRange.from || new Date()}
              mode="date"
              display={Platform.OS === 'ios' ? 'spinner' : 'default'}
              onChange={onFromDateChange}
              maximumDate={tempCustomDateRange.to || undefined}
            />
          )}

          {showToDatePicker && (
            <DateTimePicker
              testID="toDatePicker"
              value={tempCustomDateRange.to || new Date()}
              mode="date"
              display={Platform.OS === 'ios' ? 'spinner' : 'default'}
              onChange={onToDateChange}
              minimumDate={tempCustomDateRange.from || undefined}
            />
          )}

          <View style={styles.modalButtons}>
            <TouchableOpacity style={styles.modalButton} onPress={closeFilterModal}>
              <Text style={styles.modalButtonText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalButton} onPress={saveFilterSelection}>
              <Text style={styles.modalButtonText}>Save</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    }

    const data = filterOptions[selectedFilterType] || [];

    return (
      <View style={styles.modalContent}>
        <Text style={styles.modalTitle}>
          {selectedFilterType ? selectedFilterType.toUpperCase() : 'Filter'}
        </Text>
        <FlatList
          data={data}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <View style={styles.checkboxContainer}>
              <Text style={styles.checkboxLabel}>{item}</Text>
              <CheckBox
                value={tempSelectedItems.includes(item)}
                onValueChange={() => toggleTempCheckbox(item)}
              />
            </View>
          )}
        />
        <View style={styles.modalButtons}>
          <TouchableOpacity style={styles.modalButton} onPress={closeFilterModal}>
            <Text style={styles.modalButtonText}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.modalButton} onPress={saveFilterSelection}>
            <Text style={styles.modalButtonText}>Save</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
     <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#FFFFFF" />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Filters</Text>
      </View>

      <View style={styles.filterOptionsContainer}>
        <TouchableOpacity style={styles.filterItem} onPress={() => openFilterModal('years')}>
          <Text style={styles.filterItemText}>Years</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterItem} onPress={() => openFilterModal('months')}>
          <Text style={styles.filterItemText}>Months</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterItem} onPress={() => openFilterModal('categories')}>
          <Text style={styles.filterItemText}>Categories</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterItem} onPress={() => openFilterModal('customDate')}>
          <Text style={styles.filterItemText}>Custom Date</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.applyButton} onPress={handleApplyFilters}>
        <Text style={styles.applyButtonText}>Apply</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.clearButton} onPress={clearAllFilters}>
        <Text style={styles.clearButtonText}>Clear</Text>
      </TouchableOpacity>

      <ScrollView contentContainerStyle={styles.selectedDataContainer}>
        <Text style={styles.selectedDataTitle}>Current Selections:</Text>
        <Text style={styles.selectedDataItem}>
          Years: {selectedYears.length > 0 ? selectedYears.join(', ') : 'None'}
        </Text>
        <Text style={styles.selectedDataItem}>
          Months: {selectedMonths.length > 0 ? selectedMonths.join(', ') : 'None'}
        </Text>
        <Text style={styles.selectedDataItem}>
          Categories: {selectedCategories.length > 0 ? selectedCategories.join(', ') : 'None'}
        </Text>
        <Text style={styles.selectedDataItem}>
          Custom Date: {customDateRange.from && customDateRange.to
            ? `${customDateRange.from.toLocaleDateString()} - ${customDateRange.to.toLocaleDateString()}`
            : 'None'}
        </Text>
      </ScrollView>

      <Modal animationType="slide" transparent={true} visible={modalVisible} onRequestClose={closeFilterModal}>
        <View style={styles.centeredView}>{renderFilterContent()}</View>
      </Modal>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E2C',
    padding: 20,
    paddingTop: 50,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  backButton: {
    color: '#FFF',
    fontSize: 24,
    marginRight: 15,
  },
  headerTitle: {
    color: '#FFF',
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: 20,
  },
  selectedDataContainer: {
    backgroundColor: '#2C2C3A',
    padding: 15,
    borderRadius: 8,
    marginTop: 20,
  },
  selectedDataTitle: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  selectedDataItem: {
    color: '#D3D3D3',
    fontSize: 14,
    marginBottom: 5,
  },
  filterOptionsContainer: {},
  filterItem: {
    backgroundColor: '#2C2C3A',
    paddingVertical: 18,
    paddingHorizontal: 15,
    borderRadius: 8,
    marginBottom: 15,
  },
  filterItemText: { color: '#FFF', fontSize: 16 },
  applyButton: {
    backgroundColor: '#ee4224ff',
    paddingVertical: 13,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 30,
  },
  applyButtonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
   
  },
  clearButton: {
    backgroundColor: '#888',
    paddingVertical: 13,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 15,
  },
  clearButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
  modalContent: {
    backgroundColor: '#333333',
    borderRadius: 10,
    padding: 20,
    width: '85%',
    maxHeight: '70%',
  },
  modalTitle: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  checkboxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#444',
  },
  checkboxLabel: {
    color: '#FFF',
    fontSize: 16,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  modalButton: {
    backgroundColor: '#555',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  modalButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  customDateContainer: {
    backgroundColor: '#333333',
    borderRadius: 10,
    padding: 20,
    width: '85%',
    alignItems: 'center',
  },
  datePickerTrigger: {
    backgroundColor: '#2C2C3A',
    padding: 15,
    borderRadius: 8,
    marginVertical: 10,
    width: '100%',
    alignItems: 'center',
  },
  datePickerTriggerText: {
    color: '#FFF',
    fontSize: 16,
  },
});

export default FiltersScreen; 
