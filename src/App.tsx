import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ClassAssignments from "./pages/ClassAssignments";
import GradeSubmissions from "./pages/GradeSubmissions";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<ClassAssignments />} />
          <Route path="/gradesubmission" element={<GradeSubmissions />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
