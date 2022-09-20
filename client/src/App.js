import { Routes, Route } from 'react-router-dom';
import Home from './components/shared/home/Home';
import Nomatch from './components/shared/Nomatch';
import MainNavbar from './components/shared/MainNavbar';
import Footer from './components/shared/Footer';

const App = () => (
  <>
    <MainNavbar />
    <Routes>
      <Route path='/' element={ <Home /> } />
      <Route path='/*' element={ <Nomatch /> } />
    </Routes>
    <Footer />
  </>
)

export default App;