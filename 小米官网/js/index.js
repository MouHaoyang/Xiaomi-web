window.onload = function() {

	//-----头部菜单部分：购物车层的显示和隐藏特效-----------------------------------------
	let cartObj = document.getElementById('cart');
	let cartBoxObj = document.getElementById('cartBox');

	cartObj.onmouseover = function() {
		cartBoxObj.style.display = 'block';
	}
	cartObj.onmouseout = function() {
		cartBoxObj.style.display = 'none';
	}
	//-----头部菜单部分：购物车层的显示和隐藏特效-----------------------------------------

	//-----企业logo部分：层的显示和隐藏特效----------------------------------------------
	let logoBoxLiArr = document.getElementsByClassName('logo')[0].getElementsByClassName('logo-box-li');
	let goodsArr = document.getElementsByClassName('logo')[0].getElementsByClassName('goods');
	for (let i = 0; i < goodsArr.length; i++) {
		logoBoxLiArr[i].onmouseover = function() {
			goodsArr[i].style.display = 'block';
		}
		logoBoxLiArr[i].onmouseout = function() {
			goodsArr[i].style.display = 'none';
		}
	}
	//-----企业logo部分：层的显示和隐藏特效----------------------------------------------

	//-----横幅广告部分：层的显示和隐藏特效----------------------------------------------
	let bannerUl = document.getElementById('bannerUl');
	let bannerLiArr = bannerUl.getElementsByTagName('li');
	let bannerBoxArr = bannerUl.getElementsByClassName('banner-box');
	for (let i = 0; i < bannerLiArr.length; i++) {
		bannerLiArr[i].onmouseover = function() {
			bannerBoxArr[i].style.display = 'block';
		}
		bannerLiArr[i].onmouseout = function() {
			bannerBoxArr[i].style.display = 'none';
		}
	}
	//-----横幅广告部分：层的显示和隐藏特效----------------------------------------------

	//-----横幅广告部分：轮播图特效------------------------------------------------------
	let imgArr = document.getElementsByClassName('banner')[0].getElementsByClassName('lunbo-img');
	//当前图片索引
	let index = 0;
	//上一张图片索引
	let preIndex = index;
	//当前图片初始透明度
	let opacityValue = 0;
	//上一张图片初始透明度
	let preOpacityValue = 1;

	setInterval(function() {
		//每次切换时，确定当前图片索引与上一张图片索引
		preIndex = index;
		index++;
		//判断是否进行下一轮轮播
		if (index >= imgArr.length) {
			index = 0;
		}
		//上一张图片隐藏
		hideImg();
		//当前图片显示
		showImg();
	}, 3000);

	function showImg() {
		//设置当前显示图片透明度初始值
		opacityValue = 0;
		//淡入动画
		let time = setInterval(function() {
			opacityValue += 0.05;
			if (opacityValue >= 1) {
				opacityValue = 1;
				clearInterval(time);
			}
			imgArr[index].style.opacity = opacityValue;
		}, 40);
	}

	function hideImg() {
		//设置上一张隐藏图片透明度初始值
		preOpacityValue = 1;
		//淡出动画
		let time = setInterval(function() {
			preOpacityValue -= 0.05;
			if (preOpacityValue <= 0) {
				preOpacityValue = 0;
				clearInterval(time);
			}
			imgArr[preIndex].style.opacity = preOpacityValue;
		}, 40);
	}
	//-----横幅广告部分：轮播图特效------------------------------------------------------

	//-----小米闪购：倒计时特效---------------------------------------------------------
	let hours = document.getElementById("hours");
	let minutes = document.getElementById("minutes");
	let seconds = document.getElementById("seconds");
	
	function countTime() {
		//获取当前时间  
		let date = new Date();
		//获取当前时间戳
		let now = date.getTime();
		//设置截止时间  
		let str = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + ' 24:00:00';
		let endDate = new Date(str);
		//设置截止时间戳 
		let end = endDate.getTime();

		//时间差  
		let leftTime = end - now;
		//定义变量 h,m,s保存倒计时的时间  
		let d, h, m, s;
		if (leftTime >= 0) {
			h = Math.floor(leftTime / 1000 / 60 / 60 % 24);
			m = Math.floor(leftTime / 1000 / 60 % 60);
			s = Math.floor(leftTime / 1000 % 60);
		}
		//将倒计时赋值到div中  
		hours.innerHTML = h<10?'0'+h:h;
		minutes.innerHTML = m<10?'0'+m:m;
		seconds.innerHTML = s<10?'0'+s:s;
		//递归每秒调用countTime方法，显示动态时间效果  
		setTimeout(countTime, 1000);
	}
	countTime();
	
	//-----小米闪购：倒计时特效---------------------------------------------------------

	//-----小米闪购：跑马灯特效---------------------------------------------------------
	let scrollBox = document.getElementById('scrollBox');
	let btnBoxLeft = document.getElementById('btnBoxLeft');
	let btnBoxRight = document.getElementById('btnBoxRight');
	//索引
	let scrollIndex = 0;
	//滚动条left位置
	let left = 0;

	//初始向左按钮不可用
	btnBoxLeft.style.color = "#E0E0E0";

	btnBoxRight.onclick = rightEvent;

	btnBoxLeft.onclick = leftEvent;

	//向右按钮事件
	function rightEvent() {
		//只要按下右按钮，左按钮就可以用
		btnBoxLeft.style.color = "#b0b0b0";
		scrollIndex++;
		if (scrollIndex > 1) {
			scrollIndex = 2;
			this.style.color = "#E0E0E0";
		}
		let time = setInterval(function() {
			left -= 60;
			if (left <= scrollIndex * -978) {
				left = scrollIndex * -978;
				clearInterval(time);
			}
			scrollBox.style.left = left + 'px';
		}, 40);
	}
	//向左按钮事件
	function leftEvent() {
		//只要按下左按钮，右按钮就可以用
		btnBoxRight.style.color = "#b0b0b0";
		scrollIndex--;
		if (scrollIndex < 1) {
			scrollIndex = 0;
			this.style.color = "#E0E0E0";
		}
		let time = setInterval(function() {
			left += 50;
			if (left > scrollIndex * -978) {
				left = scrollIndex * -978;
				clearInterval(time);
			}
			scrollBox.style.left = left + 'px';
		}, 30);
	}

	//因为在js中改变了按钮颜色，所以用css做的鼠标悬停颜色改变特效就失效了
	btnBoxRight.onmouseover = function() {
		if (scrollIndex != 2) {
			this.style.color = "#FF6700";
		}
	}
	btnBoxRight.onmouseout = function() {
		if (scrollIndex != 2) {
			this.style.color = "#b0b0b0";
		}
	}
	btnBoxLeft.onmouseover = function() {
		if (scrollIndex != 0) {
			this.style.color = "#FF6700";
		}
	}
	btnBoxLeft.onmouseout = function() {
		if (scrollIndex != 0) {
			this.style.color = "#b0b0b0";
		}
	}
	//-----小米闪购：跑马灯特效---------------------------------------------------------
}
