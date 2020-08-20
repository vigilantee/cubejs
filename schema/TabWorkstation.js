cube(`TabWorkstation`, {
  sql: `SELECT * FROM test.\`tabWorkstation\``,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [name, workstationName, holidayList]
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
    
    description: {
      sql: `description`,
      type: `string`
    },
    
    workstationName: {
      sql: `workstation_name`,
      type: `string`
    },
    
    holidayList: {
      sql: `holiday_list`,
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
