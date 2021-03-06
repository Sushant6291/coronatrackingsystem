import React from 'react'
import { Line } from 'react-chartjs-2'
import { Chart as ChartJs, Title, Tooltip, CategoryScale, LinearScale, PointElement , Legend, LineElement} from 'chart.js';
ChartJs.register(
    Title, Tooltip, CategoryScale, LinearScale, PointElement , Legend, LineElement
)

/**
 * @author
 * @function LineGraph
 **/

const LineGraph = (props) => {
    return (
        <div style={{
            height:'600px',
            width: '600px',
            margin: '50px auto'
        }}>
            <Line data={{
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [
                    {
                        label: 'Sushant',
                        fill: false,
                        lineTension: 0.1,
                        backgroundColor: 'rgba(75,192,192,0.4)',
                        borderColor: 'rgba(75,192,192,1)',
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        pointBorderColor: 'rgba(75,192,192,1)',
                        pointBackgroundColor: '#fff',
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                        pointHoverBorderColor: 'rgba(220,220,220,1)',
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: [65, 59, 80, 81, 56, 55, 40]
                    }
                ]
            }
            } />
        </div>
    )
}


export default LineGraph;
