import React, { useState } from 'react';
import { View, Text, ScrollView, Image, TextInput, StyleSheet } from 'react-native';

const CoreComponents = () => {
  const [favoriteCourse, setFavoriteCourse] = useState('');

  const coreCourses = [
    'CS 504 - Secure Systems',
    'CS 506 - Programming for Computing',
    'CS 519 - Software Engineering',
    'CS 530 - Data Management',
    'CS 532 - Data Mining',
    'CS 533 - Machine Learning',
    'CS 542 - Computer Networks',
    'CS 545 - Operating Systems'
  ];

  const depthCourses = [
    'CS 550 - AI Foundations',
    'CS 560 - Big Data Analytics'
  ];

  const capstoneCourse = 'CS 690 - Capstone Project';

  return (
    <ScrollView style={styles.container}>
      <Image source={require('./assets/icon.png')} style={styles.image} />
      
      <Text style={styles.header}>Enter your favorite course:</Text>
      <TextInput
        style={styles.input}
        placeholder="Type here"
        value={favoriteCourse}
        onChangeText={text => setFavoriteCourse(text)}
      />
      <Text style={styles.favorite}>Your Favorite: {favoriteCourse}</Text>

      <Text style={styles.section}>Core Courses</Text>
      {coreCourses.map((course, index) => (
        <Text key={index} style={styles.course}>{course}</Text>
      ))}

      <Text style={styles.section}>Depth of Study Courses</Text>
      {depthCourses.map((course, index) => (
        <Text key={index} style={styles.course}>{course}</Text>
      ))}

      <Text style={styles.section}>Capstone Course</Text>
      <Text style={styles.course}>{capstoneCourse}</Text>
    </ScrollView>
  );
};

export default CoreComponents;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 40,
  },
  image: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginBottom: 20
  },
  header: {
    fontSize: 18,
    marginBottom: 10
  },
  input: {
    borderWidth: 1,
    borderColor: '#555',
    padding: 10,
    marginBottom: 10
  },
  favorite: {
    fontStyle: 'italic',
    marginBottom: 20
  },
  section: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10
  },
  course: {
    fontSize: 16,
    marginBottom: 5
  }
});
