cube(`TabCustomer`, {
  sql: `SELECT * FROM newdatabase.\`tabCustomer\``,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [name, leadName, taxId, emailId, customerPosId, customerName, openingDate]
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
    
    leadName: {
      sql: `lead_name`,
      type: `string`
    },
    
    marketSegment: {
      sql: `market_segment`,
      type: `string`
    },
    
    loyaltyProgramTier: {
      sql: `loyalty_program_tier`,
      type: `string`
    },
    
    mobileNo: {
      sql: `mobile_no`,
      type: `string`
    },
    
    taxId: {
      sql: `tax_id`,
      type: `string`
    },
    
    defaultPriceList: {
      sql: `default_price_list`,
      type: `string`
    },
    
    industry: {
      sql: `industry`,
      type: `string`
    },
    
    customerDetails: {
      sql: `customer_details`,
      type: `string`
    },
    
    customerPrimaryAddress: {
      sql: `customer_primary_address`,
      type: `string`
    },
    
    emailId: {
      sql: `email_id`,
      type: `string`
    },
    
    language: {
      sql: `language`,
      type: `string`
    },
    
    namingSeries: {
      sql: `naming_series`,
      type: `string`
    },
    
    taxCategory: {
      sql: `tax_category`,
      type: `string`
    },
    
    website: {
      sql: `website`,
      type: `string`
    },
    
    accountManager: {
      sql: `account_manager`,
      type: `string`
    },
    
    customerPosId: {
      sql: `customer_pos_id`,
      type: `string`
    },
    
    paymentTerms: {
      sql: `payment_terms`,
      type: `string`
    },
    
    defaultCurrency: {
      sql: `default_currency`,
      type: `string`
    },
    
    image: {
      sql: `image`,
      type: `string`
    },
    
    customerType: {
      sql: `customer_type`,
      type: `string`
    },
    
    customerGroup: {
      sql: `customer_group`,
      type: `string`
    },
    
    defaultBankAccount: {
      sql: `default_bank_account`,
      type: `string`
    },
    
    customerName: {
      sql: `customer_name`,
      type: `string`
    },
    
    primaryAddress: {
      sql: `primary_address`,
      type: `string`
    },
    
    loyaltyProgram: {
      sql: `loyalty_program`,
      type: `string`
    },
    
    salutation: {
      sql: `salutation`,
      type: `string`
    },
    
    gender: {
      sql: `gender`,
      type: `string`
    },
    
    territory: {
      sql: `territory`,
      type: `string`
    },
    
    customerPrimaryContact: {
      sql: `customer_primary_contact`,
      type: `string`
    },
    
    defaultSalesPartner: {
      sql: `default_sales_partner`,
      type: `string`
    },
    
    representsCompany: {
      sql: `represents_company`,
      type: `string`
    },
    
    license: {
      sql: `license`,
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
