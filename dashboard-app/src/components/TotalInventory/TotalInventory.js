import React from 'react';
import cubejs from '@cubejs-client/core';
import { QueryRenderer } from '@cubejs-client/react';
import { Spin } from 'antd';
import { Line, Bar, Pie,Doughnut } from 'react-chartjs-2';

import GrandTotalInventory from './GrandTotalInventory'

const COLORS_SERIES = ['#FF6492', '#141446', '#7A77FF','#ff0000','#D4AC0D','#2E4053','#CB4335','#FA8072','#3498DB','#154360','#A569BD','#C0392B','#FFFF00','#008000','#800080','#0000FF','#000080','#00FFFF',];



const pieRender = ({ resultSet }) => {
  const data = {
    labels: resultSet.categories().map(c => c.category),
    datasets: resultSet.series().map(s => (
      {
        label: s.title,
        data: s.series.map(r => r.value),
        backgroundColor: COLORS_SERIES,
        hoverBackgroundColor: COLORS_SERIES,
      }
    ))
  };
  const options = {};
  return <Doughnut data={data} options={options} />;
};

const API_URL = "http://localhost:4000"; // change to your actual endpoint

const cubejsApi = cubejs(
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1OTgyNTk5NjMsImV4cCI6MTU5ODM0NjM2M30.ZZZ3F6_5rwxhpssgVUiJzFH05kSbmQL2IjBkXiMcYn8",
  { apiUrl: API_URL + "/cubejs-api/v1" }
);

const renderChart = (Component, pivotConfig) => ({ resultSet, error }) => (
  (resultSet && <Component resultSet={resultSet} pivotConfig={pivotConfig} />) ||
  (error && error.toString()) || 
  (<Spin />)
)

const TotalInventory = () => 
{

  return(

<div>
<QueryRenderer
  query={{
    "measures": [
      "TabBin.actualQty"
    ],
    "timeDimensions": [
      {
        "dimension": "TabBin.creation"
      }
    ],
    "order": {
      "TabBin.warehouse": "asc"
    },
    "dimensions": [
      "TabBin.warehouse"
    ],
    "filters": []
  }}
  cubejsApi={cubejsApi}
  render={renderChart(pieRender, {
    "x": [
      "TabBin.warehouse"
    ],
    "y": [
      "measures"
    ],
    "fillMissingDates": true
  })}
/>
<GrandTotalInventory/>

</div>

)
}

export default TotalInventory;
