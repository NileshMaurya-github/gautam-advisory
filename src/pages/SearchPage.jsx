import React, { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { serviceDetailData } from '../data/serviceDetailData';
import { blogData } from '../data/blogData';
import { menuData } from '../data/menuData';

const SearchPage = () => {
    const [searchParams] = useSearchParams();
    const rawQuery = searchParams.get('q');
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const performSearch = () => {
            setLoading(true);
            if (!rawQuery) {
                setResults([]);
                setLoading(false);
                return;
            }

            const cleanQuery = rawQuery.replace(/[.,]$/, "").toLowerCase().trim();
            if (!cleanQuery) {
                setResults([]);
                setLoading(false);
                return;
            }

            const foundItems = [];
            const seenLinks = new Set(); // To avoid duplicates

            // 1. Search Service Details
            // Structure: { categoryName: { serviceId: { title, tagline, about... } } }
            Object.keys(serviceDetailData).forEach(category => {
                const services = serviceDetailData[category];
                Object.keys(services).forEach(serviceId => {
                    const service = services[serviceId];
                    // Search in Title, Tagline, and About
                    const searchableText = `${service.title} ${service.tagline} ${service.about.join(' ')}`.toLowerCase();

                    if (searchableText.includes(cleanQuery)) {
                        const link = `/${category}/${serviceId}`;
                        if (!seenLinks.has(link)) {
                            foundItems.push({
                                type: 'Service',
                                title: service.title,
                                description: service.tagline,
                                link: link
                            });
                            seenLinks.add(link);
                        }
                    }
                });
            });

            // 2. Search Menu Items (for top-level pages or specific list items)
            const traverseMenu = (items) => {
                items.forEach(item => {
                    const title = item.title || item.label;
                    const path = item.path;

                    if (title && title.toLowerCase().includes(cleanQuery)) {
                        if (path && !seenLinks.has(path)) {
                            foundItems.push({
                                type: 'Page',
                                title: title,
                                description: `Navigate to ${title}`,
                                link: path
                            });
                            seenLinks.add(path);
                        }
                    }

                    if (item.submenu) {
                        item.submenu.forEach(sub => {
                            if (sub.items) traverseMenu(sub.items);
                        });
                    }
                });
            };
            traverseMenu(menuData);

            // 3. Search Blog Posts
            blogData.forEach(post => {
                const searchableText = `${post.title} ${post.excerpt}`.toLowerCase();
                if (searchableText.includes(cleanQuery)) {
                    const link = `/blog/${post.id}`;
                    if (!seenLinks.has(link)) {
                        foundItems.push({
                            type: 'Blog',
                            title: post.title,
                            description: post.excerpt,
                            link: link
                        });
                        seenLinks.add(link);
                    }
                }
            });

            setResults(foundItems);
            setLoading(false);
        };

        // Debounce slightly or just run
        const timer = setTimeout(performSearch, 300);
        return () => clearTimeout(timer);
    }, [rawQuery]);

    return (
        <div className="container" style={{ padding: '8rem 1rem 4rem', minHeight: '80vh', maxWidth: '1200px', margin: '0 auto' }}>
            <h1 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', fontFamily: 'Playfair Display, serif' }}>Search Results</h1>

            <div style={{ marginBottom: '3rem' }}>
                <form action="/search" method="get" style={{ display: 'flex', gap: '10px', maxWidth: '600px' }}>
                    <input
                        type="text"
                        name="q"
                        defaultValue={rawQuery || ''}
                        placeholder="Search for services, tax help, or articles..."
                        style={{
                            flex: 1,
                            padding: '12px 20px',
                            borderRadius: '50px',
                            border: '1px solid #cbd5e1',
                            fontSize: '1rem',
                            outline: 'none',
                            boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
                        }}
                    />
                    <button
                        type="submit"
                        style={{
                            padding: '12px 30px',
                            background: '#0F172A',
                            color: '#fff',
                            border: 'none',
                            borderRadius: '50px',
                            cursor: 'pointer',
                            fontWeight: '600'
                        }}
                    >
                        Search
                    </button>
                </form>
            </div>

            {loading ? (
                <div style={{ color: '#64748b', fontSize: '1.1rem' }}>Searching for "{rawQuery}"...</div>
            ) : (
                <div>
                    <div>
                        <p style={{ color: '#64748b', marginBottom: '2rem' }}>
                            {results.length > 0 ? `Found ${results.length} result(s) for` : 'No results found for'}
                            <strong style={{ color: '#0F172A' }}> "{rawQuery}"</strong>
                        </p>

                        {results.length > 0 ? (
                            <div style={{ display: 'grid', gap: '2rem' }}>
                                {results.map((result, index) => (
                                    <div key={index} style={{
                                        padding: '2rem',
                                        background: '#fff',
                                        borderRadius: '12px',
                                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                                        border: '1px solid #f1f5f9',
                                        transition: 'transform 0.2s',
                                    }}>
                                        <div style={{
                                            textTransform: 'uppercase',
                                            fontSize: '0.75rem',
                                            fontWeight: '700',
                                            color: '#B48E2E',
                                            marginBottom: '0.5rem',
                                            letterSpacing: '1px'
                                        }}>
                                            {result.type}
                                        </div>
                                        <Link to={result.link} style={{ textDecoration: 'none' }}>
                                            <h3 style={{
                                                fontSize: '1.25rem',
                                                color: '#0F172A',
                                                marginBottom: '0.5rem',
                                                fontWeight: '700'
                                            }}>
                                                {result.title}
                                            </h3>
                                        </Link>
                                        <p style={{ color: '#475569', lineHeight: '1.6' }}>{result.description}</p>
                                        <Link to={result.link} style={{
                                            display: 'inline-block',
                                            marginTop: '1rem',
                                            color: '#007bff',
                                            fontWeight: '500',
                                            textDecoration: 'none'
                                        }}>
                                            View Details &rarr;
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div style={{ padding: '3rem', background: '#f8fafc', borderRadius: '12px', textAlign: 'center' }}>
                                <h3 style={{ color: '#334155', marginBottom: '1rem' }}>We couldn't find matches for "{rawQuery}"</h3>
                                <p style={{ color: '#64748b', marginBottom: '1.5rem' }}>Try checking your spelling or use more general terms like "GST", "Company", or "Tax".</p>
                                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                                    <Link to="/" style={{ color: '#B48E2E', fontWeight: '600', textDecoration: 'none' }}>Go to Home</Link>
                                    <span style={{ color: '#cbd5e1' }}>|</span>
                                    <Link to="/contact" style={{ color: '#B48E2E', fontWeight: '600', textDecoration: 'none' }}>Contact Support</Link>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default SearchPage;
