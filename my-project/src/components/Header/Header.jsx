import { useNavigate } from 'react-router-dom';
import './Header.css';

function Header() {
  const navigate = useNavigate();

  const onClickMoveToMain = (e) => {
    navigate('/Main');
  };

  const onClickMoveToMakingSurvey = (e) => {
    navigate('/MakingSurvey');
  };

  return (
    <>
      {/* url에 따라 다른 헤더를 보여주도록 함 */}
      {window.location.pathname === '/' ? (
        <header className='IntroHeader'>
          <div className='IntroHeader__hdr-right'>
            <a href='/Main' className='eungdap-title'>
              응답.
            </a>
          </div>
          <button className='btn-basic' onClick={onClickMoveToMain}>
            시작하기
          </button>
        </header>
      ) : (
        <header className='header'>
          <div className='header__hdr-right'>
            <a href='/Main' className='eungdap-title'>
              응답.
            </a>
          </div>
          <ul className='header__hdr-feats'>
            <li>
              <button className='btn-feat' onClick={onClickMoveToMakingSurvey}>
                설문 만들기
              </button>
            </li>
            <li>
              <button className='btn-feat'>진행중인 설문 보기</button>
            </li>
            <li>
              <button className='btn-feat'>완료된 설문 보기</button>
            </li>
          </ul>
          <ul className='header__hdr-left'>
            <li>
              <button className='btn-basic'>로그인</button>
            </li>
          </ul>
        </header>
      )}
    </>
  );
}

export default Header;
