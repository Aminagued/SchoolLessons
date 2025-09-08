// components/ResourceCard.jsx
import "./ResourceCard.css";

const ResourceCard = ({ resource }) => {
  const handleDownload = () => {
    // In a real application, this would trigger the actual download
    alert(`Downloading: ${resource.title}`);
  };

  const getIcon = (type) => {
    switch (type) {
      case "pdf":
        return "📄";
      case "image":
        return "🖼️";
      case "word":
        return "📝";
      default:
        return "📂";
    }
  };

  return (
    <div className="resource-card">
      <div className="resource-icon">{getIcon(resource.type)}</div>
      <h3>{resource.title}</h3>
      <p>{resource.description}</p>
      <button className="download-btn" onClick={handleDownload}>
        Download
      </button>
    </div>
  );
};

export default ResourceCard;
