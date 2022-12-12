import { useEffect } from 'react';
import './Main.css';

function Main() {
  useEffect(() => {});
  return (
    <>
      <div className='main-upper'>
        <div className='main-upper__img'>
          <img src='/images/samples/sample2.jpg' alt='배너이미지' height={'300px'} width={'100%'} />
        </div>
        <div className='main-upper__bg'>sadsadsadsadsa</div>
        <div className='main-upper__text'>
          <p>당신이 원하는 설문을 찾아보세요.</p>
        </div>
      </div>
      <main className='main-page'>
        <div className='main-filter'></div>
        <div className='main-page__surveys'>
          <ul className='survey'>
            <li>
              <img src='/images/samples/sample1.png' alt='설문조사 썸네일' height={'170px'} width={'290px'} />
            </li>
            <li className='survey__title'>2023 대학생 만족도 설문조사</li>
          </ul>
          {/* 샘플용 시작*/}
          <ul className='survey'>
            <li>
              <img src='/images/samples/sample1.png' alt='설문조사 썸네일' height={'170px'} width={'290px'} />
            </li>
            <li className='survey__title'>
              2023 대학생 만족도 설문조사023 대학생 만족도 설문조사023 대학생 만족도 설문조사2023 대학생 만족도
            </li>
          </ul>
          <ul className='survey'>
            <li>
              <img src='/images/samples/sample1.png' alt='설문조사 썸네일' height={'170px'} width={'290px'} />
            </li>
            <li className='survey__title'>2023 대학생 만족도 설문조사</li>
          </ul>
          <ul className='survey'>
            <li>
              <img src='/images/samples/sample1.png' alt='설문조사 썸네일' height={'170px'} width={'290px'} />
            </li>
            <li className='survey__title'>2023 대학생 만족도 설문조사</li>
          </ul>
          <ul className='survey'>
            <li>
              <img src='/images/samples/sample1.png' alt='설문조사 썸네일' height={'170px'} width={'290px'} />
            </li>
            <li className='survey__title'>
              2023 대학생 만족도 설문조사023 대학생 만족도 설문조사023 대학생 만족도 설문조사2023 대학생 만족도
            </li>
          </ul>
          <ul className='survey'>
            <li>
              <img src='/images/samples/sample1.png' alt='설문조사 썸네일' height={'170px'} width={'290px'} />
            </li>
            <li className='survey__title'>2023 대학생 만족도 설문조사</li>
          </ul>
          <ul className='survey'>
            <li>
              <img src='/images/samples/sample1.png' alt='설문조사 썸네일' height={'170px'} width={'290px'} />
            </li>
            <li className='survey__title'>2023 대학생 만족도 설문조사</li>
          </ul>
          <ul className='survey'>
            <li>
              <img src='/images/samples/sample1.png' alt='설문조사 썸네일' height={'170px'} width={'290px'} />
            </li>
            <li className='survey__title'>
              2023 대학생 만족도 설문조사023 대학생 만족도 설문조사023 대학생 만족도 설문조사2023 대학생 만족도
            </li>
          </ul>
          <ul className='survey'>
            <li>
              <img src='/images/samples/sample1.png' alt='설문조사 썸네일' height={'170px'} width={'290px'} />
            </li>
            <li className='survey__title'>2023 대학생 만족도 설문조사</li>
          </ul>
          <ul className='survey'>
            <li>
              <img src='/images/samples/sample1.png' alt='설문조사 썸네일' height={'170px'} width={'290px'} />
            </li>
            <li className='survey__title'>2023 대학생 만족도 설문조사</li>
          </ul>
          <ul className='survey'>
            <li>
              <img src='/images/samples/sample1.png' alt='설문조사 썸네일' height={'170px'} width={'290px'} />
            </li>
            <li className='survey__title'>
              2023 대학생 만족도 설문조사023 대학생 만족도 설문조사023 대학생 만족도 설문조사2023 대학생 만족도
            </li>
          </ul>
          <ul className='survey'>
            <li>
              <img src='/images/samples/sample1.png' alt='설문조사 썸네일' height={'170px'} width={'290px'} />
            </li>
            <li className='survey__title'>2023 대학생 만족도 설문조사</li>
          </ul>
          {/* 샘플용 끝*/}
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
