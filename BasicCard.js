var fs = require("fs");

var BasicCard = function(front, back) {
	this.front = front;
	this.back = back;
	this.date = Date.now(); //convert this to a usable date loser!
	this.activity = "Front: " + this.front + " - Back: " + this.back + " - Date: " + this.date + "\r\n";
	this.activityLog = function() {
		fs.appendFile("activityLog.txt", this.activity, function(err) {
			if (err) {
		    	return console.log(err);
		  	}

		});
	}
};

module.exports = BasicCard;
