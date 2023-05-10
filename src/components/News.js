import newsDisable from '../img/news-disable.jpg';
import momAndSon from '../img/big-siz-with-child.jpg';
import newsCare from '../img/news-care.jpg';
import disabilityAndWork from '../img/disability-and-work.jpg';

const News = function () {
  return (
    <div>
      <section className="news">
        <div className="container news-content">
          <div className="news-hero">
            <main className="news-cards">
              <div className="news-card">
                <img
                  src={newsDisable}
                  alt="Disability is not the end your carrer"
                  className="news-img"
                />
                <div className="news-card-details">
                  <h2 className="news-card-title">
                    Disability is not the end of your career
                  </h2>
                  <div className="news-card-author">
                    <span>
                      On 12<sup>th</sup> April, 2023
                    </span>
                    <span>
                      By <span className="news-color">Joel Nambala</span>
                    </span>
                    <span>In Donations, Events</span>
                  </div>
                  <p className="news-card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    ultrices ipsum non mattis pharetra. Integer laoreet non
                    felis sit amet...
                  </p>
                  <a href="/" className="news-card-link">
                    Read More
                  </a>
                </div>
              </div>
              <div className="news-card">
                <img
                  src={momAndSon}
                  alt="Disability is not the end your carrer"
                  className="news-img"
                />
                <div className="news-card-details">
                  <h2 className="news-card-title">
                    There is Hope for everyone
                  </h2>
                  <div className="news-card-author">
                    <span>
                      On 12<sup>th</sup> April, 2023
                    </span>
                    <span>
                      By <span className="news-color">Joel Nambala</span>
                    </span>
                    <span>In Donations, Events</span>
                  </div>
                  <p className="news-card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    ultrices ipsum non mattis pharetra. Integer laoreet non
                    felis sit amet...
                  </p>
                  <a href="/" className="news-card-link">
                    Read More
                  </a>
                </div>
              </div>
              <div className="news-card">
                <img
                  src={newsCare}
                  alt="Disability is not the end your carrer"
                  className="news-img"
                />
                <div className="news-card-details">
                  <h2 className="news-card-title">
                    Give your love to older people
                  </h2>
                  <div className="news-card-author">
                    <span>
                      On 12<sup>th</sup> April, 2023
                    </span>
                    <span>
                      By <span className="news-color">Joel Nambala</span>
                    </span>
                    <span>In Donations, Events</span>
                  </div>
                  <p className="news-card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    ultrices ipsum non mattis pharetra. Integer laoreet non
                    felis sit amet...
                  </p>
                  <a href="/" className="news-card-link">
                    Read More
                  </a>
                </div>
              </div>
              <div className="news-card">
                <img
                  src={disabilityAndWork}
                  alt="Disability is not the end your carrer"
                  className="news-img"
                />
                <div className="news-card-details">
                  <h2 className="news-card-title">Jobs for disabled people</h2>
                  <div className="news-card-author">
                    <span>
                      On 12<sup>th</sup> April, 2023
                    </span>
                    <span>
                      By <span className="news-color">Joel Nambala</span>
                    </span>
                    <span>In Donations, Events</span>
                  </div>
                  <p className="news-card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    ultrices ipsum non mattis pharetra. Integer laoreet non
                    felis sit amet...
                  </p>
                  <a href="/" className="news-card-link">
                    Read More
                  </a>
                </div>
              </div>
            </main>
          </div>
          <aside className="news-aside">
            <h2 className="news-aside-title">Recent posts</h2>
            <ul className="posts">
              <li className="posts-item">
                <a className="posts-link" href="/">
                  Disability is not the end of your career
                </a>
              </li>
              <li className="posts-item">
                <a className="posts-link" href="/">
                  Disability is not the end of your career
                </a>
              </li>
              <li className="posts-item">
                <a className="posts-link" href="/">
                  There is Hope for everyone
                </a>
              </li>
              <li className="posts-item">
                <a className="posts-link" href="/">
                  Learn more about our Elderly Support Program
                </a>
              </li>
              <li className="posts-item">
                <a className="posts-link" href="/">
                  Jobs for disabled people
                </a>
              </li>
              <li className="posts-item">
                <a className="posts-link" href="/">
                  Water changes everything
                </a>
              </li>
            </ul>
          </aside>
        </div>
      </section>
    </div>
  );
};

export default News;
