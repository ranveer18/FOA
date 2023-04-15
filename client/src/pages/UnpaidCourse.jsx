import React, { useState } from "react";

import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

import { cardData } from "./unpaidData";
import Telegram from "../component/Telegram";

const MonthBtn = [
  "All",
  ...new Set(
    cardData.map(({ Month }) => {
      return Month;
    })
  ),
];
const Course = () => {
  const [Data, setData] = useState(cardData);

  const filterItem = (Month) => {
    if (Month === "All") {
      setData(cardData);
      return;
    }

    const updateItem = cardData.filter((curElem) => {
      return curElem.Month === Month;
    });
    setData(updateItem);
  };

  return (
    <>
      <Navbar />
      <section className=" course_container">
        <h1 className="course_heading">
          RPSC FSO-RAJASTHAN FOOD SAFETY OFFICER FREE MOCK TEST SERIES
        </h1>

        <div className="work_filter-btn">
          <div className="work_filter-btns">
            {MonthBtn.map((curClem, index) => {
              return (
                <span
                  key={index}
                  id={index}
                  className="body_btn"
                  onClick={(e) => {
                    filterItem(curClem);
                  }}
                >
                  {curClem}
                </span>
              );
            })}
          </div>
        </div>

        <div className="body_content ">
          <div className="card_container">
            <div className="course_content">
              {/*  */}
              {Data.map(({ id, Name, Month, courseLink }) => {
                return (
                  <div className="course_card" key={id}>
                    <h1>{Name}</h1>
                    <button className="body_btn">
                      <a href={courseLink}>
                        <p>View Now </p>
                      </a>
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <Telegram />

      <Footer />
    </>
  );
};

export default Course;
