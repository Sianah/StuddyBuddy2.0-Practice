import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const MatchingScreen = () => {
  // Dummy data array for other users. This would be fetched from your backend.
  const [users, setUsers] = useState([
    {
      id: '1',
      fullName: 'Jane Doe',
      profilePic: 'https://via.placeholder.com/150',
      classes: ['Biology 101', 'Chemistry 201'],
      likes: ['Reading', 'Gardening'],
      skills: ['Time Management', 'Organization'],
      weaknesses: ['Public Speaking'],
      strengths: ['Critical Thinking']
    },

    {
      id: '2',
      fullName: 'John Doe',
      profilePic: 'https://via.placeholder.com/150',
      classes: ['Chemistry 101', 'Software 201'],
      likes: ['Reading', 'Gardening'],
      skills: ['Time Management', 'Organization'],
      weaknesses: ['Public Speaking'],
      strengths: ['Critical Thinking']
    },

    {
      id: '3',
      fullName: 'Jym Doe',
      profilePic: 'https://via.placeholder.com/150',
      classes: ['Carpentry 101', 'Software 201'],
      likes: ['Reading', 'Gardening'],
      skills: ['Time Management', 'Organization'],
      weaknesses: ['Public Speaking'],
      strengths: ['Critical Thinking']
    },
    // ... other user profiles
  ]);

  const [searchQuery, setSearchQuery] = useState('');

  const filteredUsers = searchQuery
    ? users.filter(user =>
        user.classes.some(classItem =>
          classItem.toLowerCase().includes(searchQuery.toLowerCase())
        )
      )
    : users;


  // Index to keep track of the current user being displayed.
  const [currentIndex, setCurrentIndex] = useState(0);

  const safeIndex = currentIndex % filteredUsers.length;
  const currentUser = filteredUsers[safeIndex];
  // Move to the previous user profile.
  const prevUser = () => {
    setCurrentIndex(prevIndex => (prevIndex - 1 + filteredUsers.length) % filteredUsers.length);
  };

  // Move to the next user profile.
  const nextUser = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % filteredUsers.length);
  };

  // The current user profile to display.


  return (
    <ScrollView style={styles.container}>
      {/* Search Bar */}
      <TextInput
        style={styles.searchBar}
        placeholder="Search for classes..."
        value={searchQuery}
        onChangeText={text => {
          setSearchQuery(text);
          setCurrentIndex(0); // Reset to the first user in the filtered list
        }}
      />

      {currentUser && (
      <View style={styles.profileCard}>
        <Text style={styles.fullName}>{currentUser.fullName}</Text>
        <View style={styles.profileSection}>
          <Image source={{ uri: currentUser.profilePic }} style={styles.profilePic} />
          <View style={styles.userInfo}>
            <Text>Classes: {currentUser.classes.join(', ')}</Text>
            <Text>Likes: {currentUser.likes.join(', ')}</Text>
            <Text>Skills: {currentUser.skills.join(', ')}</Text>
            <Text>Weaknesses: {currentUser.weaknesses.join(', ')}</Text>
            <Text>Strengths: {currentUser.strengths.join(', ')}</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.connectButton}>
          <Text>Connect</Text>
        </TouchableOpacity>
      </View>
)}

      {/* Navigation arrows */}
      {filteredUsers.length > 1 && ( // Only show navigation if there are users to navigate through
        <View style={styles.navigation}>
          <TouchableOpacity onPress={prevUser}>
            <Ionicons name="arrow-back-circle" size={40} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity onPress={nextUser}>
            <Ionicons name="arrow-forward-circle" size={40} color="#000" />
          </TouchableOpacity>
        </View>
      )}

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  profileCard: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  fullName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  profilePic: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginRight: 20,
  },
  userInfo: {
    flex: 1,
    alignItems: 'flex-start',
  },
  connectButton: {
    backgroundColor: '#e7e7e7',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  navigation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },

  searchBar: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 10,
    margin: 10,
  },
  // ... additional styles as needed
});

export default MatchingScreen;

