import React from 'react';
import { LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Line} from 'recharts';


const data = [
    {
      name: 'Jan',
      income: 4000,
      spending: 1400,
      amt: 2400
    },
    {
      name: 'Feb',
      income: 3000,
      spending: 1398,
      amt: 2210
    },
    {
      name: 'Mar',
      income: 9800,
      spending: 2400,
      amt: 2500
    },
    {
      name: 'Apr',
      income: 50,
      spending: 5500,
      amt: 2700
    }
];

const MyLineChart = ({myLineChart}) => {
    return(
        <article key={myLineChart.id} style={styles.card}>
            <h1 style={styles.chartTitle}>{myLineChart.chartHeader}</h1>
            <LineChart
                width={400}
                height={150}
                data={data}
                margin={{
                    top:5,
                    right:0,
                    left:0,
                    bottom:5
                }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="income" stroke="#8df0fd" />
                <Line type="monotone" dataKey="spending" stroke="#FFD149" />
            </LineChart>
        </article>
    )
};
export default MyLineChart;

const styles={
    card: {
        transition: '0.3s',
        minHeight: '100%',
        width: '400px',
        height: '325px',
        marginRight: '10%',
        paddingLeft: '2%',
        paddingRight: '6%',
        backgroundColor: '#080B0C',
        borderRadius: '20px'
    },
    chartTitle: {
        marginLeft: '-5%',
        marginBottom: '15%',
        padding: '1%',
    },
}
