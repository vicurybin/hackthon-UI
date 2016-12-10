
console.log('commonjs执行了');


var Rxports = {
	fanbin:'aaaa',
	fanfan:'ddd',
	formatTime:function(time,type){
		var   now = new  Date(time * 1000);   

		  var   year=now.getFullYear() % 2000;     
	      var   month=now.getMonth()+1;     
	      var   date=now.getDate();     
	      var   hour=now.getHours();     
	      var   minute=now.getMinutes();     
	      var   second=now.getSeconds(); 
	      if(type == 1){
	      	return year+"-"+month+"-"+date;
	      }else if(type == 2){
	      	return (hour < 10 ? '0' + hour : hour) + ':' + (minute < 10 ? '0' + minute : minute) + ':' + (second < 10 ? '0' + second : second);     
	      }else if(type ==3){
	      	return year+"-"+month+"-"+date +" "+  (hour < 10 ? '0' + hour : hour) + ':' + (minute < 10 ? '0' + minute : minute) + ':' + (second < 10 ? '0' + second : second);
	      }
	},
	myfun(){
		return 'myfun执行了'
	},
	getValueFromSearch(key){//获取url中的参数
		//var str = window.location.hash;
		var str = window.location.search;
		if(str.length>1){
			str = str.substring(1);
			var array = str.split('&');
			var len = array.length;
			for(var i = 0; i < len; i++){
				var tmpArray = array[i].split('=');
				if(tmpArray&&tmpArray.length==2&&tmpArray[0]==key){
					return decodeURIComponent(tmpArray[1]);
				}
			}
		}
		return '';
	}
	

	
}
	
module.exports = Rxports;
window.uid = Rxports.getValueFromSearch('uid');




































