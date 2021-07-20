import React from "react";

const ButtonPro = (props) => {
  const { count, setCount } = props;

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div className="next">
      <button onClick={handleClick}>Click aqui {count}</button>
    </div>
  );
};

export default ButtonPro;
