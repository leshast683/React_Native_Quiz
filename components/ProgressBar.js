import React from 'react';
import { View, StyleSheet } from 'react-native';

const ProgressBar = ({ currentIndex, totalQuestions }) => {
  const progress = ((currentIndex + 1) / totalQuestions) * 100;
  
  return (
    <View style={styles.container}>
      <View style={[styles.progressBar, { width: `${progress}%` }]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 8,
    backgroundColor: '#e9ecef',
    borderRadius: 4,
    marginHorizontal: 10,
    marginBottom: 10,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#007bff',
    borderRadius: 4,
  },
});

export default ProgressBar;