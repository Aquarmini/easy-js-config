module.exports = {
	icons: {
		color: '#000000',
		avatar: '/images/default_avatar.png',
	},

	init: function(callback) {
		var that = this;
		// 模拟接口调用
		setTimeout(function() {
			that.icons.color = '#111111';
			that.icons.avatar = '/images/avatar.png';
			callback();
		}, 1000);
	}
}