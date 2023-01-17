import React from 'react';
import '../styles/Footer.css';

class Footer extends React.Component {
    render(){
        return (
          <footer class="py-4">
            <div class="container">
              <div class="row text-center align-items-center">
                <div class="col-12 col-lg">
                  <a href="#">Preguntas frecuentes</a>
                </div>
      
                <div class="col-12 col-lg">
                  <a href="#">Contáctanos</a>
                </div>
      
                <div class="col-12 col-lg">
                  <a href="#">Prensa</a>
                </div>
      
                <div class="col-12 col-lg">
                  <a href="#">Conferencias</a>
                </div>
      
                <div class="col-12 col-lg">
                  <a href="#">Terminos y Condiciones</a>
                </div>
      
                <div class="col-12 col-lg">
                  <a href="#">Privacidad</a>
                </div>
              </div>
            </div>
          </footer>
        )
    }
}

export default Footer;