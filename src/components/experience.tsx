"use client";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import {FaNodeJs ,FaReact } from "react-icons/fa";

function Experience() {
  return (
    <div
      id="experience"
      className=" h-screen mt-9 p-3 md:p-15 flex flex-col items-center"
    >
      <h1 className="text-3xl md:text-5xl">My Experience</h1>
      <VerticalTimeline lineColor="rgba(0,0,0,0.5)">
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "rgba(255, 255, 255, 0.05)",
            color: "#fff",
          }}
          contentArrowStyle={{
            borderRight: "0.4rem solid rgba(255, 255, 255, 0.5)",
          }}
          date="2011 - present"
          iconStyle={{background: "rgba(255, 255, 255, 0.15)", color: "#fff"}}
          icon={<FaNodeJs />}
        >
          <h3 className="vertical-timeline-element-title">
            Software Development Intern
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Automatically CC
          </h4>
          <p>
            <li>
              Developed RESTful APIs using Nodejs and Express, ensuring scalable
              and efficient backend services with authentication implementation.
            </li>
            <li>
              Developed CRUD-based applications, including a blog platform with
              user authentication and post management.
            </li>
            <li>
              Designed and implemented Mongoose schemas, ensuring efficient data
              storage and retrieval.
            </li>
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "rgba(255, 255, 255, 0.05)",
            color: "#fff",
          }}
          contentArrowStyle={{
            borderRight: "0.4rem solid rgba(255, 255, 255, 0.5)",
          }}
          date="2011 - present"
          iconStyle={{background: "rgba(255, 255, 255, 0.15)", color: "#fff"}}
          icon={<FaReact  />}
        >
          <h3 className="vertical-timeline-element-title">
            Frontend Developer Intern
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            PJ's Illustration
          </h4>
          <p>
            <li>
              Designed and developed a responsive React-based website to
              showcase designs and artworks of the client.
            </li>
            <li>
              Implemented AWS S3 for efficient media storage and integrated lazy
              loading techniques to optimize the loading speed of heavy video
              content.
            </li>
            <li>
              Contributed to a significant client growth of 50%, expanding the
              clientele beyond Rajasthan to other regions.
            </li>
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
