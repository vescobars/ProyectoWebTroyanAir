import Profile from "./profile";

const ProfilesCard = ({users, title, setSelectedUser}) => {

    return(
        <div className="yellow-card p-1">
            <h2 className="fw-bold ml-2 mt-3">{title}</h2>
            <div className="row pl-4 row-cols-2 row-cols-sm-2 row-cols-lg-3 g-0">
                {users.map((user)=>
                    <Profile key={user.name} isCard={false} user={user} setSelectedUser={setSelectedUser}/>
                )}
            </div>
        </div>
    )
}
export default ProfilesCard
