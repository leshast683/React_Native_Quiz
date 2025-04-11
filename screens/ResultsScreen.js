import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { quizData } from '../data/quizData';
import { calculateScore, isQuestionCorrect } from '../utils/quizUtils';

const ResultsScreen = ({ route, navigation }) => {
  const { userAnswers } = route.params;
  const score = calculateScore(userAnswers, quizData);
  
  const handleRestartQuiz = () => {
    navigation.navigate('Home');
  };
  
  const renderAnswerResults = () => {
    return quizData.map((question, index) => {
      const userAnswer = userAnswers[index] || [];
      const isCorrect = isQuestionCorrect(userAnswer, question.correct, question.type);
      
      return (
        <View key={index} style={styles.resultItem}>
          <Text style={styles.questionText}>
            {index + 1}. {question.question}
          </Text>
          
          <View style={styles.answerRow}>
            <Text style={[styles.answerIcon, isCorrect ? styles.correctIcon : styles.incorrectIcon]}>
              {isCorrect ? '✓' : '✗'}
            </Text>
            <Text style={styles.answerText}>
              Your answer: {
                userAnswer.length === 0 
                  ? 'No answer provided' 
                  : userAnswer.map(idx => question.choices[idx]).join(', ')
              }
            </Text>
          </View>
          
          {!isCorrect && (
            <View style={styles.answerRow}>
              <Text style={[styles.answerIcon, styles.correctIcon]}>✓</Text>
              <Text style={styles.answerText}>
                Correct answer: {
                  question.correct.map(idx => question.choices[idx]).join(', ')
                }
              </Text>
            </View>
          )}
        </View>
      );
    });
  };
  
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>Quiz Completed!</Text>
        
        <View style={styles.scoreContainer}>
          <Text style={styles.scoreText}>
            <Text style={styles.scoreNumber}>{score}</Text> / {quizData.length}
          </Text>
          <Text style={styles.scoreLabel}>
            {score === quizData.length 
              ? 'Perfect Score!' 
              : score >= quizData.length / 2 
                ? 'Well Done!' 
                : 'Keep Learning!'}
          </Text>
        </View>
        
        <View style={styles.resultsContainer}>
          <Text style={styles.resultsTitle}>Question Summary</Text>
          {renderAnswerResults()}
        </View>
        
        <TouchableOpacity 
          style={styles.restartButton}
          onPress={handleRestartQuiz}
        >
          <Text style={styles.restartButtonText}>Restart Quiz</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f7fa',
  },
  scrollContent: {
    flexGrow: 1,
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },
  scoreContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
  },
  scoreText: {
    fontSize: 20,
    color: '#333',
  },
  scoreNumber: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#007bff',
  },
  scoreLabel: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#777',
    marginTop: 10,
  },
  resultsContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
    marginBottom: 20,
  },
  resultsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  resultItem: {
    paddingBottom: 15,
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  questionText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  answerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  answerIcon: {
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 8,
  },
  correctIcon: {
    color: '#28a745',
  },
  incorrectIcon: {
    color: '#dc3545',
  },
  answerText: {
    fontSize: 15,
    color: '#444',
    flex: 1,
  },
  restartButton: {
    backgroundColor: '#007bff',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 20,
  },
  restartButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ResultsScreen;