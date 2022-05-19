import React from 'react';
import AdGif from '../images/tideAd.gif';

const Ads = props => {
    return (
        <article style={styles.adArticle}>
            <img src={AdGif} alt='tide ad' />
            <div style={styles.buttons}>
                <button type='submit' style={styles.cardButton}>Buy Tide</button>
            </div>
        </article>
    )
}
export default Ads

const styles={
    adArticle: {
        display: 'flex',
        flexDirection: 'column',
        width: '250px',
        padding: '1%',
        backgroundColor: 'rgb(2, 48, 71, 0.2)',
        color: 'white',
        justifyContent: 'space-between',
        borderRadius: '5px',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        textAlign: 'center',
        margin: '5%'
    },
    buttons: {
        display: 'flex',
        flexDirection: 'row',
        padding: '20px'
    },
    cardButton: {
        width: '50%',
        backgroundColor: 'rgb(2, 48, 71)',
        color: 'white',
        fontSize: 16,
        marginLeft: '30%',
        padding: '5%',
        cursor: 'pointer'
    }
}