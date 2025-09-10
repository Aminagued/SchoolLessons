import { useState } from "react";
import "./Files.css";

const Files = () => {
  const [activeCategory, setActiveCategory] = useState("appetizers");

  // Sample menu data
  const Resources = {
    appetizers: [
      {
        id: 1,
        name: "Spring Rolls",
        description: "Crispy vegetable rolls with sweet chili sauce",
        image:
          "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=300&h=200&fit=crop",
        file: "/menu-appetizers.pdf",
      },
      {
        id: 2,
        name: "Garlic Bread",
        description: "Toasted bread with garlic butter and herbs",
        image:
          "https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?w=300&h=200&fit=crop",
        file: "/garlic-bread-recipe.pdf",
      },
    ],
    mainCourses: [
      {
        id: 1,
        name: "Grilled Salmon",
        description: "Atlantic salmon with lemon butter sauce and vegetables",
        image:
          "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=300&h=200&fit=crop",
        file: "/salmon-details.pdf",
      },
      {
        id: 2,
        name: "Beef Steak",
        description:
          "Prime cut steak cooked to perfection with mashed potatoes",
        image:
          "https://images.unsplash.com/photo-1546964124-0cce460f38ef?w=300&h=200&fit=crop",
        file: "/steak-menu.pdf",
      },
    ],
    desserts: [
      {
        id: 1,
        name: "Chocolate Cake",
        description: "Rich chocolate cake with vanilla ice cream",
        image:
          "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=300&h=200&fit=crop",
        file: "/chocolate-cake-recipe.pdf",
      },
      {
        id: 2,
        name: "Cheesecake",
        description: "New York style cheesecake with berry compote",
        image:
          "https://images.unsplash.com/photo-1524351199678-941a58a3df50?w=300&h=200&fit=crop",
        file: "/cheesecake-info.pdf",
      },
    ],
  };

  const handleDownload = (file) => {
    // In a real application, this would download the actual file
    alert(`Downloading ${file}`);
  };

  return (
    <div className="restaurant-menu">
      <header className="menu-header">
        <h1>كل ما يخص السنة الرابعة </h1>
        <div class="search-box">
          <input type="text" class="search-input" placeholder="ابحث هنا..." />
          <button class="search-button">
            <i class="fas fa-search"></i>
          </button>
        </div>
      </header>

      <nav className="menu-nav">
        <button
          className={activeCategory === "appetizers" ? "active" : ""}
          onClick={() => setActiveCategory("appetizers")}
        >
          أوراق عمل
        </button>
        <button
          className={activeCategory === "mainCourses" ? "active" : ""}
          onClick={() => setActiveCategory("mainCourses")}
        >
          تمارين
        </button>
        <button
          className={activeCategory === "desserts" ? "active" : ""}
          onClick={() => setActiveCategory("desserts")}
        >
          مذكرات
        </button>
        <button
          className={activeCategory === "desserts" ? "active" : ""}
          onClick={() => setActiveCategory("desserts")}
        >
          اختبارات{" "}
        </button>
        <button
          className={activeCategory === "desserts" ? "active" : ""}
          onClick={() => setActiveCategory("desserts")}
        >
          صور توضيحية
        </button>
      </nav>

      <div className="menu-content">
        <h2>
          {activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1)}
        </h2>
        <div className="items-grid">
          {Resources[activeCategory].map((item) => (
            <div key={item.id} className="menu-item">
              <div className="item-image">
                <img src={item.image} alt={item.name} />
              </div>
              <div className="item-details">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <button
                  className="download-btn"
                  onClick={() => handleDownload(item.file)}
                >
                  تحميل
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Files;
