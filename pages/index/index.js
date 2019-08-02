const app = getApp()

Page({
  data: {
	  slides:null
  },
  onLoad: function () {
	  this.setData({
		  slides: app.globalData.slides
	  });
  }
})
