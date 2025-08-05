import { Outlet } from 'react-router-dom'
import NavBar from './NavBar';
import Footer from './Footer';

function Layout() {
    return ( 
        <>
            <div className='layoutWrapper'>
                <NavBar />
                    <main className='mainWrapper'>
                        <Outlet />
                    </main>
                <Footer />
            </div>
        </>
    );
}

export default Layout;