$("button").click(function(e) {
    console.log($(e.target).attr("video"))

})

let 

var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://love-calculator.p.rapidapi.com/getPercentage?fname=thanh&sname=du",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "love-calculator.p.rapidapi.com",
		"x-rapidapi-key": "cedbb6e127msh6c3f85c77dc22c0p153d51jsn608d2ca695b6"
	}
}

$.ajax(settings).done(function (response) {
	console.log(response);
});