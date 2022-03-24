import React from 'react';
// Types
import { AnswerObject } from '../App';
// Styles
import { Wrapper, ButtonWrapper } from './QuestionCard.styles';

type Props = {
  question: string;
  answers: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: AnswerObject | undefined;
  questionNr: number;
  totalQuestions: number;
  correct: boolean;
  isClicked: boolean;
};

const QuestionCard: React.FC<Props> = ({
  question,
  answers,
  callback,
  userAnswer,
  questionNr,
  totalQuestions,
  correct,
  isClicked,
}) => {
  console.table([
    ['question', question],
    ['answers', answers],
    ['callback', callback],
    ['userAnswer', userAnswer],
    ['questionNr', questionNr],
    ['totalQuestions', totalQuestions],
    ['correct', correct],
    ['isClicked', isClicked],
  ]);

  return (
    <Wrapper>
      <p className="number">
        Question: {questionNr} / {totalQuestions}
      </p>
      <p dangerouslySetInnerHTML={{ __html: question }} />
      <div>
        {Object.entries(answers).map(
          answer =>
            answer[1] && (
              <ButtonWrapper key={answer[0]} correct={correct} userClicked={isClicked}>
                <button id={answer[0]} disabled={!!userAnswer} value={answer[1]} onClick={callback}>
                  <span dangerouslySetInnerHTML={{ __html: answer[1] }} />
                </button>
              </ButtonWrapper>
            )
        )}
      </div>
    </Wrapper>
  );
};

export default QuestionCard;
