import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import MainPage from "./Pages/MainPage/MainPage";
import Loader from "../src/assets/Components/Loader/Loader.jsx";


function App() {
  const [loading, setLoading] = useState(true);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: loading ? 0 : 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className="min-h-screen bg-[#272727]"
    >
      {loading ? (
        <Loader setLoading={setLoading} />
      ) : (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainPage />} />
          </Routes>
        </BrowserRouter>
      )}
    </motion.div>
  );
}

export default App;
