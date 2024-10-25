import React, { useState } from "react";

const App = () => {
  console.log(localStorage.getItem("inputVal"));
  const [value, setValue] = useState(localStorage.getItem("inputVal") || "");

  const handleChange = (e) => {
    setValue(e.target.value);
    localStorage.setItem("inputVal", e.target.value);
  };
  return (
    <div>
      <input
        data-testid="input-id"
        type="text"
        onChange={handleChange}
        value={value}
      />
    </div>
  );
};

export default App;
