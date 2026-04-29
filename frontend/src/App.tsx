import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Give from './pages/Give';
import Events from './pages/Events';

// Lazy-load Admin for code splitting
const Admin = lazy(() => import('./pages/Admin'));

function LoadingSpinner() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-2 border-tertiary/20 border-t-tertiary rounded-full animate-spin" />
        <span className="text-on-surface-variant font-body text-sm tracking-widest uppercase">
          Loading...
        </span>
      </div>
    </div>
  );
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
               <Navbar />
              <Home/>
              <Footer />
            </motion.div>
          }
        />
        <Route
          path="/give"
          element={
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <Navbar />
              <Give />
              <Footer />
            </motion.div>
          }
        />
        <Route
          path="/events"
          element={
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <Navbar />
              <Events />
              <Footer />
            </motion.div>
          }
        />
        <Route
          path="/events/:eventId"
          element={
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <Navbar />
              <Events />
              <Footer />
            </motion.div>
          }
        />
        <Route
          path="/admin"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <Admin />
            </Suspense>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  );
}
