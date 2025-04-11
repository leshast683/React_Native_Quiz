import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { CheckBox } from 'react-native-elements';

const QuestionCard = ({ 
  question, 
  userAnswers, 
  currentIndex, 
  updateAnswer 
}) => {
  const handleSelectAnswer = (choiceIndex) => {
    if (question.type === 'single' || question.type === 'boolean') {
      // For single-choice questions, replace the answer
      updateAnswer([choiceIndex]);
    } else if (question.type === 'multiple') {
      // For multiple-choice questions, toggle the selection
      const currentAnswers = [...userAnswers];
      
      if (currentAnswers.includes(choiceIndex)) {
        // Remove if already selected
        updateAnswer(currentAnswers.filter(idx => idx !== choiceIndex));
      } else {
        // Add if not selected
        updateAnswer([...currentAnswers, choiceIndex]);
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.question}>{question.question}</Text>
      
      <View style={styles.choicesContainer}>
        {question.choices.map((choice, index) => {
          const isSelected = userAnswers.includes(index);
          
          return (
            <TouchableOpacity
              key={index}
              style={[styles.choiceItem, isSelected && styles.selectedChoice]}
              onPress={() => handleSelectAnswer(index)}
            >
              <CheckBox
                checked={isSelected}
                title={choice}
                checkedColor="#007bff"
                containerStyle={styles.checkboxContainer}
                textStyle={styles.choiceText}
                onPress={() => handleSelectAnswer(index)}
              />
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    margin: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  question: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  choicesContainer: {
    marginTop: 10,
  },
  choiceItem: {
    borderRadius: 8,
    marginBottom: 8,
    backgroundColor: '#f5f7fa',
  },
  selectedChoice: {
    backgroundColor: '#e6f0ff',
    borderLeftWidth: 3,
    borderLeftColor: '#007bff',
  },
  checkboxContainer: {
    backgroundColor: 'transparent',
    borderWidth: 0,
    margin: 0,
    padding: 10,
  },
  choiceText: {
    fontWeight: 'normal',
    fontSize: 16,
  }
});

export default QuestionCard;