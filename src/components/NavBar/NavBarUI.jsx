import { Link } from "react-router-dom"

export const NavBarUI = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary mb-5">
      <div className="container-fluid">
        <a
          className="navbar-brand"
          href="#"
        >ECOAUDIO</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                href="#"
                to="/login"
              >INICIO</Link>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#"
              >NOSOTROS</a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#"
              >CANALES DE ATENCIÓN</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
