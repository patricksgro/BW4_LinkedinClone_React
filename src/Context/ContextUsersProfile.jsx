import { createContext, useState, useEffect } from 'react'

export const UsersProfileContext = createContext()

export function UsersProfileProvider({ children }) {

    const token = import.meta.env.VITE_API_TOKEN

    const [usersProfile, setUsersProfile] = useState([])
    const [loading, setLoading] = useState(true)

    function fetchUsersProfile() {
        setLoading(true)
        fetch('https://striveschool-api.herokuapp.com/api/profile/', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setUsersProfile(data)
            })
            .catch(error => console.log(error))
            .finally(() => setLoading(false))
    }


    useEffect(() => {
        fetchUsersProfile()
    }, [])



    return (
        <UsersProfileContext.Provider value={{ usersProfile, loading }}>
            {children}
        </UsersProfileContext.Provider>
    )
}
