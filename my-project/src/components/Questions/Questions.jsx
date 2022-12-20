import { useRef, useState } from 'react';
import './Questions.css';

function Questions({ idx, questionList, setQuestionList }) {
  const kategoriesList = ['객관식', '복수응답', '주관식'];
  const [selectedKategorie, setSelectedKategorie] = useState('객관식');

  const descriptive = useRef();

  const onChangeQustionTitle = (e) => {
    questionList[idx].questionTitle = e.target.value;
    setQuestionList([...questionList]);
  };

  const handleSelect = (e) => {
    questionList[idx].kategorie = e.target.value;
    setSelectedKategorie(e.target.value);
  };

  const onChangeDescriptive = (e) => {
    descriptive.current.style.height = 'auto'; //height 초기화
    descriptive.current.style.height = descriptive.current.scrollHeight + 'px';
    questionList[idx].descriptive = e.target.value;
    setQuestionList([...questionList]);
  };

  const onClickDeleteQuestion = () => {
    if (questionList.length > 1) {
      questionList.splice(idx, 1);
      questionList.map((q, index) => (q.idx = index));
      setQuestionList([...questionList]);
    } else window.alert('질문은 최소 1개 이상이 필요합니다.');
  };

  const onChangeOptions = (e) => {
    const optNum = e.target.id.split('o')[1];
    questionList[idx].options[optNum] = e.target.value;
    setQuestionList([...questionList]);
  };

  const onClickAddOption = () => {
    questionList[idx].options.push('');
    setQuestionList([...questionList]);
  };

  const onClickDeleteOption = (e) => {
    if (questionList[idx].options.length > 2) {
      const optNum = e.target.id.split('o')[1];
      questionList[idx].options.splice(optNum, 1);
      setQuestionList([...questionList]);
    } else window.alert('항목은 최소 2개 이상이 필요합니다.');
  };

  console.log(...questionList);

  return (
    <>
      {/* 새 질문 추가 */}
      <div className='questions_box making-survey__border'>
        <div className='questions_box__boxColor'></div>
        <div className='questions_box__questions'>
          <div className='questions__qtitle-box'>
            <input
              type='text'
              className='qtitle-box__title questions'
              placeholder='질문을 입력해주세요.'
              onChange={onChangeQustionTitle}
              value={questionList[idx].questionTitle}
            />
            {/* 질문 유형 선택 */}
            <select className='qtitle-box__kategories' onChange={handleSelect} value={selectedKategorie}>
              {kategoriesList.map((item, idx) => (
                <option value={item} key={idx}>
                  {item}
                </option>
              ))}
            </select>
          </div>
          <div className='questions__qoptions-box'>
            {selectedKategorie !== '주관식' ? (
              <ul className='options-box'>
                {questionList[idx].options.map((item, index) => (
                  <li key={index}>
                    {selectedKategorie === '객관식' ? (
                      <input type='radio' name={'q' + idx} />
                    ) : selectedKategorie === '복수응답' ? (
                      <input type='checkbox' name={'q' + idx} />
                    ) : (
                      <></>
                    )}
                    <span>{index + 1}.</span>
                    <input
                      id={'q' + idx + 'o' + index}
                      type='text'
                      className='options-box__option-text'
                      placeholder='항목 내용을 입력해주세요.'
                      onChange={onChangeOptions}
                      value={item}
                    />
                    <button id={'xq' + idx + 'o' + index} onClick={onClickDeleteOption}>
                      x
                    </button>
                  </li>
                ))}
              </ul>
            ) : (
              <div className='making-survey__title-text'>
                <textarea
                  placeholder='질문에 대한 답변을 입력해주세요.'
                  rows={1}
                  ref={descriptive}
                  onChange={onChangeDescriptive}
                  className='making-survey__title-explanation'
                />
              </div>
            )}
          </div>
        </div>
        <div className='questions_box__lower-box'>
          <button className='btn-add' onClick={onClickAddOption}>
            항목 추가
          </button>
          <button className='btn-del' onClick={onClickDeleteQuestion}>
            질문 삭제
          </button>
        </div>
      </div>
    </>
  );
}

export default Questions;
