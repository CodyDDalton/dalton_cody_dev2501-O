import React from 'react';
import CheesePic from '../images/hotSingles.jpg';

const MyAds = props => {
    return (
        <article style={styles.myArticles}>
            <img src={CheesePic} alt="melting cheese gif" />
            <h1>Hot Singles in your area!</h1>
            <p>Cheddar, American, Gouda, Parmesan...</p>
            <div style={styles.buttons}>
                <button type="submit" style={styles.cardButton}>Learn More</button>
            </div>
        </article>
    )
}

export default MyAds

const styles= {
    myArticles: {
        display: 'flex',
        flexDirection: 'column',
        width: '250px',
        padding: '1%',
        backgroundColor: '',
        color: '',
        justifyContent: 'space-between',
        borderRadius: '5px',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        textAlign: 'center',
        margin: '5%'
    },
    buttons: {
        display: 'flex',
        flexDirection: 'row',
        padding: '20px',
    },
    cardButton: {
        width: '30%',
        backgroundColor: 'none',
        color: 'black',
        marginLeft: '35%',
        padding: '5%'
    }
}