import { createContext, useState, useEffect } from 'react'

export const ExperienceContext = createContext()

export function ExperienceProvider({ children, ID }) {
    console.log("ID in ExperienceProvider:", ID)

    const token = import.meta.env.VITE_API_TOKEN

    const [experience, setExperience] = useState([])
    const [loading, setLoading] = useState(true)

    function fetchExperiences() {
        setLoading(true)
        console.log("Chiamo la fetch per ID:", ID)
        fetch(`https://striveschool-api.herokuapp.com/api/profile/${ID}/experiences`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setExperience(data)
            })
            .catch(error => console.log(error))
            .finally(() => setLoading(false))
    }


    useEffect(() => {
        if (ID)
            fetchExperiences()
    }, [ID])



    return (
        <ExperienceContext.Provider value={{ experience, loading, setExperience, fetchExperiences }}>
            {children}
        </ExperienceContext.Provider>
    )
}
