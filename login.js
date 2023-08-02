const ActiveUserContext = React.createContext("");

function Login() {
  const ctx = React.useContext(UserContext);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [password, setPassword] = React.useState("");
  const [formEmail, setFormEmail] = React.useState("");
  const [enabled, setEnable] = React.useState(false);

  function updatePassword(e) {
    setPassword(e.target.value);
    console.log(password);
    setEnable(true);
  }

  function updateEmail(e) {
    setFormEmail(e.target.value);
    console.log(formEmail);
  }
  function logout() {
    setIsLoggedIn(false);
  }

  function validateLogin(e) {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    {
      !password | !email ? setEnable(false) : setEnable(true);
    }

    console.log(email);
    console.log(password);

    const realUser = ctx.users.filter((user) => user.email === email);
    console.log(realUser[0].password);

    if (realUser[0].password === password) {
      setIsLoggedIn(true);
    } else {
      alert("Wrong password, try again");
    }
  }
  return (
    <div>
      {isLoggedIn ? (
        <div className="card col-4 text-center text-success mx-auto shadow">
          <h4 className="p-3">Successful Login!</h4>
          <button className="btn-danger m-3 p-2" onClick={logout}>
            Logout
          </button>
        </div>
      ) : (
        <div className="col-6 mx-auto shadow-sm">
          <h5 className="h-4 bg-light text-center shadow p-4">Login Form</h5>
          <form onSubmit={validateLogin}>
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                onChange={updateEmail}
              />
              <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Password"
                onChange={updatePassword}
              />
            </div>
            {enabled ? (
              <button type="submit" className="btn btn-primary m-3">
                Log In
              </button>
            ) : (
              <button type="submit" className="btn btn-primary m-3" disabled>
                Log In
              </button>
            )}
          </form>
        </div>
      )}
    </div>
  );
}
