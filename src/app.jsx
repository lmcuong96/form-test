import "./app.css";
import React, {Fragment, useState} from "react";


const UsernameComp = () => {
    const [username, setUsername] = useState("");

    return {
        render: () => (
            <div>
                <label>Username</label>
                <input
                    type="text"
                    value={username}
                    onChange={(e) =>
                        setUsername(e.target.value)
                    }
                />
            </div>
        ),
        invalid: !username,
        explain: () => <p>Tên của bạn là "{username}"</p>,
        addData: (ret) => ({...ret, username}),
        showErrors: () => alert("Go username vao di may"),
    };
};
const PasswordComp = () => {
    const [val, setVal] = useState("");

    return {
        render: () => (
            <div>
                <label>Password</label>
                <input
                    type="password"
                    value={val}
                    onChange={(e) =>
                        setVal(e.target.value)
                    }
                />
            </div>
        ),
        invalid: !val || val.length < 3,
        explain: () => <p>Mat khau co "{val.length}" ky tu</p>,
        addData: (ret) => ({...ret, password: val}),
        showErrors: () => alert(!val ? "Go password vao di may" : val.length < 3 && "Go nhieu vao. Ngan qua"),
    };
};

export const App = () => {
    const usernameComp = UsernameComp();
    const passwordComp = PasswordComp();

    const combine = combineComponents([
        usernameComp,
        passwordComp,
    ]);
    return (
        <div style={{ textAlign: "center", display: "flex", gap: "50px" }}>
            <div>
                <h1>UserName and Password</h1>
                <div>
                    {combine.render()}
                    <button
                        className={combine.invalid ? "disabled" : ""}
                        onClick={() => {
                            if (combine.invalid) {
                                combine.showErrors();
                            } else {
                                alert(combine.json());
                            }
                        }}>Submit
                    </button>

                    <div>
                        {combine.explain()}
                    </div>
                </div>
            </div>
        </div>
    );
};


const combineComponents = (comps) => ({
    render: () => comps?.map((comp, i) => <Fragment key={i}>{comp.render()}</Fragment>),
    explain: () => comps?.map((comp, i) => <Fragment key={i}>{comp.explain()}</Fragment>),
    invalid: comps.some((comp) => comp.invalid),
    json: () => {
        let data = {};
        for (const comp of comps) {
            data = comp.addData(data);
        }
        return JSON.stringify(data);
    },
    showErrors: () => {
        comps.find((comp) => comp.invalid)?.showErrors();
    },
});

