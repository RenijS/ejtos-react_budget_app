import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const DropdownComponent = ({ optionsList }) => {
  const { dispatch } = useContext(AppContext);

  const [optionState, setOptionState] = useState("Currency Options");

  const handleOnChange = (option) => {
    setOptionState(`Currency (${option})`);

    dispatch({
      type: "CHG_CURRENCY",
      payload: option[0],
    });
  };

  return (
    <div class="dropdown">
      <button class="dropdown-btn">
        <span>{optionState}</span>
        <span class="arrow"></span>
      </button>
      <ul class="dropdown-content">
        {optionsList.map((option) => (
          <li>
            <span onClick={() => handleOnChange(option)}>{option}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropdownComponent;
