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
    setQuestionList([
      ...questionList,
      { idx: questionList.length, questionTitle: '', kategorie: '객관식', options: ['', ''], descriptive: '' },
    ]);
  };

  const onSubmitSurvey = (e) => {
    if (window.confirm('이대로 설문을 완성하시겠습니까?')) {
      window.alert('설문이 정상적으로 만들어졌습니다.');
      navigate('/Main');
    } else e.preventDefault();
  };

  const onClickImageUpload = (e) => {
    const formData = new FormData();
    formData.append('file', e.target.files[0]);
  };

  // console.log(surveyTitle);
  // console.log(surveyExplanation);
  // console.log(questionList);
  // 보낼 것 = surveyTitle, surveyExplanation, formData, questionList

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
        <div className='select-filter'>
          <div className='select-filter__title'>만드실 설문의 정보를 선택해주세요</div>
          <div className='select-filter__filter-contents'>
            <ul className='filter-contents__thumbnail'>
              <div className='filter-contents__header'>썸네일</div>
              <li>
                <input type='file' id='chooseThumbnail' name='chooseThumbnail' accept='image/*' onClick={onClickImageUpload} />
              </li>
            </ul>
            <ul className='filter-contents__method'>
              <div className='filter-contents__header'>설문 방식</div>
              <li>
                <input type='radio' name='contents__method' id='method__unknown' />
                <label htmlFor='method__unknown'>무기명</label>
              </li>
              <li>
                <input type='radio' name='contents__method' id='method__known' />
                <label htmlFor='method__known'>유기명</label>
              </li>
            </ul>
            <ul className='filter-contents__gifticon'>
              <div className='filter-contents__header'>기프티콘</div>

              <li>
                <input type='radio' name='contents__gifticon' id='gifticon__include' />
                <label htmlFor='gifticon__include'>포함</label>
              </li>
              <li>
                <input type='radio' name='contents__gifticon' id='gifticon__exclude' />
                <label htmlFor='gifticon__exclude'>미포함</label>
              </li>
            </ul>
            <ul className='filter-contents__kategories'>
              <div className='filter-contents__header'>설문 분야</div>
              <li>
                <input type='radio' name='contents__kategories' id='kategories__social' />
                <label htmlFor='kategories__social'>사회</label>
              </li>
              <li>
                <input type='radio' name='contents__kategories' id='kategories__cultureArt' />
                <label htmlFor='kategories__cultureArt'>문화/예술</label>
              </li>
              <li>
                <input type='radio' name='contents__kategories' id='kategories__science' />
                <label htmlFor='kategories__science'>과학</label>
              </li>
              <li>
                <input type='radio' name='contents__kategories' id='kategories__IT' />
                <label htmlFor='kategories__IT'>IT</label>
              </li>
              <li>
                <input type='radio' name='contents__kategories' id='kategories__fashion' />
                <label htmlFor='kategories__fashion'>패션</label>
              </li>
              <li>
                <input type='radio' name='contents__kategories' id='kategories__sports' />
                <label htmlFor='kategories__sports'>스포츠</label>
              </li>
              <li>
                <input type='radio' name='contents__kategories' id='kategories__religion' />
                <label htmlFor='kategories__religion'>종교</label>
              </li>
            </ul>
          </div>
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
