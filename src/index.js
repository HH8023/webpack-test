import _ from 'lodash';
// import './style.css';
// import Icon from './111.jpg'
// import Data from './tree.xml'
import printMe from './print.js'

function component () {
	var element = document.createElement('div');
	var btn = document.createElement('button');

	// lodash （目前通过一个script脚本引入）对于执行这一行是必需的
	// Lodash, now imported by this script
	element.innerHTML = _.join(['Hello', 'webpack  jjj就看看11'], ' ');
	// element.classList.add('hello');

	// 将图片添加到现有的div
	// var myIcon = new Image();
	// myIcon.src = Icon;

	// element.appendChild(myIcon)
	// console.log(Data)
	
	btn.innerHTML = 'Click me and check the console!';
	btn.onclick = printMe

	element.appendChild(btn)

	return element;
}

// document.body.appendChild(component());
let element = component() // 当peint.js改变导致页面重新渲染时，重新获取渲染的元素
document.body.appendChild(element)


if (module.hot) {
	module.hot.accept('./print.js', function() {
		console.log('Accepting the updated printMe module!11111');
		// printMe();
		document.body.removeChild(element)
		element = component(); //重新渲染页面后，component更新click事件处理
		document.body.appendChild(element)
	})
}