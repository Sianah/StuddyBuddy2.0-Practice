import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  StyleSheet, 
  Image, 
  ScrollView, 
  TouchableOpacity, 
  FlatList 
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const ProfileScreen = () => {
  // Dummy data for the example. Replace with state and context where necessary.
  const userInfo = {
    fullName: 'Billy McBillerson',
    email: 'billysilly@gmail.com',
    profilePic: 'https://via.placeholder.com/150', // Replace with actual image path
    studyGroups: ['Study Group 1', 'Study Group 2'],
    classes: ['Class 1', 'Class 2'],
    likes: ['Like 1', 'Like 2'],
    // Additional sections like 'Likes', 'Skills', etc. would be handled similarly
  };

  // State to handle the addition and removal of classes.
  const [classes, setClasses] = useState(userInfo.classes);
  const [newClass, setNewClass] = useState('');
  const [likes, setLikes] = useState(userInfo.likes);
  const [newLikes, setNewLikes] = useState('');

  const handleAddClass = () => {
    setClasses([...classes, newClass]);
    setNewClass('');
  };

  const handleAddLikes = () => {
    setLikes([...likes,newLikes]);
    setNewLikes('');
  }

  const handleRemoveClass = (index) => {
    const updatedClasses = classes.filter((_, classIndex) => classIndex !== index);
    setClasses(updatedClasses);
  };

  const handleRemoveLike = (index) => {
    const updatedLikes = likes.filter((_, likeIndex) => likeIndex !== index);
    setLikes(updatedLikes);
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => {}}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{userInfo.fullName}</Text>
        <TouchableOpacity onPress={() => {}}>
          <Text>Logout</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.profileSection}>
        <Image source={{ uri: userInfo.profilePic }} style={styles.profilePic} />
        <View style={styles.infoSection}>
          <Text style={styles.infoText}>Email: {userInfo.email}</Text>
          <Text style={styles.infoText}>Name: {userInfo.fullName}</Text>
        </View>
      </View>

      <Text style={styles.sectionTitle}>Study Groups</Text>
      <FlatList
        data={userInfo.studyGroups}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Text style={styles.listItem}>{item}</Text>}
        horizontal
      />

      <Text style={styles.sectionTitle}>Classes</Text>
      <View style={styles.classesList}>
        {classes.map((classItem, index) => (
          <View key={index} style={styles.classItem}>
            <Text style={styles.listItem}>{classItem}</Text>
            <TouchableOpacity onPress={() => handleRemoveClass(index)}>
              <Ionicons name="remove-circle" size={24} color="#000" />
            </TouchableOpacity>
          </View>
        ))}
      </View>
      <View style={styles.addClassSection}>
        <TextInput
          style={styles.classInput}
          placeholder="New class"
          value={newClass}
          onChangeText={setNewClass}
        />
        <TouchableOpacity onPress={handleAddClass}>
          <Ionicons name="add-circle" size={24} color="#000" />
        </TouchableOpacity>
      </View>
      <Text style={styles.sectionTitle}>Likes</Text>
      <View style={styles.classesList}>
        {likes.map((likeItem, index) => (
          <View key={index} style={styles.classItem}>
            <Text style={styles.listItem}>{likeItem}</Text>
            <TouchableOpacity onPress={() => handleRemoveLike(index)}>
              <Ionicons name="remove-circle" size={24} color="#000" />
            </TouchableOpacity>
          </View>
        ))}
      </View>
      <View style={styles.addClassSection}>
        <TextInput
          style={styles.classInput}
          placeholder="New like"
          value={newLikes}
          onChangeText={setNewLikes}
        />
        <TouchableOpacity onPress={handleAddLikes}>
          <Ionicons name="add-circle" size={24} color="#000" />
        </TouchableOpacity>
      </View>
      
      {/* Additional sections would follow a similar pattern to 'Classes' */}
      
      {/* Rest of the profile sections... */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
  },
  profilePic: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  infoSection: {
    marginLeft: 20,
  },
  infoText: {
    fontSize: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  listItem: {
    margin: 10,
  },
  classesList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 20,
  },
  classItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
  },
  addClassSection: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  classInput: {
    borderBottomWidth: 1,
    flex: 1,
    marginRight: 10,
  },
  // Define additional styles as needed
});

export default ProfileScreen;


