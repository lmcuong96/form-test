import React, { useState } from "react";

export const ArrayToDiv = () => {
    const array = [1, 2];
    const [inputValues, setInputValues] = useState(array.map(() => ""));

    const handleInputChange = (index, event) => {
        const newValues = [...inputValues];
        newValues[index] = event.target.value;
        setInputValues(newValues);
    };

    return (
        <div>
            <h1>Array To Div</h1>

            {array.map((item, index) => (
                <div key={index}>
                    <label>Input {item}:</label>
                    <input
                        type="text"
                        value={inputValues[index]}
                        onChange={(event) => handleInputChange(index, event)}
                    />
                </div>
            ))}

            {inputValues.map((value, index) => (
                <div key={index}>
                    input {index} : {value}
                </div>
            ))}
        </div>
    );
};
