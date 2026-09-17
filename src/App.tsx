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
import CaseStudy from './pages/CaseStudy';
import ServiceDetail from './pages/ServiceDetail';
import QuoteRequest from './pages/QuoteRequest';
import ThankYou from './pages/ThankYou';

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
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/quote-request" element={<QuoteRequest />} />
        </Route>

        {/* UI3: Storyteller Layout — Case studies */}
        <Route element={<StorytellerLayout />}>
          <Route path="/work/:slug" element={<CaseStudy />} />
        </Route>

        {/* UI4: Minimal Layout — Utility pages */}
        <Route element={<MinimalLayout />}>
          <Route path="/thank-you" element={<ThankYou />} />
          <Route path="*" element={<NotFound />} />
          {/* Future: /login, etc. */}
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
