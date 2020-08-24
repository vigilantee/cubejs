cube(`TabBin`, {
  sql: `SELECT * FROM test.\`tabBin\``,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [name]
    },
    
    orderedQty: {
      sql: `ordered_qty`,
      type: `sum`
    },
    
    projectedQty: {
      sql: `projected_qty`,
      type: `sum`
    },
    
    stockValue: {
      sql: `stock_value`,
      type: `sum`
    },
    
    actualQty: {
      sql: `actual_qty`,
      type: `sum`
    },
    
    indentedQty: {
      sql: `indented_qty`,
      type: `sum`
    },
    
    plannedQty: {
      sql: `planned_qty`,
      type: `sum`
    },
    
    reservedQty: {
      sql: `reserved_qty`,
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
    
    stockUom: {
      sql: `stock_uom`,
      type: `string`
    },
    
    warehouse: {
      sql: `warehouse`,
      type: `string`
    },
    
    itemCode: {
      sql: `item_code`,
      type: `string`
    },
    
    creation: {
      sql: `creation`,
      type: `time`
    },
    
    modified: {
      sql: `modified`,
      type: `time`
    }
  }
});
