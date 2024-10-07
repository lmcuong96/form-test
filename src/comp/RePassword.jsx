import { useState } from "react";
export const RePasswordComp = (pas) => {
    const [val, setVal] = useState("");

    return {
        render: () => (
            <div>
                <label>Repeat Password</label>
                <input
                    type="password"
                    value={val}
                    onChange={(e) => setVal(e.target.value)}
                />
            </div>
        ),
        invalid: !val || val.length < 3,
        explain: () => <p>Mat khau co "{val.length}" ky tu</p>,
        addData: (ret) => ({ ...ret, rePassword: val }),
        showErrors: () => alert(!val !== pas && "Password không trùng khớp"),
    };
};
