import React, { useState } from "react";
import { Link } from "react-router-dom";
import DashboardLogo from "../images/dashboardLogoAmb.png";
import ReportsLogo from "../images/reportsLogoAmb.png";
import IncomeLogo from "../images/incomeLogoAmb.png";
import SavingsLogo from "../images/savingsLogoAmb.png";
import SpendingLogo from "../images/spendingLogoAmb.png";
import UserAvatar from "../images/siteAvatar.png";
import BellIcon from "../images/bellLogoAmb.png";
import DogAd from "../images/ads/unleashedAd.gif";
import SiteIcon from "../images/lightBulbLogo.png";
import GreenGiantAd from "../images/ads/greenGiantAd.gif";
import HorizontalLine from "../components/HorizontalLine";
import MyLineChart from "../components/charts/MyLineChart";
import MyPieChart from "../components/charts/MyPieChart";
import MyBarGraph from "../components/charts/MyBarGraph";

function Dashboard() {
    const [myLineChart] = useState([
        {chartHeader: 'Income vs Spending'}
    ]);
    const [myPieChart] = useState([
        {chartHeader: 'Spending Summary'}
    ]);
    const [myBarGraph] = useState([
        {chartHeader: 'Savings Avenues'}
    ]);
    return (
    <div style={styles.container}>
      <nav style={styles.nav}>
      <Link id="linkId" to="/"><img id="siteIcon" src={SiteIcon} alt='site logo' style={styles.siteIcon} /></Link>
        <ul>
          <li id="navLinks" style={styles.linkList}>
            <img src={DashboardLogo} alt="dashboard" style={styles.linkLogos} />
              <Link id="linkId" to="/dashboard"><h3 style={styles.linkLabels}>Dashboard</h3></Link>
          </li>
          <li id="navLinks" style={styles.linkList}>
            <img src={ReportsLogo} alt="reports" style={styles.linkLogos} />
              <Link id="linkId" to="/reports"><h3 style={styles.linkLabels}>Reports</h3></Link>
          </li>
          <li id="navLinks" style={styles.linkList}>
            <img src={IncomeLogo} alt="income" style={styles.linkLogos} />
              <Link id="linkId" to="/income"><h3 style={styles.linkLabels}>Income</h3></Link>
          </li>
          <li id="navLinks" style={styles.linkList}>
            <img src={SavingsLogo} alt="savings" style={styles.linkLogos} />
              <Link id="linkId" to="/savings"><h3 style={styles.linkLabels}>Savings</h3></Link>
          </li>
          <li id="navLinks" style={styles.linkList}>
            <img src={SpendingLogo} alt="spending" style={styles.linkLogos} />
              <Link id="linkId" to="/spending"><h3 style={styles.linkLabels}>Spending</h3></Link>
          </li>
          </ul>
          </nav>
          <div id="pageTopper" style={styles.pageTopper}>
            <img src={DashboardLogo} alt="dashboard" style={styles.pageLogo} />
            <div style={styles.titleSpot}>
                <h1 id="pageTitle" style={styles.pageTitle}>Dashboard</h1>
                <HorizontalLine color='#FFD149' marginTop='-15%' width='100%' style={styles.firstLine} />
                <HorizontalLine color='#FFD149' width='50%' style={styles.secLine} />
            </div>
          </div>
    <div style={styles.main}>
        <div style={styles.chartsSectionTop}>
            <p style={styles.myLineChart}>
                {myLineChart.map((myLineChart, id) => (
                    <MyLineChart 
                        key={id}
                        id={id}
                        myLineChart={myLineChart}
                    />
                ))}
            </p>
            <p style={styles.myPieChart}>
                {myPieChart.map((myPieChart, id) => (
                    <MyPieChart
                        key={id}
                        id={id}
                        myPieChart={myPieChart}
                    />
                ))}
            </p>
        </div>
        <div style={styles.chartsSectionBottom}>
            <p style={styles.myBarGraph}>
                    {myBarGraph.map((myBarGraph, id) => (
                        <MyBarGraph
                            key={id}
                            id={id}
                            myBarGraph={myBarGraph}
                        />
                    ))}
                </p>
        </div>
    </div>
    <div style={styles.right}>
      <head style={styles.head}>
        <Link to="/settings"><img id='nBell' src={BellIcon} alt='notice bell' style={styles.icons} /></Link>
        <Link to="/settings"><img id='avatar' src={UserAvatar} alt='user avatar' style={styles.avatar} /></Link>
        <Link id="linkId" to="/settings"><h3 id="username" style={styles.userName}>John Smith</h3></Link>
      </head>
      <article style={styles.adSection}>
        <p style={styles.advertTitle}>Advertisements</p>
          <div style={styles.advert}>
            <img src={DogAd} alt='unleashed ad' style={styles.adWindow} />
          </div>
          <div style={styles.advert}>
            <img src={GreenGiantAd} alt='green giant ad' style={styles.adWindow} />
          </div>
      </article>
    </div>
  </div>
  )
  }
