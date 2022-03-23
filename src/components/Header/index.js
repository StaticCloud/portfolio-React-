const Header = ({ pages }) => {
    return (
        <header>
            <h1><a href="/">Diego Marrs</a></h1>
            <ul>
                {pages.map(page => <li>{page}</li>)}
            </ul>
        </header>
    );
}

export default Header;