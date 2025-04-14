import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './navbar.css';

export default function Navbar() {
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState(''); // State for search input
  const searchRef = useRef(null);
  const navigate = useNavigate(); // Hook for navigation

  // Close the search bar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        const isSearchIcon = event.target.closest('.bi-search');
        if (!isSearchIcon) {
          setShowSearch(false);
        }
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Handle search form submission
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?query=${encodeURIComponent(searchQuery)}`); // Navigate to search results page
      setShowSearch(false); // Close the search bar
    }
  };

  return (
    <nav className="navbar sticky-top navbar-expand-lg bg-warning">
      <div className="container-fluid">
        <Link to={"/"} className='navbar-brand fw-bold fs-3'>PowerFitness</Link>
        <div className="d-flex align-items-center">
          {/* Small Screen Search Icon */}
          <div className="d-flex d-lg-none align-items-center me-2" ref={searchRef}>
            {!showSearch ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="#242323"
                className="bi bi-search"
                viewBox="0 0 16 16"
                style={{ cursor: 'pointer' }}
                onClick={() => setShowSearch(true)}
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
              </svg>
            ) : (
              <form className="d-flex w-100 ms-2" onSubmit={handleSearchSubmit}>
                <input
                  className="form-control"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  autoFocus
                  value={searchQuery} // Bind input value to state
                  onChange={(e) => setSearchQuery(e.target.value)} // Update state on input change
                />
              </form>
            )}
          </div>

          {/* Navbar Toggler */}
          <button
            className="navbar-toggler bg-warning"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>

        <div className="collapse navbar-collapse bg-warning" id="navbarTogglerDemo01">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 fw-bold">
            <li className="nav-item">
              <Link className="nav-link" to="/rackpage">Rack</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/benchpage">Bench</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/bar_weightpage">Bar&weight</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/specialty">Specialty Machines</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/accessories">Accessories</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact Us</Link>
            </li>
            {/* Small Screen Cart and Account Links */}
            <li className="nav-item d-lg-none">
              <Link className="nav-link" to="/cart">Cart</Link>
            </li>
            <li className="nav-item d-lg-none">
              <Link className="nav-link" to="/account">Account</Link>
            </li>
          </ul>

          {/* Large Screen Search, Cart and Account */}
          <div className="d-none d-lg-flex align-items-center ms-3" ref={searchRef}>
            {!showSearch ? (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  fill="#242323"
                  className="bi bi-search me-3"
                  viewBox="0 0 16 16"
                  style={{ cursor: 'pointer' }}
                  onClick={() => setShowSearch(true)}
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                </svg>
                <Link to="/cart" className="text-dark mx-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    className="bi bi-cart"
                    viewBox="0 0 16 16"
                    style={{ cursor: 'pointer' }}
                  >
                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
                  </svg>
                </Link>
                <Link to="/account" className="text-dark">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="27"
                    height="27"
                    fill="currentColor"
                    className="bi bi-person"
                    viewBox="0 0 16 16"
                    style={{ cursor: 'pointer' }}
                  >
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
                  </svg>
                </Link>
              </>
            ) : (
              <form className="d-flex align-items-center" onSubmit={handleSearchSubmit}>
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  autoFocus
                  value={searchQuery} // Bind input value to state
                  onChange={(e) => setSearchQuery(e.target.value)} // Update state on input change
                />
              </form>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}