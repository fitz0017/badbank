export default function Home() {
  return (
    <div className="card mx-auto">
      <h2 className="card-header text-center text-dark p-4">Bad Bank</h2>
      <div className="container col-4">
        <img src="bank.png" className="img-fluid p-2" alt="Responsive image" />
      </div>
      <p className="card-text p-3 text-center text-dark">
        Thank you for visiting to Bad Bank.
      </p>
      <hr />
      <p className="text-center">
        This site is an insecure react frontend, meant to demostrate features
        and functionality. Hover above the icons in the navigation menu to see
        what's available.
      </p>
    </div>
  );
}
