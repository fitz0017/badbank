const Withdraw = () => {
  const ctx = React.useContext(UserContext);
  const userCtx = React.useContext(ActiveUserContext);
  const [withdraw, setWithdrawl] = React.useState(0);
  const [balance, setBalance] = React.useState(100);
  const [enable, setEnable] = React.useState(false);

  const [validTransaction, setValidTransaction] = React.useState(false);

  // TODO validate zero dollar deposits don't process after alert
  const validateWithdrawl = (dep) => {
    if (dep <= 0) return alert("Negative or zero deposit, try again");
    // console.log(Number(dep));
    else if (isNaN(Number(dep))) return alert("Not a Number, try again");
    else if (!dep) {
      return alert("No deposit submitted");
    } else {
      return true;
    }
  };
  console.log(userCtx.user[0]);

  // fix first submit adding zero to balance and second click doing what the first should
  const handleSubmit = (event) => {
    const temp = document.getElementById("withdrawl").value;
    const newState = userCtx.user[0].balance - Number(temp);
    console.log(newState);
    let tempUser = userCtx.user[0];
    tempUser.balance = newState;
    console.log(userCtx.user[0].name);

    // add to tx history
    if (validateWithdrawl(Number(temp))) {
      const node = document.createElement("li");
      const tx = document.createTextNode(
        `Successful Withdrawl of $${Number(temp)}`
      );
      node.appendChild(tx);
      node.classList.add("text-success");
      document.getElementById("transactions").appendChild(node);

      console.log(userCtx.user[0]);
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
            name={userCtx.user[0].name}
            email={userCtx.user[0].email}
            balance={userCtx.user[0].balance}
          ></Card>
        </div>
        <div className="col-4 card p-4 mx-auto shadow-sm">
          <h5 className="card-title bg-light text-center shadow p-4">
            Deposit Form
          </h5>
          <div className="row mx-auto p-2">
            <p className="card-text text-success">
              Balance: ${userCtx.user[0].balance}
            </p>
          </div>
          <div className="card-text">
            <form>
              <input
                className="form-control"
                type="text"
                id="withdrawl"
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
                  Submit Withdrawl
                </button>
              ) : (
                <button className="btn-primary m-2" type="submit" disabled>
                  Submit Withdrawl
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
