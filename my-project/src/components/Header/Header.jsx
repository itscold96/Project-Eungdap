import './Header.css';

function Header() {
  return (
    <>
      <header className='header'>
        <div className='header__hdr-right'>
          <a href='/Main' className='eungdap-title'>
            응%답
          </a>
        </div>
        <ul className='header__hdr-left'>
          <li>
            <button className='btn-basic'>로그인</button>
          </li>
        </ul>
      </header>
    </>
  );
}

export default Header;
