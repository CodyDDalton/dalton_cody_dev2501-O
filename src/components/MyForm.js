import React from 'react'
import MyBtn from '../components/buttons/MyBtn';
import MyAvatar from '../components/MyAvatar';

const MyForm = props => {
    return (
        <form 
            style={styles.myForm}
            onSubmit={props.postBlurb}>
                <div style={styles.inputContainer}>
                    <MyAvatar />
                    <label for='title'>Post Title: </label>
                    <input id='title'
                        style={styles.titleInput}
                        placeholder='Title Your Post' />
                    <label for='description'>Description: </label>
                    <input id='description'
                        style={styles.postInput}
                        placeholder='What do you have that needs saying?' />
                    <div style={styles.buttonRow}>
                        <MyBtn btnText="Post" />
                        <MyBtn btnText='Edit' />
                        <MyBtn btnText='Delete' />
                    </div>
                </div>
            </form>
    )
};
export default MyForm;

const styles= {
    myForm: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '85%',
        margin: '1%',
        marginTop: '2%',
        marginLeft: '5%',
        padding: '2%',
        backgroundColor: '',
        color: '',
        borderRadius: '20%'
    },
    inputContainer: {
        display: 'flex',
        flexDirection: 'column',
        width: '85%',
        alignItems: 'center',
        padding: '2%',
        backgroundColor: 'rgb(134, 206, 230, 0.5)',
        color: '',
        borderRadius: '20px'
    },
    titleInput: {
        width: 300,
        height: 25,
        marginBottom: '1%',
        borderRadius: '5px'
    },
    postInput: {
        width: 300,
        height: 50,
        borderRadius: '5px'
    },
    buttonRow: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: '-4%',
        marginTop: '2%'

    }

}