import React from 'react';

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-dark bg-dark">
                <a className="navbar-brand" href="/"> <span>&#128214;</span> Make Your-Self Great Again</a>
                    <ul className="navbar-nav d-flex flex-row">
                        <li className="nav-item active mx-3">
                            <a className="nav-link" href="/courses">Courses</a>
                        </li>
                        <li className="nav-item active mx-3">
                            <a className="nav-link" href="/blog">Blog</a>
                        </li>
                        <li className="nav-item active mx-3">
                            <a className="nav-link" href="/pdf">PDF Book</a>
                        </li>
                        <li className="nav-item active mx-3">
                            <a className="nav-link" href="/instructors">Instructors</a>
                        </li>
                        <li className="nav-item active mx-3">
                            <button className="btn btn-light">Sign In</button>
                        </li>
                        <li className="nav-item active mx-3">
                            <button className="btn btn-light">Register</button>
                        </li>
                    </ul>
            </nav>
        </div>
    );
};

export default Header;