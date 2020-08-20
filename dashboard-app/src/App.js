import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import cubejs from '@cubejs-client/core';
import { QueryRenderer } from '@cubejs-client/react';
import { Spin } from 'antd';
import { Chart, Axis, Tooltip, Geom, Coord, Legend } from 'bizcharts';
import 'bootstrap/dist/css/bootstrap.min.css';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { array } from 'prop-types';

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
    <Tooltip crosshairs={{ type: 'y' }} />
    <Geom type="line" position={`x*measure`} size={2} color="color" />
  </Chart>
);

const API_URL = "http://localhost:4000"; // change to your actual endpoint

const cubejsApi = cubejs(
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1OTc4Mzk2MDYsImV4cCI6MTU5NzkyNjAwNn0.eyS33ppbBdPZsb9K7ymkhKrHS-l2x_hf25lXFVk5m30",
  { apiUrl: API_URL + "/cubejs-api/v1" }
);

const renderChart = (Component, pivotConfig) => ({ resultSet, error }) => (
  (resultSet && <Component resultSet={resultSet} pivotConfig={pivotConfig} />) ||
  (error && error.toString()) ||
  (<Spin />)
)

const ChartRenderer = () => {
  const city1="Central California";
  const city2="Northern California";
  const cityArray=[];
  const [granularityofchart, setGranularityofchart] = useState('day');
  const [dateRange, setdateRange] = useState("Last month");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const handleSelectgranularity = (e) => {
    console.log(e);
    setGranularityofchart(e)
  }
  const handleSelectdateRange = (e) => {
    console.log(e);
    setdateRange(e)
  }
  const handleChange = (e) => {
    // to find out if it's checked or not; returns true or false
    const checked = e.target.checked;
    
    // to get the checked value
    const checkedValue = e.target.value; 
    if(checked){
      console.log(checkedValue);
      cityArray.push(checkedValue);
      console.log(cityArray);
    }else{
      const index=cityArray.indexOf(checkedValue)
      if (index > -1) {
        cityArray.splice(index, 1);
      }
      console.log(cityArray);

    }
    
    // to get the checked name
    const checkedName = e.target.name;
    
    //then you can do with the value all you want to do with it.
    };

  return (

    <div style={{padding: 30}}>
      <div style={{ display: "flex", padding: 5 }}>
        Select Date Range
        <DatePicker selected={startDate} onChange={date => { setStartDate(date); setdateRange(null) }} />
        <DatePicker selected={endDate} onChange={date => { setEndDate(date); setdateRange(null) }} />
      </div>
      <div style={{ display: "flex", padding: 5 }}>
        Granularity
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
        Till
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
     
        <div>
            <input type="checkbox" name={city1} value={city1}  onChange={handleChange}/>
            <label >{city1}</label>
        </div>
        <div>
            <input type="checkbox" name={city2} value={city2}  onChange={handleChange}/>
            <label >{city2}</label>
        </div>
    </div>
      <QueryRenderer
        query={{
          order: {},
          measures: [
            "TabSalesInvoice.total",
            // "TabSalesInvoice.totalSalesMonthly",
            "TabSalesInvoice.outstandingAmount",
            "TabSalesInvoice.totalQty",
            "TabSalesInvoice.discountAmount",
          ],
          timeDimensions: [
            {
              dimension: "TabSalesInvoice.creation",
              granularity: granularityofchart,
              dateRange: (dateRange ? dateRange : [startDate, endDate])
            }
          ],
          filters: [{
            dimension: "TabTerritory.name",
            operator: 'equals',
            values: cityArray
          }]
        }}
        cubejsApi={cubejsApi}
        render={renderChart(lineRender, {
          x: [
            "TabSalesInvoice.creation.day"
          ],
          y: [
            "measures"
          ],
          fillMissingDates: true
        })}
      />
    </div>
  )
}

export default ChartRenderer;
const rootElement = document.getElementById("root");
ReactDOM.render(<ChartRenderer />, rootElement);