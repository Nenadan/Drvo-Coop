import react from 'react';
import '../navigationComponent/navigationComponent.css'


function NavigationComponent() {


    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-warning">
            <a className="navbar-brand" href="#">Drvo-Coop</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <ul class="navbar-nav ml-auto">
                <li className="nav-item nav-link active">Početna<span class="sr-only">(current)</span></li>
                <li className="nav-item nav-link">Proizvodi</li>
                <li className="nav-item nav-link"><a href="#about" className="anchor-link">O nama</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default NavigationComponent;