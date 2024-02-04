
import React, { useState } from "react";
import LandingPage from "./LandingPage";
import Starter from "./Starter"; 

function App() {
  const [showExploreComponent, setShowExploreComponent] = useState(false);

  const handleExploreClick = () => {
    setShowExploreComponent(true);
    
  };

  return (
    <div className="bg-red-100 min-h-screen">
      {showExploreComponent ? (
        <Starter />
      ) : (
        <LandingPage onExploreClick={handleExploreClick} />
      )}
    </div>
  );
}

export default App;
