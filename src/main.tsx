import ReactDOM from "react-dom/client";
import { App } from "./components/app/App.tsx";
import "./index.css";
import { StrictMode } from "react";
import "./i18n";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);
