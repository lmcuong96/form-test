import { useState } from "react";
export const PasswordComp = () => {
    const [val, setVal] = useState("");

    return {
        render: () => (
            <div>
                <label>Password</label>
                <input
                    type="password"
                    value={val}
                    onChange={(e) => setVal(e.target.value)}
                />
            </div>
        ),
        invalid: !val || val.length < 3,
        explain: () => <p>Mat khau co "{val.length}" ky tu</p>,
        addData: (ret) => ({ ...ret, password: val }),
        showErrors: () =>
            alert(
                !val
                    ? "Go password vao di may"
                    : val.length < 3 && "Go nhieu vao. Ngan qua"
            ),
    };
};
