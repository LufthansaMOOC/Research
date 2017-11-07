var request = require('request');

var category = 'catergory=' + 'Business';
/*
List of possible Categories
Academics Business Design Development Health & Fitness IT & Software Language Lifestyle Marketing Music Office Productivity Personal Development Photography Teacher Training Test Prep
*/
var subcategory = 'subcategory=' + 'Marketing';
/*
3D & Animation Advertising Affiliate Marketing Analytics & Automation Apple Arabic Architectural Design Arts & Crafts Beauty & Makeup Black & White Branding Business Law Career Development Chinese College Entry Exam Commercial Photography Communications Content Marketing Creativity Dance Data & Analytics Databases Design Thinking Design Tools Development Tools Dieting Digital Marketing Digital Photography E-Commerce Educational Development English Entrepreneurship Fashion Finance Fitness Food & Beverage French Game Design Game Development Gaming General Health German Google Grad Entry Exam Graphic Design Growth Hacking Happiness Hardware Hebrew Home Business Home Improvement Human Resources Humanities Industry Influence Instructional Design Instruments Interior Design International High School Intuit IT Certification Italian Japanese Landscape Latin Leadership Management Marketing Fundamentals Math & Science Media Meditation Memory & Study Skills Mental Health Microsoft Mobile Apps Mobile Photography Motivation Music Fundamentals Music Software Music Techniques Network & Security Non-Digital Marketing Nutrition Operating Systems Operations Oracle Other Parenting & Relationships Personal Brand Building Personal Finance Personal Transformation Pet Care & Training Photography Fundamentals Photography Tools Portraits Portuguese Product Marketing Production Productivity Programming Languages Project Management Public Relations Real Estate Religion & Spirituality Russian Safety & First Aid Sales Salesforce SAP Search Engine Optimization Self Defense Self Esteem Social Media Marketing Social Science Software Engineering Software Testing Spanish Sports Strategy Stress Management Teaching Tools Test Taking Skills Travel Travel Photography User Experience Video & Mobile Marketing Video Design Vocal Web Design Web Development Wedding Photography Wildlife Photography Yoga
*/

var search = 'search=' + 'market'
/*
Can really be anything
*/

var price = 'price=' + 'price-paid';
/*
List of possible Categories
*/

var language = 'language=' + 'de';
/*
List of possible Categories
*/

var has_simple_quiz = 'has_simple_quiz=' + 'True';
/*
List of possible Categories
True or False
*/


var instructionalLevel = 'instructional_level=' + 'beginner';
/*
List of possible Categories
all, expert, intermediate, beginner
*/


var ordering = 'ordering=' + 'newest';
/*
List of possible catagores
relevance, most-reviewed, highest-rated, newest, price-low-to-high, or price-high-to-low
*/

var page_size = 'page_size=' + '10';

var and = '&';

const baseUrl = 'https://www.udemy.com/';
const courseUrl = 'api-2.0/courses/?';
const curriculumUrl = 'api-2.0/courses/' + coursID + 'public-curriculum-items/';
var coursID = null;

var courseList = {
	url: baseUrl + courseUrl + page_size + and + category + and + ordering,
	headers: {
	      'Authorization': 'Basic RnpnV2FEM1ltWjVobjd5UmRhbnpENmpua3pGNXJDckVKa0hEblp4NDp4Nll6Tk9BNnlMRWpyQUFFT2ZwVnR3Rk1ybDEyRThRTW9lTzBTNmlhWWNOcXV6dWk3dFkwWjdzMGM2eUFrNFlPdFR5dklhQ1pFNDQ2eENEWHJKaVVvNHpSalZMdGJoeFlOWXNzcjg2alBJaHZIWk9HdFI5TEJFMkZUdG9aNTJtUA==',
	      'Accept': 'application/json, text/plain, */*'
	}
};


var curriculumItems = {
	url: baseUrl + curriculumUrl,
	headers: {
	      'Authorization': 'Basic RnpnV2FEM1ltWjVobjd5UmRhbnpENmpua3pGNXJDckVKa0hEblp4NDp4Nll6Tk9BNnlMRWpyQUFFT2ZwVnR3Rk1ybDEyRThRTW9lTzBTNmlhWWNOcXV6dWk3dFkwWjdzMGM2eUFrNFlPdFR5dklhQ1pFNDQ2eENEWHJKaVVvNHpSalZMdGJoeFlOWXNzcjg2alBJaHZIWk9HdFI5TEJFMkZUdG9aNTJtUA==',
	      'Accept': 'application/json, text/plain, */*'
	}
}

function curriculumCallback(error, response, body){
	if(!error && response.statusCode == 200){
		const info = JSON.parse(body);
		console.log("\n Some extra info on the course\n\n");
		console.log(info.results[0]);//console.log(info.results[0]); // Print the whole Data from the first result
	}
}


function courseListcallback(error, response, body) {
  if (!error && response.statusCode == 200) {
    const info = JSON.parse(body);
    //console.log(info.results[0]); // Print the whole Data from the first result

    info.results.forEach(function(pulledData){
    	//console.log(pulledData); // Displays all of the results
    	var myMap = new Map();
    	console.log("The title of the course: " + pulledData.title);
    	if (pulledData.is_paid == true) {
    		console.log("\nThe cost of the course is: " + pulledData.price);
    	}
    	else{
    		console.log("\nThis is a free course");
    	}
    	console.log("\nThe lecture for this course is: " + pulledData.visible_instructors[0].title);
		coursID = pulledData.id;
    });
  }
}

console.log("\n\nThe results for a Business category search is:\n");
request(courseList, courseListcallback);
request(curriculumItems, curriculumCallback);
