import React from 'react'

const SubmitButn = props => {
    return(
        <button style={styles.submitButn}>
            {props.btnText}
        </button>
    )
}
export default SubmitButn

const styles = {
    submitButn: {
        fontWeight: 'bold',
        backgroundColor: 'rgb(255, 183, 3)',
        color: 'rgba(255, 255, 255, 0.8)',
        padding: '5px 20px 5px 20px',
        marginTop:'1%',
        border: 'none',
        fontSize: 16,
        borderRadius: '10%',
        cursor: 'pointer',
    }
}