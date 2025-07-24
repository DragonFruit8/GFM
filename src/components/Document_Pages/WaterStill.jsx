import {Link} from 'react-router-dom';
import Header from '../Header';

function WaterStill () {
  return (
    <div className="d-flex col-md-10 justify-content-center align-items-center">
      <main id="mainContent">
        <div id="returnButton">
          <Link to={'/resources'}>Back</Link>
        </div>
        <Header
          title={'Resource List - Survival Help'}
          description={'DIY Solar Water Still'}
        />
        <div className="pe-5 pb-4">
          <p className="lead fs-4"><strong>DIY Solar Still</strong></p>
          <ol>
            <li>
              <strong>Plastic sheeting (clear or black):&nbsp;</strong>
              This could be obtained from plastic bags, tarps, or other plastic debris.
            </li>
            <li>
              <strong>A container for collecting water:&nbsp;</strong>
              This could be a plastic bottle, a metal can, or any other container that can hold water.
            </li>
            <li>
              <strong>A tube or straw:&nbsp;</strong>
              This could be made from plastic tubing or a length of flexible plastic, such as a water hose.
            </li>
            <li>
              <strong>Rocks or sand:&nbsp;</strong>
              These could be used to anchor the plastic sheeting and create a sloped surface for condensation to collect.
            </li>
            <li>
              <strong>A clean cloth or sponge:&nbsp;</strong>
              This could be used to absorb the condensation and transfer it to the container.
            </li>
          </ol>
          <br />
          <p className="lead fs-4"><strong>Sources</strong></p>
          {/* <ul>
                <li>
                  <a
                    href="https://www.survivopedia.com/diy-solar-water-still/"
                    target="_blank"
                  >
                    DIY Solar Water Still
                  </a>
                </li>
                <li>
                  <a
                    href="https://preparednessmama.com/how-to-make-a-solar-still/"
                    target="_blank"
                  >
                    Preparedness Mama
                  </a>
                </li>
              </ul> */}
          <ol>
            <li>
              <strong>Plastic sheeting:&nbsp;</strong>
              Approximately 4-6 square meters of clear plastic sheeting, or enough to cover the size of the still.
            </li>
            <li>
              <strong>Collection container:&nbsp;</strong>
              A container with a capacity of at least 24-36 cups (6-9 liters) to hold the purified water.
            </li>
            <li>
              <strong>Drinking cups:&nbsp;</strong>
              A cup for each person in the family, or a shared container with measurements marked for each person's daily ration.
            </li>
            <li>
              <strong>Weight:&nbsp;</strong>
              The solar still itself should not require any additional weight, as the water and plastic sheeting should provide enough weight to hold it in place.
            </li>
            <li>
              <strong>Measurements:&nbsp;</strong>
              The size of the still should be large enough to provide adequate surface area for evaporation, but small enough to be manageable. A good rule of thumb is to aim for a still that is about 1-2 meters wide by 2-4 meters long.
            </li>
          </ol>
          <br />
          <p className="lead fs-4"><strong>Fresh Water Purification</strong></p>
          <ol>
            <li>
              <strong>Boiling:&nbsp;</strong>
              One of the most straightforward methods of purifying water is to boil it for several minutes. This can be done using a fire or stove, and can effectively kill harmful bacteria and viruses.
            </li>
            <li>
              <strong>SODIS (Solar Water Disinfection):&nbsp; </strong>
              Similar to the solar still, this method uses sunlight to purify water. Water is placed in clear plastic bottles and exposed to direct sunlight for several hours, which can kill harmful microorganisms.
            </li>
            <li>
              <strong>Filtration using sand and gravel:&nbsp;</strong>
              In addition to using a makeshift filter with sand and charcoal, people in Gaza could also use layers of sand and gravel to filter out impurities from ocean water.
            </li>
            <li>
              <strong>Precipitation:&nbsp;</strong>
              If people have access to salt, they could add it to seawater to cause precipitation of suspended particles and microorganisms. The clear water on top could then be collected and boiled or filtered further.
            </li>
          </ol>
        </div>
      </main>
    </div>
  );
}

export default WaterStill;
