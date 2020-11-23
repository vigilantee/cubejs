cube(`TabSalesInvoice`, {
  sql: `SELECT * FROM \`tabSales Invoice\``,
  
  joins: {
    TabCustomer: {
      relationship: `hasMany`,
      sql: `${TabSalesInvoice}.customer = ${TabCustomer}.name`
    }
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [name, customerName, tcName, taxId, offlinePosName, shippingAddressName, title, toDate, poDate, dueDate, postingDate, fromDate],
    },
    
    trueCount: {
      type: `count`,
      drillMembers :[count],
      filters: [
        { sql: `${CUBE}.docstatus=1` }
      ]
    },

    baseChangeAmount: {
      sql: `base_change_amount`,
      type: `sum`
    },
    
    changeAmount: {
      sql: `change_amount`,
      type: `sum`
    },
    
    grandTotal: {
      sql: `grand_total`,
      type: `sum`
    },

    trueGrandTotal: {
      sql:`grand_total`,
      type:`sum`,
      drillMembers:[grandTotal],
      filters:[
        { sql: `${CUBE}.docstatus=1` }
      ],
      format: `currency`
    },

    baseWriteOffAmount: {
      sql: `base_write_off_amount`,
      type: `sum`
    },
    
    total: {
      sql: `total`,
      type: `sum`
    },

    basePaidAmount: {
      sql: `base_paid_amount`,
      type: `sum`
    },
    
    totalBillingAmount: {
      sql: `total_billing_amount`,
      type: `sum`
    },
    
    outstandingAmount: {
      sql: `outstanding_amount`,
      type: `sum`
    },
    
    paidAmount: {
      sql: `paid_amount`,
      type: `sum`
    },
    
    totalQty: {
      sql: `total_qty`,
      type: `sum`
    },
    
    posTotalQty: {
      sql: `pos_total_qty`,
      type: `sum`
    },

    netTotal: {
      sql: `net_total`,
      type: `sum`
    },

    trueNetTotal:{
      sql:`net_total`,
      type: `sum`,
      drillMembers: [netTotal],
      filters: [
        { sql: `${CUBE}.status != 'Draft' OR ${CUBE}.status != 'Cancelled'` }
      ]
    },

    netTotalRows:{
      sql:`net_total`,
      type:`number`
    },

    AverageInvoiceAmount:{
      sql:`${netTotalRows}`,
      type:`avg`
    },
    discountAmount: {
      sql: `discount_amount`,
      type: `sum`
    },
    
    roundedTotal: {
      sql: `rounded_total`,
      type: `sum`
    },
    
    baseTotal: {
      sql: `base_total`,
      type: `sum`
    },
    
    baseDiscountAmount: {
      sql: `base_discount_amount`,
      type: `sum`
    },
    
    loyaltyAmount: {
      sql: `loyalty_amount`,
      type: `sum`
    },
    
    baseNetTotal: {
      sql: `base_net_total`,
      type: `sum`
    },
    
    writeOffAmount: {
      sql: `write_off_amount`,
      type: `sum`
    },
    
    baseRoundedTotal: {
      sql: `base_rounded_total`,
      type: `sum`
    },
    
    baseGrandTotal: {
      sql: `base_grand_total`,
      type: `sum`
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
    
    customerName: {
      sql: `customer_name`,
      type: `string`
    },
    
    loyaltyProgram: {
      sql: `loyalty_program`,
      type: `string`
    },
    
    contactMobile: {
      sql: `contact_mobile`,
      type: `string`
    },
    
    otherChargesCalculation: {
      sql: `other_charges_calculation`,
      type: `string`
    },
    
    costCenter: {
      sql: `cost_center`,
      type: `string`
    },
    
    inWords: {
      sql: `in_words`,
      type: `string`
    },
    
    customerAddress: {
      sql: `customer_address`,
      type: `string`
    },
    
    contactPerson: {
      sql: `contact_person`,
      type: `string`
    },
    
    scanBarcode: {
      sql: `scan_barcode`,
      type: `string`
    },
    
    posProfile: {
      sql: `pos_profile`,
      type: `string`
    },
    
    namingSeries: {
      sql: `naming_series`,
      type: `string`
    },
    
    customer: {
      sql: `customer`,
      type: `string`
    },
    
    tcName: {
      sql: `tc_name`,
      type: `string`
    },
    
    taxId: {
      sql: `tax_id`,
      type: `string`
    },
    
    setWarehouse: {
      sql: `set_warehouse`,
      type: `string`
    },
    
    offlinePosName: {
      sql: `offline_pos_name`,
      type: `string`
    },
    
    writeOffAccount: {
      sql: `write_off_account`,
      type: `string`
    },
    
    paymentTermsTemplate: {
      sql: `payment_terms_template`,
      type: `string`
    },
    
    companyAddress: {
      sql: `company_address`,
      type: `string`
    },
    
    writeOffCostCenter: {
      sql: `write_off_cost_center`,
      type: `string`
    },
    
    accountForChangeAmount: {
      sql: `account_for_change_amount`,
      type: `string`
    },
    
    againstIncomeAccount: {
      sql: `against_income_account`,
      type: `string`
    },
    
    cashBankAccount: {
      sql: `cash_bank_account`,
      type: `string`
    },
    
    selectPrintHeading: {
      sql: `select_print_heading`,
      type: `string`
    },
    
    contactDisplay: {
      sql: `contact_display`,
      type: `string`
    },
    
    company: {
      sql: `company`,
      type: `string`
    },
    
    addressDisplay: {
      sql: `address_display`,
      type: `string`
    },
    
    contactEmail: {
      sql: `contact_email`,
      type: `string`
    },
    
    loyaltyRedemptionAccount: {
      sql: `loyalty_redemption_account`,
      type: `string`
    },
    
    remarks: {
      sql: `remarks`,
      type: `string`
    },
    
    shippingAddressName: {
      sql: `shipping_address_name`,
      type: `string`
    },
    
    territory: {
      sql: `territory`,
      type: `string`
    },
    
    cFormApplicable: {
      sql: `c_form_applicable`,
      type: `string`
    },
    
    baseInWords: {
      sql: `base_in_words`,
      type: `string`
    },
    
    interCompanyInvoiceReference: {
      sql: `inter_company_invoice_reference`,
      type: `string`
    },
    
    shippingRule: {
      sql: `shipping_rule`,
      type: `string`
    },
    
    sellingPriceList: {
      sql: `selling_price_list`,
      type: `string`
    },
    
    title: {
      sql: `title`,
      type: `string`
    },
    
    cFormNo: {
      sql: `c_form_no`,
      type: `string`
    },
    
    campaign: {
      sql: `campaign`,
      type: `string`
    },
    
    autoRepeat: {
      sql: `auto_repeat`,
      type: `string`
    },
    
    applyDiscountOn: {
      sql: `apply_discount_on`,
      type: `string`
    },
    
    project: {
      sql: `project`,
      type: `string`
    },
    
    companyAddressDisplay: {
      sql: `company_address_display`,
      type: `string`
    },
    
    shippingAddress: {
      sql: `shipping_address`,
      type: `string`
    },
    
    debitTo: {
      sql: `debit_to`,
      type: `string`
    },
    
    source: {
      sql: `source`,
      type: `string`
    },
    
    loyaltyRedemptionCostCenter: {
      sql: `loyalty_redemption_cost_center`,
      type: `string`
    },
    
    taxCategory: {
      sql: `tax_category`,
      type: `string`
    },
    
    status: {
      sql: `status`,
      type: `string`
    },
    
    customerGroup: {
      sql: `customer_group`,
      type: `string`
    },
    
    isOpening: {
      sql: `is_opening`,
      type: `string`
    },
    
    letterHead: {
      sql: `letter_head`,
      type: `string`
    },
    
    taxesAndCharges: {
      sql: `taxes_and_charges`,
      type: `string`
    },
    
    currency: {
      sql: `currency`,
      type: `string`
    },
    
    priceListCurrency: {
      sql: `price_list_currency`,
      type: `string`
    },
    
    language: {
      sql: `language`,
      type: `string`
    },
    
    terms: {
      sql: `terms`,
      type: `string`
    },
    
    salesPartner: {
      sql: `sales_partner`,
      type: `string`
    },
    
    amendedFrom: {
      sql: `amended_from`,
      type: `string`
    },
    
    poNo: {
      sql: `po_no`,
      type: `string`
    },
    
    returnAgainst: {
      sql: `return_against`,
      type: `string`
    },
    
    partyAccountCurrency: {
      sql: `party_account_currency`,
      type: `string`
    },
    
    newOrderType: {
      sql: `new_order_type`,
      type: `string`
    },
    
    orderType: {
      sql: `order_type`,
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
    
    toDate: {
      sql: `to_date`,
      type: `time`
    },
    
    poDate: {
      sql: `po_date`,
      type: `time`
    },
    
    dueDate: {
      sql: `due_date`,
      type: `time`
    },
    
    postingTime: {
      sql: `posting_time`,
      type: `time`
    },
    
    postingDate: {
      sql: `posting_date`,
      type: `time`
    },
    
    fromDate: {
      sql: `from_date`,
      type: `time`
    }
  },

 
  preAggregations: {
    totalSalesMonthly: {
      type: `rollup`,
      measureReferences: [total],
      timeDimensionReference: creation,
      granularity: `month`
    }
  },


  // preAggregations: {
  //   salesCountMonthly: {
  //     type: `rollup`,
  //     measureReferences: [TabSalesInvoice.count, netTotal],
  //     dimensionReferences: [name],
  //     timeDimensionReference: postingDate,
  //     granularity: `day`,
  //     // partitionGranularity: `month`,
  //     // scheduledRefresh: true,
  //     // refreshKey: {
  //     //   every: `1 day`,
  //     //   incremental: true,
  //     //   updateWindow: `7 day`
  //     // }
  //   }
  // }
});
