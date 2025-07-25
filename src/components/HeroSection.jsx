
export default function HeroSection () {
  return (
    <div>
      <div className="row py-lg-5">
        <div className="col-lg-6 col-md-8 mx-auto">
          <h1 className="fw-light">Featured Fundraiers Fund</h1>
          <p className="lead text-body-secondary">
            Here is the introduction for our super campaign webpage for supporting families being effected by atrocities. Submit your campaign, know we are on top of it, and come view the status in 24-48 hours.
          </p>
          <div className="d-flex justify-content-center gap-3">
            <Link to="/submission" className="btn btn-primary my-2">
              Submit Campaign
            </Link>
            <Link to="/featured" className="btn btn-secondary my-2">
              View Current Campaigns
            </Link>
          </div>
        </div>{' '}
      </div>
    </div>
  );
}
