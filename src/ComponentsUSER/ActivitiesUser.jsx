import { Button } from "react-bootstrap";

function ActivitiesUser() {
    return (
        <div className="card mb-3">
            <div className="card-body">
                <div className="d-flex justify-content-between">
                    <h5 className="card-title fs-4 mb-4">Attività</h5>
                    <Button className="fw-bold bg-white" style={{ borderRadius: '25px', color: 'blue', width: '80px' }}>
                        Segui
                    </Button>
                </div>
                <div className="d-flex mb-3 responsiveButtons mt-4">
                    <Button className="fw-bold" style={{ borderRadius: '25px', marginRight: '15px', color: 'white', backgroundColor: 'green' }}>
                        Post
                    </Button>
                    <Button className="fw-bold bg-white" style={{ borderRadius: '25px', marginRight: '15px', color: 'grey', borderColor: 'grey' }}>
                        Commenti
                    </Button>
                    <Button className="fw-bold bg-white" style={{ borderRadius: '25px', marginRight: '15px', color: 'grey', borderColor: 'grey' }}>
                        Video
                    </Button>
                    <Button className="fw-bold bg-white" style={{ borderRadius: '25px', marginRight: '15px', color: 'grey', borderColor: 'grey' }}>
                        Immagini
                    </Button>
                    <Button className="fw-bold bg-white" style={{ borderRadius: '25px', marginRight: '15px', color: 'grey', borderColor: 'grey' }}>
                        Documenti
                    </Button>
                </div>
            </div>
            <div className="card-footer d-flex align-items-center gap-1 justify-content-center">
                <span className="fs-5 fw-bold text-secondary" style={{ cursor: 'pointer' }}>Mostra tutti i post</span>
                <img src="/assets/arrow_i5vrkrye23oy_16.png" alt="showAnalisi" width={'16px'} height={'16px'} />
            </div>
        </div>
    )
}

export default ActivitiesUser;