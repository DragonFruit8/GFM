import { useEffect } from 'react'

const current =
  'https://www.gofundme.com/f/support-our-struggle-for-food-water-survival/widget/large?sharesheet=undefined&attribution_id=sl:1d6695db-d20a-4828-b77e-e1946ea248bc';

function Featured () {
  useEffect(() => {
    // You can add any side effects here if needed
  }, []);

  return (
    <div className="container">
      <div className="gfm-embed" data-url={current} />
    </div>
  );
}

export default Featured;
