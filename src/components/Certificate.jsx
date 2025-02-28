import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const certificates = [
  { id: 1, src: "/Python.png", alt: "Python Certificate" },
  { id: 2, src: "/Cloud.png", alt: "Cloud Certificate" },
 
 
];

const Certificate = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Initialize AOS on component mount
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const nextCertificate = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 2) % certificates.length);
  };

  const prevCertificate = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 2 + certificates.length) % certificates.length
    );
  };

  return (
    <section className="certificate-section" >
      <h2 className="certificate-title" data-aos="fade-down">
        Certificates
      </h2>
      <div className="certificate-container" id="certificate">
        <div
          className="nav-zone left"
          onClick={prevCertificate}
          style={{ flex: 1, cursor: "pointer" }}
          data-aos="fade-right"
        ></div>

        <div className="certificate-wrapper" style={{ display: "flex", gap: "20px" }}>
          {[0, 1].map((offset) => {
            const index = (currentIndex + offset) % certificates.length;
            return (
              <div
                key={certificates[index].id}
                className="certificate-card"
                onClick={() => setSelectedCertificate(certificates[index].src)}
                data-aos="flip-left" 
                data-aos-delay={index * 200} // Staggered animation effect
              >
                <img
                  src={certificates[index].src}
                  alt={certificates[index].alt}
                  className="certificate-thumbnail"
                />
                <p className="certificate-text">{certificates[index].alt}</p>
              </div>
            );
          })}
        </div>

        <div
          className="nav-zone right"
          onClick={nextCertificate}
          style={{ flex: 1, cursor: "pointer" }}
          data-aos="fade-left"
        ></div>
      </div>

      {selectedCertificate && (
        <div className="modal" onClick={() => setSelectedCertificate(null)}>
          <span className="modal-close">&times;</span>
          <img
            src={selectedCertificate}
            alt="Enlarged Certificate"
            className="modal-image"
          />
        </div>
      )}
    </section>
  );
};

export default Certificate;
