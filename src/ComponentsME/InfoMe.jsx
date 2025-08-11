import { useContext } from "react";
import { MeContext } from "../Context/ContextMe";
import LoadingSpinner from "./LoadingSpinner";
import EditPersonalProfile from "./EditPersonalProfile";
import { useState } from "react";


function InfoMe() {

    const { personalProfile, loading, fetchPersonalProfile } = useContext(MeContext)
    const [showForm, setShowForm] = useState(false)

    function formPersonalInfo() {
        setShowForm(true)
    }


    return (
        <>
            {
                loading ? <LoadingSpinner /> :
                    <div className="card mb-3">
                        <div className="card-body">
                            <div className="d-flex justify-content-between align-items-center">
                                <h5 className="card-title fs-4">Informazioni</h5>
                                <button style={{ border: 'none', backgroundColor: 'transparent' }} onClick={formPersonalInfo}>
                                    <img src="/assets/pencil_66hhxsx5gxuf_16.png" alt="Modifica informazioni personali" style={{ width: '23px', height: '23px' }} />
                                </button>
                            </div>
                            <p className="card-text">{personalProfile.bio}</p>
                        </div>
                    </div>
            }
            {
                <EditPersonalProfile
                    show={showForm}
                    isBio={true}
                    onHide={() => setShowForm(false)}
                    saveForm={() => {
                        fetchPersonalProfile()
                        setShowForm(false)
                    }} />
            }
        </>
    )
}

export default InfoMe;