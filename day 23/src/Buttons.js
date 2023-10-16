import React from 'react';
import { useNavigate } from 'react-router-dom';

const LogoutBtn = () => {
    const navigate = useNavigate();

    const navigateLogout = () => {
        // if (Cookies.get('isLoggedIn') === 'true') {
        //     Cookies.remove('isLoggedIn');
        //     navigate('/Signin');
        // } else {
        //     navigate('/Signin');
        // }

    };

    return (

        <button className="" onClick={navigateLogout}>
            <div className="sign">
                <span className="">LOGOUT</span>
            </div>
            <div className='text'>Logout</div>
        </button>
    )
};

export { LogoutBtn };
