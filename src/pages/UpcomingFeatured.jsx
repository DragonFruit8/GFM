import family from '../../family.json';
import Airtable from '../components/Airtable';

function UpcomingFeatured () {
  const formatterUSD = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

  return (
    <>
    <div className="container">
    <Airtable />
    </div>
      
      <div className="container d-flex flex-wrap gap-4">
        {family.map ((item, index) => (
          <div className="card">
            <div key={index} className="card-body d-flex-col justify-content-center align-items-center">
              <p className='fs-4'>{item.family_Name}</p>
              <p>{formatterUSD.format(item.raised)}</p>
              <p className="lead font-bold">{formatterUSD.format(item.goal)}</p>
              <p>{(item.raised/item.goal).toFixed(2) * 100}% <span>Complete</span></p>
              <div class="d-flex gap-3">
                  <a className='btn btn-success' href={item.donation_Link} target='_BLANK'>Donate</a>
                  <a className='btn btn-primary' href={item.direct_Link} target='_BLANK'>Share</a>
              </div>
            </div>
          </div>
        ))}
      </div>
      </>
  );
}

export default UpcomingFeatured;
