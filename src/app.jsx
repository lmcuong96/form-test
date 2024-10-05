import "./app.css";
import React, { Fragment, useState } from "react";
import { UsernameComp } from "./UserName.jsx";
import { PasswordComp } from "./Password.jsx";
import { combineComponents } from "./CompileCom.jsx";
export const App = () => {
    const usernameComp = UsernameComp();
    const passwordComp = PasswordComp();

    const combine = combineComponents([usernameComp, passwordComp]);
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
