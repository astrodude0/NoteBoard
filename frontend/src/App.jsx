import Home from "../pages/Home";
import CreateNotePage from "../pages/CreateNotePage";
import Navbar from "../components/Navbar";
import { Route, Routes } from "react-router";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster />
      <div className="relative h-full w-full">
        <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_60%,#00FF9D40_100%)]" />
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<CreateNotePage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
