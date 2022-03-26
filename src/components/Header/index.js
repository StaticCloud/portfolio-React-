import { useEffect } from 'react';

// header component, takes pages, the current page, and the set current page function for parameters
const Header = ({ pages, currentPage, setCurrentPage }) => {
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
                        onClick={() => {setCurrentPage(page)}}>
                        {page}
                    </li>
                )}
            </ul>
        </header>
    );
}

export default Header;