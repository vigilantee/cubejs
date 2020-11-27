import React from 'react';
import cubejs from '@cubejs-client/core';
import { QueryRenderer } from '@cubejs-client/react';
import { Spin } from 'antd';
import { Line, Bar, Pie } from 'react-chartjs-2';

// const COLORS_SERIES = ['#FF6492', '#141446', '#7A77FF'];
const COLORS_SERIES = ['#FF6492', '#141446', '#7A77FF','#ff0000','#D4AC0D','#2E4053','#CB4335','#FA8072','#3498DB','#154360','#A569BD','#C0392B','#FFFF00','#008000','#800080','#0000FF','#000080','#00FFFF',];


const barRender = ({ resultSet }) => {
  const data = {
    labels: resultSet.categories().map(c => c.category),
    datasets: resultSet.series().map((s, index) => (
      {
        label: s.title,
        data: s.series.map(r => r.value),
        backgroundColor: COLORS_SERIES,
        hoverBorderColor:COLORS_SERIES,
        hoverBorderWidth:'100px',
        fill: false
      }
    )),
  };
  const options = {
    scales: { xAxes: [{ stacked: true }] }
  };
  return <Bar data={data} options={options} />;
};

const API_URL = "http://localhost:4000"; // change to your actual endpoint

const cubejsApi = cubejs(
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1OTgzNTE3MzksImV4cCI6MTU5ODQzODEzOX0.YhksRzrCR633WVA4fNLhf_xLNtKDXgRKngYl07wXQCU",
  { apiUrl: API_URL + "/cubejs-api/v1" }
);

const renderChart = (Component, pivotConfig) => ({ resultSet, error }) => (
  (resultSet && <Component resultSet={resultSet} pivotConfig={pivotConfig} />) ||
  (error && error.toString()) || 
  (<Spin />)
)

const BarItemCodeWise = () => <QueryRenderer
  query={{
    "measures": [
      "TabBin.actualQty"
    ],
    "timeDimensions": [],
    "order": {
      "TabBin.actualQty": "asc"
    },
    "dimensions": [
      "TabBin.itemCode"
    ],
    "filters": []
  }}
  cubejsApi={cubejsApi}
  render={renderChart(barRender, {
    "x": [
      "TabBin.itemCode"
    ],
    "y": [
      "measures"
    ],
    "fillMissingDates": true
  })}
/>;

export default BarItemCodeWise;
