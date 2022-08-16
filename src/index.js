import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import WhatIsGHS from "./routes/WhatIsGHS";
import SafetyApp from "./routes/SafetyApp";
import DataSources from "./routes/DataSources";
import DrawReactionForm from "./components/DrawReactionForm";
import ReactionForm from "./components/ReactionForm";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  // <BrowserRouter basename="/chem-safety">
  <BrowserRouter>
    <Routes>
      {/* <Route exact path="/">
        <Redirect to="safety-assistant"></Redirect>
      </Route> */}
      <Route path="/" element={<App />}>
        <Route path="ghs" element={<WhatIsGHS />} />
        <Route path="safety-assistant" element={<SafetyApp />}>
          <Route path="draw" element={<DrawReactionForm />} />
          <Route path="text" element={<ReactionForm />} />
          <Route index element={<Navigate to="text" replace />} />
          {/* <Route index element={<ReactionForm />} /> */}
        </Route>
        <Route path="data" element={<DataSources />} />
        <Route index element={<Navigate to="safety-assistant" replace />} />
        {/* <Route index element={<SafetyApp />} /> */}
      </Route>
    </Routes>
  </BrowserRouter>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
