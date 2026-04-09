import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
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

function MainLayout() {
  return (
    <>
      <Navbar />
      <Home />
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<MainLayout />}
        />
        <Route
          path="/give"
          element={
            <>
              <Navbar />
              <Give />
              <Footer />
            </>
          }
        />
        <Route
          path="/events"
          element={
            <>
              <Navbar />
              <Events />
              <Footer />
            </>
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
    </BrowserRouter>
  );
}
