// Creating the class
var Pictures = function(){

	var myData = [];
	$.getJSON('../json/pictures.json', function (data) {
		myData = data;
	});
	
	return {
		getData: function (){
			return myData;
		},
		isEmpty: function (){
			if (myData.length === 0) {
				return true;
			} else {
				return false;
			}
		}
	};
}();