import { shuffleArray } from './utils';

export type Question = {
  category: string;
  correct_answers: string;
  difficulty: string;

  question: string;
  type: string;
};

export type QuestionState = Question & { answers: string[] };

export enum Difficulty {
  EASY = 'easy',
  MEDIUM = 'medium',
  HARD = 'hard',
}

export const fetchQuizQuestions = async (amount: number, difficulty: Difficulty) => {
  const endpoint = `https://quizapi.io/api/v1/questions?limit=${amount}&difficulty=${difficulty}`;
  const response = await fetch(endpoint, {
    method: 'GET',
    headers: {
      'X-API-KEY': '8W92xbm2eZTPY3ImHFj8cbsdpNEnXW5O0GCg7VoP',
    },
  });
  const data = await response.json();
  console.log(data);
  console.log(data.results);
  // return data;
  return data.map((question: Question) => ({
    ...question,
    answer: shuffleArray([question.correct_answers]),
  }));
};
