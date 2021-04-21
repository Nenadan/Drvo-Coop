import react from 'react';
import '../navigationComponent/navigationComponent.css'
import {Link} from 'react-router-dom';


function NavigationComponent() {


    return(
        <div className="navigation bg-warning">
            <div className="row">
                <div className="col col-4 navbar-col"><Link to="/" className="navbar-link">Home</Link></div>
                <div className="col col-4 navbar-col"><Link to="/products" className="navbar-link">Products</Link></div>
                <div className="col col-4 navbar-col"><Link to="/about" className="navbar-link">About us</Link></div>
            </div>
        </div>
    )
}

export default NavigationComponent;