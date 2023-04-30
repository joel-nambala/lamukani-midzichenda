import motheranddaughter from '../img/motheranddaughter.jpg';
import disabledstudentinlibrary1 from '../img/disabledstudentinlibrary1.jpg';
import elderlycare from '../img/elderlycare.jpg';
import homeless from '../img/homeless.jpg';
import failure from '../img/failure.jpg';
import halima from '../img/halima.jpg';
import wamalwa from '../img/wamalwa.jpg';
import kimani from '../img/kimani.jpg';
import cooper from '../img/cooper.jpg';

const Home = function () {
  return (
    <>
      <div className="home">
        <div className="container">
          <h1 className="home-heading">
            <span className="home-main-heading">Together</span>
            <span className="home-sub-heading">We can make life better</span>
          </h1>
          <p className="home-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut vero
            voluptates facilis non repellendus. Eveniet sapiente quidem culpa
            rerum blanditiis.
          </p>
          <a href="/donate" className="btn btn-home">
            Donate now
          </a>
        </div>
      </div>
      <section className="about">
        <div className="container">
          <div className="about-cards">
            <div className="card">
              <i className="fa-solid fa-medal card-icon"></i>
              <h2 className="card-title">Missions</h2>
              <p className="card-text">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Dignissimos et vel error ipsam at? Consectetur aspernatur
              </p>
              <div className="btn-container">
                <a href="/features" className="btn card-btn">
                  Read More
                </a>
              </div>
            </div>
            <div className="card">
              <i className="fa-solid fa-users card-icon"></i>
              <h2 className="card-title">Events</h2>
              <p className="card-text">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Dignissimos et vel error ipsam at? Consectetur aspernatur
              </p>
              <div className="btn-container">
                <a href="/features" className="btn card-btn">
                  Read More
                </a>
              </div>
            </div>
            <div className="card">
              <i className="fa-solid fa-headphones card-icon"></i>
              <h2 className="card-title">Support</h2>
              <p className="card-text">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Dignissimos et vel error ipsam at? Consectetur aspernatur
              </p>
              <div className="btn-container">
                <a href="/features" className="btn card-btn">
                  Read More
                </a>
              </div>
            </div>
            <div className="card">
              <i className="fa-solid fa-user-plus card-icon"></i>
              <h2 className="card-title">Volunteer</h2>
              <p className="card-text">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Dignissimos et vel error ipsam at? Consectetur aspernatur
              </p>
              <div className="btn-container">
                <a href="/features" className="btn card-btn">
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div className="sponsor-child">
            <div className="sponsor-img-box">
              <img
                src={motheranddaughter}
                alt="Mother and daughter"
                className="sponsor-img"
              />
            </div>
            <div className="sponsor-content">
              <h2 className="sponsor-title">Sponsor an orphan child</h2>
              <p className="sponsor-paragraph">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
                corporis, animi voluptatem exercitationem nam sunt. Perferendis,
                ea! Officia, voluptas temporibus incidunt, accusantium impedit
                expedita ipsum voluptate animi, omnis aperiam optio.
              </p>
              <a href="/donate" className="btn sponsor-btn">
                Donate now
              </a>
            </div>
            <div className="sponsor-statistics">
              <p className="stat-percentage">74%</p>
              <p className="stat-label">Donated</p>
            </div>
          </div>
        </div>
      </section>
      <section className="cause">
        <div className="container">
          <h2 className="cause-title">Cause List</h2>
          <div className="cause-cards">
            <div className="cause-card">
              <img src={failure} alt="Facing a failure" className="cause-img" />
              <h2 className="cause-header">Against unemployment</h2>
              <p className="cause-text">
                Volunteering is generally considered an altruistic activity and
                is intended to promote goodness or improve human quality of
                life.
              </p>
            </div>
            <div className="cause-card">
              <img
                src={elderlycare}
                alt="Elderly in a nursing home"
                className="cause-img"
              />
              <h2 className="cause-header">Proper elderly care</h2>
              <p className="cause-text">
                Volunteering is generally considered an altruistic activity and
                is intended to promote goodness or improve human quality of
                life.
              </p>
            </div>
            <div className="cause-card">
              <img
                src={disabledstudentinlibrary1}
                alt="Disabled student in library"
                className="cause-img"
              />
              <h2 className="cause-header">Special education opportunities</h2>
              <p className="cause-text">
                Volunteering is generally considered an altruistic activity and
                is intended to promote goodness or improve human quality of
                life.
              </p>
            </div>
            <div className="cause-card">
              <img src={homeless} alt="Homeless child" className="cause-img" />
              <h2 className="cause-header">Child protection program</h2>
              <p className="cause-text">
                Volunteering is generally considered an altruistic activity and
                is intended to promote goodness or improve human quality of
                life.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="cta">
        <div className="container">
          <div className="cta-container">
            <div className="cta-img"></div>
            <div className="cta-content">
              <h2 className="cta-title">
                No one has ever become poor by giving
              </h2>
              <p className="cta-text">
                Lorem ipsum dolor sit amet, consectetur cing elit. Suspe ndisse
                suscipit sagittis leo sit met condimentum estibulum dignissim
                posuere cubilia Curae; Suspendisse at consectetur massa.
                Curabitur non ipsum nisinec dapibus elit. Donec nec magna id
                lacus consequat posuere. Aenean ut diam vitae ante interdum
                interdum ut sit amet metus.
              </p>
              <a href="/donate" className="btn cta-btn">
                Donate now
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="donators">
        <div className="container">
          <div className="donator">
            <h2 className="donator-heading">Our Donators</h2>
            <div className="donator-cards">
              <div className="donator-card">
                <img
                  src={wamalwa}
                  alt="Moses Wamalwa"
                  className="donator-img"
                />
                <div className="donator-details">
                  <h3 className="donator-name">Moses Wamalwa</h3>
                  <p className="donator-program">
                    <a
                      href="/support-military-families"
                      className="donator-link"
                    >
                      Support military families
                    </a>
                  </p>
                  <div className="donator-labels">
                    <span className="donator-label">Donated</span>
                    <span className="donator-cash">$5400</span>
                  </div>
                </div>
              </div>
              <div className="donator-card">
                <img src={halima} alt="Halima Juma" className="donator-img" />
                <div className="donator-details">
                  <h3 className="donator-name">Halima Juma</h3>
                  <p className="donator-program">
                    <a href="/family-support-program" className="donator-link">
                      Family support program
                    </a>
                  </p>
                  <div className="donator-labels">
                    <span className="donator-label">Donated</span>
                    <span className="donator-cash">$7800</span>
                  </div>
                </div>
              </div>
              <div className="donator-card">
                <img src={kimani} alt="John Kimani" className="donator-img" />
                <div className="donator-details">
                  <h3 className="donator-name">John Kimani</h3>
                  <p className="donator-program">
                    <a href="/sponsor-orphan-child" className="donator-link">
                      Sponsor an orphan child
                    </a>
                  </p>
                  <div className="donator-labels">
                    <span className="donator-label">Donated</span>
                    <span className="donator-cash">$1350</span>
                  </div>
                </div>
              </div>
              <div className="donator-card">
                <img src={cooper} alt="Mary Cooper" className="donator-img" />
                <div className="donator-details">
                  <h3 className="donator-name">Mary Cooper</h3>
                  <p className="donator-program">
                    <a
                      href="/child-protection-program"
                      className="donator-link"
                    >
                      Child protection prgram
                    </a>
                  </p>
                  <div className="donator-labels">
                    <span className="donator-label">Donated</span>
                    <span className="donator-cash">$8000</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
