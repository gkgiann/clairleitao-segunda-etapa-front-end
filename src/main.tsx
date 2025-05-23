import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import AppRoutes from "./routes.tsx";
import Layout from "./layout.tsx";
import { GlobalStyle } from "./styles/global.ts";
import "bootstrap/dist/css/bootstrap.min.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Layout>
        <GlobalStyle />
        <AppRoutes />
      </Layout>
    </BrowserRouter>
  </StrictMode>
);
