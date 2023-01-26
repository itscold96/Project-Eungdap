import Filter from 'components/Filter/Filter';
import { useNavigate } from 'react-router-dom';
import './Main.css';

function Main() {
  const navigate = useNavigate();

  //서버에서 받아올 존재하는 설문조사들 object의 더미
  const dummyExistSurvay = {
    number: 0,
    size: 12,
    mainSurveyObjArray: [
      {
        surveyReferenceId: 1,
        surveyTitle: '설문조사 1번',
        surveyThumbnail:
          'https://react-spring-pollproject.s3.ap-northeast-2.amazonaws.com/test/84ff1287-1844-48fa-936d-904ad17b31e2files.jpg',
      },
      {
        surveyReferenceId: 2,
        surveyTitle: '설문조사 2번입니다.',
        surveyThumbnail:
          'https://react-spring-pollproject.s3.ap-northeast-2.amazonaws.com/test/80043b65-f84d-465d-9caf-736d4c8fc1ccfiles.jpg',
      },
    ],
    totalPages: 1,
    totalElements: 2,
  };

  const onClickSurvey = async (e) => {
    console.log('설문 클릭됨', e.currentTarget.getAttribute('value'));

    //서버에서 받아올 데이터 object 객체의 더미
    const dummySurveyInfo = {
      surveyReferenceId: 1,
      surveyTitle: '설문조사 1번',
      surveyStart: '2023-01-26T17:30:59.967822',
      surveyEnd: '2023-01-28T23:59:59',
      surveyExplanation: '설문조사 설명글',
      surveyRewardCondition: null,
      surveyNameCondition: null,
      surveyCategory: null,
      surveyThumbNailUrl: null,
      surveyParticipantsCount: 0,
      surveyCreator: {
        surveyCreatorId: 1,
        surveyCreatorEmail: 'evan980825@gmail.com',
        surveyCreatorUserName: '이승언',
        surveyCreatorImageUrl: 'https://lh3.googleusercontent.com/a/AEdFTp5eRG3ptAUwTVFYTRFl8DEdiTXk5WxuxroTiXk5=s96-c',
        surveyCreatorTemperature: 0.0,
      },
      relatedQuestions: [
        {
          questionId: 1,
          questionTitle: '객관식 질문 1번입니다.',
          questionType: 'SINGLEANSWER',
          relatedAnswers: [
            {
              relatedAnswerId: 1,
              relatedAnswerOption: '1_1번 답안입니다.',
            },
            {
              relatedAnswerId: 2,
              relatedAnswerOption: '1_2번 답안입니다.',
            },
            {
              relatedAnswerId: 3,
              relatedAnswerOption: '1_3번 답안입니다.',
            },
          ],
        },
        {
          questionId: 2,
          questionTitle: '복수응답 질문 2번입니다.',
          questionType: 'MULTIANSWER',
          relatedAnswers: [
            {
              relatedAnswerId: 4,
              relatedAnswerOption: '2_1번 답안입니다.',
            },
            {
              relatedAnswerId: 5,
              relatedAnswerOption: '2_2번 답안입니다.',
            },
            {
              relatedAnswerId: 6,
              relatedAnswerOption: '2_3번 답안입니다.',
            },
          ],
        },
        {
          questionId: 3,
          questionTitle: '주관식 질문 3번입니다.',
          questionType: 'DESCRIPTIVE',
          relatedAnswers: [],
        },
      ],
    };

    navigate('/ResponseSurvey', { state: dummySurveyInfo });
  };

  return (
    <>
      <div className='main-upper'>
        <div className='main-upper__img'>
          <img src='/images/samples/sample2.jpg' alt='배너이미지' height={'300px'} width={'100%'} />
        </div>
        <div className='main-upper__bg'></div>
        <div className='main-upper__text'>
          <p>원하는 설문을 찾아보세요.</p>
        </div>
      </div>
      <main className='main-page'>
        <Filter />
        <div className='main-page__surveys'>
          <ul className='survey' onClick={onClickSurvey}>
            <li>
              <img
                src='https://react-spring-pollproject.s3.ap-northeast-2.amazonaws.com/test/9a50031c-b3a5-4d63-bc0a-24a51974badefiles.jpg'
                alt='설문조사 썸네일'
                height={'170px'}
                width={'290px'}
              />
            </li>
            <li className='survey__title'>사진 URL 테스트</li>
          </ul>
          {/* 더미데이터 XML 매핑 */}
          {dummyExistSurvay.mainSurveyObjArray.map((item, index) => {
            return (
              <ul key={index} className='survey' onClick={onClickSurvey} value={item.surveyReferenceId}>
                <li>
                  <img src={item.surveyThumbnail} alt='설문조사 썸네일' height={'170px'} width={'290px'} />
                </li>
                <li className='survey__title'>{item.surveyTitle}</li>
              </ul>
            );
          })}
        </div>
        {/* 페이지네이션 */}
        <ul className='pagenation'>
          <li className='pagenation__chevron'>{'<'}</li>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>6</li>
          <li>7</li>
          <li>8</li>
          <li>9</li>
          <li>10</li>
          <li className='pagenation__chevron'>{'>'}</li>
        </ul>
      </main>
    </>
  );
}

export default Main;
