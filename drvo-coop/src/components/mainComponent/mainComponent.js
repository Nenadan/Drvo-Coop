import react from 'react'
import '../mainComponent/mainComponent.css';
import banner from '../../assets/baner.png'


function MainComponent (){



    return (
        <div className="main">
            <div>
                <img src={banner} className="banner-image" width="500px"></img>
            </div>
            
            <button className="we-are"><a href="#about" className="anchor-link">Mi smo Drvo-Coop!</a></button>

        </div>
    )
}

export default MainComponent