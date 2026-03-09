import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Sidebar from "./components/Sidebar.jsx";

import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Experience from "./pages/Experience.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import TopBar from "./components/TopBar.jsx";

const pageAnim = {
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 },
};

export default function App() {
  const location = useLocation();

  return (
    <>
      <TopBar />
      <div className="container">
        <Sidebar />
        <main className="mainArea">
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route
                path="/"
                element={
                  <motion.div {...pageAnim} transition={{ duration: 0.18 }}>
                    <Home />
                  </motion.div>
                }
              />
              <Route
                path="/about"
                element={
                  <motion.div {...pageAnim} transition={{ duration: 0.18 }}>
                    <About />
                  </motion.div>
                }
              />
              <Route
                path="/experience"
                element={
                  <motion.div {...pageAnim} transition={{ duration: 0.18 }}>
                    <Experience />
                  </motion.div>
                }
              />
              <Route
                path="/portfolio"
                element={
                  <motion.div {...pageAnim} transition={{ duration: 0.18 }}>
                    <Portfolio />
                  </motion.div>
                }
              />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </AnimatePresence>
        </main>
      </div>
    </>
  );
}