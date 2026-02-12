function UncontrolledLogin() {
  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;

    const username = form.username.value;
    const password = form.password.value;
    const remember = form.remember.checked;

    console.log({
      username,
      password,
      remember
    });
  };

  const loginWithFormData = () => {
    const form = document.getElementById("loginForm");
    const formData = new FormData(form);

    const data = {
      username: formData.get("username"),
      password: formData.get("password"),
      remember: formData.get("remember") === "on"
    };

    console.log(data);
  };

  return (
    <form id="loginForm" onSubmit={handleSubmit}>
      <div>
        <input type="text" name="username" placeholder="Username" />
      </div>

      <div>
        <input type="password" name="password" placeholder="Password" />
      </div>

      <div>
        <label>
          <input type="checkbox" name="remember" />
          Remember me
        </label>
      </div>

      <button type="submit">
        Login
      </button>

      <button type="button" onClick={loginWithFormData}>
        Login with FormData
      </button>
    </form>
  );
}

function App() {
  return (
    <div>
      <UncontrolledLogin />
    </div>
  );
}

export default App;

