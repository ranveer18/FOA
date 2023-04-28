import React, { useState } from "react";
import Navbar from "../component/Navbar";
const UploadCourse = () => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [month, setMonth] = useState("");
  const [courseLink, setcourseLink] = useState("");
  const [isloding, setisloding] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setisloding(true);

      const response = await fetch("/api/v1/admin/UploadCourse", {
        method: "POST",
        credentials: "include",
        mode: "cors",
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          date,
          month,
          courseLink,
        }),
      });
      const data = response.json();
      if (response.status === 400 || !data) {
        setisloding(false);
        window.alert("Enter vaild data");
      } else if (response.status === 422) {
        setisloding(false);
        window.alert("Course already uploaded");
      } else if (response.status === 201) {
        setisloding(false);
        window.alert("course uploaded");
      } else {
        setisloding(false);

        window.alert("Course not uploaded");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navbar />
      <section className="Join_container">
        <h1 className="body_heading">Upload Course</h1>
        <div className="Join_content">
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="course_name" className="uplaod_label">
                Course Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Course Name"
                className="uplaod_input"
                onChange={(e) => {
                  setName(e.target.value);
                }}
                required
              />
            </div>
            <div>
              <label htmlFor="course_name" className="uplaod_label">
                Course Date
              </label>
              <input
                type="text"
                name="date"
                placeholder="ex: 17-April"
                className="uplaod_input"
                onChange={(e) => {
                  setDate(e.target.value);
                }}
                required
              ></input>
            </div>
            <div>
              <label htmlFor="course_name" className="uplaod_label">
                Course Month
              </label>
              <input
                type="text"
                name="month"
                placeholder="ex: April"
                className="uplaod_input"
                onChange={(e) => {
                  setMonth(e.target.value);
                }}
                required
              ></input>
            </div>
            <div>
              <label htmlFor="course_name" className="uplaod_label">
                Course Link
              </label>
              <input
                type="text"
                name="courseLink"
                placeholder="course link"
                className="uplaod_input"
                onChange={(e) => {
                  setcourseLink(e.target.value);
                }}
                required
              ></input>
            </div>
            <p className={isloding ? "showLoading" : "hideLoading"}>
              Please wait...
            </p>
            <input type="submit" value="submit" className="body_btn" />
          </form>
        </div>
      </section>
    </>
  );
};

export default UploadCourse;
