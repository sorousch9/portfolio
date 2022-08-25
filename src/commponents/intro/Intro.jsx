import "./intro.scss";

export default function Intro() {
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="wrapper">
          <h2>Hallo, ich bin </h2>
          <h1>Soroush Safar </h1>
        </div>
      </div>
      <div className="center">
        <div className="imgContainer">
          <img src="assets/loremPhoto.png" alt="" />

        </div>
      </div>
      <div className="right">
        <h2>UI/UX Designer</h2>
        <h2>Full Stack Web App</h2>
        <h3>
          <span>React</span> Entwickler
        </h3>
        <h4>
          Lorem ipsum dolor sit amet consectetu adipisicing elit. Eos obcaecati
          dolore accusantium nam maiores iure impedit,
        </h4>
        <a href="#portfolio">
            <img src="assets/arrow1.png" alt="" />
          </a>
      </div>
    </div>
  );
}
