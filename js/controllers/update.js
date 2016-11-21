mui.plusReady(function() {
	//应用资源版本号
	var wgtinfoVersion = null;
		plus.runtime.getProperty(plus.runtime.appid, function(wgtinfo) {
					wgtinfoVersion = wgtinfo.version;
					//alert(wgtinfoVersion)
					common.postglobalUrlApi('GetAppVersions', {
						ver: wgtinfoVersion,
						type:'ipad'
					}, function(response) {
							//alert(response)
						// var data=eval(response.data);
						alert(JSON.stringify(data))
						if(data) {
							var updateUrl = data[0].updateUrl;
							//获取到更新地址  
							var btnArray = ['是', '否'];
							mui.confirm('检测到新版本,是否立即更新？'+data[0].logcontent, '提示', btnArray, function(e) {
								if(e.index == 0) {
									common.loadUrl('view/common/progress.html?url=' + updateUrl);
									//downWgt(updateUrl);
								} else {
									return;
								}
							});
						}
					});
	});

});