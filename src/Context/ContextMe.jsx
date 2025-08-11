import { createContext, useState, useEffect } from 'react'

export const MeContext = createContext()

export function MeProvider({ children }) {

    const token = import.meta.env.VITE_API_TOKEN

    const [personalProfile, setPersonalProfile] = useState([])
    const [loading, setLoading] = useState(true)

    function fetchPersonalProfile() {
        setLoading(true)
        fetch('https://striveschool-api.herokuapp.com/api/profile/me', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setPersonalProfile(data)
            })
            .catch(error => console.log(error))
            .finally(() => setLoading(false))
    }


    useEffect(() => {
        fetchPersonalProfile()
    }, [])



    return (
        <MeContext.Provider value={{ personalProfile, loading, fetchPersonalProfile }}>
            {children}
        </MeContext.Provider>
    )
}
