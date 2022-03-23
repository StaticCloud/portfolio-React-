const Header = ({ pages }) => {
    return (
        <header>
            <h2>Diego Marrs</h2>
            <ul>
                {pages.map(page => <li>{page}</li>)}
            </ul>
        </header>
    );
}

export default Header;