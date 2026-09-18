import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import QuoteRequest from './pages/QuoteRequest';
import Newsletter from './pages/Newsletter';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/quote-request" element={<QuoteRequest />} />
        <Route path="/newsletter" element={<Newsletter />} />
      </Routes>
    </BrowserRouter>
  );
}

function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Welcome to Our Platform
        </h1>
        <p className="text-xl text-gray-600 mb-12">
          Get started by requesting a quote or subscribing to our newsletter
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/quote-request"
            className="px-8 py-4 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 transition-colors"
          >
            Request a Quote
          </Link>
          <Link
            to="/newsletter"
            className="px-8 py-4 bg-white text-gray-900 rounded-lg font-semibold border-2 border-gray-900 hover:bg-gray-50 transition-colors"
          >
            Subscribe to Newsletter
          </Link>
        </div>
      </div>
    </div>
  );
}
