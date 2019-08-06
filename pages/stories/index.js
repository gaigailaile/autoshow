const app = getApp();
Page({
	data: {
		entities:null,
		currentVideo:null,
		currentVid:null	
	},
	play(event){
		if(this.data.currentVideo != null){
			this.data.currentVideo.pause();
		}
		const currentVideo = wx.createVideoContext(`${event.target.dataset.vid}`);
		currentVideo.play();
		this.setData({
			currentVideo:currentVideo,
			currentVid: event.target.dataset.vid
		});
	},
	onLoad: function (options) {
		this.setData({
			entities:app.globalData.stories
		});
		console.log(this.data.entities);
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