export default Dashboard;

const styles={
    container: {
      display: 'flex',
      flexDirection: 'row',
      height: '100%',
      width: '100%',
      backgroundColor: 'black'
    },
   titleSpot: {
       display: 'flex',
       flexDirection: 'column',
       marginRight: '10%',
    },
    firstLine: {
        borderStyle: 'dashed',

    },
    secLine: {
        borderStyle: 'dashed',
    },
    pageTitle: {
      fontSize: 48,
      marginTop: '-0.25%',
    },
    head: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: '15px 20px 0px 20px',
      borderRadius: "0px 0px 0px 20px",
    },
    pageTopper: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        height: '80px',
        justifyContent: 'space-between',
        marginTop: '1%',
        marginBottom: '-2%',
        cursor: 'pointer',
    },
    pageLogo: {
        height: '50px',
        width: '50px',
        marginRight: '1%',
        marginLeft: '100%'
    },
    main: {
        marginTop: '5%',
    },
    chartsSectionTop: {
        marginLeft: '-36.5%',
        marginRight: '5%',
        display: 'flex',
        flexDirection: 'row',
    },
    chartsSectionBottom: {
        marginLeft: '-54.5%',
        marginTop: '-2%'
    },
    myLineChart: {
        marginRight: '2%',
        height: '20%',
    },
    myPieChart: {
        height: '20%',
    },
    myBarGraph: {
    },
    right: {
      width: '85%',
      backgroundColor: '#111719',
      alignItems: 'center',
      marginLeft: '-12%',
      paddingRight: '2%'
   
    },
     nav: {
       backgroundColor: '#111719',
       width: '35%',
       padding: '10px',
       marginLeft: '-2%',
       height: '135h',
       justifyContent: 'space-between'
     },
     linkList: {
       display: 'flex',
       flexDirection: 'row'
     },
     linkLogos: {
       height: '32px',
       marginRight: '1%'
     },
     linkLabels: {
       fontSize: 24,
       marginTop: '-1%',
     }, 
     icons: {
       height: '32px',
       marginRight: '1%'
     },
     avatar: {
       height: '32px',
       width: '32px',
       borderRadius: '50%',
       marginRight: '1%',
       marginLeft: '1%',
       padding: '2px',
       marginTop: '-0.05%',
       border: "1px solid rgb(255, 209, 73)"
     },
     userName: {
       fontSize: 18,
       padding: '2px',
       marginTop: '-0.005%',
     },
     userInt: {
       display: 'flex',
       flexDirection: 'row',
       marginTop: '2%',
       justifyContent: 'space-between'
     },
     siteIcon: {
       height: '64px',
       padding: '20px',
       marginBottom: '2%'
     },
     adSection: {
       display: 'flex',
       flexDirection: 'column',
       alignItems: 'center',
     },
     advertTitle: {
       fontSize: 20,
       color: '#080B0C'
     },
     advert: {
       display: 'flex',
       flexDirection: 'column'
     },
     adWindow: {
       borderRadius: '5px',
       width: '80%',
       height: '80%',
       marginLeft: '10%',
       marginBottom: '20%',
       padding: '20px'
     },
     adButton: {
       width: '50%',
       padding: '5px',
       marginTop: '-5%',
       marginLeft: '40%',
       marginBottom: '5%',
       borderRadius: '5px'
     }
   
   }