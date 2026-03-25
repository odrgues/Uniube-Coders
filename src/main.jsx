import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { AppThemeProvider } from "./app/providers/AppThemeProvider";
import { AppRoutes } from "./app/routes/AppRoutes";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppThemeProvider>
        <AppRoutes />
      </AppThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
