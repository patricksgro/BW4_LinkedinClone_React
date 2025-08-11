import { createContext, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

export const UserSingleProfileContext = createContext()

export function UserSingleProfileProvider({ children }) {

    const token = import.meta.env.VITE_API_TOKEN

    const { ID } = useParams()
    const [singleUserProfile, setSingleUserProfile] = useState([])
    const [loading, setLoading] = useState(true)

    function fetchSingleUserProfile() {
        setLoading(true)
        fetch(`https://striveschool-api.herokuapp.com/api/profile/${ID}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setSingleUserProfile(data)
            })
            .catch(error => console.log(error))
            .finally(() => setLoading(false))
    }


    useEffect(() => {
        fetchSingleUserProfile()
    }, [ID])

    return (
        <UserSingleProfileContext.Provider value={{ singleUserProfile, loading }}>
            {children}
        </UserSingleProfileContext.Provider>
    );

}
