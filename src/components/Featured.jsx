import family from '../../family.json';

function Featured () {
  const data = family[0].widget
  return (
      <div className="container py-5">
        <div className="col-md-4" />
        <iframe
          className="container d-flex gfm-embed justify-content-center"
          loading="lazy"
          src={data}
        />
        <script src="https://www.gofundme.com/static/js/embed.js" />
      </div>
  );
}

export default Featured;
