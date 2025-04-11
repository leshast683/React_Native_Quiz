import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const NavigationButtons = ({ 
  onPrevious, 
  onNext, 
  showPrevious, 
  disableNext,
  isLastQuestion 
}) => {
  return (
    <View style={styles.container}>
      {showPrevious ? (
        <TouchableOpacity 
          style={styles.button} 
          onPress={onPrevious}
        >
          <Text style={styles.buttonText}>Previous</Text>
        </TouchableOpacity>
      ) : (
        <View style={{ flex: 1 }} />
      )}
      
      <TouchableOpacity 
        style={[styles.button, disableNext && styles.disabledButton]} 
        onPress={onNext}
        disabled={disableNext}
      >
        <Text style={styles.buttonText}>
          {isLastQuestion ? 'Finish Quiz' : 'Next Question'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginHorizontal: 10,
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 6,
    minWidth: 120,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  disabledButton: {
    backgroundColor: '#cccccc',
    opacity: 0.7,
  },
});

export default NavigationButtons;