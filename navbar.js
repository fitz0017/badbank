function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          BadBank
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li
              className="nav-item"
              data-toggle="tooltip"
              data-placement="bottom"
              title="Create an account here."
            >
              <a className="nav-link" href="#/CreateAccount/">
                Create Account
              </a>
            </li>
            <li
              className="nav-item"
              data-toggle="tooltip"
              data-placement="bottom"
              title="Login to your account here."
            >
              <a className="nav-link" href="#/login/">
                Login
              </a>
            </li>
            <li
              className="nav-item"
              data-toggle="tooltip"
              data-placement="bottom"
              title="Deposit funds to your account here."
            >
              <a className="nav-link" href="#/deposit/">
                Deposit
              </a>
            </li>
            <li
              className="nav-item"
              data-toggle="tooltip"
              data-placement="bottom"
              title="Withdrwaw funds from your account here."
            >
              <a className="nav-link" href="#/withdraw/">
                Withdraw
              </a>
            </li>
            <li
              className="nav-item"
              data-toggle="tooltip"
              data-placement="bottom"
              title="View all accounts created here."
            >
              <a className="nav-link" href="#/alldata/">
                AllData
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
