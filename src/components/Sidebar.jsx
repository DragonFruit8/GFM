import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <aside className="col-md-4 blog-sidebar">
          <div className="p-3 pt-5">
            <p className="font-italic"><strong>Resources</strong></p>
            <ol className="list-unstyled mb-0">
              <li><Link to="/resources/water-still">Water Still</Link></li>
              {/* <li><a href="#">February 2014</a></li>
              <li><a href="#">January 2014</a></li>
              <li><a href="#">December 2013</a></li>
              <li><a href="#">November 2013</a></li>
              <li><a href="#">October 2013</a></li>
              <li><a href="#">September 2013</a></li>
              <li><a href="#">August 2013</a></li>
              <li><a href="#">July 2013</a></li>
              <li><a href="#">June 2013</a></li>
              <li><a href="#">May 2013</a></li>
              <li><a href="#">April 2013</a></li> */}
            </ol>
          </div>

          <div className="p-3">
            <p className="font-italic"><strong>Links</strong></p>
            <ol className="list-unstyled">
              <li><a href="" aria-disabled="true">Other</a></li>
              <li><a href="" aria-disabled="true">Links</a></li>
              <li><a href="" aria-disabled="true">Here</a></li>
            </ol>
          </div>
        </aside>
  )
}

export default Sidebar