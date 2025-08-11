import { useContext } from "react";
import { UsersProfileContext } from "../Context/ContextUsersProfile";
import SingleUserProfile from "./SingleUserProfile";
import LoadingSpinner from "./LoadingSpinner";

function UsersProfile({ isMyProfile }) {

    const { usersProfile, loading } = useContext(UsersProfileContext)

    return (
        <>
            {
                loading ? <LoadingSpinner /> :
                    <div className="card">
                        <div className="card-body">
                            {
                                isMyProfile ?
                                    <>
                                        <h5 className="card-title fs-5 mb-0">Profili consigliati</h5>
                                        <div className="d-flex align-items-center gap-1">
                                            <img src="/assets/eye_yrc08c14b4yo_16.png" alt="forYou" width={'20px'} height={'20px'} />
                                            <p className="card-text"><small className="text-body-secondary">Solo per te</small></p>
                                        </div>
                                    </> :
                                    <>
                                        <h5 className="card-title fs-5 mb-2">Altri profili per te</h5>
                                        <div className="d-flex align-items-center gap-1">
                                        </div>
                                    </>
                            }
                            {
                                usersProfile.slice(5, 13).map(user => (
                                    <SingleUserProfile
                                        key={user._id}
                                        ID={user._id}
                                        name={user.name}
                                        surname={user.surname}
                                        image={user.image}
                                        title={user.title} />
                                ))
                            }
                        </div>

                    </div>

            }
        </>
    )
}

export default UsersProfile;