import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import Campaignpage from './pages/Campaignpage';
import FormSubmission from './pages/FormSubmission';
import ResourceList from './pages/ResourceList';
import ResourceComponent from './components/ResourceComponent'



function App() {

  return (
    <>
          <Navbar />
          <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/featured' element={<Campaignpage />} />
          <Route path='/submission' element={<FormSubmission />} />
          <Route path='/resources' element={<ResourceList />} >
            <Route path='/resources/diy' element={<ResourceComponent />} />
          </Route>

          </Routes>
    </>
  )
}

export default App
