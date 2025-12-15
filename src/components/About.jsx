import React from "react";

const About = ({ setCurrentPage }) => {
  return (
    <div>
      {/* About Hero */}
      <div className="section-card">
        <div className="section-header">
          <div>
            <h1 className="section-title">🏢 About e-Blood Bank</h1>
            <p className="section-subtitle">
              Pioneering digital healthcare solutions for blood management
            </p>
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "40px",
            alignItems: "center",
          }}
        >
          <div>
            <h2
              style={{
                color: "#dc2626",
                fontSize: "2rem",
                marginBottom: "20px",
              }}
            >
              Our Mission
            </h2>
            <p
              style={{
                color: "#64748b",
                lineHeight: "1.8",
                fontSize: "1.1rem",
                marginBottom: "20px",
              }}
            >
              To revolutionize blood donation and distribution through
              technology, ensuring no patient dies due to blood shortage. We
              connect donors with patients seamlessly, creating a nationwide
              network of life-savers.
            </p>
            <p
              style={{
                color: "#64748b",
                lineHeight: "1.8",
                fontSize: "1.1rem",
              }}
            >
              Our platform bridges the gap between blood banks, hospitals, and
              donors, making blood donation more accessible, efficient, and
              transparent than ever before.
            </p>
          </div>
          <div className="advanced-stats-card" style={{ textAlign: "center" }}>
            <div style={{ fontSize: "4rem", marginBottom: "20px" }}>🩸</div>
            <h3 style={{ color: "#dc2626", marginBottom: "12px" }}>
              Saving Lives Daily
            </h3>
            <p style={{ color: "#64748b" }}>
              Every drop counts in our mission to save lives
            </p>
          </div>
        </div>
      </div>

      {/* Vision & Values */}
      <div className="section-card">
        <div className="grid grid-2">
          <div className="advanced-stats-card" style={{ textAlign: "left" }}>
            <div style={{ fontSize: "3rem", marginBottom: "20px" }}>🎯</div>
            <h3
              style={{
                color: "#dc2626",
                marginBottom: "16px",
                fontSize: "1.5rem",
              }}
            >
              Our Vision
            </h3>
            <p style={{ color: "#64748b", lineHeight: "1.7" }}>
              To create a world where blood shortage is eliminated through
              innovative technology and community participation. We envision a
              future where every patient gets the blood they need, when they
              need it, anywhere in the country.
            </p>
          </div>

          <div className="advanced-stats-card" style={{ textAlign: "left" }}>
            <div style={{ fontSize: "3rem", marginBottom: "20px" }}>💎</div>
            <h3
              style={{
                color: "#dc2626",
                marginBottom: "16px",
                fontSize: "1.5rem",
              }}
            >
              Our Values
            </h3>
            <ul
              style={{
                color: "#64748b",
                lineHeight: "1.7",
                paddingLeft: "20px",
              }}
            >
              <li>Compassion and empathy in healthcare</li>
              <li>Transparency in all operations</li>
              <li>Innovation in medical technology</li>
              <li>Community-driven solutions</li>
              <li>Excellence in service delivery</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="section-card">
        <div className="section-header">
          <div>
            <h2 className="section-title">👥 Our Team</h2>
            <p className="section-subtitle">
              Meet the passionate individuals behind e-Blood Bank
            </p>
          </div>
        </div>

        <div className="grid grid-3">
          <div className="advanced-stats-card" style={{ textAlign: "center" }}>
            <div
              className="donor-avatar"
              style={{
                width: "80px",
                height: "80px",
                fontSize: "2rem",
                margin: "0 auto 20px",
              }}
            >
              RS
            </div>
            <h3 style={{ color: "#1f2937", marginBottom: "8px" }}>
              Rupesh Kumar Sah
            </h3>
            <p
              style={{
                color: "#dc2626",
                fontWeight: "600",
                marginBottom: "12px",
              }}
            >
              Founder & CEO
            </p>
            <p style={{ color: "#64748b", fontSize: "0.9rem" }}>
              Computer Science student passionate about using technology to
              solve healthcare challenges.
            </p>
          </div>

          <div className="advanced-stats-card" style={{ textAlign: "center" }}>
            <div
              className="donor-avatar"
              style={{
                width: "80px",
                height: "80px",
                fontSize: "2rem",
                margin: "0 auto 20px",
              }}
            >
              MD
            </div>
            <h3 style={{ color: "#1f2937", marginBottom: "8px" }}>
              Dr. Medical Director
            </h3>
            <p
              style={{
                color: "#dc2626",
                fontWeight: "600",
                marginBottom: "12px",
              }}
            >
              Chief Medical Officer
            </p>
            <p style={{ color: "#64748b", fontSize: "0.9rem" }}>
              Leading medical professional ensuring safety and quality in blood
              management.
            </p>
          </div>

          <div className="advanced-stats-card" style={{ textAlign: "center" }}>
            <div
              className="donor-avatar"
              style={{
                width: "80px",
                height: "80px",
                fontSize: "2rem",
                margin: "0 auto 20px",
              }}
            >
              TL
            </div>
            <h3 style={{ color: "#1f2937", marginBottom: "8px" }}>Tech Lead</h3>
            <p
              style={{
                color: "#dc2626",
                fontWeight: "600",
                marginBottom: "12px",
              }}
            >
              Technology Director
            </p>
            <p style={{ color: "#64748b", fontSize: "0.9rem" }}>
              Expert in healthcare technology and system architecture
              development.
            </p>
          </div>
        </div>
      </div>

      {/* Achievements */}
      <div className="section-card">
        <div className="section-header">
          <div>
            <h2 className="section-title">🏆 Our Achievements</h2>
            <p className="section-subtitle">
              Milestones in our journey to save lives
            </p>
          </div>
        </div>

        <div className="grid grid-2">
          <div className="advanced-stats-card" style={{ textAlign: "left" }}>
            <h3 style={{ color: "#dc2626", marginBottom: "16px" }}>
              🥇 Awards & Recognition
            </h3>
            <ul
              style={{
                color: "#64748b",
                lineHeight: "1.8",
                paddingLeft: "20px",
              }}
            >
              <li>Best Healthcare Innovation Award 2024</li>
              <li>Digital India Healthcare Excellence</li>
              <li>National Blood Service Recognition</li>
              <li>Technology for Good Award</li>
            </ul>
          </div>

          <div className="advanced-stats-card" style={{ textAlign: "left" }}>
            <h3 style={{ color: "#dc2626", marginBottom: "16px" }}>
              📈 Key Milestones
            </h3>
            <ul
              style={{
                color: "#64748b",
                lineHeight: "1.8",
                paddingLeft: "20px",
              }}
            >
              <li>50,000+ lives saved through our platform</li>
              <li>25,000+ registered active donors</li>
              <li>500+ partner hospitals nationwide</li>
              <li>100+ cities covered across India</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Contact CTA */}
      <div
        className="section-card"
        style={{
          background: "linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)",
          color: "white",
        }}
      >
        <div style={{ textAlign: "center", padding: "40px 0" }}>
          <h2 style={{ fontSize: "2rem", marginBottom: "16px" }}>
            Want to Learn More?
          </h2>
          <p style={{ fontSize: "1.1rem", marginBottom: "30px", opacity: 0.9 }}>
            Get in touch with our team to discuss partnerships or learn about
            our services
          </p>
          <button
            className="btn"
            style={{
              padding: "16px 32px",
              fontSize: "1.1rem",
              background: "white",
              color: "#dc2626",
            }}
            onClick={() => setCurrentPage("contact")}
          >
            📞 Contact Our Team
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
