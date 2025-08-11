import { Button } from "react-bootstrap";

function ActivitiesMe() {
    return (
        <div className="card mb-3">
            <div className="card-body">
                <div className="d-flex justify-content-between">
                    <div>
                        <h5 className="card-title fs-4">Attività</h5>
                    </div>

                    <div>
                        <Button className='bg-white' style={{ borderRadius: '25px', color: 'blue', marginRight: '25px' }}>Crea un post</Button>
                        <button style={{ border: 'none', backgroundColor: 'transparent' }}>
                            <img src="/assets/pencil_66hhxsx5gxuf_16.png" alt="editActvities" style={{ width: '23px', height: '23px' }} />
                        </button>
                    </div>
                </div>
                <p><span style={{ color: 'blue', textDecoration: 'underline', cursor: 'pointer' }}>7 Collegamenti</span></p>
                <p className="card-text">Nessuna attività presente al momento</p>
            </div>
        </div>
    )
}

export default ActivitiesMe;