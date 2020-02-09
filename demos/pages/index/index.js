// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    demoList: [
      {
        id: 'demo01',
        title: 'Demo01-获取头像和昵称',
        url: '/pages/demo01/index'
      },
      {
        id: 'demo012',
        title: 'Demo02-今日天气',
        url: '/pages/demo02/index'
      },
      {
        id: 'demo03',
        title: 'Demo03-视频播放',
        url: '/pages/demo03/index'
      },
      {
        id: 'demo04',
        title: 'Demo04-登录收藏',
        url: '/pages/demo04/index/index'
      }
    ]
  },
  goToDemo: function(e){
    wx.navigateTo({
      url: e.currentTarget.dataset.url,
      fail: function () {
        wx.switchTab({
          url: e.currentTarget.dataset.url
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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