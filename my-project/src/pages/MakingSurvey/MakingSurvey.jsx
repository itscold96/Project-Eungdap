import axios from 'axios';
import Questions from 'components/Questions/Questions';
import { useRef, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import './MakingSurvey.css';

function MakingSurvey() {
  const [surveyTitle, setSurveyTitle] = useState('');
  const [surveyExplanation, setSurveyExplanation] = useState('');
  const [radioChecksInfo, setRadioChecksInfo] = useState(new Map());
  const [expiredDate, setExpiredDate] = useState('');
  const [thumbnail, setThumbnail] = useState({});
  // const navigate = useNavigate();
  const textarea = useRef();
  const [questionList, setQuestionList] = useState([
    {
      idx: 0,
      questionTitle: '',
      qtype: 'SINGLEANSWER',
      options: [
        { idx: 0, option: '' },
        { idx: 1, option: '' },
      ],
    },
  ]);

  const onClickSelectCategories = (e) => {
    let name = e.target.name;
    let checked = e.target.value;
    setRadioChecksInfo(radioChecksInfo.set(name, checked));
  };

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
      {
        idx: questionList.length,
        questionTitle: '',
        qtype: 'SINGLEANSWER',
        options: [
          { idx: 0, option: '' },
          { idx: 1, option: '' },
        ],
      },
    ]);
  };

  const onChangeExpiredDate = (e) => {
    setExpiredDate(e.target.value);
  };

  const onClickImageUpload = async (e) => {
    const uploadFile = e.target.files[0];
    const formData = new FormData();
    formData.append('files', uploadFile);
    setThumbnail(formData);
  };

  const onSubmitSurvey = async (e) => {
    //테스트용이기 때문에 새로고침 방지
    e.preventDefault();

    const radioChecksInfoToServer = {};
    for (let x of radioChecksInfo) {
      radioChecksInfoToServer[x[0]] = x[1];
    }

    if (window.confirm('이대로 설문을 완성하시겠습니까?')) {
      window.alert('설문이 정상적으로 만들어졌습니다.');
      // navigate('/Main');
      console.log(
        '서버로 보낼 내용들: ',
        '설문 제목: ',
        surveyTitle,
        '설문 설명: ',
        surveyExplanation,
        '마감 날짜: ',
        expiredDate,
        '썸네일 이미지: ',
        thumbnail,
        '설문 필터 정보: ',
        radioChecksInfoToServer,
        '질문 정보들: ',
        questionList
      );

      const token = window.localStorage.getItem('token');
      console.log('보낼토큰 --->>' + token);
      thumbnail.append('userid', 1);
      thumbnail.append('surveytitle', surveyTitle);
      thumbnail.append('surveyexplaination', surveyExplanation);
      thumbnail.append('expireddate', expiredDate);
      thumbnail.append('pollconditions', new Blob([JSON.stringify(radioChecksInfoToServer)], { type: 'application/json' }));
      thumbnail.append('questions', new Blob([JSON.stringify(questionList)], { type: 'application/json' }));
      for (let key of thumbnail.keys()) {
        console.log('키:', key);
      }
      for (let value of thumbnail.values()) {
        console.log('밸류:', value);
        console.log('밸류타입 :', typeof value);
      }
      try {
        const ans = await axios.post('/user/poll', thumbnail, {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: token,
          },
        });
        console.log(ans);
      } catch (e) {
        console.log('something went wrong!', e);
      }
    }
  };

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
            <ul className='filter-contents__expired-date'>
              <div className='filter-contents__header'>설문 마감</div>
              <li>
                <input type='date' onChange={onChangeExpiredDate} value={expiredDate} />
              </li>
            </ul>
            <ul className='filter-contents__thumbnail'>
              <div className='filter-contents__header'>썸네일</div>
              <li>
                <input type='file' id='chooseThumbnail' name='chooseThumbnail' accept='image/*' onChange={onClickImageUpload} />
              </li>
            </ul>
            <ul className='filter-contents__method'>
              <div className='filter-contents__header'>설문 방식</div>
              <li>
                <input
                  type='radio'
                  name='contents__method'
                  id='method__unknown'
                  value='UNKNOWN'
                  onClick={onClickSelectCategories}
                />
                <label htmlFor='method__unknown'>익명(결과 화면에서 닉네임으로만 응답자 식별)</label>
              </li>
              <li>
                <input type='radio' name='contents__method' id='method__known' value='KNOWN' onClick={onClickSelectCategories} />
                <label htmlFor='method__known'>유기명(연락처 or 이메일 등이 필요)</label>
              </li>
            </ul>
            <ul className='filter-contents__gifticon'>
              <div className='filter-contents__header'>기프티콘</div>
              <li>
                <input
                  type='radio'
                  name='contents__gifticon'
                  id='gifticon__include'
                  value='INCLUDE'
                  onClick={onClickSelectCategories}
                />
                <label htmlFor='gifticon__include'>포함</label>
              </li>
              <li>
                <input
                  type='radio'
                  name='contents__gifticon'
                  id='gifticon__exclude'
                  value='EXCLUDE'
                  onClick={onClickSelectCategories}
                />
                <label htmlFor='gifticon__exclude'>미포함</label>
              </li>
            </ul>
            <ul className='filter-contents__categories'>
              <div className='filter-contents__header'>설문 분야</div>
              <li>
                <input
                  type='radio'
                  name='contents__categories'
                  id='categories__social'
                  value='SOCIAL'
                  onClick={onClickSelectCategories}
                />
                <label htmlFor='categories__social'>사회</label>
              </li>
              <li>
                <input
                  type='radio'
                  name='contents__categories'
                  id='categories__cultureArt'
                  value='CULTUREART'
                  onClick={onClickSelectCategories}
                />
                <label htmlFor='categories__cultureArt'>문화/예술</label>
              </li>
              <li>
                <input
                  type='radio'
                  name='contents__categories'
                  id='categories__science'
                  value='SCIENCE'
                  onClick={onClickSelectCategories}
                />
                <label htmlFor='categories__science'>과학</label>
              </li>
              <li>
                <input
                  type='radio'
                  name='contents__categories'
                  id='categories__IT'
                  value='IT'
                  onClick={onClickSelectCategories}
                />
                <label htmlFor='categories__IT'>IT</label>
              </li>
              <li>
                <input
                  type='radio'
                  name='contents__categories'
                  id='categories__fashion'
                  value='FASHION'
                  onClick={onClickSelectCategories}
                />
                <label htmlFor='categories__fashion'>패션</label>
              </li>
              <li>
                <input
                  type='radio'
                  name='contents__categories'
                  id='categories__sports'
                  value='SPORTS'
                  onClick={onClickSelectCategories}
                />
                <label htmlFor='categories__sports'>스포츠</label>
              </li>
              <li>
                <input
                  type='radio'
                  name='contents__categories'
                  id='categories__religion'
                  value='RELIGION'
                  onClick={onClickSelectCategories}
                />
                <label htmlFor='categories__religion'>종교</label>
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
        <form onSubmit={onSubmitSurvey} method='post' encType='multipart/form-data'>
          <button className='btn-basic'>설문 완성</button>
        </form>
      </div>
    </main>
  );
}

export default MakingSurvey;
