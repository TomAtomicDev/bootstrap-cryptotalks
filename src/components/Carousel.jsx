import {Component} from 'react';
import hawaii from '../assets/hawaii.jpg';
import hawaii2 from '../assets/hawaii2.jpg';
import hawaii3 from '../assets/hawaii3.jpeg';
import '../styles/Carousel.css';

class Carousel extends Component {
    render() {
        return (
          <div id="carousel" className="carousel slide carousel-fade" data-ride="carousel" data-pause="false">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img className="d-block w-100" src={hawaii} alt="Hawaii 1" />
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src={hawaii2} alt="Hawaii 2" />
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src={hawaii3} alt="Hawaii 3" />
              </div>
              <div className="overlay">
                <div className="container">
                  <div className="row align-items-center">
                    <div className="col-md-6 offset-md-6 text-center text-md-right">
                      <h1>Crypto Talks Hawaii 2023</h1>
                      <p className="d-none d-md-block">
                        Crypto Talks Conf llega por pimera vez a Hawaii! Un evento para
                        compartir con nuestra comunidad el conocimiento y experiencia
                        de los expertos que están creando el futuro de internet.
                        Ven a conocer a miembros del Team Crypto, a otros
                        estudiantes de Crypto y a los oradores de primer nivel
                        que tenemos para ti. Te esperamos!
                      </p>
                      <a href="#" className="btn btn-outline-light" data-toggle="modal">Quiero ser orador</a>
                      <button type="button" className="btn btn-platzi" data-toggle="modal" data-target="#modalCompra">Comprar tickets</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        )
    }
}

export default Carousel;