import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { SearchBar, Icon } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';

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
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  useEffect(() => {
    if (route.params?.downloadSuccess) {
      setShowSuccessMessage(true);
      setTimeout(() => setShowSuccessMessage(false), 2500);
    }
  }, [route.params]);

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
        <TouchableOpacity
          style={styles.filterButton}
          onPress={() => navigation.navigate('FilterScreen')}
        >
          <Icon name="filter-list" type="material" color="#FFFFFF" size={24} />
        </TouchableOpacity>
      </View>

      <Text style={styles.yearText}>2024</Text>

      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContentContainer}
      />

    <TouchableOpacity
  style={styles.downloadButton}
  onPress={() => {
    setShowSuccessMessage(true);
    setTimeout(() => setShowSuccessMessage(false), 2500);
  }}
>
  <Text style={styles.downloadButtonText}>Download</Text>
</TouchableOpacity>


      {/* ✅ SUCCESS MESSAGE */}
      {showSuccessMessage && (
        <View style={styles.toastMessage}>
          <Text style={styles.toastText}>
            You have successfully downloaded the records
          </Text>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E1E',
    marginTop:20,
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
    marginTop:20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 20,
  },
  searchBarContainer: {
    flex: 1,
    backgroundColor: '#333333',
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
    color: '#fff6f6ff',
    fontSize: 18,
    fontWeight: 'bold',
    
  },
  toastMessage: {
    position: 'absolute',
    bottom: 100,
    left: 20,
    right: 20,
    backgroundColor: '#f5ededff',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
    zIndex: 999,
  },
  toastText: {
    color: '#090707ff',
    fontSize: 15,
    fontWeight: '600',
  },
});

export default DownloadScreen;
