// pages/demo04/detail/detail.js
const api = require('./../api/api.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    article: {},
    isAdd: false
  },
  /**
   * 添加收藏
   */
  addCollect: function(){
    let article = this.data.article;
    wx.setStorageSync(article.id, article);
    this.setData({
      isAdd: true
    })
  },
  /**
   * 移除收藏
   */
  removeCollect: function(){
    let article = this.data.article;
    wx.removeStorageSync(article.id);
    this.setData({
      isAdd: false
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const id = options.id;
    //检查新闻是否在收藏中
    const article = wx.getStorageSync(id);
    if (article){
      this.setData({
        isAdd: true,
        article
      })
    }else{
      //不在收藏中，则重新读取数据
      const result = api.getNewsDetail(id);
      if (result.code === '200') {
        this.setData({
          article: result.news
        })
      }
    }
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