import { Link } from 'react-router-dom';

function Navbar () {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Collective Network</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0 ms-auto me-auto">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to='/submission'>
                Submission
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/featured'>Featured Campaign</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link disabled" aria-disabled="true" to={'/'}>
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
