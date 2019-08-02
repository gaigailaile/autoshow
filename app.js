App({
  onLaunch: function () {
	  wx.request({
		  url: 'https://resources.ninghao.net/wxapp-case/db.json',
		  success:(response) => {
			console.log(response);
			Object.assign(this.globalData,response.data);
		  }
	  })
  },
  globalData: {
  }
})