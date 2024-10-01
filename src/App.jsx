import "./App.css";

function App() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;

    if (!username || !password) {
      alert("Please enter username and password");
      return;
    } else
      alert(`Your username is ${username} and your password is ${password}`);
  };
  return (
    <>
      <form action="submit" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <input type="text" name="username" id="username" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default App;
