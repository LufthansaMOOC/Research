//Using Node's HTTPS request library
const https = require('https');
 
https.get('https://www.udacity.com/public-api/v0/courses', (resp) => {
  var data = '';

  resp.on('data', (chunk) => {
    data += chunk;
  });

  resp.on('end', () => {
    
    showCourseDetails(JSON.parse(data).courses);
  });
 
}).on("error", (err) => {
  console.log("Error: " + err.message);
});

//Using NPM's Udacoty API library
var Catalog = require('udacity-api').Catalog;

var cat = new Catalog();

cat.courses(function(err, data) {
    //console.log(data);
    showCourseDetails(data);
});


const showCourseDetails = (pulledData) => {
	console.log("Here's a sample of 5 courses\n\n");
	for (var i = 0; i <5; i++) {
		console.log("\n" + pulledData[i].title + "\n");
		console.log(pulledData[i].summary + "\n");
	}
};