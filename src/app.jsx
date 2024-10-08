import "./app.css";
import React from "react";
import { UsernameComp } from "./comp/UserName.jsx";
import { PasswordComp } from "./comp/Password.jsx";
import { RePasswordComp } from "./comp/RePassword.jsx";
import { RecivedEmailComp } from "./comp/RecivedEmailComp.jsx";
import { combineComponents } from "./comp/CompileCom.jsx";

// Cac ten file nen viet dang: array-test, re-password. De nhin hon
export const App = () => {

    const usernameComp = UsernameComp();
    const passwordComp = PasswordComp();
    const rePasswordComp = RePasswordComp(passwordComp.val);
    const recivedEmailComp = RecivedEmailComp(); // Typo: Receive Email.
    const combine = combineComponents([
        usernameComp,
        passwordComp,
        rePasswordComp,
        recivedEmailComp,
    ]);
    return (
        <div className="app-13s">
            <h1>UserName and Password</h1>

            {combine.render()}
            <button
                className={combine.invalid ? "disabled" : ""}
                onClick={() => {
                    if (combine.invalid) {
                        combine.showErrors();
                    } else {
                        alert(combine.json());
                    }
                }}
            >
                Submit
            </button>

            <div>{combine.explain()}</div>
        </div>
    );
};
