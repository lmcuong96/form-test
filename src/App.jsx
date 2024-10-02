import "./App.css";
import React, { useRef, useState } from "react";
export function App() {
    const [state, setState] = useState({
        username: "",
        password: "",
    });

    const uncontrolInput = useRef(null);
    const [uncontrolInputValue, setUncontrolInputValue] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        const { username, password } = state;
        if (!username || !password) {
            alert("Please enter username and password");
            return;
        } else if (password.length < 8) {
            alert("Password must be at least 8 characters long");
            return;
        } else {
            alert(
                `Your username is ${username} and your password is ${password}`
            );
        }
    };
    const handleChange = () =>
        setUncontrolInputValue(uncontrolInput.current.value);

    function trim(str) {
        let start = 0;
        let end = str.length - 1;

        while (start <= end && str[start] === " ") {
            start++;
        }

        while (end >= start && str[end] === " ") {
            end--;
        }
        return str.slice(start, end + 1);
    }
    return (
        <>
            <div>
                <div>
                    <label>UnControlled Username</label>
                    <input
                        type="text"
                        ref={uncontrolInput}
                        onChange={handleChange}
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
                    <p>
                        Tên của bạn là "{trim(uncontrolInputValue)}"
                        (UnControlled){" "}
                    </p>
                    <p>Tên của bạn là "{trim(state.username)}" (Controlled)</p>
                    <p>Mật khẩu của bạn có {state.password} ký tự</p>
                </div>
            </div>
        </>
    );
}
