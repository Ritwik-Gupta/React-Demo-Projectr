import ChartBar from "./ChartBar"
import "./Chart.css"

const Chart = (props) => {

    const allExpenes = props.dataPoints.map(x => x.value);
    const maxExpense = Math.max(...allExpenes);

    return(
    <div className="chart">
        {props.dataPoints.map(datapoint => 
            <ChartBar 
                key={datapoint.label}
                value={datapoint.value}
                maxValue={maxExpense}
                label={datapoint.label}
            />
        )}
    </div>
    )
}

export default Chart;