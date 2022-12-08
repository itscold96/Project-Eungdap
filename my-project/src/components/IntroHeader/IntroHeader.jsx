import './IntroHeader.css';

function IntroHeader() {
  return (
    <>
      <header className='IntroHeader'>
        <div className='IntroHeader__hdr-right'>
          <a href='/Main' className='eungdap-title'>
            응%답
          </a>
        </div>
        <ul className='IntroHeader__hdr-left'>
          <li>
            <button className='btn-basic'>시작하기</button>
          </li>
        </ul>
      </header>
    </>
  );
}

export default IntroHeader;
