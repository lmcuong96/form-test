import "./App.css";
import React from "react";
export function App() {
  const [state, setState] = React.useState({
    username: "",
    password: "",
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;
    if (!username || !password) {
      alert("Please enter username and password");
      return;
    } else if (password.length < 8) {
      alert("Password must be at least 8 characters long");
      return;
    } else
      alert(`Your username is ${username} and your password is ${password}`);
  };
  return (
    <>
      <form action="submit" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            onChange={(e) =>
              setState({
                ...state,
                username: e.target.value,
              })
            }
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={(e) =>
              setState({
                ...state,
                password: e.target.value.length,
              })
            }
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      <div>
        <p>Tên của bạn là {state.username}</p>{" "}
        <p>Mật khẩu của bạn có {state.password} ký tự</p>
      </div>
    </>
  );
}
