import React from 'react';
import cubejs from '@cubejs-client/core';
import { QueryRenderer } from '@cubejs-client/react';
import { Spin } from 'antd';
import { Line, Bar, Pie } from 'react-chartjs-2';

const COLORS_SERIES = ['#FF6492', '#141446', '#7A77FF'];

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
  return <Pie data={data} options={options} />;
};

const API_URL = "http://localhost:4000"; // change to your actual endpoint

const cubejsApi = cubejs(
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1OTgzNTQ3NTMsImV4cCI6MTU5ODQ0MTE1M30.zT_JsDb-uRmDd2NzSfUtP2QrDaUuVNxTfExP4YOshrU",
  { apiUrl: API_URL + "/cubejs-api/v1" }
);

const renderChart = (Component, pivotConfig) => ({ resultSet, error }) => (
  (resultSet && <Component resultSet={resultSet} pivotConfig={pivotConfig} />) ||
  (error && error.toString()) || 
  (<Spin />)
)

const TotalSalesByTerritory = () => <QueryRenderer
  query={{
    "measures": [
      "TabSalesInvoice.total"
    ],
    "timeDimensions": [
      {
        "dimension": "TabSalesInvoice.creation"
      }
    ],
    "order": {
      "TabSalesInvoice.total": "desc"
    },
    "dimensions": [
      "TabSalesInvoice.territory"
    ],
    "filters": []
  }}
  cubejsApi={cubejsApi}
  render={renderChart(pieRender, {
    "x": [
      "TabSalesInvoice.territory"
    ],
    "y": [
      "measures"
    ],
    "fillMissingDates": true
  })}
/>;

export default TotalSalesByTerritory;
