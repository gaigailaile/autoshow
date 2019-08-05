const app = getApp();

Page({
  data: {
	  slides:null,
	  entities:null
  },
  onLoad: function () {
	  this.setData({
		  slides: app.globalData.slides,
		  entities: app.globalData.vehicles
	  });
	  console.log(app.globalData.vehicles);
  }
})
