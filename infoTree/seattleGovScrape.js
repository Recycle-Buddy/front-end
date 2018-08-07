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
//  
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

//This type would store essentially every piece of data coming in, and might require less code and produce more information
var sampleObject2 = {
	//the key comes from the URL used to find the HTML
	key:"CameraWatchBatteries",
	info:[{
		type:"h1",
		text:"Camera or Watch Batteries",
		class:null,
		hasChild:[]
	},
	{
		type:"h3",
		text:"In garbage",
		class:"garbage",
		hasChild:[]
	},
	{
		type:"p",
		text:"Button cell batteries used in watches and some older camera models can go in the garbage.",
		class:null,
		hasChild:[]
	},
	{
		type:"p",
		text:"Button cell batteries are also used for:",
		class:null,
		hasChild:[]
	},
	{
		type:"ul",
		text:null,
		class:null,
		hasChild:[{
			type:"li",
			text:"Digital thermometers",
			class:null,
			hasChild:[]
		},
		{
			type:"li",
			text:"Pocket calculators",
			class:null,
			hasChild:[]
		},
		{
			type:"li",
			text:"Hearing aids",
			class:null,
			hasChild:[]
		}]
	},
	{
		type:"h3",
		text:"Household hazardous waste facility",
		class:"hazard",
		hasChild:[]
	},
	{
		type:"p",
		text:'Bring camera and watch button cell batteries to a <a href="../../../../../MyServices/Garbage/SpecialorHazardousItems/HouseholdHazardousWaste/WheretoDisposeofHazardousWaste/index.htm" target="">household hazardous waste facility</a>, where the metals and very small amount of hazardous metals in the batteries will be reclaimed and recycled. No fee.',
		class:null,
		hasChild:[{
			type:"a",
			text:"household hazardous waste facility",
			class:null,
			hasChild:[]
		}]
	}
]
}