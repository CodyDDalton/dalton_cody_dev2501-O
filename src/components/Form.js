import React from 'react'
import AvatarUrl from '../images/avatarIcon.png';
import SubmitButn from '../components/buttons/SubmitButn';

const Form = props => {
    return(
        <form
            style={styles.form}
            onSubmit={props.addItem} >
            <div style={styles.userDisplay}>
                <img src={AvatarUrl} alt='user avatar' style={styles.avatar} />
                <h1 style={styles.username}>John Smith</h1>
            </div>
            <div style={styles.inputContainer}>
                <div style={styles.titleArea}>
                    <div style={styles.titleSection}>
                        <input
                            name="pTitle"
                            value={props.pTitle}
                            onChange={props.getInput}
                            style={styles.postTitle}
                            placeholder="What are you posting about?" />
                    </div>
                    <div style={styles.contentArea}>
                        <input
                            name='pDesc'
                            value={props.pDesc}
                            onChange={props.getInput}
                            style={styles.postContent}
                            placeholder='What do you have to stay about it?' />
                        <input
                            name='pImg'
                            value={props.pImg}
                            onChange={props.getInput}
                            placeholder='Image Upload' />
                        <SubmitButn
                            btnText='Post' />
                    </div>
                </div>
            </div>
        </form>
    )
};
export default Form

const styles={
    form: {
        display: 'flex',
        flexDirection: 'column',
        width: '75%',
        backgroundColor: 'rgb(2, 48, 71, 0.2)',
        border: '5px solid rgb(2, 48, 71)',
        marginTop: '5%',
        marginLeft: '12%',
        borderRadius: '20px',
        boxShadow: '1px 6px 1px 1px rgba(0, 0, 0, .1)',
    },
    userDisplay: {
        display: 'flex',
        flexDirection: 'row',
    },
    username: {
        fontSize: 32,
        color: 'rgb(2, 48, 71)',
        marginTop: '3.5%'
    },
    inputContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    titleArea: {
        display: 'flex',
        flexDirection: 'column',
        margin: '5%',
        width: '30%',
        alignItems: 'center'
    },
    titleSection: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        borderRadius: '5px',
        height: '48px',
        width: '48px',
        padding: '20px'
    },
    postTitle: {
        height: '16px',
        width: '500px',
        borderRadius: '5px',
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        color: 'rgb(2, 48, 71)',
        fontSize: 16,
    },
    contentArea: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: '2%'
    },
    postContent: {
        height: '75px',
        borderRadius: '5px',
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        color: 'rgb(2, 48, 71)',
        width: '500px',
        marginTop: '2%',
        marginBottom: '2%'
    }
}