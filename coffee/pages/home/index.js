const system = require("./../../utils/system");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    adPics: [
      {
        clickUrl: "",
        imageSize: "756",
        isLogin: false,
        needAuthorization: 0,
        origin: 0,
        sourceUrl: "https://img06.luckincoffeecdn.com/group1/M00/24/84/CtQyFV4YtzGAeB7WAAZdhVQhlAc057.jpg",
        timeStamp: null,
        title: "",
        type: "",
        wxIsAuthorization: 0
      },
      {
        clickUrl: "/pages/index/menu",
        imageSize: "756",
        isLogin: false,
        needAuthorization: 0,
        origin: 0,
        sourceUrl: "https://img06.luckincoffeecdn.com/group1/M00/60/14/CtQyFV44vn-ALdCjAARNYTFM_CM332.jpg",
        timeStamp: null,
        title: "",
        type: "",
        wxIsAuthorization: 0
      },
      {
        clickUrl: "/pages/index/menu",
        imageSize: "756",
        isLogin: false,
        needAuthorization: 0,
        origin: 0,
        sourceUrl: "https://img06.luckincoffeecdn.com/group1/M00/4A/E3/CtQyFV4jwTqAPULvAASsfA_vOP8423.jpg",
        timeStamp: null,
        title: "",
        type: "",
        wxIsAuthorization: 0
      },
      {
        clickUrl: "https://mp.weixin.qq.com/s/X5yfqSZmA_G_kwTFLw-T_A?origin=27&brandType=LK001",
        imageSize: "756",
        isLogin: false,
        needAuthorization: 0,
        origin: 0,
        sourceUrl: "https://img06.luckincoffeecdn.com/group1/M00/60/15/CtQyFF44vl-ALOjiAAKJeNA3Xvk472.jpg",
        timeStamp: null,
        title: "",
        type: "",
        wxIsAuthorization: 0
      }
    ],
    autoplay: true,
    interval: 5e3,
    duration: 500,
    indicatorDots: true,
    custom: {},
    menu: {
      buynowImgUrl: 'https://static.luckincoffeecdn.com/mini/images/home/ico_home_ad_menu.png',
      couponImgUrl: 'https://img06.luckincoffeecdn.com/group1/M00/24/79/CtQyFV4YneWAfpZKAAEQq1x21rg544.png',
      popImgUrl: 'https://img04.luckincoffeecdn.com/group1/M00/24/7A/CtQyFF4Yni-AVPTmAAF_T9tvJVY084.png',
      promotionMsg: '充2赠1'
    },
    finalData: [{
      "type": "home-guess-like",
      "secData": {
        "title": "为你推荐",
        "showGuess": false
      }
    }, {
      "type": "new-thing",
      "secData": {
        "title": "新鲜事",
        "data": [{
          "clickUrl": "",
          "isLogin": true,
          "needAuthorization": 0,
          "origin": 14,
          "sourceUrl": "https://img04.luckincoffeecdn.com/group1/M00/24/87/CtQyFF4YxrKABUVsAAJpP9n8b8w916.jpg",
          "title": "",
          "weChatLink": "https://m.luckincoffee.com/app/inviter?type=liuhaoran&activityNo=NR201801030001",
          "wxIsAuthorization": 0
        }, {
          "clickUrl": "",
          "isLogin": true,
          "needAuthorization": 0,
          "origin": 14,
          "sourceUrl": "https://img04.luckincoffeecdn.com/group1/M00/61/33/CtQyFV48_f6AJFEbAAFh-fBVtVI540.png",
          "title": "",
          "weChatLink": "",
          "wxIsAuthorization": 0
        }, {
          "clickUrl": "",
          "isLogin": true,
          "needAuthorization": 0,
          "origin": 14,
          "sourceUrl": "https://img04.luckincoffeecdn.com/group1/M00/61/32/CtQyFF48-keAVkbmAAMrWkzOCqk889.png",
          "title": "",
          "weChatLink": "/pages/giftcard/giftcardmain",
          "wxIsAuthorization": 0
        }, {
          "clickUrl": "",
          "isLogin": true,
          "needAuthorization": 0,
          "origin": 14,
          "sourceUrl": "https://img04.luckincoffeecdn.com/group1/M00/4B/15/CtQyFF4jy0SAG66nAAKBjq7quHc046.jpg",
          "title": "",
          "weChatLink": "https://m.luckincoffee.com/ten2ten_youku2?type=needMobile&brand=coffee",
          "wxIsAuthorization": 0
        }, {
          "clickUrl": "",
          "isLogin": true,
          "needAuthorization": 0,
          "origin": 14,
          "sourceUrl": "https://img04.luckincoffeecdn.com/group1/M00/3B/8A/CtQyFV4e0biACnRwAALeYSPTt9s350.jpg",
          "title": "周周领5折券",
          "weChatLink": "https://mkt.luckincoffee.com/coupon/mini?invitationCode=MK20181102002&frommini=mini",
          "wxIsAuthorization": 0
        }]
      }
    }, {
      "type": "luckin-pop",
      "secData": {
        "title": "瑞幸潮品",
        "data": [{
          "alreadySellNumber": "800+",
          "clickUrl": "https://m.luckincoffee.com/pmall/product/518/6972611620073?type=needMobile",
          "codeId": "SP1325",
          "defaultPicUrl": "https://img04.luckincoffeecdn.com/group1/M00/0F/6B/CtQyFV4TCK2ATR9sAABwMkemXwA327.jpg",
          "disCountPrice": 0,
          "inventoryQuantity": 298,
          "isDiffSize": 0,
          "isDiffTemper": 0,
          "key": 1,
          "name": "小蓝经典保温杯（2020款）",
          "price": 108,
          "productAdditionList": [],
          "productBarCode": "6972611620073",
          "productId": 518,
          "productSizeList": [{
            "checked": 0,
            "isSpecs": 0,
            "isWarehouse": 0,
            "menuSkuChecked": 1,
            "platform": 0,
            "price": 0,
            "sizeId": -1,
            "sizeName": ""
          }],
          "productTemperList": [{
            "checked": 0,
            "menuSkuChecked": 1,
            "temperCode": 100000,
            "temperName": ""
          }],
          "saleEndTime": 0,
          "salePrice": 0,
          "saleStartTime": 0,
          "saleStockState": false,
          "saleType": 0,
          "sizeId": 0,
          "sizeName": "不区分规格",
          "skuState": true,
          "startSellResidueTime": 0,
          "temperCode": 100000,
          "temperName": "无"
        }, {
          "alreadySellNumber": "300+",
          "clickUrl": "https://m.luckincoffee.com/pmall/product/519/6972611620080?type=needMobile",
          "codeId": "SP1326",
          "defaultPicUrl": "https://img04.luckincoffeecdn.com/group1/M00/0F/6A/CtQyFF4TCCuAS4XYAABlFX1hWwM034.jpg",
          "disCountPrice": 0,
          "inventoryQuantity": 295,
          "isDiffSize": 0,
          "isDiffTemper": 0,
          "key": 2,
          "name": "小白经典保温杯（2020款）",
          "price": 98,
          "productAdditionList": [],
          "productBarCode": "6972611620080",
          "productId": 519,
          "productSizeList": [{
            "checked": 0,
            "isSpecs": 0,
            "isWarehouse": 0,
            "menuSkuChecked": 1,
            "platform": 0,
            "price": 0,
            "sizeId": -1,
            "sizeName": ""
          }],
          "productTemperList": [{
            "checked": 0,
            "menuSkuChecked": 1,
            "temperCode": 100000,
            "temperName": ""
          }],
          "saleEndTime": 0,
          "salePrice": 0,
          "saleStartTime": 0,
          "saleStockState": false,
          "saleType": 0,
          "sizeId": 0,
          "sizeName": "不区分规格",
          "skuState": true,
          "startSellResidueTime": 0,
          "temperCode": 100000,
          "temperName": "无"
        }, {
          "alreadySellNumber": "1000+",
          "clickUrl": "https://m.luckincoffee.com/pmall/product/489/2019120601001?type=needMobile",
          "codeId": "SP1218",
          "defaultPicUrl": "https://img04.luckincoffeecdn.com/group1/M01/C8/0C/CtQLPF3zgHmAPw1zAALJAAsFtDY759.jpg",
          "disCountPrice": 0,
          "inventoryQuantity": 44,
          "isDiffSize": 0,
          "isDiffTemper": 0,
          "key": 3,
          "name": "LAMY狩猎系列宝珠笔",
          "price": 260,
          "productAdditionList": [],
          "productBarCode": "2019120601001",
          "productId": 489,
          "productSizeList": [{
            "checked": 0,
            "isSpecs": 0,
            "isWarehouse": 0,
            "menuSkuChecked": 1,
            "platform": 0,
            "price": 0,
            "sizeId": -1,
            "sizeName": ""
          }],
          "productTemperList": [{
            "checked": 0,
            "menuSkuChecked": 1,
            "temperCode": 100000,
            "temperName": ""
          }],
          "saleEndTime": 0,
          "salePrice": 0,
          "saleStartTime": 0,
          "saleStockState": false,
          "saleType": 0,
          "sizeId": 0,
          "sizeName": "不区分规格",
          "skuState": true,
          "startSellResidueTime": 0,
          "temperCode": 100000,
          "temperName": "无"
        }, {
          "alreadySellNumber": "500+",
          "clickUrl": "https://m.luckincoffee.com/pmall/product/488/6970022630667?type=needMobile",
          "codeId": "SP1217",
          "defaultPicUrl": "https://img04.luckincoffeecdn.com/group1/M01/C8/0C/CtQLPF3zgJaABg2yAAKA7Olcncs601.jpg",
          "disCountPrice": 0,
          "inventoryQuantity": 171,
          "isDiffSize": 0,
          "isDiffTemper": 0,
          "key": 4,
          "name": "猫王收音机",
          "price": 399,
          "productAdditionList": [],
          "productBarCode": "6970022630667",
          "productId": 488,
          "productSizeList": [{
            "checked": 0,
            "isSpecs": 0,
            "isWarehouse": 0,
            "menuSkuChecked": 1,
            "platform": 0,
            "price": 0,
            "sizeId": -1,
            "sizeName": ""
          }],
          "productTemperList": [{
            "checked": 0,
            "menuSkuChecked": 1,
            "temperCode": 100000,
            "temperName": ""
          }],
          "saleEndTime": 0,
          "salePrice": 0,
          "saleStartTime": 0,
          "saleStockState": false,
          "saleType": 0,
          "sizeId": 0,
          "sizeName": "不区分规格",
          "skuState": true,
          "startSellResidueTime": 0,
          "temperCode": 100000,
          "temperName": "无"
        }, {
          "alreadySellNumber": "2600+",
          "clickUrl": "https://m.luckincoffee.com/pmall/product/462/6951244313460?type=needMobile",
          "codeId": "SP1133",
          "defaultPicUrl": "https://img04.luckincoffeecdn.com/group1/M01/FB/AB/CtQLO14AOISAdbzgAAD1VPvucmY443.jpg",
          "disCountPrice": 0,
          "inventoryQuantity": 110,
          "isDiffSize": 0,
          "isDiffTemper": 0,
          "key": 5,
          "name": "幸运随行杯（瑞幸蓝）",
          "price": 69,
          "productAdditionList": [],
          "productBarCode": "6951244313460",
          "productId": 462,
          "productSizeList": [{
            "checked": 0,
            "isSpecs": 0,
            "isWarehouse": 0,
            "menuSkuChecked": 1,
            "platform": 0,
            "price": 0,
            "sizeId": -1,
            "sizeName": ""
          }],
          "productTemperList": [{
            "checked": 0,
            "menuSkuChecked": 1,
            "temperCode": 100000,
            "temperName": ""
          }],
          "saleEndTime": 0,
          "salePrice": 0,
          "saleStartTime": 0,
          "saleStockState": false,
          "saleType": 0,
          "sizeId": 0,
          "sizeName": "不区分规格",
          "skuState": true,
          "startSellResidueTime": 0,
          "temperCode": 100000,
          "temperName": "无"
        }, {
          "alreadySellNumber": "2500+",
          "clickUrl": "https://m.luckincoffee.com/pmall/product/465/6951244313484?type=needMobile",
          "codeId": "SP1136",
          "defaultPicUrl": "https://img04.luckincoffeecdn.com/group1/M01/FB/7D/CtQLPF4AODuAKLM1AADViIRqv1w120.jpg",
          "disCountPrice": 0,
          "inventoryQuantity": 161,
          "isDiffSize": 0,
          "isDiffTemper": 0,
          "key": 6,
          "name": "幸运随行杯（浅粉色）",
          "price": 69,
          "productAdditionList": [],
          "productBarCode": "6951244313484",
          "productId": 465,
          "productSizeList": [{
            "checked": 0,
            "isSpecs": 0,
            "isWarehouse": 0,
            "menuSkuChecked": 1,
            "platform": 0,
            "price": 0,
            "sizeId": -1,
            "sizeName": ""
          }],
          "productTemperList": [{
            "checked": 0,
            "menuSkuChecked": 1,
            "temperCode": 100000,
            "temperName": ""
          }],
          "saleEndTime": 0,
          "salePrice": 0,
          "saleStartTime": 0,
          "saleStockState": false,
          "saleType": 0,
          "sizeId": 0,
          "sizeName": "不区分规格",
          "skuState": true,
          "startSellResidueTime": 0,
          "temperCode": 100000,
          "temperName": "无"
        }, {
          "alreadySellNumber": "600+",
          "clickUrl": "https://m.luckincoffee.com/pmall/product/467/9355482000187?type=needMobile",
          "codeId": "SP1139",
          "defaultPicUrl": "https://img04.luckincoffeecdn.com/group1/M01/C8/10/CtQLPF3zgZiAXTdpAADENSM9ScQ457.jpg",
          "disCountPrice": 0,
          "inventoryQuantity": 101,
          "isDiffSize": 0,
          "isDiffTemper": 0,
          "key": 7,
          "name": "汤唯签名款小白杯",
          "price": 258,
          "productAdditionList": [],
          "productBarCode": "9355482000187",
          "productId": 467,
          "productSizeList": [{
            "checked": 0,
            "isSpecs": 0,
            "isWarehouse": 0,
            "menuSkuChecked": 1,
            "platform": 0,
            "price": 0,
            "sizeId": -1,
            "sizeName": ""
          }],
          "productTemperList": [{
            "checked": 0,
            "menuSkuChecked": 1,
            "temperCode": 100000,
            "temperName": ""
          }],
          "saleEndTime": 0,
          "salePrice": 0,
          "saleStartTime": 0,
          "saleStockState": false,
          "saleType": 0,
          "sizeId": 0,
          "sizeName": "不区分规格",
          "skuState": true,
          "startSellResidueTime": 0,
          "temperCode": 100000,
          "temperName": "无"
        }, {
          "alreadySellNumber": "500+",
          "clickUrl": "https://m.luckincoffee.com/pmall/product/469/9355482000217?type=needMobile",
          "codeId": "SP1141",
          "defaultPicUrl": "https://img04.luckincoffeecdn.com/group1/M01/C8/3B/CtQLO13zgS-AV6jCAADbaVUOYBE477.jpg",
          "disCountPrice": 0,
          "inventoryQuantity": 171,
          "isDiffSize": 0,
          "isDiffTemper": 0,
          "key": 8,
          "name": "联名陶瓷内壁咖啡杯（蓝）",
          "price": 258,
          "productAdditionList": [],
          "productBarCode": "9355482000217",
          "productId": 469,
          "productSizeList": [{
            "checked": 0,
            "isSpecs": 0,
            "isWarehouse": 0,
            "menuSkuChecked": 1,
            "platform": 0,
            "price": 0,
            "sizeId": -1,
            "sizeName": ""
          }],
          "productTemperList": [{
            "checked": 0,
            "menuSkuChecked": 1,
            "temperCode": 100000,
            "temperName": ""
          }],
          "saleEndTime": 0,
          "salePrice": 0,
          "saleStartTime": 0,
          "saleStockState": false,
          "saleType": 0,
          "sizeId": 0,
          "sizeName": "不区分规格",
          "skuState": true,
          "startSellResidueTime": 0,
          "temperCode": 100000,
          "temperName": "无"
        }, {
          "alreadySellNumber": "4700+",
          "clickUrl": "https://m.luckincoffee.com/pmall/product/455/6972611620127?type=needMobile",
          "codeId": "SP1123",
          "defaultPicUrl": "https://img04.luckincoffeecdn.com/group1/M01/DB/F3/CtQLPF2yuf2AKGOyAAdAOGUHwsA429.jpg",
          "disCountPrice": 0,
          "inventoryQuantity": 1224,
          "isDiffSize": 0,
          "isDiffTemper": 0,
          "key": 9,
          "name": "「榴莲腰果」",
          "price": 19,
          "productAdditionList": [],
          "productBarCode": "6972611620127",
          "productId": 455,
          "productSizeList": [{
            "checked": 0,
            "isSpecs": 0,
            "isWarehouse": 0,
            "menuSkuChecked": 1,
            "platform": 0,
            "price": 0,
            "sizeId": -1,
            "sizeName": ""
          }],
          "productTemperList": [{
            "checked": 0,
            "menuSkuChecked": 1,
            "temperCode": 100000,
            "temperName": ""
          }],
          "saleEndTime": 0,
          "salePrice": 12.5,
          "saleStartTime": 0,
          "saleStockState": false,
          "saleType": 3,
          "sizeId": 0,
          "sizeName": "不区分规格",
          "skuState": true,
          "startSellResidueTime": 0,
          "temperCode": 100000,
          "temperName": "无"
        }, {
          "alreadySellNumber": "4400+",
          "clickUrl": "https://m.luckincoffee.com/pmall/product/458/6972741320034?type=needMobile",
          "codeId": "SP1127",
          "defaultPicUrl": "https://img04.luckincoffeecdn.com/group1/M01/DB/F1/CtQLPF2yubOASoEqAAbfagc8lrU249.jpg",
          "disCountPrice": 0,
          "inventoryQuantity": -10,
          "isDiffSize": 0,
          "isDiffTemper": 0,
          "key": 10,
          "name": "「芥末腰果」",
          "price": 15,
          "productAdditionList": [],
          "productBarCode": "6972741320034",
          "productId": 458,
          "productSizeList": [{
            "checked": 0,
            "isSpecs": 0,
            "isWarehouse": 0,
            "menuSkuChecked": 1,
            "platform": 0,
            "price": 0,
            "sizeId": -1,
            "sizeName": ""
          }],
          "productTemperList": [{
            "checked": 0,
            "menuSkuChecked": 1,
            "temperCode": 100000,
            "temperName": ""
          }],
          "saleEndTime": 0,
          "salePrice": 9.9,
          "saleStartTime": 0,
          "saleStockState": true,
          "saleType": 3,
          "sizeId": 0,
          "sizeName": "不区分规格",
          "skuState": true,
          "startSellResidueTime": 0,
          "temperCode": 100000,
          "temperName": "无"
        }]
      }
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      custom: system.custom
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})