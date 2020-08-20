cube(`TabBranch`, {
  sql: `SELECT * FROM test.\`tabBranch\``,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [name]
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
    
    branch: {
      sql: `branch`,
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
