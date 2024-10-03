import "./app.css";
import React, { useState } from "react";

export const App = () => {
    const [upercase, setUpercase] = useState();
    const [state, setState] = useState({
        username: "",
        password: "",
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        const { username, password } = state;
        if (!username || !password) {
            alert("Please enter username and password");
        } else if (password.length < 8) {
            alert("Password must be at least 8 characters long");
        } else {
            alert(
                `Your username is ${username} and your password is ${password}`
            );
        }
    };
    return (
        <div style={{ textAlign: "center", display: "flex", gap: "50px" }}>
            <div>
                <h1>UserName and Password</h1>
                <div>
                    <div>
                        <label>UnControlled Username</label>
                        <input
                            type="text"
                            onChange={(e) =>
                                setState({ ...state, username: e.target.value })
                            }
                        />
                    </div>
                    <div>
                        <label>Controlled Username</label>
                        <input
                            type="text"
                            value={state.username}
                            onChange={(e) =>
                                setState({ ...state, username: e.target.value })
                            }
                        />
                    </div>
                    <div>
                        <label>Controlled Username Without OnChange</label>
                        <input type="text" value={state.username} />
                    </div>
                    <div>
                        <label>Upercase Username</label>
                        <input
                            type="text"
                            value={upercase}
                            onChange={(e) =>
                                setUpercase(e.target.value.toUpperCase())
                            }
                        />
                    </div>
                    <div>
                        <label>Password</label>
                        <input
                            type="password"
                            onChange={(e) =>
                                setState({
                                    ...state,
                                    password: e.target.value.length,
                                })
                            }
                        />
                    </div>
                    <button onClick={handleSubmit}>Submit</button>
                    <div>
                        <p>Tên của bạn là "{state.username}"</p>
                        <p>Mật khẩu của bạn có {state.password} ký tự</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
