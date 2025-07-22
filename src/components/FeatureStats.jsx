import family from '../../family.json';

function FeatureStats() {
  const data = family[0].stats;
  
  return (
    <div className='statsMeter'>
        <iframe className='statsMeter' src={data}>
        </iframe>
    </div>
  )
}

export default FeatureStats