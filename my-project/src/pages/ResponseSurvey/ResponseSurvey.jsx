import axios from 'axios';
import { useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './ResponseSurvey.css';

function ResponseSurvey() {
  const surveyInfo = useLocation().state;
  const descriptive = useRef();
  const navigate = useNavigate();

  const [descriptiveAnswers, setDescriptiveAnswers] = useState({});
  const [radioAnswers, setRadioAnswers] = useState({});
  const [checkAnswers, setCheckAnswers] = useState({});
  const [getheringAnswers, setGetheringAnswers] = useState({});

  const onChangeDescriptive = (e) => {
    descriptive.current.style.height = 'auto'; //height 초기화
    descriptive.current.style.height = descriptive.current.scrollHeight + 'px';

    const getheringAnswersTemp = { ...getheringAnswers };
    getheringAnswersTemp[e.target.getAttribute('data_id')] = {
      questionType: 'DESCRIPTIVE',
      questionId: e.target.getAttribute('data_id'),
      relatedSubjectAnswer: e.target.value,
    };

    setGetheringAnswers(getheringAnswersTemp);
  };

  const onClickCheck = (e) => {
    const getheringAnswersTemp = { ...getheringAnswers };
    const keyName = e.target.getAttribute('data_id') + e.target.value;

    if (e.target.checked) {
      getheringAnswersTemp[keyName] = {
        questionType: e.target.getAttribute('data_type'),
        questionId: e.target.getAttribute('data_id'),
        relatedAnswerId: e.target.value,
      };

      setGetheringAnswers(getheringAnswersTemp);
    } else {
      delete getheringAnswersTemp[keyName];

      setGetheringAnswers(getheringAnswersTemp);
    }
  };

  const onClickRadioCheck = (e) => {
    if (e.target.checked) {
      const getheringAnswersTemp = { ...getheringAnswers };
      const keyName = e.target.getAttribute('data_id');
      getheringAnswersTemp[keyName] = {
        questionType: e.target.getAttribute('data_type'),
        questionId: e.target.getAttribute('data_id'),
        relatedAnswerId: e.target.value,
      };

      setGetheringAnswers(getheringAnswersTemp);
    }
  };

  const onSubmitResponse = async (e) => {
    e.preventDefault();

    if (window.confirm('이대로 응답을 제출하시겠습니까?')) {
      window.alert('응답이 정상적으로 제출되었습니다.');

      const token = window.localStorage.getItem('token');

      console.log('전체 답변 모음', Object.values(getheringAnswers));
      const data = Object.values(getheringAnswers);

      try {
        const response = await axios.post(`/user/poll/${surveyInfo.surveyReferenceId}`, data, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: token,
          },
        });
        console.log(response);
        // navigate('/Main');
      } catch (e) {
        console.log('something went wrong!', e);
      }
    }
  };

  return (
    <main className='response-survey'>
      <div className='response-survey__title-box response-survey__border'>
        <div className='response-survey__boxColor'></div>
        <div className='response-survey__title'>{surveyInfo.surveyTitle}</div>
        <div className='response-survey__title-explanation'>{surveyInfo.surveyExplanation}</div>
      </div>

      {surveyInfo.relatedQuestions.map((item, index) => {
        return (
          <div key={index} className='response-questions_box response-survey__border'>
            <div className='response-questions_box__boxColor'></div>
            <div className='response-questions_box__rquestions'>
              <div className='rquestions__title'>{item.questionTitle}</div>
              <div>
                {item.questionType !== 'DESCRIPTIVE' ? (
                  item.questionType === 'SINGLEANSWER' ? (
                    <ul className='rquestions__roptions'>
                      {item.relatedAnswers.map((rItem, rIndex) => {
                        return (
                          <li key={rIndex}>
                            <input
                              type='radio'
                              name={`ansQID${item.questionId}`}
                              data_id={item.questionId}
                              data_type={item.questionType}
                              value={rItem.relatedAnswerId}
                              onClick={onClickRadioCheck}
                            />
                            <span>
                              {rIndex + 1}. {rItem.relatedAnswerOption}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  ) : (
                    <ul className='rquestions__roptions' data_id={item.questionId}>
                      {item.relatedAnswers.map((rItem, rIndex) => {
                        return (
                          <li key={rIndex}>
                            <input
                              type='checkbox'
                              data_id={item.questionId}
                              data_type={item.questionType}
                              value={rItem.relatedAnswerId}
                              onClick={onClickCheck}
                            />
                            <span>
                              {rIndex + 1}. {rItem.relatedAnswerOption}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  )
                ) : (
                  <div>
                    <textarea
                      placeholder='질문에 대한 답변을 입력해주세요.'
                      rows={1}
                      ref={descriptive}
                      onChange={onChangeDescriptive}
                      className='making-survey__title-explanation'
                      data_id={item.questionId}
                      data_type={item.questionType}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      })}

      <div className='response-survey__botton-box'>
        <form onSubmit={onSubmitResponse} method='post'>
          <button className='btn-basic'>응답 제출</button>
        </form>
      </div>
    </main>
  );
}

export default ResponseSurvey;
