import Questions from 'components/Questions/Questions';
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './MakingSurvey.css';

function MakingSurvey() {
  const [surveyTitle, setSurveyTitle] = useState('');
  const [surveyExplanation, setSurveyExplanation] = useState('');
  const [questionList, setQuestionList] = useState([
    { idx: 0, questionTitle: '', kategorie: '객관식', options: ['', ''], descriptive: '' },
  ]);

  const navigate = useNavigate();
  const textarea = useRef();

  const onChangeSurveyTitle = (e) => {
    setSurveyTitle(e.target.value);
  };

  const onChangeSurveyExplanation = (e) => {
    textarea.current.style.height = 'auto'; //height 초기화
    textarea.current.style.height = textarea.current.scrollHeight + 'px';
    setSurveyExplanation(e.target.value);
  };

  const onClickAddQuestion = () => {
    setQuestionList([...questionList, { idx: questionList.length, questionTitle: '', options: ['', ''], descriptive: '' }]);
  };

  const onSubmitSurvey = (e) => {
    if (window.confirm('이대로 설문을 완성하시겠습니까?')) {
      window.alert('설문이 정상적으로 만들어졌습니다.');
      navigate('/Main');
    } else e.preventDefault();
  };

  console.log(surveyTitle);
  console.log(surveyExplanation);
  // console.log(questionList);

  return (
    <main className='making-survey'>
      <div className='making-survey__title-box making-survey__border'>
        <div className='making-survey__boxColor'></div>
        <div className='making-survey__title-text'>
          <input
            type='text'
            className='making-survey__title'
            placeholder='설문지 제목을 입력해주세요.'
            onChange={onChangeSurveyTitle}
            value={surveyTitle}
          />
          <textarea
            className='making-survey__title-explanation'
            placeholder='설문에 대한 설명을 입력해주세요.'
            rows={1}
            ref={textarea}
            onChange={onChangeSurveyExplanation}
            value={surveyExplanation}
          />
        </div>
      </div>

      {questionList.map((item, i) => (
        <div key={i}>
          <Questions idx={item.idx} setQuestionList={setQuestionList} questionList={questionList} />
        </div>
      ))}

      <div className='making-survey__botton-box'>
        <button className='btn-basic btn-add' onClick={onClickAddQuestion}>
          질문 추가
        </button>
        <form method='post' onSubmit={onSubmitSurvey}>
          <button className='btn-basic'>설문 완성</button>
        </form>
      </div>
    </main>
  );
}

export default MakingSurvey;
