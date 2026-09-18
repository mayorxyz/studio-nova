import { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { blogPosts, projects, services, team, jobs } from '../data';
import { 
  SearchIcon, 
  XIcon, 
  ArrowRightIcon, 
  QuestionIcon, 
  SlashIcon,
  HashIcon,
  BriefcaseIcon,
  PlusIcon,
  UserIcon,
  DollarIcon,
  MinusIcon
} from './icons';

interface SearchResult {
  type: 'blog' | 'project' | 'service' | 'team' | 'job';
  title: string;
  description: string;
  url: string;
  category?: string;
}

export default function Search() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  // Search across all content
  useEffect(() => {
    if (query.length < 2) {
      setResults([]);
      return;
    }

    const searchQuery = query.toLowerCase();
    const searchResults: SearchResult[] = [];

    // Search blog posts
    blogPosts.forEach(post => {
      if (
        post.title.toLowerCase().includes(searchQuery) ||
        post.excerpt.toLowerCase().includes(searchQuery) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchQuery))
      ) {
        searchResults.push({
          type: 'blog',
          title: post.title,
          description: post.excerpt,
          url: `/blog/${post.slug}`,
          category: post.category,
        });
      }
    });

    // Search projects
    projects.forEach(project => {
      if (
        project.title.toLowerCase().includes(searchQuery) ||
        project.description.toLowerCase().includes(searchQuery) ||
        project.tags.some(tag => tag.toLowerCase().includes(searchQuery))
      ) {
        searchResults.push({
          type: 'project',
          title: project.title,
          description: project.description,
          url: `/work/${project.slug}`,
          category: project.category,
        });
      }
    });

    // Search services
    services.forEach(service => {
      if (
        service.title.toLowerCase().includes(searchQuery) ||
        service.description.toLowerCase().includes(searchQuery)
      ) {
        searchResults.push({
          type: 'service',
          title: service.title,
          description: service.description,
          url: `/services/${service.slug}`,
        });
      }
    });

    // Search team members
    team.forEach(member => {
      if (
        member.name.toLowerCase().includes(searchQuery) ||
        member.role.toLowerCase().includes(searchQuery) ||
        member.bio.toLowerCase().includes(searchQuery)
      ) {
        searchResults.push({
          type: 'team',
          title: member.name,
          description: member.bio,
          url: `/about/team/${member.slug}`,
          category: member.role,
        });
      }
    });

    // Search jobs
    jobs.forEach(job => {
      if (
        job.title.toLowerCase().includes(searchQuery) ||
        job.description.toLowerCase().includes(searchQuery) ||
        job.department.toLowerCase().includes(searchQuery)
      ) {
        searchResults.push({
          type: 'job',
          title: job.title,
          description: job.description,
          url: `/careers/${job.slug}`,
          category: job.department,
        });
      }
    });

    setResults(searchResults);
    setSelectedIndex(-1);
  }, [query]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault();
          setSelectedIndex(prev => Math.min(prev + 1, results.length - 1));
          break;
        case 'ArrowUp':
          e.preventDefault();
          setSelectedIndex(prev => Math.max(prev - 1, -1));
          break;
        case 'Enter':
          e.preventDefault();
          if (selectedIndex >= 0 && results[selectedIndex]) {
            navigate(results[selectedIndex].url);
            setIsOpen(false);
            setQuery('');
          }
          break;
        case 'Escape':
          setIsOpen(false);
          setQuery('');
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, selectedIndex, results, navigate]);

  // Global keyboard shortcut (Cmd/Ctrl + K)
  useEffect(() => {
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen(true);
        setTimeout(() => inputRef.current?.focus(), 100);
      }
    };

    window.addEventListener('keydown', handleGlobalKeyDown);
    return () => window.removeEventListener('keydown', handleGlobalKeyDown);
  }, []);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog': return <HashIcon size={24} />;
      case 'project': return <BriefcaseIcon size={24} />;
      case 'service': return <PlusIcon size={24} />;
      case 'team': return <UserIcon size={24} />;
      case 'job': return <DollarIcon size={24} />;
      default: return <MinusIcon size={24} />;
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'blog': return 'Blog Post';
      case 'project': return 'Project';
      case 'service': return 'Service';
      case 'team': return 'Team Member';
      case 'job': return 'Job Opening';
      default: return 'Page';
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm flex items-start justify-center pt-20 px-4">
      <div className="bg-white rounded-lg shadow-2xl w-full max-w-2xl max-h-[80vh] flex flex-col">
        {/* Search Input */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <SearchIcon size={24} className="text-gray-400" />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search blog posts, projects, services, team..."
              className="flex-1 text-lg outline-none"
              autoFocus
            />
            <button
              onClick={() => {
                setIsOpen(false);
                setQuery('');
              }}
              className="text-gray-400 hover:text-gray-600"
              aria-label="Close search"
            >
              <XIcon size={24} />
            </button>
          </div>
          <div className="mt-3 text-sm text-gray-500">
            {results.length > 0 ? (
              <span>{results.length} result{results.length !== 1 ? 's' : ''} found</span>
            ) : query.length >= 2 ? (
              <span>No results found</span>
            ) : (
              <span>Type at least 2 characters to search</span>
            )}
          </div>
        </div>

        {/* Results */}
        <div className="flex-1 overflow-y-auto p-4">
          {results.length > 0 ? (
            <div className="space-y-2">
              {results.map((result, index) => (
                <Link
                  key={`${result.type}-${result.url}`}
                  to={result.url}
                  onClick={() => {
                    setIsOpen(false);
                    setQuery('');
                  }}
                  className={`block p-4 rounded-lg transition-colors ${
                    selectedIndex === index
                      ? 'bg-[var(--safety)] text-white'
                      : 'hover:bg-gray-100'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">{getTypeIcon(result.type)}</span>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="font-semibold">{result.title}</h3>
                        <span className={`text-xs px-2 py-0.5 rounded ${
                          selectedIndex === index
                            ? 'bg-white/20'
                            : 'bg-gray-200 text-gray-600'
                        }`}>
                          {getTypeLabel(result.type)}
                        </span>
                        {result.category && (
                          <span className={`text-xs px-2 py-0.5 rounded ${
                            selectedIndex === index
                              ? 'bg-white/20'
                              : 'bg-gray-200 text-gray-600'
                          }`}>
                            {result.category}
                          </span>
                        )}
                      </div>
                      <p className={`text-sm ${
                        selectedIndex === index ? 'text-white/80' : 'text-gray-600'
                      }`}>
                        {result.description}
                      </p>
                    </div>
                    <span className={`text-sm ${
                      selectedIndex === index ? 'text-white/60' : 'text-gray-400'
                    }`}>
                      <ArrowRightIcon size={16} />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          ) : query.length >= 2 ? (
            <div className="text-center py-12 text-gray-500">
              <div className="mb-3 flex justify-center">
                <QuestionIcon size={48} className="text-[var(--safety)]" />
              </div>
              <p>No results found for "{query}"</p>
              <p className="text-sm mt-2">Try different keywords or browse our pages</p>
            </div>
          ) : (
            <div className="text-center py-12 text-gray-500">
              <div className="mb-3 flex justify-center">
                <SlashIcon size={48} className="text-[var(--safety)]" />
              </div>
              <p>Start typing to search across all content</p>
              <p className="text-sm mt-2">Search blog posts, projects, services, team members, and more</p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-gray-200 bg-gray-50 text-xs text-gray-500 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <kbd className="px-2 py-1 bg-white border border-gray-300 rounded">↑</kbd>
              <kbd className="px-2 py-1 bg-white border border-gray-300 rounded">↓</kbd>
              Navigate
            </span>
            <span className="flex items-center gap-1">
              <kbd className="px-2 py-1 bg-white border border-gray-300 rounded">Enter</kbd>
              Select
            </span>
            <span className="flex items-center gap-1">
              <kbd className="px-2 py-1 bg-white border border-gray-300 rounded">Esc</kbd>
              Close
            </span>
          </div>
          <div>
            Powered by Studio Nova
          </div>
        </div>
      </div>
    </div>
  );
}
