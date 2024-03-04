import { Link } from "react-router-dom"
import { Banner } from "./Banner"

export const Header = () => {
    return (
        <div>
            <Banner />
            <div className="navbar-wrapper">
                <div className="cards navbar-content">
                    <a href="https://mazze.io" aria-current="page" className="logo-wrapper w-nav-brand w--current">
                        <div className="engulfstudio-logo w-embed">
                            <img src="https://mazze.io/images/mazzeblockchain.svg" loading="lazy" width="200" alt="Mazze Blockchain Logo" />
                        </div>
                    </a>
                    <div className="navbar-buttons">
                        <div>
                            <Link style={{marginRight: '10px', cursor: 'pointer'}} to="/">Home</Link>
                            <Link style={{marginRight: '10px', cursor: 'pointer'}} to="/analytics">Analytics</Link>
                            <Link style={{marginRight: '10px', cursor: 'pointer'}} to="/validators">Validators</Link>
                            <Link style={{marginRight: '10px', cursor: 'pointer'}} to="/faucet">Faucet</Link>
                            <Link style={{marginRight: '10px', cursor: 'pointer'}} to="/leaderboard">Leaderboard</Link>
                        </div>
                        <a href="https://docs.mazze.io" target="_blank" id="w-node-_42939e0c-fbc1-4837-03c5-538c389ab0e5-389ab0b1" className="button wide-card w-inline-block">
                            <div>Documentation</div>
                            <div className="arrow w-embed" style={{ transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d' }}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6 12H18M18 12L13 7M18 12L13 17" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                </svg>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}