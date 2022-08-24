import "./portfolio.scss";
import { PortfolioList } from "../portfolioList/PortfolioList";
import { useEffect, useState } from "react";
import {
  countenancePortfolio,
  webPortfolio,
  mobilePortfolio,
  designPortfolio,
  contentPortfolio,
} from "../../data";


export default function Portfolio() {
  const [selected, setSelected] = useState("countenance");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "countenance",
      title: "Countenance",
    },
    {
      id: "web",
      title: "Web App",
    },
    {
      id: "mobile",
      title: "Mobile App",
    },
    {
      id: "design",
      title: "Design",
    },
    {
      id: "content",
      title: "Content",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "countenance":
        setData(countenancePortfolio);
        break;
      case "web":
        setData(webPortfolio);
        break;
      case "mobile":
        setData(mobilePortfolio);
        break;
      case "design":
        setData(designPortfolio);
        break;
      case "content":
        setData(contentPortfolio);
        break;
      default:
        setData(countenancePortfolio);
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio"> 
      <div>
        <h1>Portfolio</h1>
      </div>
      <div className="portoDiv">
        <ul >
          {list.map((item) => (
           
            <PortfolioList
              title={item.title}
              active={selected === item.id}
              setSelected={setSelected}
              id={item.id}
            />
          ))}
        </ul>
        <div className="container">
          {data.map((d) => (
            <div className="item">
              <img src={d.img} alt="" />
              <h3>{d.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
