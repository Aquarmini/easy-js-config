var icon = require('./config');

icon.init(function() {
	// 同步模式
	console.log(icon.icons);
});

// 接口没有返回时候的配置
console.log(icon.icons);

// 接口已经返回的配置
setTimeout(function() {
	console.log(icon.icons);
}, 2000);