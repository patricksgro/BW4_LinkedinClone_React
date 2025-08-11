function SezioneAnalisiMe() {
    return (
        <div className="card mb-3">
            <div className="card-body">
                <h5 className="card-title fs-4">Analisi</h5>
                <div className="d-flex align-items-center gap-1">
                    <img src="/assets/eye_yrc08c14b4yo_16.png" alt="forYou" width={'20px'} height={'20px'} />
                    <p className="card-text"><small className="text-body-secondary">Solo per te</small></p>
                </div>
                <div className="d-flex my-3 gap-3">
                    <div className="d-flex gap-1" style={{ cursor: 'pointer' }}>
                        <div>
                            <img src="/assets/people_b8iuxovnpoun_16.png" alt="people" width={'25px'} height={'25px'} />
                        </div>

                        <div>
                            <span className="fw-bold">6 Visualizzazioni del profilo</span>
                            <p>Scopri chi ha visitato il tuo profilo</p>
                        </div>
                    </div>

                    <div className="d-flex gap-1" style={{ cursor: 'pointer' }}>
                        <div>
                            <img src="/assets/growth_bfkztcgkw0wl_16.png" alt="growth" width={'25px'} height={'25px'} />
                        </div>

                        <div>
                            <span className="fw-bold">0 impressioni del post</span>
                            <p className=" my-0">Crea un post per aumentare l'interesse</p>
                            <p className="card-text"><small className="text-body-secondary">Ultimi 7 giorni</small></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card-footer d-flex align-items-center gap-1 justify-content-center">
                <span className="fs-5 fw-bold text-secondary" style={{ cursor: 'pointer' }}>Mostra tutte le analisi</span>
                <img src="/assets/arrow_i5vrkrye23oy_16.png" alt="showAnalisi" width={'16px'} height={'16px'} />
            </div>
        </div>
    )
}

export default SezioneAnalisiMe;