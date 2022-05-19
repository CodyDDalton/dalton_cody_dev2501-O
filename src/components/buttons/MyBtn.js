import React from 'react'

const MyBtn = props => {
    return (
        <button style ={styles.myBtn} >
            {props.btnText}
        </button>
    )
}
export default MyBtn

const styles = {
    myBtn: {
        fontWeight: 'bold',
        backgroundColor: 'rgb(30, 44, 50, 0.7)',
        color: 'white',
        padding: '5%',
        margin: '2%',
        border:'none',
        fontSize: '16px',
        borderRadius: '10%',
        cursor: 'pointer',
    }
}