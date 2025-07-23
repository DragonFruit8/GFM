import Header from '../components/Header';
function FormSubmission () {
  return (
    <div>
      <Header
        title={'Family Campaign Submit'}
        description={
          'Please fill out the form below about the family you wish to raise awareness for.'
        }
      />
      <iframe
        className="airtable-embed airtable-form"
        src="https://airtable.com/embed/app2EnT4mFuanmfyF/pagsu3F1L3N1XtZnw/form"
        frameborder="0"
        loading="eager"
        // onmousewheel=""
        width="100%"
        height="800px"
      />
    </div>
  );
}

export default FormSubmission;
