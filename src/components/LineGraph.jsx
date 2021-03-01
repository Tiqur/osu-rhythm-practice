import { Line } from 'react-chartjs-2';
import Container from './Container';


const LineGraph = (props) => {
    const graphData = {
        labels: props.clicks.map(e => e.time),
        datasets: [
        {
            label: 'Accuracy',
            fill: false,
            lineTension: 0,
            borderColor: '#ff0000',
            data: ["84","84","96","86","96","93","91","89","94","88","90","96","89","88","93","90","88","95","86","84"]
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
            data: ["177","180","170","182","173","190","178","189","184","182","182","184","179","179","180","180","190","186","180","171"]
        },
        ],
    };


    return (
        <Container style={{gridArea:"g"}}>
            <Line data={graphData} options={{maintainAspectRatio: false}}/>
        </Container>
    )
}

export default LineGraph;