mui.init({
	//	gestureConfig: {
	//		tap: true, //默认为true
	//		longtap: true //长按事件 默认为false
	//	}
});
var isCollect = '0';
	// 1收藏，0没收藏
mui.plusReady(function() {
	mui.previewImage();
	//	mui('.mine_container_body').on('longtap', '.flexItem', function() {
	//		alert(this.innerText);
	//	});
	id = common.getQueryString("id");
//	document.getElementById("sendMessage").addEventListener('tap', function() {
//		currentWebViewHide();
//		var template = common.getTemplate('page2', 'addfollow.html?id=' + id);
//	});
//	document.getElementById("btn_post_activ").addEventListener('tap', function() {
//		currentWebViewHide();
//		var template = common.getTemplate('page2', 'im_chat.html?id=' + id);
//	});
	//window.addEventListener('dataInit', function(event) {
	//获取从父页面传过来的数据
	//id = event.detail.id;
	//common.showWaiting(true);
	var data = {
		strwhere:'' ,
		pid:id
	};
	common.postApi('GetProductDetail', data, function(response) {
		dataArray = eval(response.data);
		for (var i = 0; i < dataArray.length; i++) {
			var obj = dataArray[i];
//			document.getElementById("Avatar").src = obj.Avatar;
//			document.getElementById("UserName").innerText = obj.UserName;
//			document.getElementById("mobeil").innerText = obj.Mobile;
		 
			document.getElementById("Customer").innerText = obj.product_name;
			document.getElementById("address").innerText = obj.specifications;
			document.getElementById("tel").innerText = obj.C_style;
			document.getElementById("CustomerType").innerText = obj.Brand;
			document.getElementById("jg").innerText = "￥"+obj.price;
			document.getElementById("Createname").innerText = obj.unit;
			document.getElementById("sjs").innerText = obj.zc_price;
			document.getElementById("ywy").innerText = obj.fc_price;
			document.getElementById("sgjl").innerText = obj.rg_price; 
			document.getElementById("remark").innerText = obj.remarks; 
			userName = obj.Customer;
			//Avatar = obj.Avatar;
		}
		common.closeWaiting();
	}, 'json');

	//}); 
	//	var sendmsg = document.getElementById("sendmsg");
	//	sendmsg.addEventListener("tap", function() {
	//		common.toast("此功能正在研发,敬请等待..");
	//	});
	mui.back = function() {
		currentWebViewHide();
	}

	function currentWebViewHide() {
		var fatherView = plus.webview.currentWebview().opener(); //父页面
		//closeMenu 是C页面自定义事件的名称
		mui.fire(fatherView, 'hideDetailPage', {
			//					id: id
		});
	}
});