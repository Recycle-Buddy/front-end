let cheerio = require('cheerio');
let jsonframe = require('jsonframe-cheerio');

let $ = cheerio.load('https://www.seattle.gov/util/MyServices/WhereDoesItGo/HouseholdItems/Appliances/AirConditionersHeatPumps/index.htm');
jsonframe($);
/*

<h1>Camera or Watch Batteries</h1>
<h3 class="garbage">In garbage</h3>
<p>Button cell batteries used in watches and some older camera models can go in the garbage.</p>
<p>Button cell batteries are also used for:</p>
<ul>
    <li>Digital thermometers</li>
    <li>Pocket calculators</li>
    <li>Hearing aids</li>
</ul>
<h3 class="hazard">Household hazardous waste facility</h3>
<p>Bring camera and watch button cell batteries to a <a href="../../../../../MyServices/Garbage/SpecialorHazardousItems/HouseholdHazardousWaste/WheretoDisposeofHazardousWaste/index.htm" target="">household hazardous waste facility</a>, where the metals and very small amount of hazardous metals in the batteries will be reclaimed and recycled. No fee.</p>
</div>

*/

// This is a rough draft of the output of scraping data from seattle.gov.
// The input of the function would be the HTML above

var sampleObject= {
	//the key comes from the URL used to find the HTML
	key:"CameraWatchBatteries",
	title:"Camera or Watch Batteries",
	//Formatting of howTo needs to account for lists, links, and other possible differences in data. 
	recycleOptions: [{
			type:"garbage",
			title:"In garbage",
			howTo:[{
				type:"p",
				text:"Button cell batteries used in watches and some older camera models can go in the garbage."
			},{
				type:"p",
				text:"Button cell batteries are also used for:"
			},{
				type:"list",
				children:["Digital thermometers","Pocket calculators","Hearing aids"]
			}]
		},
		{
			type:"hazard",
			title:"Household hazardous waste facility",
			howTo:[{
				type:"p",
				text:"Bring camera and watch button cell batteries to a <a></a>, where the metals and very small amount of hazardous metals in the batteries will be reclaimed and recycled. No fee."
			},{
				type:"a",
				link:"../../../../../MyServices/Garbage/SpecialorHazardousItems/HouseholdHazardousWaste/WheretoDisposeofHazardousWaste/index.htm",
				text:"household hazardous waste facility"
			}]
		}
	]
}


function scrapeHtml(){
	var frame = {
		key:"AirConditionersHeatPumps",
		title:"h1",
	} 
	var recycleInfo = $('#region').scrape(frame);
	console.log(recycleInfo);
	return recycleInfo;
}

scrapHtml()

function scrapeSeattle(url){
	//TODO: Figure out best methods for getting HTML from a page, probably have to fake some headers
	fetch("https://crossorigin.me/https://www.seattle.gov/util/MyServices/WhereDoesItGo/HouseholdItems/Appliances/AirConditionersHeatPumps/index.htm")
	.then(response => response.text())
	.then(html => console.log(html))
	.catch(err => {
		console.log("Could not connect to site: " + err.message)
	})
}

scrapeSeattle("whatever");
  // Initialize the DOM parser
  // var parser = new DOMParser();
  // Parse the text
  // var doc = parser.parseFromString(html, "text/html");
  
  // You can now even select part of that html as you would in the regular DOM 
  // Example:
  // var docArticle = doc.querySelector('article').innerHTML;


