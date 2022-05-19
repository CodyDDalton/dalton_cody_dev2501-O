import React from 'react';
import BlueSun from '../images/blueSun512.png';
import SearchIcon from '../images/searchIcon.png';
import AvatarUrl from '../images/avatarIcon.png';
import SettingsIcon from '../images/settingsIcon.png';

const Header = props => { 
    return (
        <header style= {styles.header}>
            <div style= {styles.leftside}>
                <img src={BlueSun} alt='blue sun logo' style={styles.bluesun} />
                <div style={styles.searchBar}>
                    <span style={styles.searchIcon}><img src={SearchIcon} alt='search' style={styles.searchIcon}/></span>
                    <input
                        type='text'
                        style={styles.searchInput}
                        placeholder='Search...' />
                </div>
                <div style={styles.rightside}>
                    <img src={AvatarUrl} alt='avatar' style={styles.avatar}/>
                    <img src={SettingsIcon} alt='settings icon' style={styles.settingsIcon}/>
                </div>
            </div>
        </header>
    )
}
export default Header

const styles={
    header: {
        backgroundColor: 'rgb(2, 48, 71, 0.9)',
        color: 'rgba(255, 255, 255, 0.7)',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    leftside: {
        display: 'flex',
        flexDirection: 'row',
        flex: 2
    },
    bluesun: {
        borderRadius: '50%',
        height: '48px',
        width: '48px',
        cursor: 'pointer',
        padding: '8px',
        marginRight: '5%',
        marginLeft: '2%',
        alignItems: 'center'
    },
    searchBar: {
        display: 'flex',
        flexDirection: 'row',
        borderRadius: '5px 5px 5px 5px',
        padding: '20px',
        width: '40%',
        height: '32px',
        marginLeft: '20%',
        marginRight: '25%'
    },
    searchIcon: {
        background: 'rgb(251, 133, 0)',
        cursor: 'pointer',
        padding: '4px',
        height: '24px',
        borderRadius: '5px 0px 0px 5px',
        display: 'flex',
        alignItems: 'center',

    },
    searchInput: {
        border: 'none',
        borderRadius: '0px 5px 5px 0px',
        flex: 1,
        fontSize: 16,
    },
    rightside: {
        display: 'flex',
        flexDirectiion: 'row',
        flex: 2,
        alignItems: 'center',
        padding: '20px',
        marginTop: '-1%',
        marginBottom: '-1%'
        }, 
    settingsIcon: {
        height: '32px',
        padding: '8px',
        display: 'flex',
        cursor: 'pointer',
    },
    avatar: {
        height: '32px',
        width: '32px',
        cursor: 'pointer',
        borderRadius: '5%',
        padding: '8px',
        alignItems: 'center',
    }
}