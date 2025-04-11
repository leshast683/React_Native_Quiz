// Calculate score based on user answers and question data
export const calculateScore = (userAnswers, quizData) => {
  let score = 0;
  
  quizData.forEach((question, index) => {
    const userAnswer = userAnswers[index] || [];
    const correctAnswer = question.correct;
    
    // For single or boolean questions
    if (question.type === 'single' || question.type === 'boolean') {
      if (userAnswer.length === 1 && userAnswer[0] === correctAnswer[0]) {
        score++;
      }
    } 
    // For multiple answer questions
    else if (question.type === 'multiple') {
      // Check if arrays contain the same elements (regardless of order)
      const isCorrect = 
        userAnswer.length === correctAnswer.length && 
        correctAnswer.every(answer => userAnswer.includes(answer));
      
      if (isCorrect) {
        score++;
      }
    }
  });
  
  return score;
};

// Check if a specific question is answered correctly
export const isQuestionCorrect = (userAnswer, correctAnswer, questionType) => {
  if (!userAnswer || userAnswer.length === 0) {
    return false;
  }
  
  if (questionType === 'single' || questionType === 'boolean') {
    return userAnswer.length === 1 && userAnswer[0] === correctAnswer[0];
  } else if (questionType === 'multiple') {
    return userAnswer.length === correctAnswer.length && 
           correctAnswer.every(answer => userAnswer.includes(answer));
  }
  
  return false;
};