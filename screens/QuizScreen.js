import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { quizData } from '../data/quizData';
import QuestionCard from '../components/QuestionCard';
import ProgressBar from '../components/ProgressBar';
import NavigationButtons from '../components/NavigationButtons';

const QuizScreen = ({ navigation }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState(new Array(quizData.length).fill(null).map(() => []));
  
  const currentQuestion = quizData[currentQuestionIndex];
  
  const handleUpdateAnswer = (selectedAnswers) => {
    const updatedAnswers = [...userAnswers];
    updatedAnswers[currentQuestionIndex] = selectedAnswers;
    setUserAnswers(updatedAnswers);
  };
  
  const handleNext = () => {
    if (currentQuestionIndex < quizData.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // Navigate to Results screen with the answers
      navigation.navigate('Results', { userAnswers });
    }
  };
  
  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };
  
  return (
    <SafeAreaView style={styles.container}>
      <ProgressBar 
        currentIndex={currentQuestionIndex} 
        totalQuestions={quizData.length} 
      />
      
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <QuestionCard 
          question={currentQuestion}
          userAnswers={userAnswers[currentQuestionIndex]}
          currentIndex={currentQuestionIndex}
          updateAnswer={handleUpdateAnswer}
        />
        
        <NavigationButtons 
          onPrevious={handlePrevious}
          onNext={handleNext}
          showPrevious={currentQuestionIndex > 0}
          disableNext={userAnswers[currentQuestionIndex].length === 0}
          isLastQuestion={currentQuestionIndex === quizData.length - 1}
        />
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
    padding: 10,
  },
});

export default QuizScreen;