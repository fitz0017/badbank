function Withdraw() {
  const ctx = React.useContext(UserContext);
  const activeUser = React.useContext(ActiveUserContext);
  const [withdrawl, setWithdrawl] = React.useState(null);
  const currentUser = ctx.users.filter((user) => user.email === activeUser);
  const [balance, setBalance] = React.useState(Number(currentUser[0].balance));
  const [enable, setEnable] = React.useState(false);

  const [validTransaction, setValidTransaction] = React.useState(false);

  const validateWithdrawl = (num) => {
    if (!num) {
      return alert("No withdrawl submitted");
    }
    if (num < 0) return alert("Negative withdrawl, try again");
    console.log(Number(num));
    if (isNaN(Number(num))) return alert("Not a Number, try again");
  };

  const handleSubmit = (event) => {
    const temp = document.getElementById("withdrawl").value;
    validateWithdrawl(temp);
    setWithdrawl(Number(document.getElementById("withdrawl").value));
    const newState = balance - withdrawl;
    if (newState < 0) return alert("Balance is negative");
    setBalance(newState);
  };

  return (
    <div className="row">
      <div className="col-4 mx-auto">
        <Card
          txtcolor="dark"
          name={currentUser[0].name}
          email={currentUser[0].email}
          balance={balance}
        ></Card>
      </div>
      <div className="col-4 card p-4 mx-auto">
        <h5 className="card-title bg-light text-center">Withdrawl Form</h5>
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
  );
}
