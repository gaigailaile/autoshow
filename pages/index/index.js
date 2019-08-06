import testDrive from '../../modules/test-drive'
const app = getApp();

Page({
    data: {
	  slides:null,
	  entities:null
    },
	testDrive,
    readMore(event){
		wx.navigateTo({
		//   url: '/pages/vehicles/show?id='+ event.target.dataset.id,
		//   占位符写法,新写法使用``号进行包装
			url: `/pages/vehicles/show?id=${event.target.dataset.id}`
		}) 
    },
    onLoad: function () {
		this.setData({
			slides: app.globalData.slides,
			entities: app.globalData.vehicles
		});
		console.log(app.globalData.vehicles);
    }
})
