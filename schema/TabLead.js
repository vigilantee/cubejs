cube(`TabLead`, {
  sql: `SELECT * FROM \`tabLead\``,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [name, city, companyName, emailId, leadName, addressTitle, title, country, campaignName, hubSyncId, contactDate, accountOpenedDate]
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
    
    salutation: {
      sql: `salutation`,
      type: `string`
    },
    
    city: {
      sql: `city`,
      type: `string`
    },
    
    type: {
      sql: `type`,
      type: `string`
    },
    
    companyName: {
      sql: `company_name`,
      type: `string`
    },
    
    source: {
      sql: `source`,
      type: `string`
    },
    
    notes: {
      sql: `notes`,
      type: `string`
    },
    
    leadOwner: {
      sql: `lead_owner`,
      type: `string`
    },
    
    phone: {
      sql: `phone`,
      type: `string`
    },
    
    fax: {
      sql: `fax`,
      type: `string`
    },
    
    requestType: {
      sql: `request_type`,
      type: `string`
    },
    
    image: {
      sql: `image`,
      type: `string`
    },
    
    county: {
      sql: `county`,
      type: `string`
    },
    
    industry: {
      sql: `industry`,
      type: `string`
    },
    
    designation: {
      sql: `designation`,
      type: `string`
    },
    
    company: {
      sql: `company`,
      type: `string`
    },
    
    status: {
      sql: `status`,
      type: `string`
    },
    
    namingSeries: {
      sql: `naming_series`,
      type: `string`
    },
    
    emailId: {
      sql: `email_id`,
      type: `string`
    },
    
    leadName: {
      sql: `lead_name`,
      type: `string`
    },
    
    customer: {
      sql: `customer`,
      type: `string`
    },
    
    gender: {
      sql: `gender`,
      type: `string`
    },
    
    pincode: {
      sql: `pincode`,
      type: `string`
    },
    
    addressTitle: {
      sql: `address_title`,
      type: `string`
    },
    
    title: {
      sql: `title`,
      type: `string`
    },
    
    website: {
      sql: `website`,
      type: `string`
    },
    
    state: {
      sql: `state`,
      type: `string`
    },
    
    country: {
      sql: `country`,
      type: `string`
    },
    
    marketSegment: {
      sql: `market_segment`,
      type: `string`
    },
    
    territory: {
      sql: `territory`,
      type: `string`
    },
    
    addressLine1: {
      sql: `address_line1`,
      type: `string`
    },
    
    contactBy: {
      sql: `contact_by`,
      type: `string`
    },
    
    addressLine2: {
      sql: `address_line2`,
      type: `string`
    },
    
    mobileNo: {
      sql: `mobile_no`,
      type: `string`
    },
    
    campaignName: {
      sql: `campaign_name`,
      type: `string`
    },
    
    hubSyncId: {
      sql: `hub_sync_id`,
      type: `string`
    },
    
    region: {
      sql: `region`,
      type: `string`
    },
    
    typeOfBusiness: {
      sql: `type_of_business`,
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
    
    endsOn: {
      sql: `ends_on`,
      type: `time`
    },
    
    contactDate: {
      sql: `contact_date`,
      type: `time`
    },
    
    accountOpenedDate: {
      sql: `account_opened_date`,
      type: `time`
    }
  }
});
