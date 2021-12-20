import { useState } from 'react';
import Highlight from 'react-highlight';
export default function Code(props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`code-wrapper ${isOpen ? 'active' : ''}`}>
      <button onClick={() => setIsOpen(!isOpen)}>크게 보기</button>
      <div className='code'>
        <Highlight language='javascript'>{`${props.contents}`}</Highlight>
      </div>
    </div>
  );
}
