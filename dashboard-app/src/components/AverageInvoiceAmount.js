import React from 'react';
import cubejs from '@cubejs-client/core';
import { QueryRenderer } from '@cubejs-client/react';
import { Spin } from 'antd';
import { Row, Col, Statistic, Table } from 'antd';

const numberRender = ({ resultSet, pivotConfig }) => (
  <Row type="flex" justify="center" align="middle" style={{ height: '100%' }}>
    <Col>
      {resultSet
        .seriesNames()
        .map(s => (
          <Statistic value={resultSet.totalRow()[s.key]} />
        ))}
    </Col>
  </Row>
  
);

const API_URL = "http://localhost:4000"; // change to your actual endpoint

const cubejsApi = cubejs(
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1OTgzNDEzMjMsImV4cCI6MTU5ODQyNzcyM30.JAq1yAI5NgRGYYKVy5gqbuu8tVNvMvqkCnAjLnrTWzY",
  { apiUrl: API_URL + "/cubejs-api/v1" }
);

const renderChart = (Component, pivotConfig) => ({ resultSet, error }) => (
  (resultSet && <Component resultSet={resultSet} pivotConfig={pivotConfig} />) ||
  (error && error.toString()) || 
  (<Spin />)
)

const AverageInvoiceAmount = () => 
{
return(
<div>
Average invoice account
<QueryRenderer
  query={{
    "measures": [
      "TabSalesInvoice.AverageInvoiceAmount"
    ],
    "timeDimensions": [
      {
        "dimension": "TabSalesInvoice.creation"
      }
    ],
    "order": {},
    "filters": []
  }}
  cubejsApi={cubejsApi}
  render={renderChart(numberRender, {
    "x": [],
    "y": [
      "measures"
    ],
    "fillMissingDates": true
  })}
/>
</div>
)
}


export default AverageInvoiceAmount;
