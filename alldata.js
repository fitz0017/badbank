function AllData() {
  const ctx = React.useContext(UserContext);
  return (
    <div className="container">
      <h5 className="h-5">All Data in Store</h5>

      <div className="row">
        {/* {JSON.stringify(ctx)} */}

        {/* {ctx.users[0].name} */}
        {/* {ctx.users.map((user, index) => (
        <div className="row" key={index}>
          <div className="col-3 mx-auto">
            <div className="card mb-2">
              <div className="card-body">
                <h5 className="card-title text-center bg-info">{user.name}</h5>
                <div className="card-text">
                  Email: {user.email} <br />
                  Balance: {user.balance} <br />
                  Password: {user.password} <br />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))} */}
        {ctx.users.usersArray.map((user, index) => (
          <Card
            txtcolor="dark"
            key={index}
            name={user.name}
            email={user.email}
            password={user.password}
            balance={user.balance}
          ></Card>
        ))}
      </div>
    </div>
  );
}
