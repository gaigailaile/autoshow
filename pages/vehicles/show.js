import testDrive from '../../modules/test-drive'
const app = getApp();
Page({
	data: {
		entity:null
	},
	testDrive,
	onLoad: function (options) {
		const id = options.id;
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
	preview(event){
		const slidesName = event.target.dataset.slides;
		const index = event.target.dataset.index;
		const slides = this.data.entity.meta[slidesName];
		const images = [];
		slides.map((item) => {
			images.push(item.image);
		});
		// 微信预览图片的接口
		wx.previewImage({
			urls: images,
			current:images[index]
		})
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