import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <h1>My Portfolio</h1>
        <p>Hello! I'm Zalaf, and here are a few things about me 🚀</p>
      </header>

      <div className="cards-container">
        <div className="card">
          <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80" alt="Coding" />
          <h3>Coding</h3>
          <p>I love building web apps and learning new technologies.</p>
        </div>

        <div className="card">
          <img src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80" alt="Music" />
          <h3>Music</h3>
          <p>Music keeps me motivated while working on projects.</p>
        </div>

        <div className="card">
          <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80" alt="Travel" />
          <h3>Travel</h3>
          <p>I enjoy exploring new cultures and places around the world.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
