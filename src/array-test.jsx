import React, { useState } from "react";

export const ArrayTest = () => {
    return (
        <div>
            <h1>Array To Div</h1>
            {[1, 2].map((item, index) => (
                <DIv key={index} item={item} />
            ))}
        </div>
    );
};

const DIv = ({ item }) => {
    const [val, setVal] = useState("");

    return (
        <div>
            <label>Input {item}:</label>
            <input
                type="text"
                value={val}
                onChange={(e) => setVal(e.target.value)}
            />
            <span className="value">{val}</span>
        </div>
    );
};
