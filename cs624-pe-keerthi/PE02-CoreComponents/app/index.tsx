//importing necessary components
import React, { useState } from 'react';
import { View, Text, ScrollView, Image, TextInput, StyleSheet } from 'react-native';

export default function CoreComponents() {
  const [fav, setFav] = useState('');
// List of core courses
  const core = [
    'CS 504 - Secure Systems',
    'CS 506 - Programming for Computing',
    'CS 519 - Software Engineering',
    'CS 530 - Data Management',
    'CS 532 - Data Mining',
    'CS 533 - Machine Learning',
    'CS 542 - Computer Networks',
    'CS 545 - Operating Systems'
  ];
// List of depth courses
  const depth = ['CS 550 - AI Foundations', 'CS 560 - Big Data Analytics'];
  // Capstone course
  const capstone = 'CS 690 - Capstone Project';

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Enter your favorite course:</Text>
      <TextInput
        style={styles.input}
        placeholder="e.g. CS 504"
        value={fav}
        onChangeText={setFav}
      />
      <Text style={styles.favorite}>Your Favorite: {fav}</Text>

      <Text style={styles.section}>Core Courses</Text>
      {core.map((c, i) => (
        <Text key={i} style={styles.course}>{c}</Text>
      ))}

      <Text style={styles.section}>Depth of Study Courses</Text>
      {depth.map((c, i) => (
        <Text key={i} style={styles.course}>{c}</Text>
      ))}

      <Text style={styles.section}>Capstone Course</Text>
      <Text style={styles.course}>{capstone}</Text>
    </ScrollView>
  );
}
//styles,fonts and required margins , values
const styles = StyleSheet.create({
  container: { padding: 20, marginTop: 40 },
  image: { width: 100, height: 100, alignSelf: 'center', marginBottom: 20 },
  heading: { fontSize: 18, marginBottom: 10, color: '#0078cc' },
  input: { borderWidth: 1, borderColor: '#999', padding: 10, marginBottom: 10 },
  favorite: { fontStyle: 'italic', marginBottom: 20 },
  section: { fontSize: 20, fontWeight: 'bold', marginTop: 20, marginBottom: 10, color: '#0077cc' },
  course: { fontSize: 16, marginBottom: 5 },
});
