cube(`TabSalesOrder`, {
  sql: `SELECT * FROM cubejs.\`tabSales Order\``,
  
  joins: {
    TabSalesInvoiceItem: {
      relationship: `hasMany`,
      sql: `${TabSalesInvoiceItem}.sales_order = ${TabSalesOrder}.name`
    }
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [name, title, customerName, taxId, shippingAddressName, tcName, affirmId, transactionDate, deliveryDate, poDate, fromDate, toDate]
    },
    
    trueCount: {
      type: `count`,
      drillMembers :[count],
      filters: [
        { sql: `${CUBE}.docstatus=1` }
      ]
    },

    salesInvoiceToSalesOrderRatio: {
      sql: `(${TabSalesInvoice.trueCount})`,
      type: `number`,
      // format: `percent`
    },

    totalQty: {
      sql: `total_qty`,
      type: `sum`
    },
    
    baseTotal: {
      sql: `base_total`,
      type: `sum`
    },
    
    baseNetTotal: {
      sql: `base_net_total`,
      type: `sum`
    },
    
    total: {
      sql: `total`,
      type: `sum`
    },
    
    netTotal: {
      sql: `net_total`,
      type: `sum`
    },
    
    loyaltyAmount: {
      sql: `loyalty_amount`,
      type: `sum`
    },
    
    baseDiscountAmount: {
      sql: `base_discount_amount`,
      type: `sum`
    },
    
    discountAmount: {
      sql: `discount_amount`,
      type: `sum`
    },
    
    baseGrandTotal: {
      sql: `base_grand_total`,
      type: `sum`
    },
    
    baseRoundedTotal: {
      sql: `base_rounded_total`,
      type: `sum`
    },
    
    grandTotal: {
      sql: `grand_total`,
      type: `sum`
    },
    
    roundedTotal: {
      sql: `rounded_total`,
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
    
    title: {
      sql: `title`,
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
    
    customerName: {
      sql: `customer_name`,
      type: `string`
    },
    
    orderType: {
      sql: `order_type`,
      type: `string`
    },
    
    amendedFrom: {
      sql: `amended_from`,
      type: `string`
    },
    
    company: {
      sql: `company`,
      type: `string`
    },
    
    poNo: {
      sql: `po_no`,
      type: `string`
    },
    
    taxId: {
      sql: `tax_id`,
      type: `string`
    },
    
    customerAddress: {
      sql: `customer_address`,
      type: `string`
    },
    
    addressDisplay: {
      sql: `address_display`,
      type: `string`
    },
    
    contactPerson: {
      sql: `contact_person`,
      type: `string`
    },
    
    contactDisplay: {
      sql: `contact_display`,
      type: `string`
    },
    
    contactPhone: {
      sql: `contact_phone`,
      type: `string`
    },
    
    contactMobile: {
      sql: `contact_mobile`,
      type: `string`
    },
    
    contactEmail: {
      sql: `contact_email`,
      type: `string`
    },
    
    companyAddress: {
      sql: `company_address`,
      type: `string`
    },
    
    companyAddressDisplay: {
      sql: `company_address_display`,
      type: `string`
    },
    
    shippingAddressName: {
      sql: `shipping_address_name`,
      type: `string`
    },
    
    shippingAddress: {
      sql: `shipping_address`,
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
    
    currency: {
      sql: `currency`,
      type: `string`
    },
    
    sellingPriceList: {
      sql: `selling_price_list`,
      type: `string`
    },
    
    priceListCurrency: {
      sql: `price_list_currency`,
      type: `string`
    },
    
    setWarehouse: {
      sql: `set_warehouse`,
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
    
    shippingRule: {
      sql: `shipping_rule`,
      type: `string`
    },
    
    taxesAndCharges: {
      sql: `taxes_and_charges`,
      type: `string`
    },
    
    otherChargesCalculation: {
      sql: `other_charges_calculation`,
      type: `string`
    },
    
    couponCode: {
      sql: `coupon_code`,
      type: `string`
    },
    
    applyDiscountOn: {
      sql: `apply_discount_on`,
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
    
    paymentTermsTemplate: {
      sql: `payment_terms_template`,
      type: `string`
    },
    
    tcName: {
      sql: `tc_name`,
      type: `string`
    },
    
    terms: {
      sql: `terms`,
      type: `string`
    },
    
    interCompanyOrderReference: {
      sql: `inter_company_order_reference`,
      type: `string`
    },
    
    project: {
      sql: `project`,
      type: `string`
    },
    
    partyAccountCurrency: {
      sql: `party_account_currency`,
      type: `string`
    },
    
    source: {
      sql: `source`,
      type: `string`
    },
    
    campaign: {
      sql: `campaign`,
      type: `string`
    },
    
    language: {
      sql: `language`,
      type: `string`
    },
    
    letterHead: {
      sql: `letter_head`,
      type: `string`
    },
    
    selectPrintHeading: {
      sql: `select_print_heading`,
      type: `string`
    },
    
    status: {
      sql: `status`,
      type: `string`
    },
    
    deliveryStatus: {
      sql: `delivery_status`,
      type: `string`
    },
    
    billingStatus: {
      sql: `billing_status`,
      type: `string`
    },
    
    salesPartner: {
      sql: `sales_partner`,
      type: `string`
    },
    
    autoRepeat: {
      sql: `auto_repeat`,
      type: `string`
    },
    
    license: {
      sql: `license`,
      type: `string`
    },
    
    contract: {
      sql: `contract`,
      type: `string`
    },
    
    affirmId: {
      sql: `affirm_id`,
      type: `string`
    },
    
    affirmStatus: {
      sql: `affirm_status`,
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
    
    transactionDate: {
      sql: `transaction_date`,
      type: `time`
    },
    
    deliveryDate: {
      sql: `delivery_date`,
      type: `time`
    },
    
    poDate: {
      sql: `po_date`,
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
    
    fromDate: {
      sql: `from_date`,
      type: `time`
    },
    
    toDate: {
      sql: `to_date`,
      type: `time`
    }
  }
});
