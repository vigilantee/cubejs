cube(`TabSalesInvoiceItem`, {
  sql: `SELECT * FROM cubejs.\`tabSales Invoice Item\``,
  
  joins: {
    TabSalesInvoice: {
      relationship: `belongsTo`,
      sql: `${TabSalesInvoiceItem}.parent = ${TabSalesInvoice}.name`
    }
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [name, itemName, serviceStopDate, serviceStartDate, serviceEndDate]
    },

    A: {
      sql: `${TabSalesInvoice.trueCount}`,
      type: `number`
    },

    B: {
      sql: `${TabSalesOrder.trueCount}`,
      type: `number`
    },

    salesInvoiceToSalesOrderRatio: {
      sql: `${A}/${B}*100`,
      // sql:`1031/1058`,
      type: `number`,
      format: `percent`
    },
    
    qty: {
      sql: `qty`,
      type: `sum`
    },
    
    trueQty: {
      sql: `qty`,
      type: `sum`,
      drillMembers:[qty],
      filters: [
        { sql: `${CUBE}.docstatus=1` }
      ]
    },

    stockQty: {
      sql: `stock_qty`,
      type: `sum`
    },
    
    marginRateOrAmount: {
      sql: `margin_rate_or_amount`,
      type: `sum`
    },
    
    discountAmount: {
      sql: `discount_amount`,
      type: `sum`
    },
    
    amount: {
      sql: `amount`,
      type: `sum`
    },
    
    baseAmount: {
      sql: `base_amount`,
      type: `sum`
    },
    
    netAmount: {
      sql: `net_amount`,
      type: `sum`
    },
    
    baseNetAmount: {
      sql: `base_net_amount`,
      type: `sum`
    },
    
    actualBatchQty: {
      sql: `actual_batch_qty`,
      type: `sum`
    },
    
    actualQty: {
      sql: `actual_qty`,
      type: `sum`
    },
    
    deliveredQty: {
      sql: `delivered_qty`,
      type: `sum`
    }
  },
  
  dimensions: {
    name: {
      sql: `name`,
      type: `string`
    },
    
    modifiedBy: {
      sql: `modified_by`,
      type: `string`
    },
    
    owner: {
      sql: `owner`,
      type: `string`
    },
    
    parent: {
      sql: `parent`,
      type: `string`
    },
    
    parentfield: {
      sql: `parentfield`,
      type: `string`
    },
    
    parenttype: {
      sql: `parenttype`,
      type: `string`
    },
    
    barcode: {
      sql: `barcode`,
      type: `string`
    },
    
    itemCode: {
      sql: `item_code`,
      type: `string`
    },
    
    itemName: {
      sql: `item_name`,
      type: `string`
    },
    
    customerItemCode: {
      sql: `customer_item_code`,
      type: `string`
    },
    
    description: {
      sql: `description`,
      type: `string`
    },
    
    itemGroup: {
      sql: `item_group`,
      type: `string`
    },
    
    brand: {
      sql: `brand`,
      type: `string`
    },
    
    image: {
      sql: `image`,
      type: `string`
    },
    
    stockUom: {
      sql: `stock_uom`,
      type: `string`
    },
    
    uom: {
      sql: `uom`,
      type: `string`
    },
    
    marginType: {
      sql: `margin_type`,
      type: `string`
    },
    
    itemTaxTemplate: {
      sql: `item_tax_template`,
      type: `string`
    },
    
    pricingRules: {
      sql: `pricing_rules`,
      type: `string`
    },
    
    incomeAccount: {
      sql: `income_account`,
      type: `string`
    },
    
    asset: {
      sql: `asset`,
      type: `string`
    },
    
    financeBook: {
      sql: `finance_book`,
      type: `string`
    },
    
    expenseAccount: {
      sql: `expense_account`,
      type: `string`
    },
    
    deferredRevenueAccount: {
      sql: `deferred_revenue_account`,
      type: `string`
    },
    
    weightUom: {
      sql: `weight_uom`,
      type: `string`
    },
    
    warehouse: {
      sql: `warehouse`,
      type: `string`
    },
    
    targetWarehouse: {
      sql: `target_warehouse`,
      type: `string`
    },
    
    qualityInspection: {
      sql: `quality_inspection`,
      type: `string`
    },
    
    batchNo: {
      sql: `batch_no`,
      type: `string`
    },
    
    packageTag: {
      sql: `package_tag`,
      type: `string`
    },
    
    serialNo: {
      sql: `serial_no`,
      type: `string`
    },
    
    itemTaxRate: {
      sql: `item_tax_rate`,
      type: `string`
    },
    
    salesOrder: {
      sql: `sales_order`,
      type: `string`,
      primaryKey: true

    },
    
    soDetail: {
      sql: `so_detail`,
      type: `string`
    },
    
    deliveryNote: {
      sql: `delivery_note`,
      type: `string`
    },
    
    dnDetail: {
      sql: `dn_detail`,
      type: `string`
    },
    
    costCenter: {
      sql: `cost_center`,
      type: `string`
    },
    
    creation: {
      sql: `creation`,
      type: `time`
    },
    
    modified: {
      sql: `modified`,
      type: `time`
    },
    
    serviceStopDate: {
      sql: `service_stop_date`,
      type: `time`
    },
    
    serviceStartDate: {
      sql: `service_start_date`,
      type: `time`
    },
    
    serviceEndDate: {
      sql: `service_end_date`,
      type: `time`
    }
  }
});
