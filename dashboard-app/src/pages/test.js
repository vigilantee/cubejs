import React from 'react';
import cubejs from '@cubejs-client/core';
import { QueryRenderer } from '@cubejs-client/react';
import { Spin } from 'antd';
import { Chart, Axis, Tooltip, Geom, Coord, Legend } from 'bizcharts';

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

const pieRender = ({ resultSet }) => (
  <Chart height={400} data={resultSet.chartPivot()} forceFit>
    <Coord type='theta' radius={0.75} />
    {resultSet.seriesNames().map(s => (<Axis name={s.key} />))}
    <Legend position='right' />
    <Tooltip />
    {resultSet.seriesNames().map(s => (<Geom type="intervalStack" position={s.key} color="category" />))}
  </Chart>
);

const API_URL = "http://localhost:4000"; // change to your actual endpoint

const cubejsApi = cubejs(
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1OTc5MDU0ODcsImV4cCI6MTU5Nzk5MTg4N30.lprYwVxmpd2gSBYCLMO1g1Yx2mCflrJj2aaR7jxym_U",
  { apiUrl: API_URL + "/cubejs-api/v1" }
);

const renderChart = (Component, pivotConfig) => ({ resultSet, error }) => (
  (resultSet && <Component resultSet={resultSet} pivotConfig={pivotConfig} />) ||
  (error && error.toString()) || 
  (<Spin />)
)

const ChartRenderer = () => <QueryRenderer
  query={{
    "measures": [
      "TabSalesInvoice.count"
    ],
    "timeDimensions": [
      {
        "dimension": "TabSalesInvoice.creation"
      }
    ],
    "order": {
      "TabSalesInvoice.count": "desc"
    },
    "filters": [
      {
        "dimension": "TabTerritory.territoryName",
        "operator": "equals",
        "values": [
          "Southern California",
          "Central California",
          "Northern California"
        ]
      }
    ],
    "dimensions": [
      "TabTerritory.territoryName"
    ]
  }}
  cubejsApi={cubejsApi}
  render={renderChart(pieRender, {
    "x": [
      "TabTerritory.territoryName"
    ],
    "y": [
      "measures"
    ],
    "fillMissingDates": true
  })}
/>;

export default ChartRenderer;
