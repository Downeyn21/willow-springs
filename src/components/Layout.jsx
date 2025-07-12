import { Outlet } from 'react-dom'

function Layout() {
    return ( 
        <>
            <NavBar />
            <main>
                <Outlet />
            </main>
        </>
    );
}

export default Layout;