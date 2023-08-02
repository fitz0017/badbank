const Deposit = () => {
  const ctx = React.useContext(UserContext);
  const activeUser = React.useContext(ActiveUserContext);
  const [deposit, setDeposit] = React.useState(null);
  const currentUser = ctx.users.filter((user) => user.email === activeUser);
  const [balance, setBalance] = React.useState(Number(currentUser[0].balance));
  const [enable, setEnable] = React.useState(false);

  const [validTransaction, setValidTransaction] = React.useState(false);

  const validateDeposit = (dep) => {
    if (!dep) {
      return alert("No deposit submitted");
    }
    if (dep <= 0) return alert("Negative or zero deposit, try again");
    console.log(Number(dep));
    if (isNaN(Number(dep))) return alert("Not a Number, try again");
  };

  const handleSubmit = (event) => {
    const temp = document.getElementById("deposit").value;
    validateDeposit(temp);
    setDeposit(Number(temp));
    const newState = deposit + balance;
    if (newState < 0) return alert("Balance is negative");
    setBalance(newState);
    const node = document.createElement("li");
    const tx = document.createTextNode(`Successful Deposit of ${deposit}`);
    node.appendChild(tx);
    document.getElementById("transactions").appendChild(node);
  };

  return (
    <>
      <div className="row">
        <div className="col-4 mx-auto">
          <Card
            txtcolor="dark"
            name={currentUser[0].name}
            email={currentUser[0].email}
            balance={balance}
          ></Card>
        </div>
        <div className="col-4 card p-4 mx-auto shadow-sm">
          <h5 className="card-title bg-light text-center">Deposit Form</h5>
          <div className="row text-center mx-auto p-2">
            <p className="card-text">Balance: {balance}</p>
          </div>
          <div className="card-text">
            <form onSubmit={handleSubmit}>
              <input
                className="form-control"
                type="text"
                id="deposit"
                placeholder="$0.00"
                onChange={(e) => {
                  setEnable(true);
                }}
              ></input>
              {enable ? (
                <button className="btn-primary m-2" type="submit">
                  Submit Deposit
                </button>
              ) : (
                <button className="btn-primary m-2" type="submit" disabled>
                  Submit Deposit
                </button>
              )}
            </form>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-6 mx-auto">
          <div className="card m-4 shadow-sm">
            <h5 className="bg-light card-title text-center">
              Transaction History
            </h5>
            <ul className="list" id="transactions"></ul>
          </div>
        </div>
      </div>
    </>
  );
};
