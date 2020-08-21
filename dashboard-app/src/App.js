import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import cubejs from '@cubejs-client/core';
import { Spin } from 'antd';
import { Chart, Axis, Tooltip, Geom, Coord, Legend } from 'bizcharts';
import 'bootstrap/dist/css/bootstrap.min.css';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { array } from 'prop-types';
import { Query } from './components/queryRenderer';

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
  const cities = ["Central California", "Northern California"];
  const [cityArray, setcityArray] = useState([]);
  const granularityList = ["hour", "day", "week", "month", "year"];
  const dateRangeList = ["Today", "Yesterday", "This week", "This month", "This quarter", "This year", "Last 7 days", "Last 30 days", "Last week", "Last month", "Last quarter", "Last year"];
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
  useEffect(() => {
    console.log("cityarray", cityArray);
  }, [cityArray])
  const cityhandleChange = (e) => {
    // to find out if it's checked or not; returns true or false
    if (!e) return;
    const checked = e.target.checked;
    setcityArray(checked ? [...cityArray, e.target.value] : cityArray.filter(el => el != e.target.value));
  };

  return (

    <div style={{ padding: 30 }}>
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
          {
            granularityList.map(granularityi =>
              <Dropdown.Item eventKey={granularityi}>{granularityi}</Dropdown.Item>)
          }
        </DropdownButton>

          Till
            <DropdownButton
          alignRight
          title={dateRange}
          id="dropdown-menu-align-left"
          variant="success"
          onSelect={handleSelectdateRange}
        >
          {
            dateRangeList.map(i =>
              <Dropdown.Item eventKey={i}>{i}</Dropdown.Item>)
          }

        </DropdownButton>

        {
          cities.map((city, index) => <div>
            <input key={index} type="checkbox" name={city} value={city} onChange={cityhandleChange} />
            <label >{city}</label>
          </div>)
        }

      </div>
      <Query
        granularityofchart={granularityofchart}
        dateRange={dateRange}
        startDate={startDate}
        endDate={endDate}
        cities={cities}
        cubejsApi={cubejsApi}
        lineRender={lineRender}
        renderChart={renderChart}
        cityArray={cityArray}
      />

    </div>
  )
}

export default ChartRenderer;
const rootElement = document.getElementById("root");
ReactDOM.render(<ChartRenderer />, rootElement);