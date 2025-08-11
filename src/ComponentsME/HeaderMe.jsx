import { useContext, useState } from "react";
import { MeContext } from "../Context/ContextMe";
import LoadingSpinner from "./LoadingSpinner";
import EditPersonalProfile from "./EditPersonalProfile";
import { Button } from "react-bootstrap";
import '../Style/HeaderStyle.css'


function HeaderMe() {

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
                        <img src={'https://images.unsplash.com/photo-1506765515384-028b60a970df?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} className="card-img-top" style={{ height: '240px' }}></img>
                        <img src={personalProfile.image} alt="profilePicture" width={'150rem'} height={'150rem'} style={{ borderRadius: '50%', border: 'solid 5px white', marginTop: '-100px', marginLeft: '65px' }} />
                        <div className="card-body">
                            <div className="d-flex justify-content-between align-items-center">
                                <h5 className="card-title fs-2">{personalProfile.name} {personalProfile.surname}</h5>
                                <button style={{ border: 'none', backgroundColor: 'transparent', marginTop: '-90px' }} onClick={formPersonalInfo} >
                                    <img src="/assets/pencil_66hhxsx5gxuf_16.png" alt="Modifica informazioni personali" style={{ width: '23px', height: '23px' }} />
                                </button>
                            </div>
                            <p className="card-text my-1">{personalProfile.title}</p>
                            <p className="card-text my-1"><small className="text-body-secondary">{personalProfile.area} * <span style={{ color: 'blue', textDecoration: 'underline', cursor: 'pointer' }}>Informazioni di contatto</span></small></p>
                            <p><span style={{ color: 'blue', textDecoration: 'underline', cursor: 'pointer' }}>7 Collegamenti</span></p>
                            <div className="d-flex responsiveButtons">
                                <Button className="fw-bold" style={{ borderRadius: '25px', marginRight: '15px' }}>
                                    Disponibile per
                                </Button>
                                <Button className="fw-bold bg-white" style={{ borderRadius: '25px', marginRight: '15px', color: 'blue' }}>
                                    Aggiungi sezione del profilo
                                </Button>
                                <Button className="fw-bold bg-white" style={{ borderRadius: '25px', marginRight: '15px', color: 'blue' }}>
                                    Migliora profilo
                                </Button>
                                <Button className="fw-bold bg-white" style={{ borderRadius: '25px', marginRight: '15px', color: 'grey', borderColor: 'grey' }}>
                                    Risorse
                                </Button>
                            </div>
                        </div>
                    </div>
            }
            {
                <EditPersonalProfile
                    show={showForm}
                    isBio={false}
                    onHide={() => setShowForm(false)}
                    saveForm={() => {
                        fetchPersonalProfile()
                        setShowForm(false)
                    }} />
            }
        </>
    )
}

export default HeaderMe;