import React from 'react';

const Button = (props) => {
  const { onClick } = props;
  return (
    <>
      <button className="btn-animate" onClick={onClick}>
        ፈልግ
      </button>
    </>
  );
};

export default Button;
