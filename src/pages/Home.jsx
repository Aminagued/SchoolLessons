// pages/Home.jsx
import { useEffect } from "react";
import "./Home.css";

const Home = ({ setActiveLink }) => {
  useEffect(() => {
    setActiveLink("home");
  }, [setActiveLink]);

  const gradeLevels = [
    {
      id: 1,
      title: "Grade 1",
      description: "Basic reading, writing, and math fundamentals",
      color: "#FF9E80",
    },
    {
      id: 2,
      title: "Grade 2",
      description: "Building on core skills with more complex concepts",
      color: "#FFCC80",
    },
    {
      id: 3,
      title: "Grade 3",
      description: "Developing reading comprehension and math fluency",
      color: "#FFEC80",
    },
    {
      id: 4,
      title: "Grade 4",
      description: "Expanding knowledge in all subject areas",
      color: "#CCFF90",
    },
    {
      id: 5,
      title: "Grade 5",
      description: "Preparing for middle school with advanced topics",
      color: "#80FFD4",
    },
    {
      id: 6,
      title: "Grade 6",
      description: "Bridge year with more specialized subjects",
      color: "#80D0FF",
    },
  ];

  return (
    <div className="home">
      <section className="hero">
        <div className="container">
          <h2>Welcome to Elementary Learning Hub</h2>
          <p>Explore educational resources for all elementary grade levels</p>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <h2>Grade Level Resources</h2>
          <div className="grade-cards">
            {gradeLevels.map((grade) => (
              <div
                key={grade.id}
                className="grade-card"
                style={{ backgroundColor: grade.color }}
              >
                <h3>{grade.title}</h3>
                <p>{grade.description}</p>
                <a href={`/grade${grade.id}`} className="btn">
                  Explore Resources
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about">
        <div className="container">
          <h2>About Our Resources</h2>
          <p>
            Our educational materials are designed by experienced elementary
            teachers to align with curriculum standards. Each resource is
            crafted to be engaging and effective for young learners.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
