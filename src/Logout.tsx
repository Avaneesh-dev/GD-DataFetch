import { useEffect } from 'react';
import getCookie from './getCookie';

function Logout() {

    useEffect(() => {
        const user = getCookie('currentPassword');
        if (!user || user !== 'admin123') {
            window.location.href = '/login';
        }
    }, []);

    function deleteCookie(name: any) {
        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    }

    function logout() {
        deleteCookie('currentPassword');
        window.location.href = '/login';
    }

    return (
        <div>
            <div>
                <a href="https://www.greendumbells.com" target="_blank">
                    <img src='GDlogoHD.png' className="logo" alt="GD logo" />
                </a>
            </div>
            <h2>Are you sure you want to logout?</h2>
            <button onClick={logout}>Logout</button>
        </div>
    );
}

export default Logout;
