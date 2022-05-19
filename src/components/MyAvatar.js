import React from 'react'
import AvatarIcon from '../images/avatarIcon.png';

const MyAvatar = props => {
    return (
        <img src={AvatarIcon} alt='avatar' style={styles.myAvatar} />
    )
}
export default MyAvatar

const styles={
    myAvatar: {
        height: '64px',
        cursor: 'pointer',
        borderRadius: '50%',
        padding: '1px',
        margin: '1%',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        
    }
}