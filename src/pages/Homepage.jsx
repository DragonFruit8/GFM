import CollectiveDonation from '../components/CollectiveDonation';
import Header from '../components/Header';

function Homepage () {
  return (
    <div>
      <Header 
      title={'Collective Network'}
      description={'Currently, there is a famine that has been declared for citizens of Palestine. Here is how you can help!'}
      codeSnippetA={"1) Submit a family's GoFundMe Page"}
      codeSnippetB={'2) Raise awarness on the featured family'}
      codeSnippetC={'3) Let more people know about #collectiveNetwork'}
      ctaTextA={'Submit Campaign'}
      ctaTextB={'View Featured Family'}
      ctaALink={'/submission'}
      ctaBLink={'/featured'}
       />
       <CollectiveDonation />
    </div>
  );
}

export default Homepage;
