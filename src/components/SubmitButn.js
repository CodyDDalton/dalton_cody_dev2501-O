import React from 'react'

const SubmitButn = props =>{
    return(
        <button id='saveData' type='submit' style={styles.submitButn}>Save</button>
    )
}
export default SubmitButn

const styles = {
    submitButn: {
        padding: '10px',
        borderRadius: '10px',
        width: '10%',
        marginLeft: '46%',
        marginTop: '2%',
        marginBottom: '2%'
    }
}