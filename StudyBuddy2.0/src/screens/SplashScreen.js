import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';

const SplashScreen = ({ navigation }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0 (invisible)

  useEffect(() => {
    // Fade in the text first
    Animated.timing(fadeAnim, {
      toValue: 1, // Animate to fully visible
      duration: 2000, // Duration to fade in
      useNativeDriver: true,
    }).start(() => {
      // After the text has faded in, wait for 2 seconds, then fade out
      setTimeout(() => {
        Animated.timing(fadeAnim, {
          toValue: 0, // Animate to fully transparent
          duration: 2000, // Duration to fade out
          useNativeDriver: true,
        }).start(() => navigation.replace('SignUp')); // After fade out, go to SignUp
      }, 2000);
    });
  }, [navigation, fadeAnim]);

  return (
    <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
      <Text style={styles.fadeText}>Study Buddy</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff', // Set your desired background color
  },
  fadeText: {
    fontSize: 28,
    fontWeight: 'bold',
    // Include other styling for your text
  },
});

export default SplashScreen;


