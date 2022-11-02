import { Link, NavLink, Outlet } from "react-router-dom";

function LayoutPage() {
    return (
        <>
            <h1>Header</h1>

            <div>
                {/* <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/contact">Contact</Link> */}

                <NavLink to="/" end>
                    {({ isActive }) =>
                        isActive ? (
                            <text className="active">Home</text>
                        ) : (                      
                            <text>Home</text>
                        )
                    }
                </NavLink> | <NavLink to="/about">About</NavLink> | <NavLink to="/contact">Contact</NavLink>
            </div>

            <div>
                <Outlet />
            </div>

            <div>Footer</div>
        </>
    )
}

export default LayoutPage;