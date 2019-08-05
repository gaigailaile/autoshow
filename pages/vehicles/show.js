const app = getApp();
Page({
	data: {
		entity:null
	},
	onLoad: function (options) {
		const id = 3;
		const entity = app.globalData.vehicles.filter((item)=>{
			return item.id == id;
		});
		this.setData({
			entity:entity[0]
		});
		wx.setNavigationBarTitle({
			title: this.data.entity.header,
		})
		console.log(entity[0]);
	},
	onReady: function () {

	},
	onShow: function () {

	},
	onHide: function () {

	},
	onUnload: function () {

	},
	onPullDownRefresh: function () {

	},
	onReachBottom: function () {

	},
	onShareAppMessage: function () {

	}
})