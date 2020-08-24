import React from 'react';
import { QueryRenderer } from '@cubejs-client/react';

export function Query(props) {
    const {granularityofchart, dateRange, startDate, endDate, cubejsApi, lineRender, renderChart,cityArray} = props;
    return(
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

    )
}
