var fs = require("fs");

var ClozeCard = function(text, cloze) {
	this.text = text;
	this.cloze = cloze;
	this.partial = this.text.replace(this.cloze, "---");
	this.date = Date.now(); //convert this to a usable date loser!
	this.activity = "Cloze Constructor - Partial: " + this.partial + " - Text: " + this.text + " - Cloze: " + this.cloze + " - Date: " + this.date;
	this.activityLog = function() {
		fs.appendFile("activityLog.txt", this.activity, function(err) {
			if (err) {
		    	return console.log(err);
		  	}

		});
	}
};

module.exports = ClozeCard;