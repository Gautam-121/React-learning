export const userInput = (values)=>{

    const inputs = [
        {
          id: 1,
          name: "userName",
          type: "text",
          placeholder: "UserName",
          errorMessage : "Username should be 3-16 characters and shouldn't include any special character",
          label: "Username",
          pattern : "^[A-Za-z0-9]{3,16}$",
          required : true
        },
        {
          id: 2,
          name: "email",
          type: "email",
          placeholder: "Email",
          errorMessage : "It should be a valid email address",
          label: "Email",
          required : true
        },
        {
          id: 3,
          name: "birthday",
          type: "date",
          placeholder: "Birthday",
          label: "Birthday",
        },
        {
          id: 4,
          name: "password",
          type: "password",
          placeholder: "Password",
          errorMessage : "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
          label: "Password",
          pattern : "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!%*?&])[A-Za-z0-9@$!%*?&]{8,20}$",
          required : true
        },
        {
          id: 5,
          name: "comfirmPassword",
          type: "password",
          placeholder: "Comfirm Password",
          errorMessage : "Password don't match!",
          label: "Comfirm Password",
          pattern : values.password,
          required : true
        },
      ];
    
    return inputs
}

export const navList =  [
    {
        id : 1,
        linkOpen : "/search",
        listName : "Search",
        symbol_logo : <i class="fa-solid fa-magnifying-glass"></i>
    },
    {
        id : 2,
        linkOpen : "/offers-near-me",
        listName : "Offers",
        symbol_logo : <i class="fa-solid fa-percent"></i>
    },
    {
        id : 3,
        linkOpen : "/support",
        listName : "Help",
        symbol_logo : <i class="fa-solid fa-life-ring"></i>
    },
    {
        id : 4,
        linkOpen : "",
        listName : "Sign In",
        symbol_logo : <i class="fa-regular fa-user"></i>
    },
    {
        id : 5,
        linkOpen : "/checkout",
        listName : "Cart",
        symbol_logo : <i class="fa-solid fa-cart-shopping"></i>
    },
]
export const restaurants = [
  {
      "info": {
          "id": "607353",
          "name": "The Filter Coffee",
          "cloudinaryImageId": "hcgo1vj7mikezkmqcroh",
          "locality": "Bannergatta Main Road",
          "areaName": "Arekere",
          "costForTwo": "₹250 for two",
          "cuisines": [
              "South Indian",
              "Snacks",
              "Beverages"
          ],
          "avgRating": 4.6,
          "veg": true,
          "feeDetails": {
              "restaurantId": "607353",
              "fees": [
                  {
                      "name": "BASE_DISTANCE",
                      "fee": 4300
                  },
                  {
                      "name": "BASE_TIME"
                  },
                  {
                      "name": "ANCILLARY_SURGE_FEE"
                  }
              ],
              "totalFee": 4300
          },
          "parentId": "21001",
          "avgRatingString": "4.6",
          "totalRatingsString": "5K+",
          "promoted": true,
          "adTrackingId": "cid=9361643~p=1~eid=0000018b-b712-f90f-3112-652500d4012a~srvts=1699583555855~45995",
          "sla": {
              "deliveryTime": 23,
              "lastMileTravel": 4.6,
              "serviceability": "SERVICEABLE",
              "slaString": "23 mins",
              "lastMileTravelString": "4.6 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2023-11-10 22:00:00",
              "opened": true
          },
          "badges": {
              "imageBadges": [
                  {
                      "imageId": "v1695133679/badges/Pure_Veg111.png",
                      "description": "pureveg"
                  }
              ]
          },
          "isOpen": true,
          "aggregatedDiscountInfoV2": {},
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "textBased": {},
                  "imageBased": {
                      "badgeObject": [
                          {
                              "attributes": {
                                  "imageId": "v1695133679/badges/Pure_Veg111.png",
                                  "description": "pureveg"
                              }
                          }
                      ]
                  },
                  "textExtendedBadges": {}
              }
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {}
      },
      "analytics": {},
      "cta": {
          "link": "swiggy://menu?restaurant_id=607353",
          "text": "RESTAURANT_MENU",
          "type": "DEEPLINK"
      }
  },
  {
      "info": {
          "id": "685759",
          "name": "The Rameshwaram Cafe",
          "cloudinaryImageId": "c9b36413c755d072ec34619ee585bef4",
          "locality": "2nd Phase",
          "areaName": "JP Nagar",
          "costForTwo": "₹250 for two",
          "cuisines": [
              "South Indian"
          ],
          "avgRating": 4.5,
          "veg": true,
          "feeDetails": {
              "restaurantId": "685759",
              "fees": [
                  {
                      "name": "BASE_DISTANCE",
                      "fee": 3100
                  },
                  {
                      "name": "BASE_TIME"
                  },
                  {
                      "name": "ANCILLARY_SURGE_FEE"
                  }
              ],
              "totalFee": 3100
          },
          "parentId": "384316",
          "avgRatingString": "4.5",
          "totalRatingsString": "10K+",
          "sla": {
              "deliveryTime": 16,
              "lastMileTravel": 1,
              "serviceability": "SERVICEABLE",
              "slaString": "16 mins",
              "lastMileTravelString": "1.0 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2023-11-10 23:59:00",
              "opened": true
          },
          "badges": {},
          "isOpen": true,
          "aggregatedDiscountInfoV2": {},
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "textBased": {},
                  "imageBased": {},
                  "textExtendedBadges": {}
              }
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {}
      },
      "analytics": {},
      "cta": {
          "link": "swiggy://menu?restaurant_id=685759",
          "text": "RESTAURANT_MENU",
          "type": "DEEPLINK"
      }
  },
  {
      "info": {
          "id": "107476",
          "name": "Davanagere Benne Dose By MD Foods",
          "cloudinaryImageId": "qz6bnyiainw6carl2vei",
          "locality": "9th Block",
          "areaName": "Jayanagar",
          "costForTwo": "₹150 for two",
          "cuisines": [
              "South Indian"
          ],
          "avgRating": 4.2,
          "veg": true,
          "feeDetails": {
              "restaurantId": "107476",
              "fees": [
                  {
                      "name": "BASE_DISTANCE",
                      "fee": 3100
                  },
                  {
                      "name": "BASE_TIME"
                  },
                  {
                      "name": "ANCILLARY_SURGE_FEE"
                  }
              ],
              "totalFee": 3100
          },
          "parentId": "458538",
          "avgRatingString": "4.2",
          "totalRatingsString": "10K+",
          "sla": {
              "deliveryTime": 20,
              "lastMileTravel": 1.4,
              "serviceability": "SERVICEABLE",
              "slaString": "20 mins",
              "lastMileTravelString": "1.4 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2023-11-10 22:30:00",
              "opened": true
          },
          "badges": {
              "imageBadges": [
                  {
                      "imageId": "v1695133679/badges/Pure_Veg111.png",
                      "description": "pureveg"
                  }
              ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "textBased": {},
                  "imageBased": {
                      "badgeObject": [
                          {
                              "attributes": {
                                  "imageId": "v1695133679/badges/Pure_Veg111.png",
                                  "description": "pureveg"
                              }
                          }
                      ]
                  },
                  "textExtendedBadges": {}
              }
          },
          "aggregatedDiscountInfoV3": {
              "header": "30% OFF",
              "subHeader": "UPTO ₹75"
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {}
      },
      "analytics": {},
      "cta": {
          "link": "swiggy://menu?restaurant_id=107476",
          "text": "RESTAURANT_MENU",
          "type": "DEEPLINK"
      }
  },
  {
      "info": {
          "id": "52212",
          "name": "Dakshin Cafe",
          "cloudinaryImageId": "hssjxq1ojl38ncklnbgb",
          "locality": "7th Phase",
          "areaName": "J P Nagar",
          "costForTwo": "₹150 for two",
          "cuisines": [
              "South Indian",
              "North Indian",
              "Chinese"
          ],
          "avgRating": 4.4,
          "veg": true,
          "feeDetails": {
              "restaurantId": "52212",
              "fees": [
                  {
                      "name": "BASE_DISTANCE",
                      "fee": 3700
                  },
                  {
                      "name": "BASE_TIME"
                  },
                  {
                      "name": "ANCILLARY_SURGE_FEE"
                  }
              ],
              "totalFee": 3700
          },
          "parentId": "6276",
          "avgRatingString": "4.4",
          "totalRatingsString": "10K+",
          "sla": {
              "deliveryTime": 19,
              "lastMileTravel": 3,
              "serviceability": "SERVICEABLE",
              "slaString": "19 mins",
              "lastMileTravelString": "3.0 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2023-11-10 22:30:00",
              "opened": true
          },
          "badges": {
              "imageBadges": [
                  {
                      "imageId": "v1695133679/badges/Pure_Veg111.png",
                      "description": "pureveg"
                  }
              ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "textBased": {},
                  "imageBased": {
                      "badgeObject": [
                          {
                              "attributes": {
                                  "imageId": "v1695133679/badges/Pure_Veg111.png",
                                  "description": "pureveg"
                              }
                          }
                      ]
                  },
                  "textExtendedBadges": {}
              }
          },
          "aggregatedDiscountInfoV3": {
              "header": "₹101 OFF",
              "subHeader": "ABOVE ₹249",
              "discountTag": "FLAT DEAL"
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {}
      },
      "analytics": {},
      "cta": {
          "link": "swiggy://menu?restaurant_id=52212",
          "text": "RESTAURANT_MENU",
          "type": "DEEPLINK"
      }
  },
  {
      "info": {
          "id": "491468",
          "name": "Amma Pastries",
          "cloudinaryImageId": "hiqozsukubqaevlzphtc",
          "locality": "7th phase",
          "areaName": "J P Nagar",
          "costForTwo": "₹350 for two",
          "cuisines": [
              "Bakery",
              "Desserts"
          ],
          "avgRating": 3.8,
          "feeDetails": {
              "restaurantId": "491468",
              "fees": [
                  {
                      "name": "BASE_DISTANCE",
                      "fee": 3700
                  },
                  {
                      "name": "BASE_TIME"
                  },
                  {
                      "name": "ANCILLARY_SURGE_FEE"
                  }
              ],
              "totalFee": 3700
          },
          "parentId": "388842",
          "avgRatingString": "3.8",
          "totalRatingsString": "1K+",
          "promoted": true,
          "adTrackingId": "cid=9355255~p=6~eid=0000018b-b712-f90f-3112-652a00d4062c~srvts=1699583555855~45995",
          "sla": {
              "deliveryTime": 20,
              "lastMileTravel": 3.8,
              "serviceability": "SERVICEABLE",
              "slaString": "20 mins",
              "lastMileTravelString": "3.8 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2023-11-11 00:00:00",
              "opened": true
          },
          "badges": {},
          "isOpen": true,
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "textExtendedBadges": {},
                  "textBased": {},
                  "imageBased": {}
              }
          },
          "aggregatedDiscountInfoV3": {
              "header": "20% OFF",
              "subHeader": "ABOVE ₹700",
              "discountTag": "FLAT DEAL"
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {}
      },
      "analytics": {},
      "cta": {
          "link": "swiggy://menu?restaurant_id=491468",
          "text": "RESTAURANT_MENU",
          "type": "DEEPLINK"
      }
  },
  {
      "info": {
          "id": "239218",
          "name": "A2B - Adyar Ananda Bhavan",
          "cloudinaryImageId": "popt7wi1xnlblxdzuebn",
          "locality": "7th Phase",
          "areaName": "J P Nagar",
          "costForTwo": "₹300 for two",
          "cuisines": [
              "South Indian",
              "North Indian",
              "Sweets",
              "Chinese"
          ],
          "avgRating": 4.1,
          "veg": true,
          "feeDetails": {
              "restaurantId": "239218",
              "fees": [
                  {
                      "name": "BASE_DISTANCE",
                      "fee": 3100
                  },
                  {
                      "name": "BASE_TIME"
                  },
                  {
                      "name": "ANCILLARY_SURGE_FEE"
                  }
              ],
              "totalFee": 3100
          },
          "parentId": "22",
          "avgRatingString": "4.1",
          "totalRatingsString": "5K+",
          "sla": {
              "deliveryTime": 28,
              "lastMileTravel": 2.5,
              "serviceability": "SERVICEABLE",
              "slaString": "28 mins",
              "lastMileTravelString": "2.5 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2023-11-10 22:30:00",
              "opened": true
          },
          "badges": {
              "imageBadges": [
                  {
                      "imageId": "v1695133679/badges/Pure_Veg111.png",
                      "description": "pureveg"
                  }
              ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {
                      "badgeObject": [
                          {
                              "attributes": {
                                  "imageId": "v1695133679/badges/Pure_Veg111.png",
                                  "description": "pureveg"
                              }
                          }
                      ]
                  },
                  "textExtendedBadges": {},
                  "textBased": {}
              }
          },
          "aggregatedDiscountInfoV3": {
              "header": "30% OFF",
              "subHeader": "UPTO ₹75"
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {}
      },
      "analytics": {},
      "cta": {
          "link": "swiggy://menu?restaurant_id=239218",
          "text": "RESTAURANT_MENU",
          "type": "DEEPLINK"
      }
  },
  {
      "info": {
          "id": "190224",
          "name": "Paakashala",
          "cloudinaryImageId": "odh45j5wztvhsmu5gasc",
          "locality": "1st Phase",
          "areaName": "JP Nagar",
          "costForTwo": "₹500 for two",
          "cuisines": [
              "Chinese",
              "North Indian",
              "South Indian"
          ],
          "avgRating": 4.4,
          "veg": true,
          "feeDetails": {
              "restaurantId": "190224",
              "fees": [
                  {
                      "name": "BASE_DISTANCE",
                      "fee": 3100
                  },
                  {
                      "name": "BASE_TIME"
                  },
                  {
                      "name": "ANCILLARY_SURGE_FEE"
                  }
              ],
              "totalFee": 3100
          },
          "parentId": "6959",
          "avgRatingString": "4.4",
          "totalRatingsString": "10K+",
          "sla": {
              "deliveryTime": 16,
              "lastMileTravel": 0.5,
              "serviceability": "SERVICEABLE",
              "slaString": "16 mins",
              "lastMileTravelString": "0.5 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2023-11-10 23:00:00",
              "opened": true
          },
          "badges": {
              "imageBadges": [
                  {
                      "imageId": "v1695133679/badges/Pure_Veg111.png",
                      "description": "pureveg"
                  }
              ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "textBased": {},
                  "imageBased": {
                      "badgeObject": [
                          {
                              "attributes": {
                                  "imageId": "v1695133679/badges/Pure_Veg111.png",
                                  "description": "pureveg"
                              }
                          }
                      ]
                  },
                  "textExtendedBadges": {}
              }
          },
          "aggregatedDiscountInfoV3": {
              "header": "50% OFF",
              "subHeader": "UPTO ₹100"
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {}
      },
      "analytics": {},
      "cta": {
          "link": "swiggy://menu?restaurant_id=190224",
          "text": "RESTAURANT_MENU",
          "type": "DEEPLINK"
      }
  },
  {
      "info": {
          "id": "1754",
          "name": "SLV Swadishta (South Indian)",
          "cloudinaryImageId": "pqu2x7g02zbrsmiohr1f",
          "locality": "2nd Stage",
          "areaName": "Banashankari",
          "costForTwo": "₹300 for two",
          "cuisines": [
              "South Indian"
          ],
          "avgRating": 4.5,
          "veg": true,
          "feeDetails": {
              "restaurantId": "1754",
              "fees": [
                  {
                      "name": "BASE_DISTANCE",
                      "fee": 3700
                  },
                  {
                      "name": "BASE_TIME"
                  },
                  {
                      "name": "ANCILLARY_SURGE_FEE"
                  }
              ],
              "totalFee": 3700
          },
          "parentId": "21088",
          "avgRatingString": "4.5",
          "totalRatingsString": "10K+",
          "sla": {
              "deliveryTime": 24,
              "lastMileTravel": 3.9,
              "serviceability": "SERVICEABLE",
              "slaString": "24 mins",
              "lastMileTravelString": "3.9 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2023-11-10 21:00:00",
              "opened": true
          },
          "badges": {
              "imageBadges": [
                  {
                      "imageId": "v1695133679/badges/Pure_Veg111.png",
                      "description": "pureveg"
                  }
              ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "textBased": {},
                  "imageBased": {
                      "badgeObject": [
                          {
                              "attributes": {
                                  "description": "pureveg",
                                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                              }
                          }
                      ]
                  },
                  "textExtendedBadges": {}
              }
          },
          "aggregatedDiscountInfoV3": {
              "header": "10% OFF",
              "subHeader": "ABOVE ₹650",
              "discountTag": "FLAT DEAL"
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {}
      },
      "analytics": {},
      "cta": {
          "link": "swiggy://menu?restaurant_id=1754",
          "text": "RESTAURANT_MENU",
          "type": "DEEPLINK"
      }
  },
  {
      "info": {
          "id": "22246",
          "name": "Sri Bhagya Grand",
          "cloudinaryImageId": "k3gbf3gczuzh1ydeiodk",
          "locality": "DUO Layout",
          "areaName": "Bilekahalli",
          "costForTwo": "₹150 for two",
          "cuisines": [
              "South Indian",
              "North Indian",
              "Chinese",
              "Desserts",
              "Jain",
              "Ice Cream",
              "Beverages"
          ],
          "avgRating": 4.2,
          "veg": true,
          "feeDetails": {
              "restaurantId": "22246",
              "fees": [
                  {
                      "name": "BASE_DISTANCE",
                      "fee": 4300
                  },
                  {
                      "name": "BASE_TIME"
                  },
                  {
                      "name": "ANCILLARY_SURGE_FEE"
                  }
              ],
              "totalFee": 4300
          },
          "parentId": "21600",
          "avgRatingString": "4.2",
          "totalRatingsString": "10K+",
          "promoted": true,
          "adTrackingId": "cid=9372481~p=11~eid=0000018b-b712-f90f-3112-652f00d40b05~srvts=1699583555855~45995",
          "sla": {
              "deliveryTime": 23,
              "lastMileTravel": 4.1,
              "serviceability": "SERVICEABLE",
              "slaString": "23 mins",
              "lastMileTravelString": "4.1 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2023-11-10 22:30:00",
              "opened": true
          },
          "badges": {
              "imageBadges": [
                  {
                      "imageId": "v1695133679/badges/Pure_Veg111.png",
                      "description": "pureveg"
                  }
              ],
              "textExtendedBadges": [
                  {
                      "iconId": "guiltfree/GF_Logo_android_3x",
                      "shortDescription": "options available",
                      "fontColor": "#7E808C"
                  }
              ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {
                      "badgeObject": [
                          {
                              "attributes": {
                                  "imageId": "v1695133679/badges/Pure_Veg111.png",
                                  "description": "pureveg"
                              }
                          }
                      ]
                  },
                  "textExtendedBadges": {
                      "badgeObject": [
                          {
                              "attributes": {
                                  "iconId": "guiltfree/GF_Logo_android_3x",
                                  "description": "",
                                  "shortDescription": "options available",
                                  "fontColor": "#7E808C"
                              }
                          }
                      ]
                  },
                  "textBased": {}
              }
          },
          "aggregatedDiscountInfoV3": {
              "header": "₹101 OFF",
              "subHeader": "ABOVE ₹249",
              "discountTag": "FLAT DEAL"
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {}
      },
      "analytics": {},
      "cta": {
          "link": "swiggy://menu?restaurant_id=22246",
          "text": "RESTAURANT_MENU",
          "type": "DEEPLINK"
      }
  },
  {
      "info": {
          "id": "476261",
          "name": "Sri Nayvedya Veg",
          "cloudinaryImageId": "hljbvcwexdml5cllguis",
          "locality": "4th Block",
          "areaName": "Jayanagar",
          "costForTwo": "₹150 for two",
          "cuisines": [
              "South Indian"
          ],
          "avgRating": 4.4,
          "veg": true,
          "feeDetails": {
              "restaurantId": "476261",
              "fees": [
                  {
                      "name": "BASE_DISTANCE",
                      "fee": 3100
                  },
                  {
                      "name": "BASE_TIME"
                  },
                  {
                      "name": "ANCILLARY_SURGE_FEE"
                  }
              ],
              "totalFee": 3100
          },
          "parentId": "285843",
          "avgRatingString": "4.4",
          "totalRatingsString": "1K+",
          "sla": {
              "deliveryTime": 23,
              "lastMileTravel": 2.5,
              "serviceability": "SERVICEABLE",
              "slaString": "23 mins",
              "lastMileTravelString": "2.5 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2023-11-10 22:00:00",
              "opened": true
          },
          "badges": {
              "imageBadges": [
                  {
                      "imageId": "v1695133679/badges/Pure_Veg111.png",
                      "description": "pureveg"
                  }
              ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {
                      "badgeObject": [
                          {
                              "attributes": {
                                  "description": "pureveg",
                                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                              }
                          }
                      ]
                  },
                  "textExtendedBadges": {},
                  "textBased": {}
              }
          },
          "aggregatedDiscountInfoV3": {
              "header": "₹75 OFF",
              "subHeader": "ABOVE ₹299",
              "discountTag": "FLAT DEAL"
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {}
      },
      "analytics": {},
      "cta": {
          "link": "swiggy://menu?restaurant_id=476261",
          "text": "RESTAURANT_MENU",
          "type": "DEEPLINK"
      }
  },
  {
      "info": {
          "id": "50396",
          "name": "MTR",
          "cloudinaryImageId": "nr39m6vnu6kdbfjj2lrv",
          "locality": "JP Nagar",
          "areaName": "JP Nagar",
          "costForTwo": "₹300 for two",
          "cuisines": [
              "South Indian"
          ],
          "avgRating": 4.4,
          "veg": true,
          "feeDetails": {
              "restaurantId": "50396",
              "fees": [
                  {
                      "name": "BASE_DISTANCE",
                      "fee": 3100
                  },
                  {
                      "name": "BASE_TIME"
                  },
                  {
                      "name": "ANCILLARY_SURGE_FEE"
                  }
              ],
              "totalFee": 3100
          },
          "parentId": "5689",
          "avgRatingString": "4.4",
          "totalRatingsString": "10K+",
          "sla": {
              "deliveryTime": 18,
              "lastMileTravel": 1.6,
              "serviceability": "SERVICEABLE",
              "slaString": "18 mins",
              "lastMileTravelString": "1.6 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2023-11-10 21:30:00",
              "opened": true
          },
          "badges": {},
          "isOpen": true,
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "textBased": {},
                  "imageBased": {},
                  "textExtendedBadges": {}
              }
          },
          "aggregatedDiscountInfoV3": {
              "header": "20% OFF",
              "subHeader": "UPTO ₹50",
              "discountTag": "FOR YOU",
              "headerTypeV2": "HEADER_TYPE_V2_TOP_UP"
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {}
      },
      "analytics": {},
      "cta": {
          "link": "swiggy://menu?restaurant_id=50396",
          "text": "RESTAURANT_MENU",
          "type": "DEEPLINK"
      }
  },
  {
      "info": {
          "id": "21954",
          "name": "SLV Ragigudda",
          "cloudinaryImageId": "cdba173526421253fadacfcc3b7ff9f2",
          "locality": "9Th Block",
          "areaName": "Jayanagar",
          "costForTwo": "₹250 for two",
          "cuisines": [
              "South Indian",
              "Snacks",
              "North Indian",
              "Chinese"
          ],
          "avgRating": 4.4,
          "veg": true,
          "feeDetails": {
              "restaurantId": "21954",
              "fees": [
                  {
                      "name": "BASE_DISTANCE",
                      "fee": 3100
                  },
                  {
                      "name": "BASE_TIME"
                  },
                  {
                      "name": "ANCILLARY_SURGE_FEE"
                  }
              ],
              "totalFee": 3100
          },
          "parentId": "21601",
          "avgRatingString": "4.4",
          "totalRatingsString": "10K+",
          "sla": {
              "deliveryTime": 16,
              "lastMileTravel": 1.2,
              "serviceability": "SERVICEABLE",
              "slaString": "16 mins",
              "lastMileTravelString": "1.2 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2023-11-10 21:30:00",
              "opened": true
          },
          "badges": {
              "imageBadges": [
                  {
                      "imageId": "v1695133679/badges/Pure_Veg111.png",
                      "description": "pureveg"
                  }
              ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "textBased": {},
                  "imageBased": {
                      "badgeObject": [
                          {
                              "attributes": {
                                  "description": "pureveg",
                                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                              }
                          }
                      ]
                  },
                  "textExtendedBadges": {}
              }
          },
          "aggregatedDiscountInfoV3": {
              "header": "₹100 OFF",
              "subHeader": "ABOVE ₹499",
              "discountTag": "FLAT DEAL"
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {}
      },
      "analytics": {},
      "cta": {
          "link": "swiggy://menu?restaurant_id=21954",
          "text": "RESTAURANT_MENU",
          "type": "DEEPLINK"
      }
  },
  {
      "info": {
          "id": "292472",
          "name": "Jagali Thindi",
          "cloudinaryImageId": "omncqdz5fmrphvjyvvwc",
          "locality": "7th phase",
          "areaName": "JP Nagar",
          "costForTwo": "₹200 for two",
          "cuisines": [
              "South Indian"
          ],
          "avgRating": 4.1,
          "veg": true,
          "feeDetails": {
              "restaurantId": "292472",
              "fees": [
                  {
                      "name": "BASE_DISTANCE",
                      "fee": 3700
                  },
                  {
                      "name": "BASE_TIME"
                  },
                  {
                      "name": "ANCILLARY_SURGE_FEE"
                  }
              ],
              "totalFee": 3700
          },
          "parentId": "108131",
          "avgRatingString": "4.1",
          "totalRatingsString": "1K+",
          "promoted": true,
          "adTrackingId": "cid=9341443~p=12~eid=0000018b-b712-f90f-3112-653000d40c06~srvts=1699583555855~45995",
          "sla": {
              "deliveryTime": 21,
              "lastMileTravel": 3,
              "serviceability": "SERVICEABLE",
              "slaString": "21 mins",
              "lastMileTravelString": "3.0 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2023-11-10 22:00:00",
              "opened": true
          },
          "badges": {},
          "isOpen": true,
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "textBased": {},
                  "imageBased": {},
                  "textExtendedBadges": {}
              }
          },
          "aggregatedDiscountInfoV3": {
              "header": "30% OFF",
              "subHeader": "UPTO ₹75"
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {}
      },
      "analytics": {},
      "cta": {
          "link": "swiggy://menu?restaurant_id=292472",
          "text": "RESTAURANT_MENU",
          "type": "DEEPLINK"
      }
  },
  {
      "info": {
          "id": "405531",
          "name": "Mr. Tea",
          "cloudinaryImageId": "ox953qti99xh3kfjxftr",
          "locality": "Maruti Nagar",
          "areaName": "BTM layout",
          "costForTwo": "₹200 for two",
          "cuisines": [
              "Snacks",
              "Indian"
          ],
          "avgRating": 4.1,
          "feeDetails": {
              "restaurantId": "405531",
              "fees": [
                  {
                      "name": "BASE_DISTANCE",
                      "fee": 3700
                  },
                  {
                      "name": "BASE_TIME"
                  },
                  {
                      "name": "ANCILLARY_SURGE_FEE"
                  }
              ],
              "totalFee": 3700
          },
          "parentId": "140417",
          "avgRatingString": "4.1",
          "totalRatingsString": "100+",
          "sla": {
              "deliveryTime": 22,
              "lastMileTravel": 3.7,
              "serviceability": "SERVICEABLE",
              "slaString": "22 mins",
              "lastMileTravelString": "3.7 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2023-11-10 23:00:00",
              "opened": true
          },
          "badges": {},
          "isOpen": true,
          "aggregatedDiscountInfoV2": {},
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "textBased": {},
                  "imageBased": {},
                  "textExtendedBadges": {}
              }
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {}
      },
      "analytics": {},
      "cta": {
          "link": "swiggy://menu?restaurant_id=405531",
          "text": "RESTAURANT_MENU",
          "type": "DEEPLINK"
      }
  },
  {
      "info": {
          "id": "504194",
          "name": "Arogya Ahaara",
          "cloudinaryImageId": "r5goc0gi5ydsdhmuajxl",
          "locality": "1st Phase",
          "areaName": "JP Nagar",
          "costForTwo": "₹150 for two",
          "cuisines": [
              "South Indian",
              "North Indian",
              "Chinese"
          ],
          "avgRating": 4.4,
          "veg": true,
          "feeDetails": {
              "restaurantId": "504194",
              "fees": [
                  {
                      "name": "BASE_DISTANCE",
                      "fee": 3100
                  },
                  {
                      "name": "BASE_TIME"
                  },
                  {
                      "name": "ANCILLARY_SURGE_FEE"
                  }
              ],
              "totalFee": 3100
          },
          "parentId": "301948",
          "avgRatingString": "4.4",
          "totalRatingsString": "1K+",
          "sla": {
              "deliveryTime": 17,
              "lastMileTravel": 0.8,
              "serviceability": "SERVICEABLE",
              "slaString": "17 mins",
              "lastMileTravelString": "0.8 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2023-11-10 11:00:00",
              "opened": true
          },
          "badges": {
              "imageBadges": [
                  {
                      "imageId": "v1695133679/badges/Pure_Veg111.png",
                      "description": "pureveg"
                  }
              ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "textBased": {},
                  "imageBased": {
                      "badgeObject": [
                          {
                              "attributes": {
                                  "imageId": "v1695133679/badges/Pure_Veg111.png",
                                  "description": "pureveg"
                              }
                          }
                      ]
                  },
                  "textExtendedBadges": {}
              }
          },
          "aggregatedDiscountInfoV3": {
              "header": "15% OFF",
              "subHeader": "UPTO ₹45"
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {}
      },
      "analytics": {},
      "cta": {
          "link": "swiggy://menu?restaurant_id=504194",
          "text": "RESTAURANT_MENU",
          "type": "DEEPLINK"
      }
  },
  {
      "info": {
          "id": "95587",
          "name": "Upahara Darshini",
          "cloudinaryImageId": "myxnc8gsccbfey6onyfy",
          "locality": "9Th Block",
          "areaName": "Jayanagar",
          "costForTwo": "₹400 for two",
          "cuisines": [
              "Chinese",
              "South Indian",
              "North Indian",
              "Desserts",
              "Fast Food"
          ],
          "avgRating": 4.5,
          "veg": true,
          "feeDetails": {
              "restaurantId": "95587",
              "fees": [
                  {
                      "name": "BASE_DISTANCE",
                      "fee": 3100
                  },
                  {
                      "name": "BASE_TIME"
                  },
                  {
                      "name": "ANCILLARY_SURGE_FEE"
                  }
              ],
              "totalFee": 3100
          },
          "parentId": "7538",
          "avgRatingString": "4.5",
          "totalRatingsString": "5K+",
          "sla": {
              "deliveryTime": 17,
              "lastMileTravel": 1.1,
              "serviceability": "SERVICEABLE",
              "slaString": "17 mins",
              "lastMileTravelString": "1.1 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2023-11-10 22:10:00",
              "opened": true
          },
          "badges": {
              "imageBadges": [
                  {
                      "imageId": "v1695133679/badges/Pure_Veg111.png",
                      "description": "pureveg"
                  }
              ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "textBased": {},
                  "imageBased": {
                      "badgeObject": [
                          {
                              "attributes": {
                                  "description": "pureveg",
                                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                              }
                          }
                      ]
                  },
                  "textExtendedBadges": {}
              }
          },
          "aggregatedDiscountInfoV3": {
              "header": "10% OFF",
              "subHeader": "ABOVE ₹600",
              "discountTag": "FLAT DEAL"
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {}
      },
      "analytics": {},
      "cta": {
          "link": "swiggy://menu?restaurant_id=95587",
          "text": "RESTAURANT_MENU",
          "type": "DEEPLINK"
      }
  }
]
