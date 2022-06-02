import React from 'react'
import Bell from '../images/notificationBell.png'
import Arrow from '../images/dropdown.png';
import Avatar from '../images/avatarPic.png'

const Header = props => {
    return(
        <head style={styles.header}>
            <h1 style={styles.pageTitle}>My Profile</h1>
            <div style={styles.userSpot}>
                <img id="bell" src={Bell} alt='notifications' style={styles.bell} />
                <a href="/settings"><img id="avatar" src={Avatar} alt='avatar' style={styles.avatar} /></a>
                <img id="arrow" src ={Arrow} alt='dropdown' style={styles.dropdown} />
            </div>
        </head>
    )
}
export default Header

const styles = {
    header: {
        backgroundColor:'rgb(36, 50, 124)',
        display:'flex',
        height: '55px',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: '0px 20px 0px 0px'
    },
    pageTitle: {
        fontSize: 24,
        color:'white',
        opacity:'95%',
        padding: '5px',
        marginTop:'0.5%'
    },
    userSpot: {
        display: 'flex',
        flexDirection: 'row',
        width: '20%',
        justifyContent: 'space-evenly',
        marginTop: '1%',
        marginBottom: '1%'
    },
    bell: {
        height: '80%',
        marginTop: '1%'
    },
    avatar: {
        height: '80%',
        marginTop: '1%'
    },
    dropdown: {
        height: '80%',
        marginTop: '1%',
        padding:'2px',
        borderRadius:'10px'

    }
}