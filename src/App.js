import "./style/style.css";
import ShortenBox from "./components/ShortenBox";
import LinksWrapper from "./components/LinksWrapper";

function App() {
  return (
    <div className="App">
      <header className="header">
        <nav className="header__navbar">
          <img src={`/assets/images/logo.svg`} alt="logo" className="logo" />
          <div className="header__menu">
            <div className="btns-container">
              <button className="btn header__btn">Features</button>
              <button className="btn header__btn">Pricing</button>
              <button className="btn header__btn">Resources</button>
            </div>
            <div className="btns-container">
              <button className="btn header__btn">Login</button>
              <button className="btn btn--highlighted">Sign Up</button>
            </div>
          </div>
        </nav>
        <div className="header__content">
          <div className="titles-container">
            <h1 className="title header__title title--l">More than just shorter links</h1>
            <p className="title title--s header__title--s">
              Build your brand’s recognition and get detailed insights on how your links are performing.
            </p>
            <button className="btn btn--highlighted btn--large">Get Started</button>
          </div>
          <img
            src={"/assets/images/illustration-working.svg"}
            alt="illustration-working"
            className="header__illustration"
          />
        </div>
      </header>

      <main className="main">
        <ShortenBox />
        <LinksWrapper />
        <h2 className="title title--m main__title">Advanced Statistics</h2>
        <p className="title title--s main__title--s">
          Track how your links are performing across the web with our advanced statistics dashboard.
        </p>
        <div className="cards-container">
          <div className="cards-container__line"></div>
          <div className="card">
            <div className="card__circle">
              <div className="icon__container">
                <img className="card__icon" src={"/assets/images/icon-brand-recognition.svg"} alt="icon" />
              </div>
            </div>
            <div className="card__title">Barnd Recodnition</div>
            <div className="card__text">
              Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil
              confidence in your content.
            </div>
          </div>
          <div className="card card--middle">
            <div className="card__circle">
              <div className="icon__container">
                <img className="card__icon" src={"/assets/images/icon-detailed-records.svg"} alt="icon" />
              </div>
            </div>
            <div className="card__title">Detailed Records</div>
            <div className="card__text">
              Gain insights into who is clicking your links. Knowing when and where people engage with your content
              helps inform better decisions.
            </div>
          </div>
          <div className="card card--last">
            <div className="card__circle">
              <div className="icon__container">
                <img className="card__icon" src={"/assets/images/icon-fully-customizable.svg"} alt="icon" />
              </div>
            </div>
            <div className="card__title">Fully Customizable</div>
            <div className="card__text">
              Improve brand awareness and content discoverability through customizable links, supercharging audience
              engagement.
            </div>
          </div>
        </div>
      </main>
      <div className="ad">
        <h2 className="ad__title">Boost your links today</h2>
        <button className="btn btn--highlighted ad__btn">Get Started</button>
      </div>
      <footer className="footer">
        <div className="footer__container">
          <img src={`/assets/images/logo_w.svg`} alt="logo" className="logo" />

          <div className="footer-menu">
            <ul className="footer-menu__list">
              Features
              <li className="footer-menu__item footer-menu__item--first">Link Shortening</li>
              <li className="footer-menu__item">Branded Links</li>
              <li className="footer-menu__item">Analytics</li>
            </ul>
            <ul className="footer-menu__list">
              Resources
              <li className="footer-menu__item footer-menu__item--first">Blog</li>
              <li className="footer-menu__item">Developers</li>
              <li className="footer-menu__item">Support</li>
            </ul>
            <ul className="footer-menu__list">
              Company
              <li className="footer-menu__item footer-menu__item--first">About</li>
              <li className="footer-menu__item">Our Team</li>
              <li className="footer-menu__item">Careers</li>
              <li className="footer-menu__item">Contact</li>
            </ul>
          </div>
          <div className="smedia">
            <img src="/assets/images/icon-facebook.svg" alt="" className="smedia__icon" />
            <img src="/assets/images/icon-twitter.svg" alt="" className="smedia__icon" />
            <img src="/assets/images/icon-pinterest.svg" alt="" className="smedia__icon" />
            <img src="/assets/images/icon-instagram.svg" alt="" className="smedia__icon" />
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
