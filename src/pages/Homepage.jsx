import FeatureStats from '../components/FeatureStats';
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
    <section className="container-xl pb-5 my-5 text-center"> 
    <FeatureStats />
    </section>
    </div>
  );
}

export default Homepage;
