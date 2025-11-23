import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePgae";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/Dashboard";
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
