import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchField from "./component/Search Field/SearchField";
import ItemsDetails from "./component/ShowImage/ItemsDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<SearchField />} />
        <Route path="/details/:id" element={<ItemsDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
