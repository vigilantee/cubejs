cube(`TabTerritory`, {
  sql: `SELECT * FROM _544c62792c207957.\`tabTerritory\``,

  joins: {

  },

  measures: {
    count: {
      type: `count`,
      drillMembers: [name, territoryName]
    }
  },

  dimensions: {
    name: {
      sql: `name`,
      type: `string`,
      primaryKey: true
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

    territoryName: {
      sql: `territory_name`,
      type: `string`
    },

    oldParent: {
      sql: `old_parent`,
      type: `string`
    },

    parentTerritory: {
      sql: `parent_territory`,
      type: `string`
    },

    territoryManager: {
      sql: `territory_manager`,
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

    is_group: {
      sql: `is_group`,
      type: `number`
    }
  }
});
