import React, { useState } from "react";
import ButtonPro from "./ButtonPro";

const NuevoComponente = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="new">
      <p>Hola Mundo {count}</p>
      <p>{count}</p>
      <ButtonPro count={count} setCount={setCount} />
    </div>
  );
};

export default NuevoComponente;
