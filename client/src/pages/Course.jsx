import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
// import { FaFilter } from "react-icons/fa";
import { cardData } from "./courseData";
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
  // const [foundUsers, setFoundUsers] = useState(cardData);
  const navigation = useNavigate();
  useEffect(() => {
    verifyUser();
  });

  const verifyUser = async () => {
    try {
      const res = await fetch("/api/v1/studentAuthenticate", {
        method: "GET",
        credentials: "include",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      console.log(`data ${data}`);
      console.log(`res ${res}`);
      if (res.status === 401 || !data) {
        const error = new Error(res.error);
        console.log(`error ${error}`);
      } else if (res.status === 200) {
        console.log("verified");
      }
    } catch (error) {
      // console.log(`error ${error}`);
      // window.alert(error);
      window.alert(`Please Login `);
      // window.location.href = "/login";
      navigation("/login");

      console.log(error);
    }
  };
  //
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
          RPSC FSO-RAJASTHAN FOOD SAFETY OFFICER MOCK TEST SERIES
        </h1>
        {/* <div className="admin__search__container">
          <div className="admin__search__search">
            <div className="filter_icon">
              <FaFilter />
            </div>
            <input
              // type="text"
              type="search"
              className="filter__registration input"
              value={name}
              onChange={filter}
              placeholder="Search by Course Name "
            />
            <div className="search__button">Search</div>
          </div>
        </div> */}
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
              {Data.map(({ index, id, Name, Date, Month, courseLink }) => {
                return (
                  <div className="course_card" key={id}>
                    <h1>{Name}</h1>
                    <p>Date: {Date}</p>
                    <button className="body_btn">
                      <a href={courseLink}>
                        <p>View Now </p>
                      </a>
                    </button>
                  </div>
                );
              })}
              {/* {foundUsers && foundUsers.length > 0 ? (
                foundUsers.map(
                  ({ index, id, Name, description, Month, courseLink }) => {
                    return (
                      <div className="course_card" key={id}>
                        <h1>{Name}</h1>
                        <p>{description}</p>
                        <button className="body_btn">
                          <a href={courseLink}>View Now</a>
                        </button>
                      </div>
                    );
                  }
                )
              ) : (
                <h1>No results found!</h1>
              )} */}
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
