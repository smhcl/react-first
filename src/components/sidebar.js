const Sidebar = () => {
    return (
        <aside className="bd-sidebar col-3">
            <h4>Feature Categories</h4>
            <nav className="bd-links" id="bd-docs-nav" aria-label="Docs navigation">
                <ul className="list-unstyled fw-normal pb-1 small">
                    <li><a href="/" className="d-inline-flex align-items-center rounded active">Literature</a></li>
                    <li><a href="/" className="d-inline-flex align-items-center rounded">Sci-Fi</a></li>
                    <li><a href="/" className="d-inline-flex align-items-center rounded">Fantasy</a></li>
                </ul>
            </nav>
        </aside>
    );
}

export default Sidebar;
