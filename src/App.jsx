import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavigationBar from './ComponentsME/NavigationBar'
import Home from './Pages/Home'
import UserProfile from './Pages/UserProfile'
import { UserSingleProfileProvider } from './Context/ContextSingleUserProfile'

function App() {

  return (
    <BrowserRouter>
      <NavigationBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='userProfile/:ID' element={
          <UserSingleProfileProvider>
            <UserProfile />
          </UserSingleProfileProvider>
        } />
      </Routes>
    </BrowserRouter>
  )
}

export default App