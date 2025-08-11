import { useContext } from "react";
import { UserSingleProfileContext } from "../Context/ContextSingleUserProfile";
import LoadingSpinner from "../ComponentsME/LoadingSpinner";
import { Button } from "react-bootstrap";


function HeaderUser() {

    const { singleUserProfile, loading } = useContext(UserSingleProfileContext)

    return (
        <>
            {
                loading ? <LoadingSpinner /> :
                    <div className="card mb-3">
                        <img src={'https://images.unsplash.com/photo-1506765515384-028b60a970df?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} className="card-img-top" style={{ height: '240px' }}></img>
                        <img src={singleUserProfile.image} alt="profilePicture" width={'150rem'} height={'150rem'} style={{ borderRadius: '50%', border: 'solid 5px white', marginTop: '-100px', marginLeft: '65px' }} />
                        <div className="card-body">
                            <div className="d-flex justify-content-between align-items-center">
                                <h5 className="card-title fs-2">{singleUserProfile.name} {singleUserProfile.surname}</h5>
                                <button style={{ border: 'none', backgroundColor: 'transparent', marginTop: '-90px' }}  >
                                    <img src='/assets/bell_73c3s6vh1827_16.png' alt="Attiva notifiche" style={{ width: '23px', height: '23px' }} />
                                </button>
                            </div>
                            <p className="card-text my-1">{singleUserProfile.title}</p>
                            <p className="card-text my-1"><small className="text-body-secondary">{singleUserProfile.area} * <span style={{ color: 'blue', textDecoration: 'underline', cursor: 'pointer' }}>Informazioni di contatto</span></small></p>
                            <p><span style={{ color: 'blue', textDecoration: 'underline', cursor: 'pointer' }}>7 Collegamenti</span></p>
                            <div className="d-flex responsiveButtons">
                                <Button className="fw-bold" style={{ borderRadius: '25px', marginRight: '15px' }}>
                                    Messaggio
                                </Button>
                                <Button className="fw-bold bg-white" style={{ borderRadius: '25px', marginRight: '15px', color: 'blue' }}>
                                    Segui
                                </Button>
                                <Button className="fw-bold bg-white" style={{ borderRadius: '25px', marginRight: '15px', color: 'blue' }}>
                                    Visita il mio sito web
                                </Button>
                                <Button className="fw-bold bg-white" style={{ borderRadius: '25px', marginRight: '15px', color: 'grey', borderColor: 'grey' }}>
                                    Altro
                                </Button>
                            </div>
                        </div>
                    </div>
            }
        </>
    )
}

export default HeaderUser;