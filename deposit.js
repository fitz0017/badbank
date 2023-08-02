const Deposit = () => {
  const ctx = React.useContext(UserContext);
  const activeUser = React.useContext(ActiveUserContext);
  const [deposit, setDeposit] = React.useState(0);
  const currentUser = ctx.users.filter((user) => user.email === activeUser);
  const [balance, setBalance] = React.useState(Number(currentUser[0].balance));
  const [enable, setEnable] = React.useState(false);

  const [validTransaction, setValidTransaction] = React.useState(false);

  // TODO validate zero dollar deposits don't process after alert
  const validateDeposit = (dep) => {
    if (dep <= 0) return alert("Negative or zero deposit, try again");
    // console.log(Number(dep));
    else if (isNaN(Number(dep))) return alert("Not a Number, try again");
    else if (!dep) {
      return alert("No deposit submitted");
    } else {
      return true;
    }
  };

  // fix first submit adding zero to balance and second click doing what the first should
  const handleSubmit = (event) => {
    const temp = document.getElementById("deposit").value;
    const newState = Number(temp) + balance;
    console.log(Number(temp));

    // add to tx history
    if (validateDeposit(Number(temp))) {
      const node = document.createElement("li");
      const tx = document.createTextNode(
        `Successful Deposit of $${Number(temp)}`
      );
      node.appendChild(tx);
      node.classList.add("text-success");
      document.getElementById("transactions").appendChild(node);

      setBalance(newState);
      console.log(newState);
      console.log(temp);
    }
    if (newState < 0) {
      return alert("Balance is negative");
    }
  };

  return (
    // TODO finish styling cards, standarize shadows and header colors
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
          <h5 className="card-title bg-light text-center shadow p-4">
            Deposit Form
          </h5>
          <div className="row mx-auto p-2">
            <p className="card-text text-success">Balance: ${balance}</p>
          </div>
          <div className="card-text">
            <form>
              <input
                className="form-control"
                type="text"
                id="deposit"
                placeholder="$0"
                onChange={(e) => {
                  setEnable(true);
                }}
              ></input>
              {enable ? (
                <button
                  className="btn-primary m-2"
                  type="submit"
                  onClick={handleSubmit}
                >
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
          <div className="card m-4 p-4 shadow-sm">
            <h5 className="bg-light card-title text-center shadow p-4">
              Transaction History
            </h5>
            <ul className="list" id="transactions"></ul>
          </div>
        </div>
      </div>
    </>
  );
};
