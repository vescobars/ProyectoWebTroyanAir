import Profile from "./profile";
import "./ProfileDetail.css"
import {forwardRef} from "react";
const ProfileDetail = forwardRef(({user, setSelectedUser, detailRef}, ref) => {

    return(
        <div className="yellow-card p-1 profile-detail" ref={ref}>
            <i className="bi bi-x-lg float-end m-2 mr-3" onClick={()=>setSelectedUser(null)}></i>
            <img className="pt-4 pb-3 listContentImage" src="/resources/image-example.webp" alt=""/>
            <h2 className="fw-bold text-center w-100">{user.name}</h2>
            <h6 className="subtitle text-center">Rol</h6>

            <h3>Callsigns</h3>
            <ul>
                {user.callsigns && user.callsigns.map((callsign)=>
                    <li key={callsign}>{callsign}</li>
                )}
            </ul>
        </div>
    )
})

export default ProfileDetail
