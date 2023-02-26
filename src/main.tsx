import ReactDOM from "react-dom/client";
import { App } from "./App";
import "./locales/i18n";
import "./assets/scss/main.scss";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(<App />);
