import Header from '../components/Header';
function FormSubmission () {
  return (
    <div>
      <Header
        title={'Family Campaign Submit'}
        description={
          'Please fill out the form below about the family you wish to raise awareness for.'
        }
        // codeSnippetA={"1) Submit a family's GoFundMe Page"}
        // codeSnippetB={'2) Raise awarness on the featured family'}
        // codeSnippetC={'3) Let more people know about #collectiveNetwork'}
        // ctaTextA={'Submit Campaign'}
        // ctaTextB={'View Featured Family'}
        // ctaALink={'/submission'}
        // ctaBLink={'/featured'}
      />
      <iframe
        class="airtable-embed"
        src="https://airtable.com/embed/app2EnT4mFuanmfyF/pagsu3F1L3N1XtZnw/form"
        frameborder="0"
        onmousewheel=""
        width="100%"
        height="800"
      />
    </div>
  );
}

export default FormSubmission;
