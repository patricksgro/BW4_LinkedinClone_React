function UserExperiencesList({ image, role, company, startDate, endDate, area, description }) {
    return (
        <>
            <div className="d-flex">
                <div>
                    <img src={image} className="card-img-top" style={{ height: '50px', width: '50px' }}></img>
                </div>
                <div className="card-body">
                    <h5 className="card-title fs-5 mb-1">{role}</h5>
                    <p className="card-text my-1">{company}</p>
                    <p className="card-text my-1"><small className="text-body-secondary">{startDate}  - {endDate === null ? 'Ancora in corso' : endDate}</small></p>
                    <p className="card-text my-1"><small className="text-body-secondary">{area}</small></p>
                    <p className="card-text">{description}</p>
                </div>

            </div>
            <hr />
        </>
    )
}

export default UserExperiencesList;