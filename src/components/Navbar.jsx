import React from 'react';
import cryptologo from '../assets/CryptoTalks.png';
import '../styles/Navbar.css';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          <img src={cryptologo} alt="Crypto talks logo" />
          Conf Hawaii 2023
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">Conferencia <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Oradores </a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                Categorías
              </a>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="#">Bitcoin</a>
                <a className="dropdown-item" href="#">Play-to-Earn</a>
                <a className="dropdown-item" href="#">DeFi</a>
                <a className="dropdown-item" href="#">Smart Contracts</a>
                <div className="dropdown-divider" />
                <a className="dropdown-item" href="#">All talks</a>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled">Reserva tu cupo</a>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>
    )
  }
}

export default Navbar ;

