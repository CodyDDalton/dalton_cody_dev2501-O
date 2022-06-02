import React from 'react'
import Nav from './Nav'
import SubmitButn from './SubmitButn'
import Header from './Header'

const UserForm = props => {
    return (
        <div key={props.id} style={styles.container}>
            <Nav style={styles.navSpot}/>
            <main style={styles.main}>
                <Header />
                <div style={styles.splitMain}>
                    <div style={styles.userOptions}>
                        <h3 id='chosenText' style={styles.chosenText}>Edit Profile</h3>
                        <h3 id='optionText' style={styles.optionText}>Notifications</h3>
                        <h3 id='optionText' style={styles.optionText}>Choose Plan</h3>
                        <h3 id='optionText' style={styles.optionText}>Password & Security</h3>
                    </div>
                    <form style={styles.userInfo}>
                        <h2 style={styles.editProfile}>Edit Profile</h2>
                        <img src={props.picture} alt='user avatar' style={styles.avatar} />
                        <h2 style={styles.userData}>User Data</h2>
                        <div style={styles.nameData}>
                            <input id='firstName' style={styles.names} type='text' value={props.firstName}></input>
                            <input style={styles.names} type='text' value={props.lastName}></input>
                        </div>
                        <input style={styles.street} type='text' value={props.streetNum+" "+props.streetName}></input>
                        <div style={styles.addressData}>
                            <input style={styles.locations} type='text' value={props.city}></input>
                            <input style={styles.locations} type='text' value={props.state}></input>
                            <input style={styles.locations} type='text' value={props.postcode}></input>
                        </div>
                        <div style={styles.nameData}>
                            <input style={styles.logins} type='text' value={props.username}></input>
                            <input style={styles.logins} type='password' value={props.password}></input>
                        </div>
                        <div style={styles.nameData}>
                            <input style={styles.logins} type='text' value={props.email}></input>
                            <input style={styles.logins} type='text' value={props.phone}></input>
                        </div>
                        <SubmitButn />
                        </form>
                    </div>
            </main>
        </div>
        )
}
export default UserForm

const styles={
    container: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'row'
    },
    navSpot: {
        display: 'flex',
        flexDirection: 'column',
        width: '20%',
        height: '135vh',
    },
    main: {
        width: '80%',
        backgroundColor: 'rgb(194, 230, 255, 0.6)',
        margin: '0.5% 0.5% 0.5% 0.25%',
        borderRadius: '0px 20px 20px 0px',
    },
    avatar: {
        height: '128px',
        width: '128px',
        marginLeft: '42%',
        borderRadius: '50%',
        marginTop: '2%',
    },
    userInfo: {
        backgroundColor:'rgb(36, 50, 124)',
        width: '70%',
        display:'flex',
        marginLeft:'18%',
        marginTop: '1%',
        flexDirection: 'column',
        borderRadius: '20px',
        border: '5px solid white'
    },
    nameData: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginLeft:'5.5%',
        marginRight: '3.95%'
    },
    names: {
        width: '35%',
        padding: '10px 40px 10px 7px',
        borderRadius:'10px',
        marginLeft:'1%',
        marginTop: '3%',
        border: '3px solid rgba(36, 50, 124, 0.7)'
    },
    street: {
        width: '73.75%',
        marginLeft: '9.5%',
        marginTop: '2%',
        padding: '10px 48px 10px 11px',
        borderRadius: '10px',
        border: '3px solid rgba(36, 50, 124, 0.7)'
    },
    addressData: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginLeft:'5.75%',
        marginRight: '4.75%',
        marginTop: '2%'
    },
    locations: {
        width: '20%',
        padding: '10px 36px 10px 10px',
        borderRadius: '10px',
        marginLeft: '1%',
        border: '3px solid rgba(36, 50, 124, 0.7)'
    },
    logins: {
        width: '35%',
        padding: '10px 40px 10px 10px',
        borderRadius:'10px',
        marginLeft:'1%',
        marginTop: '2%',
        border: '3px solid rgba(36, 50, 124, 0.7)'
    },
    splitMain: {
        display: 'flex',
        flexDirection: 'row'
    },
    userOptions: {
        display: 'flex',
        flexDirection: 'column',
        marginTop: '3%',
        marginLeft: '5%',
        marginRight: '-15%',
    },
    optionText: {
        cursor: 'pointer',
        opacity: '70%'
    },
    chosenText: {
        opacity: '100%',
    },
    editProfile: {
        marginLeft:'40%',
        fontSize: 32,
        color: 'white',
        opacity: '90%'
    },
    userData: {
        marginLeft:'44%',
        fontSize: 24,
        color:'white',
        opacity: '90%'

    }
    
}