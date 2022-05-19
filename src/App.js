import React, { Component } from 'react';
import './App.css';
import MyHeader from '../src/components/MyHeader';
import MyForm from '../src/components/MyForm';
import MyAds from '../src/components/MyAds';


class App extends Component {

  render() {
    return (
      <div>
        <MyHeader pgTitle="blueSun" placeholder="Search..." />
        <div style = {styles.container}>
          <div style = {styles.left}>
            <h1>Newsfeed</h1>
            <h1>Messages</h1>
            <h1>Watch</h1>
          </div>
          <div style = {styles.main}>
            <MyForm style={styles.myForm}/>
          </div>
          <aside style= {styles.ads}>
            Advertisers
            <MyAds adsTitle="Advertisement 1"
              adsSubTitle="you pick"
              adsContent="ad content goes here"
            />
            <MyAds adsTitle="Advertisement 2"
              adsSubTitle="you pick"
              adsContent="ad content goes here"
            />
          </aside>
        </div>
      </div>
    )
  }
}
export default App

const styles={
  container: {
    display: 'flex',
    flexDirection: 'row',
    background: 'rgb(30, 44, 50)',
    color: 'white',
    height: '135vh'
  },
  '@media (min-width: 1024px)': {
    button: {
      fontSize:16
    }
  },
  myForm: {
    backgroundColor: 'rgb(134, 206, 230, 0.5)',
    color: 'rgb(50, 63, 69)',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
  },
  main: {
    display: 'flex',
    flex: 2,
    flexDirection: 'column',
  },
  left: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontSize: '16px',
    backgroundColor: 'rgb(134, 206, 230, 0.5)',
    color: 'rgb(255, 255, 255, 0.7',
    paddingRight: 20,
    paddingLeft: 20,
  },
  ads: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    background: 'rgb(252, 186, 4)',
    paddingRight: 20,
    paddingLeft: 20,
    color: 'rgb(50, 63, 69)'
  }
}