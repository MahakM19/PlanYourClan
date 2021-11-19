import './Chart.css';
import ChartBar from './ChartBar';

const Chart = (props) => {

    const dataPointValue = props.dataPoints.map((dataPoint) => dataPoint.value)
    const totalMaximun = Math.max(...dataPointValue);
    return (
        <div className="chart">
            {
                props.dataPoints.map(
                    (dataPoint) => (
                        <ChartBar
                            key={dataPoint.label}
                            label={dataPoint.label}
                            value={dataPoint.value}
                            maxValue={totalMaximun}
                        />)
                )
            }

        </div>
    );

};

export default Chart;