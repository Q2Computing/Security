import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import { BrowserRouter as Router } from "react-router-dom";
import Auth0ProviderWithHistory from "./auth/auth0-provider-with-history";

import "./index.css";

ReactDOM.render(
    <Router>
        <Auth0ProviderWithHistory
            domain="dev-g2farjmh.us.auth0.com"
            clientId="3kpCqdRTpPhNb79cPpDqqbvrftEBftZX"
            redirectUri={window.location.origin}
        >
            <App />
        </Auth0ProviderWithHistory>
    </Router>,
    document.getElementById("root")
);
