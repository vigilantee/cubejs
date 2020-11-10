cube(`TabItem`, {
  sql: `SELECT * FROM newdatabase.\`tabItem\``,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [name, itemName, countryOfOrigin, slideshow, hubSyncId, metrcId, bloomtraceId]
    },

    productCount:{
      type: `count`,
      drillMembers :[count],
      filters: [
        { sql: `${CUBE}.is_sales_item = 1 and ${CUBE}.disabled = 0` }
      ]
    },

    sampleQuantity: {
      sql: `sample_quantity`,
      type: `sum`
    },
    
    minOrderQty: {
      sql: `min_order_qty`,
      type: `sum`
    },
    
    maxDiscount: {
      sql: `max_discount`,
      type: `sum`
    },
    
    totalProjectedQty: {
      sql: `total_projected_qty`,
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
    
    itemCode: {
      sql: `item_code`,
      type: `string`
    },
    
    variantOf: {
      sql: `variant_of`,
      type: `string`
    },
    
    itemName: {
      sql: `item_name`,
      type: `string`
    },
    
    itemGroup: {
      sql: `item_group`,
      type: `string`
    },
    
    stockUom: {
      sql: `stock_uom`,
      type: `string`
    },
    
    assetCategory: {
      sql: `asset_category`,
      type: `string`
    },
    
    assetNamingSeries: {
      sql: `asset_naming_series`,
      type: `string`
    },
    
    image: {
      sql: `image`,
      type: `string`
    },
    
    brand: {
      sql: `brand`,
      type: `string`
    },
    
    description: {
      sql: `description`,
      type: `string`
    },
    
    defaultMaterialRequestType: {
      sql: `default_material_request_type`,
      type: `string`
    },
    
    valuationMethod: {
      sql: `valuation_method`,
      type: `string`
    },
    
    warrantyPeriod: {
      sql: `warranty_period`,
      type: `string`
    },
    
    weightUom: {
      sql: `weight_uom`,
      type: `string`
    },
    
    batchNumberSeries: {
      sql: `batch_number_series`,
      type: `string`
    },
    
    serialNoSeries: {
      sql: `serial_no_series`,
      type: `string`
    },
    
    strainType: {
      sql: `strain_type`,
      type: `string`
    },
    
    itemCategory: {
      sql: `item_category`,
      type: `string`
    },
    
    variantBasedOn: {
      sql: `variant_based_on`,
      type: `string`
    },
    
    purchaseUom: {
      sql: `purchase_uom`,
      type: `string`
    },
    
    customer: {
      sql: `customer`,
      type: `string`
    },
    
    countryOfOrigin: {
      sql: `country_of_origin`,
      type: `string`
    },
    
    customsTariffNumber: {
      sql: `customs_tariff_number`,
      type: `string`
    },
    
    salesUom: {
      sql: `sales_uom`,
      type: `string`
    },
    
    deferredRevenueAccount: {
      sql: `deferred_revenue_account`,
      type: `string`
    },
    
    deferredExpenseAccount: {
      sql: `deferred_expense_account`,
      type: `string`
    },
    
    qualityInspectionTemplate: {
      sql: `quality_inspection_template`,
      type: `string`
    },
    
    defaultBom: {
      sql: `default_bom`,
      type: `string`
    },
    
    customerCode: {
      sql: `customer_code`,
      type: `string`
    },
    
    defaultItemManufacturer: {
      sql: `default_item_manufacturer`,
      type: `string`
    },
    
    defaultManufacturerPartNo: {
      sql: `default_manufacturer_part_no`,
      type: `string`
    },
    
    route: {
      sql: `route`,
      type: `string`
    },
    
    slideshow: {
      sql: `slideshow`,
      type: `string`
    },
    
    websiteImage: {
      sql: `website_image`,
      type: `string`
    },
    
    thumbnail: {
      sql: `thumbnail`,
      type: `string`
    },
    
    websiteWarehouse: {
      sql: `website_warehouse`,
      type: `string`
    },
    
    webLongDescription: {
      sql: `web_long_description`,
      type: `string`
    },
    
    websiteContent: {
      sql: `website_content`,
      type: `string`
    },
    
    hubCategoryToPublish: {
      sql: `hub_category_to_publish`,
      type: `string`
    },
    
    hubWarehouse: {
      sql: `hub_warehouse`,
      type: `string`
    },
    
    hubSyncId: {
      sql: `hub_sync_id`,
      type: `string`
    },
    
    metrcId: {
      sql: `metrc_id`,
      type: `string`
    },
    
    metrcItemCategory: {
      sql: `metrc_item_category`,
      type: `string`
    },
    
    metrcUnitValue: {
      sql: `metrc_unit_value`,
      type: `string`
    },
    
    metrcUom: {
      sql: `metrc_uom`,
      type: `string`
    },
    
    metrcUnitUom: {
      sql: `metrc_unit_uom`,
      type: `string`
    },
    
    bloomtraceId: {
      sql: `bloomtrace_id`,
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
    
    endOfLife: {
      sql: `end_of_life`,
      type: `time`
    }
  }
});
