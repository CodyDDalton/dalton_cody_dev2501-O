import React from 'react';

const Nav = props => {
    return (
        <nav style={styles.nav}>
            <h2 id='pageClicks' style={styles.pageTab}>News Feed</h2>
            <h2 id='pageClicks' style={styles.pageTab}>Messages</h2>
            <h2 id='pageClicks' style={styles.pageTab}>Watch</h2>
        </nav>
    )
}
export default Nav

const styles={
    nav: {
        display: 'flex',
        flexDirection: 'column',
        cursor: 'pointer',
        alignItems: 'center',
        marginTop: '25%'

    },
    pageTab: {
        color: 'white',
        fontSize: 24,
        padding: '0px 20px 0px 20px'
    }
}