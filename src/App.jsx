import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import Campaignpage from './pages/Campaignpage';
import FormSubmission from './pages/FormSubmission';
import ResourcePage from './pages/ResourcePage';
import BlogView from './pages/BlogView';
import WaterStill from './components/Document_Pages/WaterStill';



function App() {

  return (
    <>
          <Navbar />
          <Routes>
          <Route index path='/' element={<Homepage />} />
          <Route path='/featured' element={<Campaignpage />} />
          <Route path='/submission' element={<FormSubmission />} />
          <Route path='/resources' element={<BlogView />}>
          <Route index path='/resources' element={<ResourcePage />} />
          <Route path='/resources/water-still' element={<WaterStill />} />
          </Route>

          </Routes>
    </>
  )
}

export default App
