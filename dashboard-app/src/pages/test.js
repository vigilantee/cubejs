import React ,{useState} from 'react';
import cubejs from '@cubejs-client/core';
import { QueryRenderer } from '@cubejs-client/react';
import { Spin, Divider } from 'antd';
import { Chart, Axis, Tooltip, Geom, Coord, Legend } from 'bizcharts';
import 'bootstrap/dist/css/bootstrap.min.css';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'

const stackedChartData = (resultSet) => {
  const data = resultSet.pivot().map(
    ({ xValues, yValuesArray }) =>
      yValuesArray.map(([yValues, m]) => ({
        x: resultSet.axisValuesString(xValues, ', '),
        color: resultSet.axisValuesString(yValues, ', '),
        measure: m && Number.parseFloat(m)
      }))
  ).reduce((a, b) => a.concat(b), []);

  return data;
}

const lineRender = ({ resultSet }) => (
  <Chart scale={{ x: { tickCount: 8 } }} height={400} data={stackedChartData(resultSet)} forceFit>
    <Axis name="x" />
    <Axis name="measure" />
    <Tooltip crosshairs={{type : 'y'}} />
    <Geom type="line" position={`x*measure`} size={2} color="color" />
  </Chart>
);

const API_URL = "http://localhost:4000"; // change to your actual endpoint

const cubejsApi = cubejs(
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1OTc4MTEzNTcsImV4cCI6MTU5Nzg5Nzc1N30.L8V0xPl0xu4kS2IBR3FHaddZ0RB62fTJuiLiOScUGb8",
  { apiUrl: API_URL + "/cubejs-api/v1" }
);

const renderChart = (Component, pivotConfig) => ({ resultSet, error }) => (
  (resultSet && <Component resultSet={resultSet} pivotConfig={pivotConfig} />) ||
  (error && error.toString()) || 
  (<Spin />)
)
const START_DATE = "08/01/2020";
const END_DATE = "09/01/2021";
const ChartRenderer = () =>{  
    const [granularityofchart,setGranularityofchart]=useState('hour');
    const [dateRange,setdateRange]=useState('Today');
    const handleSelectgranularity=(e)=>{
        console.log(e);
        setGranularityofchart(e)
    }
    const handleSelectdateRange=(e)=>{
        console.log(e);
        setdateRange(e)
    }
      
    return(
    <div>
        <QueryRenderer
        query={{
            "measures": [
            "TabSalesInvoice.total"
            ],
            "timeDimensions": [
            {
                "dimension": "TabSalesInvoice.creation",
                "granularity": granularityofchart,
                "dateRange":[START_DATE,END_DATE]

            }
            ],
            "order": {
            "TabSalesInvoice.creation": "asc"
            },
            "filters": []
        }}
        cubejsApi={cubejsApi}
        render={renderChart(lineRender, {
            "x": [
            "TabSalesInvoice.creation.day"
            ],
            "y": [
            "measures"
            ],
            "fillMissingDates": true
        })}
        />
        <div>
        <DropdownButton
        alignRight
        title={granularityofchart}
        id="dropdown-menu-align-right"
        variant="success"
        onSelect={handleSelectgranularity}
        >
                <Dropdown.Item eventKey="hour">hour</Dropdown.Item>
                <Dropdown.Item eventKey="day">day</Dropdown.Item>
                <Dropdown.Item eventKey="week">week</Dropdown.Item>
                <Dropdown.Item eventKey="month">month</Dropdown.Item>
                <Dropdown.Item eventKey="year">year</Dropdown.Item>
        </DropdownButton>
        </div>
        <div>
        <DropdownButton
        alignRight
        title={dateRange}
        id="dropdown-menu-align-left"
        variant="success"
        onSelect={handleSelectdateRange}
        >
                <Dropdown.Item eventKey="Today">Today</Dropdown.Item>
                <Dropdown.Item eventKey="Yesterday">Yesterday</Dropdown.Item>
                <Dropdown.Item eventKey="This week">This week</Dropdown.Item>
                <Dropdown.Item eventKey="This month">This month</Dropdown.Item>
                <Dropdown.Item eventKey="This quarter">This quarter</Dropdown.Item>
                <Dropdown.Item eventKey="This year">This year</Dropdown.Item>
                <Dropdown.Item eventKey="Last 7 days">Last 7 days</Dropdown.Item>
                <Dropdown.Item eventKey="Last 30 days">Last 30 days</Dropdown.Item>
                <Dropdown.Item eventKey="Last week">Last week</Dropdown.Item>
                <Dropdown.Item eventKey="Last month">Last month</Dropdown.Item>
                <Dropdown.Item eventKey="Last quarter">Last quarter</Dropdown.Item>
                <Dropdown.Item eventKey="Last year">Last year</Dropdown.Item>
                
        </DropdownButton>
        </div>  
        

    </div>
    )
}

export default ChartRenderer;
