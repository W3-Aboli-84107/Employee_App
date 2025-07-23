// import React from 'react';
// import { View, Text, StyleSheet, ScrollView } from 'react-native';
// import { useRoute } from '@react-navigation/native';

// const DownloadScreen = () => {
//   const route = useRoute();
//   const { year, month, category, fromDate, toDate } = route.params;

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <Text style={styles.heading}>Download List</Text>

//       <View style={styles.card}>
//         <Text style={styles.label}>Year: <Text style={styles.value}>{year}</Text></Text>
//         <Text style={styles.label}>Month: <Text style={styles.value}>{month}</Text></Text>
//         <Text style={styles.label}>Category: <Text style={styles.value}>{category}</Text></Text>
//         <Text style={styles.label}>From Date: <Text style={styles.value}>{fromDate}</Text></Text>
//         <Text style={styles.label}>To Date: <Text style={styles.value}>{toDate}</Text></Text>
//       </View>

//       {/* You can add FlatList here to display data based on filters */}

//     </ScrollView>
//   );
// };

// export default DownloadScreen;

// const styles = StyleSheet.create({
//   container: {
//     padding: 20,
//     backgroundColor: '#2a2939ff',
//     flexGrow: 1,
//   },
//   heading: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   card: {
//     backgroundColor: '#fff',
//     padding: 15,
//     borderRadius: 10,
//     elevation: 2,
//   },
//   label: {
//     fontSize: 16,
//     marginBottom: 10,
//   },
//   value: {
//     fontWeight: 'bold',
//   },
// });


import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { SearchBar, Icon } from 'react-native-elements'; // Assuming react-native-elements for SearchBar and Icon
import { Ionicons } from '@expo/vector-icons'; // Or any other icon library you prefer

// Dummy data for the list items
const DATA = [
  { id: '1', name: 'Suresh Khanna', type: 'Interview' },
  { id: '2', name: 'Preeti Ahuja', type: 'Health care' },
  { id: '3', name: 'Arav Sharma', type: 'IT' },
  { id: '4', name: 'Priya Patel', type: 'Interview' },
  { id: '5', name: 'Rohan Iyer', type: 'Interview' },
  { id: '6', name: 'Nisha Reddy', type: 'Digital marketing' },
  { id: '7', name: 'Sneha Chatterje', type: 'Training' },
  { id: '8', name: 'Eshan Praneet', type: 'Training' },
];

const DownloadScreen = ({ navigation, route }) => {
  const [search, setSearch] = React.useState('');

  // Accessing parameters passed from the FilterScreen (if any)
  // const { filterType, year, month, category, fromDate, toDate } = route.params || {};

  const updateSearch = (text) => {
    setSearch(text);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.listItem}>
      <Text style={styles.itemName}>{item.name}</Text>
      <Text style={styles.itemType}>{item.type}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        {/* Back button to navigate back, potentially to FilterScreen */}
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#FFFFFF" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Download</Text>
      </View>

      <View style={styles.searchContainer}>
        <SearchBar
          placeholder="Search"
          onChangeText={updateSearch}
          value={search}
          containerStyle={styles.searchBarContainer}
          inputContainerStyle={styles.searchBarInputContainer}
          inputStyle={styles.searchBarInput}
          placeholderTextColor="#A0A0A0"
          searchIcon={{ color: '#FFFFFF' }}
          clearIcon={{ color: '#FFFFFF' }}
        />
        {/* Filter button - assuming this navigates to the FilterScreen */}
        <TouchableOpacity
          style={styles.filterButton}
          onPress={() => navigation.navigate('FilterScreen')} // Navigate to FilterScreen
        >
          <Icon name="filter-list" type="material" color="#FFFFFF" size={24} />
        </TouchableOpacity>
      </View>

      <Text style={styles.yearText}>2024</Text>

      <FlatList
        data={DATA} // In a real app, this data would be filtered based on route.params
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContentContainer}
      />

      <TouchableOpacity style={styles.downloadButton}>
        <Text style={styles.downloadButtonText}>Download</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E1E', // Dark background
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#1E1E1E',
  },
  headerTitle: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 20,
  },
  searchBarContainer: {
    flex: 1,
    backgroundColor: '#333333', // Darker background for search bar
    borderBottomColor: 'transparent',
    borderTopColor: 'transparent',
    borderRadius: 8,
  },
  searchBarInputContainer: {
    backgroundColor: '#333333',
    height: 40,
  },
  searchBarInput: {
    color: '#FFFFFF',
  },
  filterButton: {
    marginLeft: 10,
    padding: 8,
    backgroundColor: '#333333',
    borderRadius: 8,
  },
  yearText: {
    color: '#A0A0A0',
    fontSize: 16,
    marginLeft: 16,
    marginBottom: 10,
  },
  listItem: {
    backgroundColor: '#333333',
    padding: 15,
    marginHorizontal: 16,
    marginBottom: 10,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemName: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '500',
  },
  itemType: {
    color: '#A0A0A0',
    fontSize: 14,
  },
  listContentContainer: {
    paddingBottom: 20,
  },
  downloadButton: {
    backgroundColor: '#E74C3C', 
    padding: 15,
    margin: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  downloadButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default DownloadScreen;