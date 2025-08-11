import { useContext } from "react";
import { UserSingleProfileContext } from "../Context/ContextSingleUserProfile";
import LoadingSpinner from "../ComponentsME/LoadingSpinner";


function InfoUser() {

    const { singleUserProfile, loading } = useContext(UserSingleProfileContext)

    return (
        <>
            {
                loading ? <LoadingSpinner /> :
                    <div className="card mb-3">
                        <div className="card-body">
                            <h5 className="card-title fs-4">Informazioni</h5>
                            <p className="card-text">{singleUserProfile.bio}</p>
                        </div>
                    </div>
            }
        </>
    )
}

export default InfoUser;