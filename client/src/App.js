import { Routes, Route } from 'react-router-dom';
import Home from './components/shared/home/Home';
import Nomatch from './components/shared/Nomatch';
import MainNavbar from './components/shared/MainNavbar';
import Footer from './components/shared/Footer';
import Users from './components/users/Users';
import UserShow from './components/users/UserShow';

const App = () => (
  <>
    <MainNavbar />
    <Routes>
      <Route path='/' element={ <Home /> } />
      <Route path='/users' element={ <Users /> } />
      <Route path='/users/:id' element={ <UserShow /> } />
      <Route path='/*' element={ <Nomatch /> } />
    </Routes>
    <Footer />
  </>
)

export default App;