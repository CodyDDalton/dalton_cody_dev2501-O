import React from 'react';
import AvatarUrl from '../images/avatarIcon.png';
import DeleteX from '../images/deleteX.png';
import EditIcon from '../images/editIcon.png';

const UserPost = props => {
    return (
        <article style={styles.userArticle}>
            <div style={styles.upperPost}>
                <img src={AvatarUrl} alt='user avatar' style={styles.avatar}/>
                <h1 style={styles.username}>John Smith</h1>
                <img src={DeleteX} alt='delete post' style={styles.deleteX} onClick={props.delMe} />
            </div>
            <div style={styles.postContent}>
                <div style={styles.editContent}>
                    <img src={EditIcon} alt='edit post' style={styles.editIcon}/>
                    <p style={styles.editLabel}>Edit Post</p> 
                </div>
                <h1 style={styles.postTitle}>{props.val.pTitle}</h1>
                <p>{props.val.pDesc}</p>
                <img src={props.val.pImg} alt={props.val.pAlt} style={styles.postPic} />
            </div>
        </article>
    )
}
export default UserPost

const styles = {
    userArticle: {
        display: 'flex',
        flexDirection: 'column',
        width: '75%',
        backgroundColor: 'rgb(2, 48, 71, 0.2)',
        border: '5px solid rgb(2, 48, 71)',
        marginTop: '5%',
        marginLeft: '12%',
        marginBottom: '2%',
        borderRadius: '20px',
        boxShadow: '1px 6px 1px 1px rgba(0, 0, 0, .1)',
    },
    upperPost: {
        display: 'flex',
        flexDirection: 'row',
        fontSize: 32,
        color: 'rgb(2, 48, 71)',
        marginTop: '3.5%'
    },
    avatar: {
        borderRadius: '50px',
        height: '48px',
        width: '48px',
        padding: '0px 20px 0px 20px',
        cursor: 'pointer'
    },
    username: {
        fontSize: 32,
        marginTop: '-0.10%',
        cursor: 'pointer'
    },
    deleteX: {
        height: '32px',
        marginTop: '1%',
        marginLeft: '50%',
        cursor: 'pointer'
    },
    postContent: {
        marginLeft: '2%'
    },
    editContent: {
        display: 'flex',
        flexDirection: 'row',
        marginLeft: '15%',
        marginTop: '-4%',
        marginBottom: '1%',
        cursor: 'pointer'
    },
    editIcon: {
        height: '16px',
        width: '16px',
        padding: '2px',
    },
    editLabel: {
        fontSize: 16,
        fontWeight: '300',
        padding: '2px',
        marginTop: '-0.5%',
        color: 'white'
    },
    postPic: {
        height: '256px',
        width: '256px',
        marginLeft: '30%',
        border: '2px solid rgb(2, 48, 71)',
        borderRadius: '10px',
        marginBottom: '5%',
        backgroundColor: 'rgba(2, 48, 71, 0.2)',
        cursor: 'pointer'
    },
    postTitle: {
        color: 'white'
    }
}