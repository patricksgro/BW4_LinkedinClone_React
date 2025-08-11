import { Link } from "react-router-dom";

function SingleUserProfile({ ID, name, surname, image, title }) {
    return (
        <div className="mb-4 my-2">
            <Link to={`/userProfile/${ID}`} style={{ textDecoration: 'none', color: 'black' }}>
                <div className="d-flex align-items-center gap-2" >
                    <div>
                        <img src={image} alt="" style={{ width: '50px', height: '50px', borderRadius: '50%' }} />
                    </div>

                    <div>
                        <span className="d-block fw-bold">{name} {surname}</span>
                        <span >{title}</span>
                    </div>
                </div>
            </Link>
            <div className="d-flex justify-content-center align-items-center mt-3">
                <button style={{ borderRadius: '20px', width: '120px', padding: '5px', backgroundColor: 'transparent' }}>
                    <img src="/assets/add_user_xknn1gpoubuy_16.png" alt="user" width={'20px'} height={'20px'} />
                    <span className="card-text fw-bold"><small className="text-body-secondary">Collegati</small></span>
                </button>
            </div>
            <hr />
        </div >
    )
}

export default SingleUserProfile;