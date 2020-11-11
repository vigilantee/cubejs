cube(`TabPaymentEntry`, {
  sql: `SELECT * FROM cubejs.\`tabPayment Entry\``,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [name, partyName, paidFrom, paidFromAccountCurrency, paidTo, paidToAccountCurrency, title, postingDate, referenceDate, clearanceDate]
    },
    
    partyBalance: {
      sql: `party_balance`,
      type: `sum`
    },
    
    paidFromAccountBalance: {
      sql: `paid_from_account_balance`,
      type: `sum`
    },
    
    paidToAccountBalance: {
      sql: `paid_to_account_balance`,
      type: `sum`
    },
    
    paidAmount: {
      sql: `paid_amount`,
      type: `sum`
    },

    truePaidAmount: {
      sql:`paid_amount`,
      type: `sum`,
      drillMembers: [paidAmount],
      filters: [
        { sql: `${CUBE}.docstatus = 1 AND ${CUBE}.payment_type = 'Receive'` }
      ]
    },

    monthlyAverageTruePaidAmount: {
      sql:`paid_amount/30`,
      type: `sum`,
      format: `currency`,
      drillMembers: [paidAmount],
      filters: [
        { sql: `${CUBE}.docstatus = 1 AND ${CUBE}.payment_type = 'Receive'` }
      ]
    },

    weeklyAverageTruePaidAmount: {
      sql:`paid_amount/7`,
      type: `sum`,
      format: `currency`,
      drillMembers: [paidAmount],
      filters: [
        { sql: `${CUBE}.docstatus = 1 AND ${CUBE}.payment_type = 'Receive'` }
      ]
    },

    basePaidAmount: {
      sql: `base_paid_amount`,
      type: `sum`
    },
    
    receivedAmount: {
      sql: `received_amount`,
      type: `sum`
    },
    
    baseReceivedAmount: {
      sql: `base_received_amount`,
      type: `sum`
    },
    
    totalAllocatedAmount: {
      sql: `total_allocated_amount`,
      type: `sum`
    },
    
    baseTotalAllocatedAmount: {
      sql: `base_total_allocated_amount`,
      type: `sum`
    },
    
    unallocatedAmount: {
      sql: `unallocated_amount`,
      type: `sum`
    },
    
    differenceAmount: {
      sql: `difference_amount`,
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
    
    namingSeries: {
      sql: `naming_series`,
      type: `string`
    },
    
    paymentType: {
      sql: `payment_type`,
      type: `string`
    },
    
    paymentOrderStatus: {
      sql: `payment_order_status`,
      type: `string`
    },
    
    company: {
      sql: `company`,
      type: `string`
    },
    
    modeOfPayment: {
      sql: `mode_of_payment`,
      type: `string`
    },
    
    partyType: {
      sql: `party_type`,
      type: `string`
    },
    
    party: {
      sql: `party`,
      type: `string`
    },
    
    partyName: {
      sql: `party_name`,
      type: `string`
    },
    
    bankAccount: {
      sql: `bank_account`,
      type: `string`
    },
    
    partyBankAccount: {
      sql: `party_bank_account`,
      type: `string`
    },
    
    contactPerson: {
      sql: `contact_person`,
      type: `string`
    },
    
    contactEmail: {
      sql: `contact_email`,
      type: `string`
    },
    
    paidFrom: {
      sql: `paid_from`,
      type: `string`
    },
    
    paidFromAccountCurrency: {
      sql: `paid_from_account_currency`,
      type: `string`
    },
    
    paidTo: {
      sql: `paid_to`,
      type: `string`
    },
    
    paidToAccountCurrency: {
      sql: `paid_to_account_currency`,
      type: `string`
    },
    
    referenceNo: {
      sql: `reference_no`,
      type: `string`
    },
    
    project: {
      sql: `project`,
      type: `string`
    },
    
    costCenter: {
      sql: `cost_center`,
      type: `string`
    },
    
    status: {
      sql: `status`,
      type: `string`
    },
    
    remarks: {
      sql: `remarks`,
      type: `string`
    },
    
    letterHead: {
      sql: `letter_head`,
      type: `string`
    },
    
    printHeading: {
      sql: `print_heading`,
      type: `string`
    },
    
    bank: {
      sql: `bank`,
      type: `string`
    },
    
    bankAccountNo: {
      sql: `bank_account_no`,
      type: `string`
    },
    
    paymentOrder: {
      sql: `payment_order`,
      type: `string`
    },
    
    autoRepeat: {
      sql: `auto_repeat`,
      type: `string`
    },
    
    amendedFrom: {
      sql: `amended_from`,
      type: `string`
    },
    
    title: {
      sql: `title`,
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
    
    postingDate: {
      sql: `posting_date`,
      type: `time`
    },
    
    referenceDate: {
      sql: `reference_date`,
      type: `time`
    },
    
    clearanceDate: {
      sql: `clearance_date`,
      type: `time`
    }
  }
});
