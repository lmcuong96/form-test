import "./app.css";
import React, { Fragment, useState } from "react";
import { UsernameComp } from "./comp/UserName.jsx";
import { PasswordComp } from "./comp/Password.jsx";
import { RePasswordComp } from "./comp/RePassword.jsx";
import { RecivedEmailComp } from "./comp/RecivedEmailComp.jsx";
import { combineComponents } from "./comp/CompileCom.jsx";
export const App = () => {
    const usernameComp = UsernameComp();
    const passwordComp = PasswordComp();
    const rePasswordComp = RePasswordComp(passwordComp.val);
    const recivedEmailComp = RecivedEmailComp();
    const combine = combineComponents([
        usernameComp,
        passwordComp,
        rePasswordComp,
        recivedEmailComp,
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
                        }}
                    >
                        Submit
                    </button>

                    <div>{combine.explain()}</div>
                </div>
            </div>
        </div>
    );
};
