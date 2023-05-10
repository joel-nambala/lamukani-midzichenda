import charityWorker from '../img/charity-worker.jpg';

const Features = function () {
  return (
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
              lacus. Morbi feugiat orci vel urna semper, ac tempus nunc luctus.
              Etiam quis placerat purus. Nulla fringilla varius lacus, eget
              eleifend sapien malesuada eget. Phasellus porta magna diam, ut
              accumsan massa semper in. Aliquam elit lectus, tincidunt eget
              vulputate vel, faucibus vitae elit. Donec sit amet quam facilisis,
              hendrerit lacus vitae, commodo dui. Nam consectetur ex nibh, id
              vulputate ex lacinia nec. Suspendisse nisi ante, luctus vel
              vestibulum in, commodo non dui. Suspendisse potenti. Nulla euismod
              lacus elit, vitae malesuada leo varius eu. Nam non quam posuere,
              facilisis augue sit amet, eleifend augue. In quis elit quis risus
              ornare tristique.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
