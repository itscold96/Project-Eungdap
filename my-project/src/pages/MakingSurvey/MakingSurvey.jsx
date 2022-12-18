import Questions from 'components/Questions/Questions';
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './MakingSurvey.css';

function MakingSurvey() {
  const [questionList, setQuestionList] = useState([
    { idx: 0, questionTitle: '', options: ['새 항목1', '새 항목2', '새 항목3', '', ''] },
  ]);

  const navigate = useNavigate();
  const textarea = useRef();

  const handleResizeHeight = () => {
    textarea.current.style.height = 'auto'; //height 초기화
    textarea.current.style.height = textarea.current.scrollHeight + 'px';
  };

  const onClickAddQuestion = (e) => {
    setQuestionList([...questionList, { idx: questionList.length, questionTitle: '', options: [] }]);
  };

  const onSubmitSurvey = (e) => {
    if (window.confirm('이대로 설문을 완성하시겠습니까?')) {
      window.alert('설문이 정상적으로 만들어졌습니다.');
      navigate('/Main');
    } else e.preventDefault();
  };

  return (
    <main className='making-survey'>
      <div className='making-survey__title-box making-survey__border'>
        <div className='making-survey__boxColor'></div>
        <div className='making-survey__title-text'>
          <input type='text' placeholder='설문지 제목을 입력해주세요.' className='making-survey__title' />
          <textarea
            placeholder='설문에 대한 설명을 입력해주세요.'
            rows={1}
            ref={textarea}
            onChange={handleResizeHeight}
            className='making-survey__title-explanation'
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
