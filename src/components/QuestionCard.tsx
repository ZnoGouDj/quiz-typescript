import React from 'react';

type Props = {
  question: string;
  answers: string[];
  callback: any;
  userAnswer: any;
  questionNr: number;
  totalQuestions: number;
};

const QuestionCard: React.FC<Props> = ({ question, answers, callback, userAnswer, questionNr, totalQuestions }) => {
  console.log(Object.entries(answers).map(answer => answer));

  console.log('KEY FUCK', answers);
  return (
    <div>
      <p className="number">
        Question: {questionNr} / {totalQuestions}
      </p>
      <p dangerouslySetInnerHTML={{ __html: question }} />
      <div>
        {/* {answers.map(answer => (
        <div key={answer}>
          <button disabled={userAnswer} value={answer} onClick={callback}>
            <span dangerouslySetInnerHTML={{ __html: answer }} />
          </button>
        </div>
      ))} */}
        {Object.entries(answers).map(
          answer =>
            answer[1] && (
              <div key={answer[0]}>
                <button disabled={userAnswer} value={answer[1]} onClick={callback}>
                  <span dangerouslySetInnerHTML={{ __html: answer[1] }} />
                </button>
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default QuestionCard;
