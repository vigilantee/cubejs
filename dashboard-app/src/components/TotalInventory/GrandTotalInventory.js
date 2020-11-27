import React from 'react';
import cubejs from '@cubejs-client/core';
import { QueryRenderer } from '@cubejs-client/react';
import { Spin } from 'antd';
import { Row, Col, Statistic, Table } from 'antd';

const tableRender = ({ resultSet, pivotConfig }) => (  
  <Table 
    pagination={false}
    columns={resultSet.tableColumns(pivotConfig)} 
    dataSource={resultSet.tablePivot(pivotConfig)} 
  />
  
);

const API_URL = "http://localhost:4000"; // change to your actual endpoint

const cubejsApi = cubejs(
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1OTgyNjMwOTcsImV4cCI6MTU5ODM0OTQ5N30.ikkE3FNGdF5LQTtoo9y4tJRffXtAFwySEMHaGx9AZbI",
  { apiUrl: API_URL + "/cubejs-api/v1" }
);

const renderChart = (Component, pivotConfig) => ({ resultSet, error }) => (
  (resultSet && <Component resultSet={resultSet} pivotConfig={pivotConfig} />) ||
  (error && error.toString()) || 
  (<Spin />)
)

const GrandTotalInventory = () => <QueryRenderer
  query={{
    "measures": [
      "TabBin.actualQty"
    ],
    "timeDimensions": [
      {
        "dimension": "TabBin.creation"
      }
    ],
    "order": {},
    "dimensions": [],
    "filters": []
  }}
  cubejsApi={cubejsApi}
  render={renderChart(tableRender, {
    "x": [],
    "y": [
      "measures"
    ],
    "fillMissingDates": true
  })}
/>;

export default GrandTotalInventory;
