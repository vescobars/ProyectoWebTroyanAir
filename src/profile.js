import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlane} from "@fortawesome/free-solid-svg-icons";
import "./profile.css"
import "./App.css"

const Profile = ({isCard, user, setSelectedUser}) => {
    const renderProfileContent = () => {
        return(
            <div className="p-2 " style={{cursor:"pointer"}} onClick={()=>setSelectedUser(user)}>
                <div className="d-flex flex-column-reverse profile">
                    <p className="subtitle p-0 m-0">{user ? user.planeModel: "Rol"}</p>
                    <h5 className="name fw-bold">{user ? user.name : "Nombre Apellido"}</h5>
                    <div className="icon-container position-relative">
                        <img className="p-2 pt-4" src="/resources/image-example.webp" alt=""/>
                        <div className="icon-top d-flex justify-content-between">
                            <FontAwesomeIcon icon={faPlane} className=""/>
                            <p>Categoria</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return(
        <>
            {isCard &&
            <div className="yellow-card h-100">
                {renderProfileContent()}
            </div>
            }
        {!isCard && renderProfileContent()}
        </>
    )
}

export default Profile
