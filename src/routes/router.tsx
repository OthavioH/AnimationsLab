import { Routes, Route } from "react-router-dom";
import TextPage from "../pages/TextsPage/TextsPage";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<TextPage />} />
    </Routes>
  );
}
