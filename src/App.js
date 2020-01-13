import React, { useEffect, useRef, createRef } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    validateLanguages();
  }, []);

  const baseLanguageOptions = createRef();
  const targetLanguageOptions = createRef();
  const validateLanguages = () => {
    console.log(
      "--------------- baseLanguageOptions.current.options ---------"
    );
    console.log(baseLanguageOptions.current.options);

    console.log("--------------- targetLanguageOptions ---------");
    console.log(targetLanguageOptions);

    console.log(
      "--------------- targetLanguageOptions.current.value ---------"
    );
    console.log(targetLanguageOptions.current.value);
    console.log("---------------  ---------");

    for (let i = 0; i < baseLanguageOptions.current.options.length; i++) {
      console.log(
        "baseLanguageOptions.current.options[i].value",
        baseLanguageOptions.current.options[i].value
      );
      if (
        baseLanguageOptions.current.options[i].value ===
        targetLanguageOptions.current.value
      ) {
        baseLanguageOptions.current.options[i].disabled = "true";
        console.log("if");
      } else {
        baseLanguageOptions.current.options[i].removeAttribute("disabled");
      }
    }

    for (let i = 0; i < targetLanguageOptions.current.options.length; i++) {
      console.log(
        "targetLanguageOptions.current.options[i].value",
        targetLanguageOptions.current.options[i].value
      );
      if (
        targetLanguageOptions.current.options[i].value ===
        baseLanguageOptions.current.value
      ) {
        targetLanguageOptions.current.options[i].disabled = "true";
      } else {
        targetLanguageOptions.current.options[i].removeAttribute("disabled");
      }
    }
    console.log("test");
  };

  return (
    <div className="App">
      <select
        ref={baseLanguageOptions}
        name="baseSelect"
        onChange={validateLanguages}
      >
        <option value="en">en</option>
        <option value="ge">ge</option>
        <option value="ru">ru</option>
      </select>
      <select
        ref={targetLanguageOptions}
        name="targetSelect"
        onChange={validateLanguages}
      >
        <option value="ge">ge</option>
        <option value="en">en</option>
        <option value="ru">ru</option>
      </select>
    </div>
  );
}

export default App;
