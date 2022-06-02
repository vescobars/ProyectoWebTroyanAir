import "./ProfileDetail.css"
import {forwardRef} from "react";
import Carousel from 'react-bootstrap/Carousel'

const ProfileDetail = forwardRef(({user, setSelectedUser, detailRef}, ref) => {

    const history = user.flightHistory

    return(
        <div className="yellow-card p-1 profile-detail" ref={ref}>
            <i className="bi bi-x-lg float-end m-2 mr-3" onClick={()=>setSelectedUser(null)}></i>
            <img className="pt-4 pb-3 listContentImage" src={user.profilePicture} alt="Image"/>
            <h2 className="fw-bold text-center w-100">{user.name}</h2>
            <h6 className="subtitle text-center">({user.categoria})</h6>
            <h5 className="subtitle text-center">{user.knownFor}</h5>
            

            <h3>Callsigns</h3>
            <ul>
                {user.callsigns && user.callsigns.map((callsign)=>
                    <li key={callsign}>{callsign}</li>
                )}
            </ul>

            <h3>Registros</h3>
            <ul>
                {user.reg && user.reg.map((reg)=>
                    <li key={reg}>{reg}</li>
                )}
            </ul>

            <h3>Modelos de Avion</h3>
            <ul>
                {user.planeModel.map((planeModel)=>
                    <li key={planeModel}>{planeModel}</li>
                )}
            </ul>

            <h3>Valor estimado aviones</h3>
            <p>
                {user.estimatedValue}
            </p>

            <h3>¿Quien es?</h3>
            <p>
                {user.description}
            </p>
            <p>
                <a href={user.wikipage}>Learn more...</a>
            </p>

            <h3>Live Tracking</h3>
            <div class="iframe-container">
                <iframe class="responsive-iframe"  src={user.adbsExchangeLinks} allowfullscreen></iframe>
            </div>

            
            
            <h3 id="topPad" >Vuelos mas recientes</h3>
            {user.flightHistory.slice(0,4).map((data)=>{
                return(
                    <div>
                        <p>{data.index}</p>
                        <p>Callsign: {data.callsign}</p>
                        <p>First Seen: {timeConverter(data.firstSeen)}</p>
                        <p>Departure Airport: {checkIfNull(data.estDepartureAirport)}</p>
                        <p>Last Seen: {timeConverter(data.lastSeen)}</p>
                        <p>Arrival Airport: {checkIfNull(data.estArrivalAirport)}</p>
                        <p>Flight Duration: {durationConverter(data.firstSeen,data.lastSeen)} min</p>
                        <hr></hr>
                    </div>
                );
                }
            )}


            <h3>Gallery</h3>
                <div id ="carouselItem">
                    <Carousel>
                    {user.images.map((images)=>
                        <Carousel.Item>
                        <img className="d-block w-100" src={images}/>
                        </Carousel.Item>
                    )}
                    </Carousel>
                </div>

            
        </div>
    )
})

//Me robe esta funcion de stack para convertir de unix time a un formato de tiempo normal
function timeConverter(UNIX_timestamp){
    var a = new Date(UNIX_timestamp * 1000);
    var year = a.getFullYear();
    var month = a.getMonth();
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();
    var time = date + '/' + month + '/' + year + ' ' + hour + ':' + min + ':' + sec ;
    return time;
}

//toma dos tiempos en unix time y retorna la diferencia en minutos
function durationConverter(startUnixTime,endUnixTime){
    let startTime = new Date(startUnixTime * 1000);
    let endTime = new Date(endUnixTime * 1000);
    let differenceMin = Math.round((endTime.getTime() - startTime.getTime())/60000);
    return differenceMin;
}

//revisa si es null, si lo es returna unknown, si no retorna el valor original en string
function checkIfNull(valor){
    if(valor == null){
        return "Unknown";
    }
    return valor;
}

export default ProfileDetail
