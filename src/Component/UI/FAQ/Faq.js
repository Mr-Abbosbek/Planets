import React, { useState } from 'react';

function Faq(props) {
  const [showText, setShowText] = useState(false);
  return (
    <div>
      <div onClick={()=>setShowText(!showText)} className='d-inline-flex m-0 faq-button'>
        {
          showText === true
          ? <h5 className='d-inline-flex align-items-center fw-bold'><span>{props.icon_1}</span><p className='m-0'>{props.title}</p></h5>
          : <h5 className='d-inline-flex align-items-center fw-bold'><span>{props.icon_2}</span><p className='m-0'>{props.title}</p></h5>
        }
      </div>
      <div className='faq-text'>
        <p>{showText === true ? props.text : ""}</p>
      </div>
    </div>
  );
}

export default Faq;