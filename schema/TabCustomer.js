cube(`TabCustomer`, {
  sql: `SELECT * FROM \`tabCustomer\``,
  
  joins: {
    TabTerritory: {
      relationship: `hasOne`,
      sql: `${TabCustomer}.territory = ${TabTerritory}.name`
    }
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [name, customerName, leadName, taxId, emailId, customerPosId, openingDate]
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
    
    namingSeries: {
      sql: `naming_series`,
      type: `string`
    },
    
    salutation: {
      sql: `salutation`,
      type: `string`
    },
    
    customerName: {
      sql: `customer_name`,
      type: `string`
    },
    
    gender: {
      sql: `gender`,
      type: `string`
    },
    
    customerType: {
      sql: `customer_type`,
      type: `string`
    },
    
    defaultBankAccount: {
      sql: `default_bank_account`,
      type: `string`
    },
    
    leadName: {
      sql: `lead_name`,
      type: `string`
    },
    
    image: {
      sql: `image`,
      type: `string`
    },
    
    accountManager: {
      sql: `account_manager`,
      type: `string`
    },
    
    customerGroup: {
      sql: `customer_group`,
      type: `string`
    },
    
    territory: {
      sql: `territory`,
      type: `string`
    },
    
    taxId: {
      sql: `tax_id`,
      type: `string`
    },
    
    taxCategory: {
      sql: `tax_category`,
      type: `string`
    },
    
    representsCompany: {
      sql: `represents_company`,
      type: `string`
    },
    
    defaultCurrency: {
      sql: `default_currency`,
      type: `string`
    },
    
    defaultPriceList: {
      sql: `default_price_list`,
      type: `string`
    },
    
    language: {
      sql: `language`,
      type: `string`
    },
    
    website: {
      sql: `website`,
      type: `string`
    },
    
    customerPrimaryContact: {
      sql: `customer_primary_contact`,
      type: `string`
    },
    
    mobileNo: {
      sql: `mobile_no`,
      type: `string`
    },
    
    emailId: {
      sql: `email_id`,
      type: `string`
    },
    
    customerPrimaryAddress: {
      sql: `customer_primary_address`,
      type: `string`
    },
    
    primaryAddress: {
      sql: `primary_address`,
      type: `string`
    },
    
    deliveryDays: {
      sql: `delivery_days`,
      type: `string`
    },
    
    paymentTerms: {
      sql: `payment_terms`,
      type: `string`
    },
    
    customerDetails: {
      sql: `customer_details`,
      type: `string`
    },
    
    marketSegment: {
      sql: `market_segment`,
      type: `string`
    },
    
    industry: {
      sql: `industry`,
      type: `string`
    },
    
    loyaltyProgram: {
      sql: `loyalty_program`,
      type: `string`
    },
    
    loyaltyProgramTier: {
      sql: `loyalty_program_tier`,
      type: `string`
    },
    
    defaultSalesPartner: {
      sql: `default_sales_partner`,
      type: `string`
    },
    
    customerPosId: {
      sql: `customer_pos_id`,
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
    
    deliveryStartTime: {
      sql: `delivery_start_time`,
      type: `time`
    },
    
    deliveryEndTime: {
      sql: `delivery_end_time`,
      type: `time`
    },
    
    openingDate: {
      sql: `opening_date`,
      type: `time`
    }
  }
});
