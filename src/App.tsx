import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import ScrollProgress from './components/ScrollProgress';
import {
  ShowcaseLayout,
  ExplainerLayout,
  StorytellerLayout,
  MinimalLayout,
  DashboardLayout,
} from './components/layouts';
import Home from './pages/Home';
import Work from './pages/Work';
import Services from './pages/Services';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Portal from './pages/Portal';
import NotFound from './pages/NotFound';
import ComponentShowcase from './pages/ComponentShowcase';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <ScrollProgress />
      <Routes>
        {/* UI1: Showcase Layout — Grid-heavy pages */}
        <Route element={<ShowcaseLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/showcase" element={<ComponentShowcase />} />
        </Route>

        {/* UI2: Explainer Layout — Content-heavy pages */}
        <Route element={<ExplainerLayout />}>
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>

        {/* UI3: Storyteller Layout — Case studies (placeholder routes) */}
        <Route element={<StorytellerLayout />}>
          {/* Future: /work/neon-coffee, /work/fintech-app, etc. */}
        </Route>

        {/* UI4: Minimal Layout — Utility pages */}
        <Route element={<MinimalLayout />}>
          <Route path="*" element={<NotFound />} />
          {/* Future: /thank-you, /login, etc. */}
        </Route>

        {/* UI5: Dashboard Layout — Portal pages */}
        <Route element={<DashboardLayout />}>
          <Route path="/portal" element={<Portal />} />
          {/* Future: /portal/projects, /portal/invoices, /portal/messages */}
        </Route>
      </Routes>
    </Router>
  );
}
