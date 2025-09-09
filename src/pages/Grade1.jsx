// src/pages/Grade1.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./Grade.css";
import ResourceCard from "./ResourceCard";

const Grade1 = ({ setActiveLink }) => {
  const location = useLocation();

  useEffect(() => {
    setActiveLink("grade1");
  }, [setActiveLink, location]);

  const resources = [
    {
      id: 1,
      title: "Alphabet Practice",
      type: "pdf",
      description: "Practice writing letters A-Z with tracing exercises",
      downloadUrl: "/sample.pdf",
    },
    {
      id: 2,
      title: "Number Flashcards",
      type: "image",
      description: "Colorful number cards 1-20 for counting practice",
      downloadUrl: "/numbers.jpg",
    },
    {
      id: 3,
      title: "Sight Words List",
      type: "pdf",
      description: "First 100 sight words for early reading",
      downloadUrl: "/sight-words.pdf",
    },
    {
      id: 4,
      title: "Shapes Chart",
      type: "image",
      description: "Learn basic shapes with colorful examples",
      downloadUrl: "/shapes.jpg",
    },
    {
      id: 5,
      title: "Phonics Practice",
      type: "pdf",
      description: "Letter sounds and blending exercises",
      downloadUrl: "/phonics.pdf",
    },
    {
      id: 6,
      title: "Weather Vocabulary",
      type: "pdf",
      description: "Weather terms with picture examples",
      downloadUrl: "/weather.pdf",
    },
  ];

  return (
    <div className="grade-page">
      <div className="container">
        <h1>Grade 1 Resources</h1>
        <p className="grade-description">
          Explore and download learning materials for first grade students.
        </p>

        <div className="resources-grid">
          {resources.map((resource) => (
            <ResourceCard key={resource.id} resource={resource} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Grade1;
