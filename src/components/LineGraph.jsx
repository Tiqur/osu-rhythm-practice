import { Line } from 'react-chartjs-2';
import Container from './Container';
import { useGraphData } from '../contexts/GraphData';


const LineGraph = (props) => {

    const {graphData, setGraphData} = useGraphData();

    const data = {
    labels: graphData.clicks.map(e => e.time),
    datasets: [
    {
        label: 'Accuracy',
        fill: false,
        lineTension: 0,
        borderColor: '#ff0000',
        data: []
    },
    {
        label: 'Unstable Rate',
        fill: false,
        lineTension: 0,
        borderColor: '#94D210',
        data: []
    },
    {
        label: 'Bpm',
        fill: false,
        lineTension: 0,
        borderColor: '#0FB6EB',
        data: graphData.avg_bpm
    },
    ],
};


    return (
        <Container style={{gridArea:"g"}}>
            <Line data={data} options={{maintainAspectRatio: false, elements: { point:{ radius: 0 } }}}/>
        </Container>
    )
}

export default LineGraph;