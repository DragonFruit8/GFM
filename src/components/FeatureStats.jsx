

function FeatureStats() {
    const statsMeter = 'https://www.gofundme.com/f/support-our-struggle-for-food-water-survival/stream-goal-bar?locale=en-US&utm_campaign=fp_sharesheet&utm_medium=customer&utm_source=streaming_widget&attribution_id=sl%3A1d6695db-d20a-4828-b77e-e1946ea248bc'
  return (
    <div className='container statsMeter px-3'>
        <iframe className='statsMeter my-3 mx-5' src={statsMeter}>
        </iframe>
    </div>
  )
}

export default FeatureStats