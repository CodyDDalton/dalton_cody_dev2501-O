import React from 'react';
import Logo from '../images/hourglass_logo.png'

const Nav = props => {
    return(
        <nav style={styles.nav}>
            <img id='logo' src={Logo} alt='company logo' style={styles.logo} />
            <div style={styles.navItem}>
                <h3 id='chosenItem' style={styles.chosenItem}>Dashboard</h3>
            </div>
            <div style={styles.navItem}>
                <h3 id='navItem' style={styles.navText}>Profile</h3>
            </div>
            <div style={styles.navItem}>
                <h3 id='navItem' style={styles.navText}>Job Feed</h3>
            </div>
            <div style={styles.navItem}>
                <h3 id='navItem' style={styles.navText}>Save Jobs</h3>
            </div>
            <div style={styles.navItem}>
                <h3 id='navItem' style={styles.navText}>Settings</h3>
            </div>
        </nav>

    )
}
export default Nav

const styles = {
    nav: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'rgb(36, 50, 124)',
        width: '20%',
        borderRadius: '20px 0px 0px 20px',
        margin: '0.5% 0% 0.5% 0.5%',
        height: '120vh'
    },
    logo: {
        padding: '5px',
        marginLeft: '33%',
        marginTop: '10%',
        marginBottom: '15%',
        borderRadius: '5px',
        cursor: 'pointer',
        height: '64px',
        width: '64px'
    },
    navItem: {
        display: 'flex',
        flexDirection: 'row',
    },
    navText: {
        marginLeft: '30%',
        cursor: 'pointer',
        opacity: '70%'

    },
    chosenItem: {
        marginLeft: '30%',
        color:'white',
        opacity: '100%'
    }
}