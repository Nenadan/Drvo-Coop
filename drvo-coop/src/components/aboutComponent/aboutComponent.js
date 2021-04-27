import react, { useState } from 'react';
import '../aboutComponent/aboutComponent.css'
import paun1 from '../../assets/paun1.jpg'
import paun2 from '../../assets/paun2.jpg'
import vlade1 from '../../assets/vlade1.jpg'

function AboutComponent(){
    
    const [getData, setData] = useState({
        paun: "paun-info",
        vlade: "vlade-info"
    })


    var hoverOver = () => {
        setData({
            ...getData,
            paun: "paun-info show"
        })
    }
    var hoverOut = () => {
        setData({
            ...getData,
            paun: "paun-info hide"
        })
    }

    var hoverOverVlade = () => {
        setData({
            ...getData,
            vlade: "vlade-info show"
        })
    }
    var hoverOutVlade = () => {
        setData({
            ...getData,
            vlade: "vlade-info hide"
        })
    }

    return(
        <div id="about">
            <div className="paun" onMouseEnter={()=>hoverOver()} onMouseLeave={()=>hoverOut()} >
                <img src={paun1} height="300px"></img>
                <div className={getData.paun}>
                    <p>Paun Nikolic</p>
                    <p>31 godina</p>
                    <p>Telefon: 555/333</p>
                </div>
            </div>
            <div className="vlade" onMouseEnter={hoverOverVlade} onMouseLeave={hoverOutVlade}>
                <img src={vlade1} height="300px"></img>
                <div className={getData.vlade}>
                    <p>Vlade Nikolic</p>
                    <p>31 godina</p>
                    <p>Telefon: 555/333</p>
                </div>
            </div>
            <div className="about-text">
                <p>Vlade i Paun su braća iz sela Dobrače, zaseoka Nikolić, u kome žive sa svojim porodicama i vode firmu VIP Nikolić. Još kao deca, bili su vredni, radni i uključivali su se u poslove svog oca, pa je nastavak poslovanja u drvoprerađivačkoj industriji bio logičan i očekivan sled događaja. Pored obrade drveta i izrade kreveta od bukve raznih boja i dimenzija, Nikolići se bave i otkupom maline. Ne mogu da kažu koji od ova dva posla je unosniji, jer sve uglavnom zavisi od sezone maline i cene, ali jedan posao smenjuje drugi. Za vreme leta više je posla oko malina, dok je u hladnijim mesecima aktivniji posao drvoprerade.</p>
                <p>Vlade i Paun, kako u razgovoru tako i u poslu, razmišljaju isto - jedan drugog dopunjuju i zahvalni su što imaju tu sreću da zajedno teže istim ciljevima, jer mnogo je lakše kad se odgovornost sa nekim podeli, pogotovo sa nekim ko ima iste interese, ko je od poverenja i ko je uvek tu za vas, bez obzira šta se desilo. Kažu da to može samo brat. Ostali članovi porodice Nikolić, takođe su aktivni i po potrebi uključuju se u poslove. Nikolići veruju da je za posao kao sto je njihov važno da budu odgovorni i disciplinovani, uporni, spremni da odgovore na izazove, i smeli da rizikuju.</p>
                <p>Njihovi najveći izazovi u poslovanju jesu često nedostatak sirovine, ali i nedostatak radnika. Teško je voditi preduzeće u seoskoj sredini gde se svi bave poljoprivredom i žive od maline, a malo njih se odluči da iz grad putuje za selo kako bi radili. Za sada imaju šest prijavljenih radnika, a u sezoni i više. Za prodaju njihovih proizvoda važno je da poznanu ljude i da aktivno traže kupce, pa se putem interneta informišu o raznim mogućnostima i trendovima, trudeći se da budu uključeni u tokove i dešavanja koja su od značaja za njihovo poslovanje.Osnovni plan jeste da održe posao na dosadašnjem nivou, kao i konstantnost proizvodnje i potražnje, a kasnije kroz vreme, voleli bi da modernizuju proizvodnju i uvedu nove proizvode.</p>
            </div>
            <div className="location">
                <div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m21!1m12!1m3!1d4853.53798480166!2d20.030578829545497!3d43.67040582586777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m6!3e0!4m0!4m3!3m2!1d43.668900199999996!2d20.0291672!5e0!3m2!1ssr!2srs!4v1619544103301!5m2!1ssr!2srs" width="600" height="450" allowfullscreen="" loading="lazy"></iframe>
                </div>
            </div>
        </div>
    )
}

export default AboutComponent;