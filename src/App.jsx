import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Feed from "./components/Feed";
import Header from "./components/Header";
import SearchResult from "./components/SearchResult";
import VideoDetails from "./components/VideoDetails";
import { AppContext } from "./context/contextApi.jsx";
function App() {
  return (
    <>
      <AppContext>
        <BrowserRouter>
          <div className="flex flex-col h-full">
            <Header />
            <Routes>
              <Route path="/" element={<Feed />} />
              <Route
                path="/searchResult/:searchQuery"
                element={<SearchResult />}
              />
              <Route path="/video/:id" element={<VideoDetails />} />
            </Routes>
          </div>
        </BrowserRouter>
      </AppContext>
    </>
  );
}

export default App;
