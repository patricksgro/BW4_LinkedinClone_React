import 'bootstrap/dist/css/bootstrap.min.css';
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { MeProvider } from './Context/ContextMe.jsx'
import { UsersProfileProvider } from './Context/ContextUsersProfile.jsx'

createRoot(document.getElementById('root')).render(
  <MeProvider>
    <UsersProfileProvider>
      <App />
    </UsersProfileProvider>
  </MeProvider>
)
