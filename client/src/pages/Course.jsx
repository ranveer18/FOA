import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

import Telegram from "../component/Telegram";

const Course = () => {
  const [cardDatas, setcardDatas] = useState([]);
  const [course, setCourse] = useState([]);

  const getcourseData = async () => {
    try {
      const response = await axios.get("/api/v1/course");
      setCourse(response.data);
      setcardDatas(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    verifyUser();
    getcourseData();
  }, []);
  const MonthBtn = [
    "All",
    ...new Set(
      cardDatas.map(({ month }) => {
        return month;
      })
    ),
  ];
  const navigation = useNavigate();

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
      if (res.status === 401 || !data) {
        window.alert(`Please Login `);
        navigation("/login");
      } else if (res.status === 200) {
        // console.log("verified");
      }
    } catch (error) {
      window.alert(`Please Login `);
      navigation("/login");

      console.log(error);
    }
  };
  //
  const filterItem = (month) => {
    if (month === "All") {
      setCourse(cardDatas);
      return;
    }

    const updateItem = cardDatas.filter((curElem) => {
      return curElem.month === month;
    });
    setCourse(updateItem);
  };
  return (
    <>
      <Navbar />
      <section className=" course_container">
        <h1 className="course_heading">
          RPSC FSO-RAJASTHAN FOOD SAFETY OFFICER MOCK TEST SERIES
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
              {course.map(({ name, date, courseLink }, index) => {
                return (
                  <div className="course_card" key={index}>
                    <h3>{name}</h3>
                    <p>Date: {date}</p>
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
