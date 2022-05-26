import React from 'react';
import { PieChart, Pie, Tooltip, Legend } from 'recharts';

const data01 = [
    {
      name: "Risky Gamble",
      expense: 8000,
      value: "NFTs",
    },
    {
      name: "Investment",
      value:"Stock Market",
      expense: 3800,
      fill: "#FFD149"
    },
    {
      name: "Necessity",
      value:"Pineapples",
      expense: 10000,
      fill:"#8df0fd"
    }
];

const MyPieChart = ({myPieChart}) =>{
    return(
        <article key={myPieChart.id} style={styles.card}>
            <h1 style={styles.chartTitle}>{myPieChart.chartHeader}</h1>
                <PieChart width={350} height={250}>
                    <Pie data={data01} dataKey="expense" nameKey="value" cx="50%" cy="50%" outerRadius={50} label/>
                    <Legend iconSize="4" iconType="diamond" width="85%" layout="vertical"/>
                   <Tooltip />
                </PieChart>
        </article>
    )
};
export default MyPieChart;

const styles={
    card: {
        transition: '0.3s',
        minHeight: '100%',
        height: '325px',
        width: '300px',
        marginLeft: '10%',
        minWidth: '100%',
        backgroundColor: '#080B0C',
        borderRadius: '20px',
    },
    chartHeader: {
        textAlign: 'center',
        padding: '1%',
    },
}



