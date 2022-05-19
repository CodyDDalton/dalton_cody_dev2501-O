import React from 'react';

const Avatar = props => {
    return(
        <img src={props.avatar} alt={props.avatarAlt} style={styles.avatar} />
    )
}
export default Avatar

const styles={
    avatar: {
        height: '64px',
        width: '64px',
        cursor: 'pointer',
        borderRadius: '40%',
        padding: '1px',
        margin: '1%',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        
    }
}