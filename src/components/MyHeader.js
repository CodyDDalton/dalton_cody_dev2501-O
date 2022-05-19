import React from 'react';
import ImageUrl from '../images/avatarIcon.png';
import Logo from '../images/blueSun512.png';
import MyIcons from './MyIcons';
import SearchIcon from '../images/searchIcon.png';
import SettingsIcon from '../images/settingsIcon.png';


const MyHeader = props => {
    return (
        <header style = {styles.myHeader}>
            <div style={styles.left}>
                <div style={styles.logo}><img src={Logo} alt="logo" style={styles.logo}/>
                </div>
                <h1>Blue Sun</h1>
            </div>
            <div style={styles.searchCont}>
                <span style={styles.inputIcon}><img src={SearchIcon} alt='search' style={styles.inputIcon}/></span>
                <input
                    type='text'
                    style={styles.inputwithIcon}
                    placeholder="Search" />
            </div>
            <div style={styles.rightSide}>
                <MyIcons IconImg={ImageUrl} />
                <img src={SettingsIcon} style={styles.settingsIcon}/>
            </div>
        </header>
    )
}
export default MyHeader

const styles= {
    myHeader: {
        padding: '1%',
        backgroundColor: 'rgb(0, 0, 0, 0.7)',
        color: 'rgb(163, 173, 194)',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        boxShadow: '1px 6px 1px 1px rgba(0, 0, 255, .1)'
    },
    left: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        marginBottom: '10px',
        color: 'lightblue',
        fontSize: 18
    },
    logo: {
        borderRadius: '40%',
        height: '84px',
        width: '84px',
        marginTop: '2%',
        marginRight: '10%',
        alignItems: 'center'
    },
    searchCont: {
        border: '1px solid #ddd',
        display: 'flex',
        flexDirection: 'row',
        borderRadius: '2px',
        width:'40%'
    },
    inputIcon: {
        background: "#ddd",
        padding: '10px',
        height: '24px',
        display: 'flex',
        alignItems: 'center',
        fontSize: '1rem'
    },
    inputwithIcon: {
        border: 'none',
        flex: 1,
        padding: '10px'
    },
    rightSide: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: '3%'
    },
    settingsIcon: {
        height: '48px',
    }

}