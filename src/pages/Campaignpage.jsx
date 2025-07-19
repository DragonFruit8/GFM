// import {Link} from 'react-router-dom';
import Featured from '../components/Featured';
import PastCampaigns from '../components/PastCampaigns';
import FeatureStats from '../components/FeatureStats';
import Header from '../components/Header';

function Campaignpage () {
  return (
    <div className="container-md">
      <Header
        title={'The Alaaeddin Family'}
        description={
          'Current Goal: Raise $665 for immediate food access!'
        }
        // codeSnippetA={"1) Submit a family's GoFundMe Page"}
        // codeSnippetB={'2) Raise awarness on the featured family'}
        // codeSnippetC={'3) Let more people know about #collectiveNetwork'}
        // ctaTextA={'Submit Campaign'}
        // ctaTextB={'View Featured Family'}
        // ctaALink={}
        // ctaBLink={}
      />
      <div className="col-lg">
        <FeatureStats />
        <Featured />
        <PastCampaigns />
      </div>
    </div>
  );
}

export default Campaignpage;
