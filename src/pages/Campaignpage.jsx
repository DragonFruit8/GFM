import { Link } from 'react-router-dom';
import Featured from "../components/Featured";
import PastCampaigns from "../components/PastCampaigns";
import FeatureStats from '../components/FeatureStats';

function Campaignpage () {
  return (
    <>
    <div className="container">
      <FeatureStats />
    <div className="p-2 p-md-5 my-5 rounded text-body-emphasis bg-body-secondary"> 
    <div className="col-lg-6 px-0"> 
    <h2 className="display-5 pb-3 fst-italic">Feature a Fundraising Campaign</h2> 
    <p className="lead my-3"></p> 
    <div className="d-flex justify-content-center">
    <Link to={'/submission'} className="btn btn-primary text-light fw-bold">Submit a Family</Link></div> </div> </div>
      <div className="col-lg">
      <Featured />
      <PastCampaigns />
      </div>
    </div>
    </>
  );
}

export default Campaignpage;
