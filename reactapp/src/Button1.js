import React from 'react'
const getButtonSize = () => {
    switch (size) {
      case 'sm':
        return 'small';
      case 'md':
        return 'medium';
      case 'lg':
        return 'large';
      case 'xl':
        return 'extra-large';
      default:
        return 'medium';
    }
  };
const Button1 = ({text,size,disable,Loding}) => {
  return (
    <div>
      <button
      className={getButtonSize(size)}      
      disabled={Loding||disable}
      onClick={onClick}
      >{Loding?"Loading":text}</button>
    </div>
  )
}

export default Button1
