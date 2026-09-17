import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import ScrollProgress from './components/ScrollProgress';
import Search from './components/Search';
import CookieConsent from './components/CookieConsent';
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
import Mission from './pages/Mission';
import Values from './pages/Values';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Portal from './pages/Portal';
import PortalProjects from './pages/PortalProjects';
import PortalInvoices from './pages/PortalInvoices';
import PortalMessages from './pages/PortalMessages';
import NotFound from './pages/NotFound';
import ComponentShowcase from './pages/ComponentShowcase';
import CaseStudy from './pages/CaseStudy';
import ServiceDetail from './pages/ServiceDetail';
import QuoteRequest from './pages/QuoteRequest';
import ThankYou from './pages/ThankYou';
import ThankYouQuote from './pages/ThankYouQuote';
import TeamGrid from './pages/TeamGrid';
import TeamProfile from './pages/TeamProfile';
import Process from './pages/Process';
import Pricing from './pages/Pricing';
import BlogPost from './pages/BlogPost';
import BlogCategory from './pages/BlogCategory';
import BlogTag from './pages/BlogTag';
import WorkCategory from './pages/WorkCategory';
import WorkIndustry from './pages/WorkIndustry';
import Careers from './pages/Careers';
import JobDetail from './pages/JobDetail';
import Sitemap from './pages/Sitemap';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import CookiePolicy from './pages/CookiePolicy';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <ScrollProgress />
      <Search />
      <CookieConsent />
      <Routes>
        {/* UI1: Showcase Layout — Grid-heavy pages */}
        <Route element={<ShowcaseLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/work/category/:slug" element={<WorkCategory />} />
          <Route path="/work/industry/:slug" element={<WorkIndustry />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/category/:slug" element={<BlogCategory />} />
          <Route path="/blog/tag/:slug" element={<BlogTag />} />
          <Route path="/showcase" element={<ComponentShowcase />} />
          <Route path="/about/team" element={<TeamGrid />} />
          <Route path="/careers" element={<Careers />} />
        </Route>

        {/* UI2: Explainer Layout — Content-heavy pages */}
        <Route element={<ExplainerLayout />}>
          <Route path="/services" element={<Services />} />
          <Route path="/services/process" element={<Process />} />
          <Route path="/services/pricing" element={<Pricing />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/about/mission" element={<Mission />} />
          <Route path="/about/values" element={<Values />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/quote-request" element={<QuoteRequest />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/careers/:slug" element={<JobDetail />} />
          <Route path="/sitemap" element={<Sitemap />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
        </Route>

        {/* UI3: Storyteller Layout — Case studies & team profiles */}
        <Route element={<StorytellerLayout />}>
          <Route path="/work/:slug" element={<CaseStudy />} />
          <Route path="/about/team/:slug" element={<TeamProfile />} />
        </Route>

        {/* UI4: Minimal Layout — Utility pages */}
        <Route element={<MinimalLayout />}>
          <Route path="/thank-you" element={<ThankYou />} />
          <Route path="/thank-you-quote" element={<ThankYouQuote />} />
          <Route path="*" element={<NotFound />} />
        </Route>

        {/* UI5: Dashboard Layout — Portal pages */}
        <Route element={<DashboardLayout />}>
          <Route path="/portal" element={<Portal />} />
          <Route path="/portal/projects" element={<PortalProjects />} />
          <Route path="/portal/invoices" element={<PortalInvoices />} />
          <Route path="/portal/messages" element={<PortalMessages />} />
        </Route>
      </Routes>
    </Router>
  );
}
