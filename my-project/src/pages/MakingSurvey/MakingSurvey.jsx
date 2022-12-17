import { useRef } from 'react';
import './MakingSurvey.css';

function MakingSurvey() {
  const textarea = useRef();

  const handleResizeHeight = () => {
    textarea.current.style.height = 'auto'; //height 초기화
    textarea.current.style.height = textarea.current.scrollHeight + 'px';
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
    </main>
  );
}

export default MakingSurvey;
