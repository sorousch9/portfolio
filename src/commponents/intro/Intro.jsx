import "./intro.scss";



export default function Intro() {

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/man.png" alt="" />
        </div>
      </div>

      <div className="right">
        <div className="wrapper">
          <h2>Hallo, ich bin </h2>
          <h1>Soroush Safar</h1>
          <h3>
            WebApp <span>React</span> Entwickler
          </h3>
        </div>
        <a href="#portfolio">
          <img src="assets/arrow1.png" alt="" />
        </a>
      </div>
    </div>
  );
}
