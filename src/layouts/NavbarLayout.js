import { NavLink, Outlet } from "react-router-dom"

function NavbarLayout(){
    return (
        <div>
            <header>
                <nav>
                    <h1>Controller Showcase</h1>
                    <NavLink to="/">Home</NavLink>
                    <br></br>
                    <NavLink to="about">About</NavLink>
                    <br></br>

                    {/* Routes to brand pages should be in its own component/page */}
                    <NavLink to="Nintendo">Nintendo</NavLink>
                    <br></br>
                    <NavLink to="Playstation">Playstation</NavLink>
                    <br></br>
                    <NavLink to="Xbox">Xbox</NavLink>
                    <br></br>
                    <NavLink to="Sega">Sega</NavLink>

                </nav>
            </header>

            <main>
                <Outlet/>
            </main>
        </div>
    )
}

export default NavbarLayout