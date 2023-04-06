import React from 'react'
import '../../css/chart.css'
import ChartBar from './ChartBar'

const chart = (props) => {
    
  return (
    <div className="chart">
        {props.dataPoints.map((dataPoint)=>(
            <ChartBar
            key={dataPoint.id}
            value={dataPoint.value}
            maxValue={null}
            label={dataPoint.label}
            />
        ))}

    </div>
  )
}

export default chart