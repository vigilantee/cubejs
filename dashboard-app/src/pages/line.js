import React ,{useState} from 'react';
import ReactDOM from 'react-dom';
import cubejs from '@cubejs-client/core';
import { QueryRenderer } from '@cubejs-client/react';
import { Spin } from 'antd';
import { Row, Col, Statistic, Table } from 'antd';
import 'bootstrap/dist/css/bootstrap.min.css';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const tableRender = ({ resultSet, pivotConfig }) => (  
  <Table 
    pagination={false}
    columns={resultSet.tableColumns(pivotConfig)} 
    dataSource={resultSet.tablePivot(pivotConfig)} 
  />
  
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

const ChartRenderer = () => 
{
  
  const [granularityofchart,setGranularityofchart]=useState('hour');
  const [dateRange,setdateRange]=useState(null);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

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
      <DatePicker selected={startDate} onChange={date => {setStartDate(date) ;setdateRange(null)} }/>
      <DatePicker selected={endDate} onChange={date => {setEndDate(date) ;setdateRange(null)} }/>
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
              <QueryRenderer
                query={{
                  "measures": [
                    "TabSalesInvoice.total"
                  ],
                  "timeDimensions": [
                    {
                      "dimension": "TabSalesInvoice.fromDate",
                      "granularity": granularityofchart,
                      "dateRange": (dateRange?dateRange:[startDate,endDate])
                      // "dateRange":dateRange
                    }
                  ],
                  "order": {},
                  "dimensions": [],
                  "filters": []
                }}
                cubejsApi={cubejsApi}
                render={renderChart(tableRender, {
                  "x": [
                    "TabSalesInvoice.fromDate.year"
                  ],
                  "y": [
                    "measures"
                  ],
                  "fillMissingDates": true
                })}
              />
    </div>
  )
}


export default ChartRenderer;




const rootElement = document.getElementById("root");
ReactDOM.render(<ChartRenderer />, rootElement);
