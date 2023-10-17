/**
 * Education component
 *
 * Space for you to describe more about your education.
 */
import React from "react";
import PropTypes from "prop-types";

/**
 * Education background image
 * 
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that
 * represents what you see in that image.
 * 
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/background1.jpg";

const imageAltText = "purple and blue abstract background";

/**
 * List of education you have completed or are currently pursuing.
 * 
 * Each object in the array should contain:
 * - school - name of school
 * - degree - degree you earned or are pursuing
 * - graduationDate - date you graduated or expect to graduate
 * - description - description of the program
 */

const educationList = [
  {
    school: "University of California, San Diego",
    degree: "Bachelor of Science in Computer Science",
    graduationDate: "June 2022",
    description: "GPA: 3.6",
  },
  {
    school: "University of California, San Diego",
    degree: "Bachelor of Science in Cognitive Science",
    graduationDate: "June 2022",
    description: "GPA: 3.6",
  },
];

const Education = () => {
  return (
    <section className="padding" id="education">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>Education</h2>
        <hr />
        <ul
          style={{
            textAlign: "left",
            listStylePosition: "inside",
            listStyleType: "none",
          }}
        >
          {educationList.map((education) => (
            <li key={education.school}>
              <h3>{education.school}</h3>
              <p className="large">{education.degree}</p>
              <p className="large">{education.graduationDate}</p>
              <p className="large">{education.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

Education.propTypes = {
  educationList: PropTypes.arrayOf(
    PropTypes.shape({
      school: PropTypes.string.isRequired,
      degree: PropTypes.string.isRequired,
      graduationDate: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ),
};

export default Education;
