// import logo from '../img/logo.png';

const Navigation = function () {
  return (
    <nav className="nav">
      <div className="container flex-nav">
        <div className="logo">
          <a href="/">
            {/* <img src={logo} alt="Logo" className="logo-img" /> */}
            LOGO
          </a>
        </div>
        <ul className="nav-list">
          <li className="nav-item">
            <a href="/" className="nav-link">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="/features" className="nav-link">
              Features
            </a>
          </li>
          <li className="nav-item">
            <a href="/campaign" className="nav-link">
              Campaign
            </a>
          </li>
          <li className="nav-item">
            <a href="/news" className="nav-link">
              News
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
