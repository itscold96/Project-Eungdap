import { useState } from 'react';
import './Filter.css';

function Filter() {
  const [toggledBtns, setToggledBtns] = useState([]);

  const onClickFilterBtn = (e) => {
    let toggle = e.target.innerText;
    if (toggledBtns.includes(toggle)) {
      toggledBtns.splice(toggledBtns.indexOf(toggle), 1);
      return setToggledBtns([...toggledBtns]);
    } else return setToggledBtns([...toggledBtns, toggle]);
  };

  return (
    <div className='filter'>
      <div className='filter__block'>
        <div className='filter__block__title'>
          <span>방식</span>
        </div>
        <div className='filter__block__methods'>
          <button className='filter__btn' onClick={onClickFilterBtn}>
            무기명
          </button>
          <button className='filter__btn' onClick={onClickFilterBtn}>
            유기명
          </button>
        </div>
      </div>
      <div className='filter__block'>
        <div className='filter__block__title'>
          <span>기프티콘</span>
        </div>
        <div className='filter__block__gifticons'>
          <button className=' filter__btn' onClick={onClickFilterBtn}>
            포함
          </button>
          <button className='filter__btn' onClick={onClickFilterBtn}>
            미포함
          </button>
        </div>
      </div>
      <div className='filter__block'>
        <div className='filter__block__title'>
          <span>분야별</span>
        </div>
        <div className='filter__block__kategories'>
          <button className='filter__btn' onClick={onClickFilterBtn}>
            사회
          </button>
          <button className='filter__btn' onClick={onClickFilterBtn}>
            문화/예술
          </button>
          <button className='filter__btn' onClick={onClickFilterBtn}>
            과학
          </button>
          <button className='filter__btn' onClick={onClickFilterBtn}>
            IT
          </button>
          <button className='filter__btn' onClick={onClickFilterBtn}>
            패션
          </button>
          <button className='filter__btn' onClick={onClickFilterBtn}>
            스포츠
          </button>
          <button className='filter__btn' onClick={onClickFilterBtn}>
            종교
          </button>
        </div>
      </div>
      <div className='filter__elements'>
        {toggledBtns.map((item, idx) => (
          <button key={idx} className='elements__btn' onClick={onClickFilterBtn}>
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Filter;
