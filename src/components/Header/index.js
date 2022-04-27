import { useEffect } from 'react';

import pdf from '../../assets/resume/Resume.pdf'

// header component, takes pages, the current page, and the set current page function for parameters
const Header = ({ pages, currentPage, setCurrentPage, hasPageChanged }) => {
    useEffect(() => {
        document.title = currentPage;
    }, [currentPage])
    
    return (
        <header>
            <h1><a href="/">Diego Marrs</a></h1>
            <ul>
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
                <li><a href={pdf} target="_blank">Résumé</a></li>
            </ul>
        </header>
    );
}

export default Header;