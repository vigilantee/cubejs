cube(`TabPurchaseInvoice`, {
  sql: `SELECT * FROM \`tabPurchase Invoice\``,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [name, title, supplierName, tcName, taxId, billDate, dueDate, clearanceDate, postingDate, releaseDate, toDate, fromDate]
    },
    
    baseTotal: {
      sql: `base_total`,
      type: `sum`
    },
    
    paidAmount: {
      sql: `paid_amount`,
      type: `sum`
    },
    
    baseWriteOffAmount: {
      sql: `base_write_off_amount`,
      type: `sum`
    },
    
    basePaidAmount: {
      sql: `base_paid_amount`,
      type: `sum`
    },
    
    roundedTotal: {
      sql: `rounded_total`,
      type: `sum`
    },
    
    outstandingAmount: {
      sql: `outstanding_amount`,
      type: `sum`
    },
    
    discountAmount: {
      sql: `discount_amount`,
      type: `sum`
    },
    
    baseNetTotal: {
      sql: `base_net_total`,
      type: `sum`
    },
    
    disableRoundedTotal: {
      sql: `disable_rounded_total`,
      type: `sum`
    },
    
    baseGrandTotal: {
      sql: `base_grand_total`,
      type: `sum`
    },
    
    netTotal: {
      sql: `net_total`,
      type: `sum`
    },
    
    baseDiscountAmount: {
      sql: `base_discount_amount`,
      type: `sum`
    },
    
    total: {
      sql: `total`,
      type: `sum`
    },
    
    grandTotal: {
      sql: `grand_total`,
      type: `sum`
    },
    
    baseRoundedTotal: {
      sql: `base_rounded_total`,
      type: `sum`
    },
    
    writeOffAmount: {
      sql: `write_off_amount`,
      type: `sum`
    },
    
    totalQty: {
      sql: `total_qty`,
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
    
    taxesAndCharges: {
      sql: `taxes_and_charges`,
      type: `string`
    },
    
    supplierWarehouse: {
      sql: `supplier_warehouse`,
      type: `string`
    },
    
    terms: {
      sql: `terms`,
      type: `string`
    },
    
    priceListCurrency: {
      sql: `price_list_currency`,
      type: `string`
    },
    
    costCenter: {
      sql: `cost_center`,
      type: `string`
    },
    
    billNo: {
      sql: `bill_no`,
      type: `string`
    },
    
    title: {
      sql: `title`,
      type: `string`
    },
    
    company: {
      sql: `company`,
      type: `string`
    },
    
    contactDisplay: {
      sql: `contact_display`,
      type: `string`
    },
    
    addressDisplay: {
      sql: `address_display`,
      type: `string`
    },
    
    baseInWords: {
      sql: `base_in_words`,
      type: `string`
    },
    
    inWords: {
      sql: `in_words`,
      type: `string`
    },
    
    supplierName: {
      sql: `supplier_name`,
      type: `string`
    },
    
    contactPerson: {
      sql: `contact_person`,
      type: `string`
    },
    
    otherChargesCalculation: {
      sql: `other_charges_calculation`,
      type: `string`
    },
    
    cashBankAccount: {
      sql: `cash_bank_account`,
      type: `string`
    },
    
    letterHead: {
      sql: `letter_head`,
      type: `string`
    },
    
    currency: {
      sql: `currency`,
      type: `string`
    },
    
    remarks: {
      sql: `remarks`,
      type: `string`
    },
    
    tcName: {
      sql: `tc_name`,
      type: `string`
    },
    
    contactEmail: {
      sql: `contact_email`,
      type: `string`
    },
    
    namingSeries: {
      sql: `naming_series`,
      type: `string`
    },
    
    isOpening: {
      sql: `is_opening`,
      type: `string`
    },
    
    supplierAddress: {
      sql: `supplier_address`,
      type: `string`
    },
    
    buyingPriceList: {
      sql: `buying_price_list`,
      type: `string`
    },
    
    contactMobile: {
      sql: `contact_mobile`,
      type: `string`
    },
    
    interCompanyInvoiceReference: {
      sql: `inter_company_invoice_reference`,
      type: `string`
    },
    
    shippingAddress: {
      sql: `shipping_address`,
      type: `string`
    },
    
    creditTo: {
      sql: `credit_to`,
      type: `string`
    },
    
    holdComment: {
      sql: `hold_comment`,
      type: `string`
    },
    
    setWarehouse: {
      sql: `set_warehouse`,
      type: `string`
    },
    
    status: {
      sql: `status`,
      type: `string`
    },
    
    taxId: {
      sql: `tax_id`,
      type: `string`
    },
    
    returnAgainst: {
      sql: `return_against`,
      type: `string`
    },
    
    writeOffAccount: {
      sql: `write_off_account`,
      type: `string`
    },
    
    writeOffCostCenter: {
      sql: `write_off_cost_center`,
      type: `string`
    },
    
    autoRepeat: {
      sql: `auto_repeat`,
      type: `string`
    },
    
    rejectedWarehouse: {
      sql: `rejected_warehouse`,
      type: `string`
    },
    
    supplier: {
      sql: `supplier`,
      type: `string`
    },
    
    shippingRule: {
      sql: `shipping_rule`,
      type: `string`
    },
    
    language: {
      sql: `language`,
      type: `string`
    },
    
    shippingAddressDisplay: {
      sql: `shipping_address_display`,
      type: `string`
    },
    
    scanBarcode: {
      sql: `scan_barcode`,
      type: `string`
    },
    
    taxCategory: {
      sql: `tax_category`,
      type: `string`
    },
    
    applyDiscountOn: {
      sql: `apply_discount_on`,
      type: `string`
    },
    
    amendedFrom: {
      sql: `amended_from`,
      type: `string`
    },
    
    partyAccountCurrency: {
      sql: `party_account_currency`,
      type: `string`
    },
    
    againstExpenseAccount: {
      sql: `against_expense_account`,
      type: `string`
    },
    
    paymentTermsTemplate: {
      sql: `payment_terms_template`,
      type: `string`
    },
    
    isSubcontracted: {
      sql: `is_subcontracted`,
      type: `string`
    },
    
    modeOfPayment: {
      sql: `mode_of_payment`,
      type: `string`
    },
    
    selectPrintHeading: {
      sql: `select_print_heading`,
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
    
    billDate: {
      sql: `bill_date`,
      type: `time`
    },
    
    dueDate: {
      sql: `due_date`,
      type: `time`
    },
    
    clearanceDate: {
      sql: `clearance_date`,
      type: `time`
    },
    
    postingDate: {
      sql: `posting_date`,
      type: `time`
    },
    
    releaseDate: {
      sql: `release_date`,
      type: `time`
    },
    
    toDate: {
      sql: `to_date`,
      type: `time`
    },
    
    fromDate: {
      sql: `from_date`,
      type: `time`
    },
    
    postingTime: {
      sql: `posting_time`,
      type: `time`
    }
  }
});
