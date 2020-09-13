cube(`TabSalesInvoiceItem`, {
  sql: `SELECT * FROM newdatabase.\`tabSales Invoice Item\``,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [name, itemName, serviceStopDate, serviceStartDate, serviceEndDate]
    },

    itemCodeCount:{
      sql:`item_code`,
      type: "countDistinct"
    },

    deliveredQty: {
      sql: `delivered_qty`,
      type: `sum`
    },
    
    marginRateOrAmount: {
      sql: `margin_rate_or_amount`,
      type: `sum`
    },
    
    amount: {
      sql: `amount`,
      type: `sum`
    },
    
    stockQty: {
      sql: `stock_qty`,
      type: `sum`
    },
    
    discountAmount: {
      sql: `discount_amount`,
      type: `sum`
    },
    
    actualQty: {
      sql: `actual_qty`,
      type: `sum`
    },
    
    qty: {
      sql: `qty`,
      type: `sum`
    },
    
    netAmount: {
      sql: `net_amount`,
      type: `sum`
    },
    
    actualBatchQty: {
      sql: `actual_batch_qty`,
      type: `sum`
    },
    
    baseNetAmount: {
      sql: `base_net_amount`,
      type: `sum`
    },
    
    baseAmount: {
      sql: `base_amount`,
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
    
    qualityInspection: {
      sql: `quality_inspection`,
      type: `string`
    },
    
    stockUom: {
      sql: `stock_uom`,
      type: `string`
    },
    
    itemGroup: {
      sql: `item_group`,
      type: `string`
    },
    
    soDetail: {
      sql: `so_detail`,
      type: `string`
    },
    
    incomeAccount: {
      sql: `income_account`,
      type: `string`
    },
    
    pricingRules: {
      sql: `pricing_rules`,
      type: `string`
    },
    
    asset: {
      sql: `asset`,
      type: `string`
    },
    
    serialNo: {
      sql: `serial_no`,
      type: `string`
    },
    
    uom: {
      sql: `uom`,
      type: `string`
    },
    
    itemTaxTemplate: {
      sql: `item_tax_template`,
      type: `string`
    },
    
    salesOrder: {
      sql: `sales_order`,
      type: `string`
    },
    
    itemTaxRate: {
      sql: `item_tax_rate`,
      type: `string`
    },
    
    costCenter: {
      sql: `cost_center`,
      type: `string`
    },
    
    financeBook: {
      sql: `finance_book`,
      type: `string`
    },
    
    weightUom: {
      sql: `weight_uom`,
      type: `string`
    },
    
    customerItemCode: {
      sql: `customer_item_code`,
      type: `string`
    },
    
    barcode: {
      sql: `barcode`,
      type: `string`
    },
    
    warehouse: {
      sql: `warehouse`,
      type: `string`
    },
    
    deferredRevenueAccount: {
      sql: `deferred_revenue_account`,
      type: `string`
    },
    
    targetWarehouse: {
      sql: `target_warehouse`,
      type: `string`
    },
    
    image: {
      sql: `image`,
      type: `string`
    },
    
    dnDetail: {
      sql: `dn_detail`,
      type: `string`
    },
    
    deliveryNote: {
      sql: `delivery_note`,
      type: `string`
    },
    
    expenseAccount: {
      sql: `expense_account`,
      type: `string`
    },
    
    batchNo: {
      sql: `batch_no`,
      type: `string`
    },
    
    description: {
      sql: `description`,
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
    
    brand: {
      sql: `brand`,
      type: `string`
    },
    
    marginType: {
      sql: `margin_type`,
      type: `string`
    },
    
    packageTag: {
      sql: `package_tag`,
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
