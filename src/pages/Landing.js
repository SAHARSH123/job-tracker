import Logo from "../assets/images/logo.svg";
import Main from "../assets/images/main.svg";
import Wrapper from "../assets/wrappers/LandingPage";

export const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <img src={Logo} alt="jobTracker logo" className="logo" />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure unde
            facere dolorum iusto minus cum quos adipisci perspiciatis porro,
            blanditiis aspernatur, aliquam quo incidunt voluptates, eligendi
            culpa dolorem ea delectus.
          </p>
          <button className="btn btn-hero">Login/Register</button>
        </div>
        <img src={Main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};
