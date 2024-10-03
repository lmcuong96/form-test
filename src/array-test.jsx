import React, { useState } from "react";

export const ArrayTest = () => {

    return (
        <div>
            <h1>Array To Div</h1>

            {[1, 2].map((item, index) => {

                const [val, setVal] = useState("");
                return (
                    <div key={index}>
                        <label>Input {item}:</label>
                        <input
                            type="text"
                            value={val}
                            onChange={(e) => setVal(e.target.value)}
                        />
                        <span className="value">
                            {val}
                        </span>
                    </div>
                );
            })}
        </div>
    );
};

