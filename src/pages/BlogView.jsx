import { Outlet } from 'react-router';
import Sidebar from '../components/Sidebar'

function BlogView() {
  return (
    <div id='content' className='col-md-10'>
    <Sidebar />
    
    <Outlet />
    </div>
  )
}

export default BlogView