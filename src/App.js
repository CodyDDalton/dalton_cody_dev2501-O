import React, { Component } from 'react';
import './App.css';
import Header from '../src/components/Header';
import Form from '../src/components/Form';
import Ads from '../src/components/Ads';
import Nav from '../src/components/Nav';
import PostPic from './images/cinemaCitadel.png';
import UserPost from '../src/components/UserPost';

class App extends Component {
  state = {
    pList: [{
      pTitle: 'Cool New Logo!',
      pDesc: 'Made by my fiancee for my next portfolio project',
      pImg: PostPic,
      pAlt: 'cinema citadel logo'
    }],
    color: 'orange'
  }

  componentDidMount() {
    this.timer = setTimeout(
      () => this.changeColor('white'),
      2000
      );
  }

  changeColor = (newColor) => {
    this.setState({
      color: newColor
    })
  }

  getInput = e => {
    if(e.target.name === 'pTitle'){
      this.setState({pTitle: e.target.value})
    }
    if(e.target.name === 'pDesc'){
      this.setState({pDesc: e.target.value})
    }
    if(e.target.name === 'pImg'){
      this.setState({pImg: e.target.value})
    }
  }

  addItem = e => {
    e.preventDefault()
      this.setState({
        pList: [...this.state.pList,{pTitle:this.state.pTitle, pDesc:this.state.pDesc, pImg:this.state.pImg}]
      });

    e.target.reset()
  }

removeItem = key => {
  const newpList = [...this.state.pList];
  newpList.splice(key, 1);
  this.setState(() => ({
    pList: newpList
  }));
}

  render() {
    let postList = this.state.pList.map((element, i) => {
      return <UserPost 
        key={i} 
        val={element}
        delMe={() =>this.removeItem(i)} />
    })

    return (
      <div style = {{ backgroundColor: this.state.color}}>
        <Header />
        <section style={styles.bodyZone}>
          {/* <div style={styles.leftSide}> */}
            <Nav style = { { backgroundColor: this.state.color} }/>
          {/* </div> */}
          <main style={styles.midSection}>
            <Form
              getInput={this.getInput}
              addItem={this.addItem}
            />
            {postList}
          </main>
          <aside style={styles.rightSide}>
            <p style={styles.adverts}>Advertisements</p>
            <Ads />
            <Ads />
          </aside>
        </section>
      </div>
    )
  }
}
export default App

const styles = {
  bodyZone: {
    display: 'flex',
    flexDirection: 'row',
    background: 'rgba(251, 133, 0, 0.4)',
    height: '100%'

  },
  leftSide: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontSize: 16,
    backgroundColor: 'rgb(2, 48, 71)',
    color: 'rgb(2, 48, 71, 0.4)',
    boxShadow: '1px 6px 1px 1px rgba(0, 0, 0, .1)',
    padding: '10px'
  },
  midSection: {
    display: 'flex',
    flex: 2,
    flexDirection: 'column'

  },
  articlePost: {
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
delete: {
  height: '32px',
  marginTop: '1%',
  marginLeft: '50%',
  cursor: 'pointer'
},
postContent: {
  marginLeft: '2%'
},
postedPic: {
  height: '256px',
  width: '256px',
  marginLeft: '30%',
  border: '2px solid rgb(2, 48, 71)',
  borderRadius: '10px',
  marginBottom: '5%',
  backgroundColor: 'rgba(2, 48, 71, 0.2)',
  cursor: 'pointer'

},
rightSide: {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: 'rgb(2, 48, 71, 0.8)',
  padding: '20px'
},
adverts: {
  color: 'rgb(2, 48, 71)',
  fontWeight: '400',
  fontSize: 16
},
editIcon: {
  height: '16px',
  width: '16px',
  padding: '2px',
},
otherPostCont: {
  alignItems: 'left',
  display: 'flex',
  flexDirection: 'column'
},
editDisplay: {
  display: 'flex',
  flexDirection: 'row',
  marginLeft: '15%',
  marginTop: '-4%',
  marginBottom: '1%',
  cursor: 'pointer'
},
editLabel: {
  fontSize: 16,
  fontWeight: '300',
  padding: '2px',
  marginTop: '-0.5%',
  color: 'white'
  
}


}