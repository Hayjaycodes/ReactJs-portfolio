import React from "react";
import { useState } from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { AiFillProject } from "react-icons/ai";
import { filterOption, portfolioData } from "./utils";
import "./style.scss";

const Portfolio = () => {
  const [filterValue, setFilterValue] = useState(1);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleFilter = (id) => {
    setFilterValue(id);
  };
  console.log(filterValue);

  const filterPorfolioData =
    filterValue === 1
      ? portfolioData
      : portfolioData.filter((item) => item.sectionId === filterValue);

  return (
    <div>
      <section id="portfolio" className="portfolio">
        <PageHeaderContent
          headerText="My Portfolio"
          icon={<AiFillProject size={40} />}
        />

        <div className="portfolio__content">
          <ul className="portfolio__content__filter">
            {filterOption.map((option, key) => (
              <li
                onClick={() => handleFilter(option.id)}
                key={`filter${option.id}`}
                className={option.id === filterValue ? "active" : ""}
              >
                {option.label}
              </li>
            ))}
          </ul>

          <div className="portfolio__content__cards">
            {filterPorfolioData.map((item, key) => (
              <div
                onMouseEnter={() => setHoveredIndex(key)}
                onMouseLeave={() => setHoveredIndex(null)}
                key={key}
                className="portfolio__content__cards__item"
              >
                <div className="portfolio__content__cards__item__img-wrapper">
                  <a href="#Link">
                    <img src={item.pix} alt="project" />
                  </a>
                </div>

                <div className="overlay">
                  {hoveredIndex === key && (
                    <div>
                      <p>
                        {item.projectName} <br />
                        {/* <button>Visit</button> */}
                        <a href={item.projectLink} target="#blank">
                          Visit
                        </a>
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
