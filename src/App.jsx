import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import Campaignpage from './pages/Campaignpage';
import FormSubmission from './pages/FormSubmission';


function App() {

  return (
    <>
          <Navbar />
          <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/featured' element={<Campaignpage />} />
          <Route path='/submission' element={<FormSubmission />} />
          </Routes>
    </>
  )
}

export default App
