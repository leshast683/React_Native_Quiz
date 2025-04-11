import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Travel Quiz App</Text>
        <Text style={styles.subtitle}>Test your knowledge about world travel!</Text>
        
        <Image 
          source={{ uri: 'https://i.imgur.com/placeholder.png' }}
          style={styles.image}
          resizeMode="contain"
        />
        
        <Text style={styles.description}>
          This quiz contains 5 travel-themed questions covering destinations, 
          geography, and travel requirements. See how much you know about 
          exploring our world!
        </Text>
        
        <View style={styles.featuresList}>
          <Text style={styles.featureItem}>• Multiple question types</Text>
          <Text style={styles.featureItem}>• Track your progress</Text>
          <Text style={styles.featureItem}>• Get detailed results</Text>
        </View>
        
        <TouchableOpacity 
          style={styles.startButton}
          onPress={() => navigation.navigate('Quiz')}
        >
          <Text style={styles.startButtonText}>Start Quiz</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f7fa',
  },
  content: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#007bff',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: '#555',
    marginBottom: 30,
    textAlign: 'center',
  },
  image: {
    width: '80%',
    height: 180,
    marginBottom: 30,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    lineHeight: 24,
    color: '#444',
  },
  featuresList: {
    alignSelf: 'flex-start',
    marginBottom: 40,
  },
  featureItem: {
    fontSize: 16,
    marginBottom: 8,
    color: '#444',
  },
  startButton: {
    backgroundColor: '#007bff',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  startButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default HomeScreen;