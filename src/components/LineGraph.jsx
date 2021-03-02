import { Line } from 'react-chartjs-2';
import Container from './Container';
import { useGraphData } from '../contexts/GraphData';


const LineGraph = (props) => {

    const {graphData, setGraphData} = useGraphData();
    console.log(graphData)
    const data = {
    labels: graphData.clicks.map(e => e.time),
    datasets: [
    {
        label: 'Accuracy',
        fill: false,
        lineTension: 0,
        borderColor: '#ff0000',
        data: ["84","84","96"," 86","96","93","91","89","94","88","90","96","89","88","93","90","88","95","86","84"]
    },
    {
        label: 'Unstable Rate',
        fill: false,
        lineTension: 0,
        borderColor: '#94D210',
        data: ["254","239","333","244","311","300","113","253","332","155","280","332","246","323","116","148","280","179","246","201"]
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
            <Line data={data} options={{maintainAspectRatio: false}}/>
        </Container>
    )
}

export default LineGraph;