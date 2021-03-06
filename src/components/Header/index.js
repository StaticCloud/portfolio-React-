import { useEffect, useState } from 'react';

import pdf from '../../assets/resume/Resume.pdf'

// header component, takes pages, the current page, and the set current page function for parameters
const Header = ({ pages, currentPage, setCurrentPage, hasPageChanged }) => {
    useEffect(() => {
        document.title = currentPage;
    }, [currentPage])

    const [menuOpen, setMenuOpen] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    window.addEventListener('resize', () => {
        setWindowWidth(window.innerWidth)
    })
    
    return (
        <header>
            <div id="logo-wrap">
                <h1 style={{cursor: 'pointer'}} onClick={() => {
                    // conditionally change the page to about if the current page is not about
                    {currentPage !== pages[0] && 
                        hasPageChanged(true);
                        setTimeout(() => {
                            setCurrentPage(pages[0]);
                            hasPageChanged(false);
                        }, 400)
                    }
                }}>Diego Marrs</h1>
                <h1 id="menu" onClick={() => setMenuOpen(!menuOpen)}>
                    {!menuOpen ? 
                        <i className="bi bi-list"></i> : <i className="bi bi-x"></i>
                    }
                </h1>
            </div>
            <ul style={
                { 
                    display: windowWidth < 576 ? menuOpen ? 'block' : 'none' : 'flex'
                }
                }>
                {pages.map(page => 
                    <li key={page}
                        className={`${currentPage === page && 'active'}`}
                        onClick={() => {
                            hasPageChanged(true);
                            setTimeout(() => {
                                setCurrentPage(page);
                                hasPageChanged(false);
                            }, 400)
                        }}>
                        {page}
                    </li>
                )}
                <li><a href={pdf} target="_blank">R??sum??</a></li>
            </ul>
        </header>
    );
}

export default Header;