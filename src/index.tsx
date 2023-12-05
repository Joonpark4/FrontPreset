import React from "react";
import ReactDOM from "react-dom/client";
import RouteApp from "./pages/RouteApp";
import { BrowserRouter as Router } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

const rootElement = document.getElementById('root');

if (rootElement) {
	ReactDOM.createRoot(rootElement).render(
		<Router>
			<HelmetProvider>
				<RouteApp />
			</HelmetProvider>
		</Router>
	);
} else {
	console.error('Root element not found');
}