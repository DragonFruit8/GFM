import {Link} from 'react-router-dom';
function Header({
  title,
  description,
  codeSnippetA,
  codeSnippetB,
  codeSnippetC,
  ctaTextA,
  ctaTextB,
  ctaALink,
  ctaBLink,
}) {
  return (
    <div className="container mt-5 pt-5 pb-2">
      <div className="text-center bg-body-tertiary rounded-3">
        <h1 className="text-body-emphasis">{title}</h1>
        <p className="col-lg-8 mx-auto fs-5 text-muted">
          {description}
        </p>
        {codeSnippetA || codeSnippetB || codeSnippetC
          ? <div className={'w-75 ms-auto me-auto text-start py-3 fs-6'}>

              <code>{codeSnippetA} <br /></code>
              <code>{codeSnippetB}<br /> </code>
              <code>{codeSnippetC}</code>
            </div>
          : null}
        {ctaTextA && ctaALink
          ? <div className={'d-flex flex-wrap justify-content-center gap-2 mb-5 flex-wrap'}>
              <Link
                className={
                  ctaALink
                    ? 'd-flex justify-content-center align-content-center btn btn-primary btn-lg px-4 rounded-pill'
                    : ''
                }
                type="button"
                to={ctaALink}
              >
                {ctaTextA}

              </Link>
              <Link
                to={ctaBLink}
                className={
                  ctaBLink
                    ? 'btn btn-outline-secondary btn-lg px-4 rounded-pill'
                    : ''
                }
                type="button"
              >
                {ctaTextB}
              </Link>
            </div>
          : null}
      </div>
    </div>
  );
}

export default Header;
