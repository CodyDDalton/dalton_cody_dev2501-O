import React from 'react';
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar } from 'recharts';

const data = [
    {
      name: "Refusing Beggars",
      savings: 4000,
      expenditures: 500
    },
    {
      name: "Resaling Used Soap",
      savings: 1200,
      expenditures: 1500
    },
    {
      name: "Switching to Geico",
      savings: 2500,
      expenditures: 500
    },
    {
      name: "No Pineapple",
      savings: 10000,
      expenditures: 500
    }
];

const MyBarGraph = ({myBarGraph}) =>{
    return(
        <article key={myBarGraph.id} style={styles.card}>
            <h1 style={styles.chartTitle}>{myBarGraph.chartHeader}</h1>
            <BarChart width={700} height={250} margin={{left: 60, right: 0}} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="savings" fill="#FFD149" />
                <Bar dataKey="expenditures" fill="#8df0fd" />
            </BarChart>
        </article>
    )
}
export default MyBarGraph;

const styles ={
    card: {
        transition: '0.8s',
        minHeight: '100%',
        height: '325px',
        width: '700px',
        marginLeft: '12%',
        paddingRight: '4%',
        backgroundColor: '#080B0C',
        borderRadius: '20px',
    },
    chartHeader: {
        textAlign: 'center',
        padding: '1% 1% 1% 2%',
    },
}