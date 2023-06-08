import { useEffect, useState } from "react";
import PortfolioList from "../portafolioList/PortafolioList";
import "./portafolio.scss";
import { react, mobile, design, puzzle } from "../../data";

export default function Portfolio() {
  const [selected, setSelected] = useState("react");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "react",
      title: "Web App(REACT)",
    },
    {
      id: "mobile",
      title: "Mobile",
    },
    {
      id: "design",
      title: "Design",
    },
    {
      id: "puzzle",
      title: "Puzzle",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "react":
        setData(react);
        break;
      case "mobile":
        setData(mobile);
        break;
      case "design":
        setData(design);
        break;
      case "puzzle":
        setData(puzzle);
        break;
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
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
            <a href={d.url} target="blank">
              <img src={d.img} alt="" />
            </a>
            <h3>{d.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
