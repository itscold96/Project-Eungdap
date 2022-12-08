import './Init.css';

function Init() {
  return (
    <>
      <main className='init'>
        <div className='init__intro'>
          <div className='intro__text'>
            <p>설문조사가 필요하신가요?</p>
            <p>오직 설문조사만을 위한 플랫폼</p>
            <p className='eungdap-title'>응%답</p>
            {/* <p>여러분의 시간을 아껴드립니다.</p> */}
          </div>
        </div>
        <ul className='init__yet'>
          <li className='yet__img'>
            <img src='/images/samples/sample1.png' alt='에타 이미지' height={'500px'} width={'800px'} />
          </li>
          <li className='yet__text'>
            <p>설마,</p>
            <p>아직도 친구에게</p>
            <p>부탁하세요?</p>
          </li>
        </ul>
        <ul className='init__f1'>
          <li className='f1__text'>
            <p>
              <span className='eungdap-title'>응%답</span>에서
            </p>
            <p>더 많은 사람들과</p>
            <p>직접 만든 설문지를 공유하고</p>
          </li>
          <li className='f1__img'>
            <img src='/images/samples/sample1.png' alt='설문지 테이블 이미지' height={'500px'} width={'800px'} />
          </li>
        </ul>
        <ul className='init__f2'>
          <li className='f2__img'>
            <img src='/images/samples/sample1.png' alt='설문 결과 이미지' height={'500px'} width={'800px'} />
          </li>
          <li className='f2__text'>
            <p>
              <span className='eungdap-title'>응%답</span>에서
            </p>
            <p>여러분이 필요로 하는</p>
            <p>설문 결과를 찾아 보세요.</p>
            <p></p>
          </li>
        </ul>
        <div className='init__start'>
          <div className='start__text'>
            <p>설문조사 플랫폼</p>
            <p className='eungdap-title'>응%답</p>
          </div>
          <button className='btn-basic'>시작하기</button>
        </div>
      </main>
    </>
  );
}

export default Init;
