// src/pages/Home.jsx
import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = ({ setActiveLink }) => {
  useEffect(() => {
    setActiveLink("home");
  }, [setActiveLink]);

  const gradeLevels = [
    {
      id: 4,
      title: "السنة الثانية",
      description:
        "مذكرات متنوعة، تمارين، وأوراق عمل والمزيد من أجل السنة الثانية",
      color: "#FF9E80",
    },
    {
      id: 5,
      title: "السنة الأولى",
      description:
        "مذكرات متنوعة، تمارين، وأوراق عمل والمزيد من أجل السنة الأولى",
      color: "#FFCC80",
    },
    {
      id: 6,
      title: "التحضيري",
      description: "مذكرات متنوعة، تمارين، وأوراق عمل والمزيد من أجل التحضيري",
      color: "#FFEC80",
    },
    {
      id: 1,
      title: "السنة الخامسة",
      description: "Expanding knowledge in all subject areas",
      color: "#CCFF90",
    },
    {
      id: 2,
      title: "السنة الرابعة",
      description: "Preparing for middle school with advanced topics",
      color: "#80FFD4",
    },
    {
      id: 3,
      title: "السنة الثالثة",
      description: "Bridge year with more specialized subjects",
      color: "#80D0FF",
    },
  ];

  return (
    <div className="home">
      <section className="hero">
        <div className="container">
          <h2>Welcome to PrimaryClub</h2>
          <p>
            توفر لكم كل ما تحتاجون طيلة السنة الدراسية، من مذكرات، صور توضيحية،
            تمارين لجميع المستويات الدراسية الخاصة بالابتدائي.
          </p>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <h2>جميع مستويات المرحلة الابتدائية</h2>
          <div className="grade-cards">
            {gradeLevels.map((grade) => (
              <div
                key={grade.id}
                className="grade-card"
                style={{ backgroundColor: grade.color }}
              >
                <h2>{grade.title}</h2>
                <h4>{grade.description}</h4>
                <Link
                  to={`/grade${grade.id}`}
                  className="btn"
                  onClick={() => setActiveLink(`grade${grade.id}`)}
                >
                  عرض المزيد
                </Link>
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
