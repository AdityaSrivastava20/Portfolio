import React from "react";
import project from "./data/projects.json";

function Project() {
  return (
    <>
      <div className="container projects my-5" id="projects">
        <h2
         
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          Projects
        </h2>
        {/* Centered and changed color to yellow */}
        <div className="row d-flex justify-content-center align-content-center">
          {project.map((data) => (
            <div key={data.id} className="my-4 col-sm-6 col-md-4 col-lg-3 mx-4">
              <div
                className="card bg-dark text-light"
                style={{
                  width: "18rem",
                  border: "1px solid yellow",
                  boxShadow: "5px 5px 10px 10px rgba(84, 116, 47, 0.5)",
                }}
                data-aos="flip-right"
                data-aos-duration="1000"
              >
                <div className="img d-flex justify-content-center align-content-center p-3">
                  <img
                    src={data.imageSrc}
                    className="card-img-top"
                    alt="..."
                    style={{
                      width: "250px",
                      height: "200px",
                      border: "2px solid yellow",
                      borderRadius: "10px",
                    }}
                  />
                </div>
                <div className="card-body text-center">
                  <h5 className="card-title">{data.title}</h5>
                  <p className="card-text">{data.description}</p>

                  <a href={data.source} className="btn btn-warning">
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Project;
