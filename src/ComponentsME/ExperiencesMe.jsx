import { useContext, useState } from "react";
import { ExperienceContext } from "../Context/ContextExperiences";
import UserExperiencesList from "../ComponentsUSER/UserExperiencesList";
import AddExperience from "./AddExperience";


function ExperiencesMe({ ID }) {

    const { experience } = useContext(ExperienceContext)

    const [showForm, setShowForm] = useState(false)

    function formPersonalInfo() {
        setShowForm(true)
    }

    return (
        <>
            <div className="card mb-3">
                <div className="card-body">
                    <div className="d-flex justify-content-between">
                        <div>
                            <h5 className="card-title fs-4 mb-4">Esperienza</h5>
                        </div>

                        <div>
                            <button style={{ border: 'none', backgroundColor: 'transparent', marginRight: '23px' }} onClick={formPersonalInfo}>
                                <img src="/assets/add_nhw0l64rpxnm_16.png" alt="addExperience" width={'23px'} height={'23px'} />
                            </button>
                            <button style={{ border: 'none', backgroundColor: 'transparent', marginTop: '-90px' }}>
                                <img src="/assets/pencil_66hhxsx5gxuf_16.png" alt="Modifica informazioni personali" style={{ width: '23px', height: '23px' }} />
                            </button>
                        </div>

                    </div>
                    {
                        experience.length === 0 ? <p>Nessuna esperienza presente</p> :
                            experience.map(experience => (
                                <UserExperiencesList
                                    key={experience._id}
                                    image={experience.image}
                                    role={experience.role}
                                    company={experience.company}
                                    startDate={experience.startDate}
                                    endDate={experience.endDate}
                                    area={experience.area}
                                    description={experience.description} />
                            ))
                    }
                    {
                        <AddExperience
                            ID={ID}
                            show={showForm}
                            onHide={() => setShowForm(false)}
                            saveForm={() => {
                                setShowForm(false)
                            }} />
                    }
                </div>
            </div>
        </>
    )
}

export default ExperiencesMe;