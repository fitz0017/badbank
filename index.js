const Route = ReactRouterDOM.Route;
const Link = ReactRouterDOM.Link;
const HashRouter = ReactRouterDOM.HashRouter;
const UserContext = React.createContext(null);
const ActiveUserContext = React.createContext(null);

function Spa() {
  const [users, setUsers] = React.useState({
    usersArray: [
      {
        name: "abel",
        email: "abel@mit.edu",
        password: "secret",
        balance: 100,
      },
      {
        name: "kevin",
        email: "kevin@kevin.com",
        password: "notsecret",
        balance: 100,
      },
    ],
  });
  const [user, setUser] = React.useState({
    name: "kevin",
    email: "kevin@kevin.com",
    password: "notsecret",
    balance: 100,
  });
  return (
    <HashRouter>
      <NavBar />
      <ActiveUserContext.Provider value={{ user, setUser }}>
        <UserContext.Provider value={{ users, setUsers }}>
          <div className="container" style={{ padding: "20px" }}>
            <Route path="/" exact component={Home} />
            <Route path="/CreateAccount/" component={CreateAccount} />
            <Route path="/login/" component={Login} />
            <Route path="/deposit/" component={Deposit} />
            <Route path="/withdraw/" component={Withdraw} />
            <Route path="/alldata/" component={AllData} />
          </div>
        </UserContext.Provider>
      </ActiveUserContext.Provider>
    </HashRouter>
  );
}

ReactDOM.render(<Spa />, document.getElementById("root"));
