// const current =
//   'https://www.gofundme.com/f/support-our-struggle-for-food-water-survival/widget/large?sharesheet=undefined&attribution_id=sl:1d6695db-d20a-4828-b77e-e1946ea248bc';

function Featured () {
  return (
      <div className="container py-5">
        <div className="col-md-4" />
        <iframe
          className="container d-flex gfm-embed justify-content-center"
          loading="lazy"
          src="https://www.gofundme.com/f/support-our-struggle-for-food-water-survival/widget/large?sharesheet=undefined&attribution_id=sl:1d6695db-d20a-4828-b77e-e1946ea248bc"
        />
        <script src="https://www.gofundme.com/static/js/embed.js" />
      </div>
  );
}

export default Featured;
