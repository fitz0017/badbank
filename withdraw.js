function Withdraw() {
  const ctx = React.useContext(UserContext);
  const activeUser = React.useContext(ActiveUserContext);
  const [withdrawl, setWithdrawl] = React.useState(0);
  const currentUser = ctx.users.filter((user) => user.email === activeUser);
  const [balance, setBalance] = React.useState(Number(currentUser[0].balance));
  const [enable, setEnable] = React.useState(false);

  const [validTransaction, setValidTransaction] = React.useState(false);

  const validateWithdrawl = (num) => {
    if (!num) {
      return alert("No withdrawl submitted");
    }
    if (Number(num) <= 0) return alert("Negative or zero withdrawl, try again");
    console.log(Number(num));
    if (isNaN(Number(num))) return alert("Not a Number, try again");
    else {
      return true;
    }
  };

  const handleSubmit = (event) => {
    const temp = document.getElementById("withdrawl").value;
    if (!validateWithdrawl(temp)) {
      return;
    } else {
      setWithdrawl(Number(temp));
      const newState = balance - Number(temp);
      setBalance(newState);

      // Show negative balance in tx history
      if (newState < 0) {
        const node = document.createElement("li");
        const tx = document.createTextNode(
          `Balance overdrawn by $${Number(temp)} withdrawl`
        );
        node.appendChild(tx);
        node.classList.add("text-danger");
        document.getElementById("transactions").appendChild(node);
        document
          .getElementById("form-balance")
          .classList.replace("text-success", "text-danger");
        return;
      } else {
        // add to tx history
        const node = document.createElement("li");
        const tx = document.createTextNode(
          `Successful Withdrawl of ${Number(temp)}`
        );
        node.appendChild(tx);
        node.classList.add("text-success");
        document.getElementById("transactions").appendChild(node);
      }
    }
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
          <h5 className="card-title bg-light text-center shadow p-4">
            Withdrawl Form
          </h5>
          <div className="row mx-auto">
            <p id="form-balance" className="card-text text-center text-success">
              Balance: ${balance}
            </p>
          </div>
          <div className="row text-center mx-auto p-2">
            <form onSubmit={handleSubmit}>
              <input
                className="form-control"
                type="number"
                id="withdrawl"
                placeholder="$0.00"
                onChange={(e) => {
                  setEnable(true);
                }}
              ></input>
              {enable ? (
                <button className="btn-primary m-2" type="submit">
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
}
