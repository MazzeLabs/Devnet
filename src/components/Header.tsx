import { Link } from "react-router-dom"
import { Banner } from "./Banner"
import { useState } from "react";

export const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };
    return (
        <div>
            <Banner />
            <div className="navbar-wrapper">
                <div className="cards navbar-content" style={{ zIndex: '99' }}>
                    <Link to="https://mazze.io" aria-current="page" className="logo-wrapper w-nav-brand w--current">
                        <div className="engulfstudio-logo w-embed">
                            <img src="https://mazze.io/images/mazzeblockchain.svg" loading="lazy" width="200" alt="Mazze Blockchain Logo" />
                        </div>
                    </Link>
                    <div className="navbar-buttons hidden md:flex">
                        <div>
                            <Link style={{ marginRight: '26px', cursor: 'pointer' }} to="/" className="pricing-detail">Home</Link>
                            <Link style={{ marginRight: '26px', cursor: 'pointer' }} to="/analytics" className="pricing-detail">Analytics</Link>
                            <Link style={{ marginRight: '26px', cursor: 'pointer' }} to="/validators" className="pricing-detail">Validators</Link>
                            <Link style={{ marginRight: '26px', cursor: 'pointer' }} to="/faucet" className="pricing-detail">Faucet</Link>
                            <Link style={{ marginRight: '26px', cursor: 'pointer' }} to="/leaderboard" className="pricing-detail">Leaderboard</Link>
                        </div>
                        <Link to="https://docs.mazze.io" target="_blank" id="w-node-_42939e0c-fbc1-4837-03c5-538c389ab0e5-389ab0b1" className="button wide-card w-inline-block">
                            <div>Documentation</div>
                            <div className="arrow w-embed" style={{ transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d' }}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6 12H18M18 12L13 7M18 12L13 17" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                </svg>
                            </div>
                        </Link>
                    </div>

                    <div className=" navbar-buttons md:hidden">
                        <div data-hover="false" data-delay="300" data-w-id="42939e0c-fbc1-4837-03c5-538c389ab0bf" className="dropdown w-dropdown"
                            style={{ zIndex: "901" }}>
                            <div className="navbar-button w-dropdown-toggle w--open" id="w-dropdown-toggle-0" aria-controls="w-dropdown-list-0" onClick={toggleMobileMenu}
                                aria-haspopup="menu" aria-expanded="true" role="button" tabIndex={0}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="white">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                                </svg>
                            </div>
                            {isMobileMenuOpen && (
                                <div className="dropdown-list w-dropdown-list w--open"
                                    style={{ opacity: "1", zIndex: '99' }}>
                                    <div className="w-layout-grid navbar-menu"
                                        style={{ transform: "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", transformStyle: "preserve-3d" }}>
                                        <Link to="/" id="w-node-_42939e0c-fbc1-4837-03c5-538c389ab0ce-389ab0b1"
                                            className="nav-link w-inline-block w--current" tabIndex={0}>
                                            <div>Home</div>
                                        </Link>


                                        <Link to="/analytics" id="w-node-_42939e0c-fbc1-4837-03c5-538c389ab0d4-389ab0b1" className="nav-link w-inline-block"
                                            tabIndex={0}>
                                            <div>Analytics</div>
                                        </Link>
                                        <Link to="/validators" id="w-node-_42939e0c-fbc1-4837-03c5-538c389ab0d4-389ab0b1"
                                            className="nav-link w-inline-block" tabIndex={0}>
                                            <div>Validators</div>
                                        </Link>
                                        <Link to="/faucet" id="w-node-_42939e0c-fbc1-4837-03c5-538c389ab0d4-389ab0b1" className="nav-link w-inline-block"
                                            tabIndex={0}>
                                            <div>Faucet</div>
                                        </Link>
                                        <Link to="/leaderboard"
                                            id="w-node-_42939e0c-fbc1-4837-03c5-538c389ab0d4-389ab0b1" className="nav-link w-inline-block" tabIndex={0}>
                                            <div>Leaderboard</div>
                                        </Link>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}