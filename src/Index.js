import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Temperature from "./Temperature";
import Search from "./Search";
import Footer from "./Footer";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div className="container">
      <div className="weather-app-wrapper">
        <div className="weather-app">
          <Temperature />
          <Search />
        </div>
      </div>
    </div>
    <Footer />
  </StrictMode>
);
