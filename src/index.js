import { HashRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import App from "./App";

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("app");

  const root = createRoot(container);

  root.render(
    <HashRouter>
      <App tab="home" />
    </HashRouter>
  );
});
