const Header = props => {
    const { loginVisibleFn } = props
    return (
        <header className="main-header">
        <div className="navbar navbar-expand-lg navbar-light bg-light">
            <nav className="logo-container container-xxl flex-wrap flex-md-nowrap">
                <a href="/" className="logo-link">
                    <figure className="figure">
                        <img className="figure-img img-fluid" src="./assets/images/book_logo.jpg" alt="Books" title="Books" />
                    </figure>
                </a>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item col-6 col-md-auto navbar-dark">
                            <a className="nav-link p-2" href="/">Home</a>
                        </li>
                        <li className="nav-item col-6 col-md-auto">
                            <a className="nav-link p-2" href="/">About</a>
                        </li>
                        <li className="nav-item col-6 col-md-auto">
                            <a className="nav-link p-2" href="/">Contact US</a>
                        </li>
                    </ul>
                    <div className="navbar-nav flex-row flex-wrap ms-md-auto">
                        <a href="/" className="me-4">
                            <i className="bi-search header-icon"></i>
                        </a>
                        <a onClick={loginVisibleFn} href="#">
                            <i className="bi-person-circle header-icon"></i>
                        </a>
                    </div>
                </div>
            </nav>
        </div>
    </header>
    )
}

export default Header;