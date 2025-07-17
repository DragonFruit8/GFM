import { Link } from 'react-router-dom';
import Featured from "../components/Featured";
import PastCampaigns from "../components/PastCampaigns";

function Campaignpage () {
  return (
    <>
    <div className="container">
    <div className="p-2 p-md-5 my-5 rounded text-body-emphasis bg-body-secondary"> 
    <div className="col-lg-6 px-0"> <h1 className="display-4 fst-italic">Feature a Fundraising Campaign</h1> 
    <p className="lead my-3"></p> <p className="lead mb-0">
    <Link to={'/submission'} className="btn btn-primary text-light fw-bold">Submit a Family</Link></p> </div> </div>
      <div className="col-lg">
      <Featured />
      <PastCampaigns />
      </div>
    </div>
    
    </>
  );
}

export default Campaignpage;
