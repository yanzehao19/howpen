// page/addgoods/addgoods.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imageurl: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({ title: '商家入驻' })
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

  },
  choseimage: function () {
    var that = this;
    wx.chooseImage({
      sourceType: ['album '],
      success: function (res) {
        console.log(res.tempFilePaths)
        if (res.tempFilePaths.length > 0) {
          for (var i = 0; i < res.tempFilePaths.length; i++) {
            that.data.imageurl.push(res.tempFilePaths[i])
          }
        }
        that.setData({
          imageurl: that.data.imageurl,
        })
      },
    })
  },

  previewimage: function () {
    wx.previewImage({
      current: '',
      urls: this.data.imageurl
    })

  },

  deleteimage: function (e) {
    debugger
    var imageurl = this.data.imageurl;
    var index = e.currentTarget.dataset.index;
    imageurl.splice(index, 1);
    this.setData({
      imageurl: imageurl
    })
  },
})