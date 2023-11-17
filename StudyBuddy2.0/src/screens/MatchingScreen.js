import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
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
    // ... other user profiles
  ]);

  // Index to keep track of the current user being displayed.
  const [currentIndex, setCurrentIndex] = useState(0);

  // Move to the previous user profile.
  const prevUser = () => {
    setCurrentIndex((prevIndex) => prevIndex > 0 ? prevIndex - 1 : users.length - 1);
  };

  // Move to the next user profile.
  const nextUser = () => {
    setCurrentIndex((prevIndex) => prevIndex < users.length - 1 ? prevIndex + 1 : 0);
  };

  // The current user profile to display.
  const currentUser = users[currentIndex];

  return (
    <ScrollView style={styles.container}>
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
      <View style={styles.navigation}>
        <TouchableOpacity onPress={prevUser}>
          <Ionicons name="arrow-back-circle" size={40} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity onPress={nextUser}>
          <Ionicons name="arrow-forward-circle" size={40} color="#000" />
        </TouchableOpacity>
      </View>
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
  // ... additional styles as needed
});

export default MatchingScreen;

