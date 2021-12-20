import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import AuthContext from '../../store/auth-context';

import styles from './UserProfile.module.scss'

const UserProfile = () => {
    const authCtx = useContext(AuthContext)

    const logoutHandler = () => {
        authCtx.logout()
    }

    const [isShow, setIsShow] = useState(false)
    return (
        <>
            <div className={styles.UserArea}>
                <div onClick={() => setIsShow((prev) => !prev)} className={styles.UserAvtar}>
                    <img src="https://vitalia.pl/gfx/user_space/2/1/7/3/8/2173895/avg_1f44b1d8d518b588937d82c56fb0a248.jpg" alt="user"/>
                </div>
                <ul className={`${styles.UserDropdown} ${isShow ? styles.UOpen : ''}`}>
                    <li><Link className={styles.link} to="/user/profile"> Mój profil</Link></li>
                    {/* <li><a>Powiadomienia</a><span>12</span></li> */}
                    <li><Link className={styles.link} to="/user/orders"> Zamówienia</Link></li>
                    <li><Link className={styles.link} to="/user/settings"> Ustawienia</Link></li>
                    <li><Link onClick={() => logoutHandler()} className={styles.link} to=""> Wyloguj</Link></li>
                </ul>
            </div>


        </>);
}

export default UserProfile