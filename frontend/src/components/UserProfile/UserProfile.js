import React, { useContext, useState } from 'react';
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
                    <img src="https://w7.pngwing.com/pngs/340/956/png-transparent-profile-user-icon-computer-icons-user-profile-head-ico-miscellaneous-black-desktop-wallpaper-thumbnail.png" alt="user"/>
                </div>
                <ul className={`${styles.UserDropdown} ${isShow ? styles.UOpen : ''}`}>
                    <li><a>Mój profil</a></li>
                    {/* <li><a>Powiadomienia</a><span>12</span></li> */}
                    <li><a>Zamówienia</a></li>
                    <li><a>Ustawienia</a></li>
                    <li><a onClick={() => logoutHandler()}>Wyloguj</a></li>
                </ul>
            </div>


        </>);
}

export default UserProfile