import { useContext } from "react";
import { ExperienceContext } from "../Context/ContextExperiences";
import UserExperiencesList from "./UserExperiencesList";


function ExperiencesUser() {

    const { experience, loading } = useContext(ExperienceContext)

    return (
        <>
            <div className="card mb-3">
                <div className="card-body">
                    <h5 className="card-title fs-4">Esperienza</h5>
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
                </div>
            </div>
        </>
    )
}

export default ExperiencesUser;