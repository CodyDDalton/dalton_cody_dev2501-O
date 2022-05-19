import React from 'react';

const MyNav = props => {
    return (
        <nav style={styles.nav}>
            <link to='#' style={styles.link}><h1>Newsfeed</h1></link>
            <link to='#' style={styles.link}><h1>Messages</h1></link>
            <link to='#' style={styles.link}><h1>Watch</h1></link>
        </nav>
    )
}

export default MyNav

const styles = {
    nav: {
        
    },
    h1: {

    }
}