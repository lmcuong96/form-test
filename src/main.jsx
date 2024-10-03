import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./app.jsx";
import "./index.css";
import {ArrayTest} from "./array-test.jsx";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		{/*<App />*/}
        <ArrayTest/>
	</StrictMode>
);
