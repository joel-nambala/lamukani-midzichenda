import charityWorker from '../img/charity-worker.jpg';
import billy from '../img/billy.jpg';
import emma from '../img/emma-watson.jpg';
import hellen from '../img/hellen-potter.jpg';
import nancie from '../img/nancie-smith.jpg';

const Features = function () {
  return (
    <>
      <section className="about">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <img
                src={charityWorker}
                alt="Charity worker with a couple on the street"
                className="about-img"
              />
            </div>
            <div className="col-6">
              <h2 className="about-title">Who we are</h2>
              <h4 className="about-subtitle">
                We are here not for income, but for outcome
              </h4>
              <p className="about-text">
                Lorem Aenean nec quam efficitur, volutpat felis quis, commodo
                lacus. Morbi feugiat orci vel urna semper, ac tempus nunc
                luctus. Etiam quis placerat purus. Nulla fringilla varius lacus,
                eget eleifend sapien malesuada eget. Phasellus porta magna diam,
                ut accumsan massa semper in. Aliquam elit lectus, tincidunt eget
                vulputate vel, faucibus vitae elit. Donec sit amet quam
                facilisis, hendrerit lacus vitae, commodo dui. Nam consectetur
                ex nibh, id vulputate ex lacinia nec. Suspendisse nisi ante,
                luctus vel vestibulum in, commodo non dui. Suspendisse potenti.
                Nulla euismod lacus elit, vitae malesuada leo varius eu. Nam non
                quam posuere, facilisis augue sit amet, eleifend augue. In quis
                elit quis risus ornare tristique.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="teams">
        <div className="container">
          <div className="team">
            <div className="team-header">
              <h2>Our team</h2>
              <p>This wonderfull people make it all possible</p>
            </div>
            <div className="team-body">
              <div className="team-card">
                <img src={hellen} alt="Team member" />
                <h3 className="team-name">Hellen Porter</h3>
                <p className="team-description">Social Worker</p>
                <p className="team-text">
                  Etiam eu molestie eros, commodo hendrerit sapien.
                </p>
              </div>
              <div className="team-card">
                <img src={nancie} alt="Team member" />
                <h3 className="team-name">Nancie Smith</h3>
                <p className="team-description">Volunteer</p>
                <p className="team-text">
                  Etiam eu molestie eros, commodo hendrerit sapien.
                </p>
              </div>
              <div className="team-card">
                <img src={billy} alt="Team member" />
                <h3 className="team-name">Billy Michigan</h3>
                <p className="team-description">Social Worker</p>
                <p className="team-text">
                  Etiam eu molestie eros, commodo hendrerit sapien.
                </p>
              </div>
              <div className="team-card">
                <img src={emma} alt="Team member" />
                <h3 className="team-name">Emma Watson</h3>
                <p className="team-description">Volunteer</p>
                <p className="team-text">
                  Etiam eu molestie eros, commodo hendrerit sapien.
                </p>
              </div>
            </div>
          </div>
          <div className="btn-team-container">
            <a className="btn btn-team" href="/team">
              See all team
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
