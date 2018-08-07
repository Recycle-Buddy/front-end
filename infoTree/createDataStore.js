//Psuedocode for creating a dataStore for recycling information via scraping seattle.gov/wheredoesitgo
//Mapping out things to be done and general pattern for data
import createRecycleTree from './createRecycleTree';
import whereDoesItGo from './whereDoesItGo';
import nodeList from './nodeList';

function scrapeSeattle(url){
	//TODO: Figure out best methods for getting HTML from a page, probably have to fake some headers
	// $.(get) ?
	fetch(url)
	.then(html => scrapeHtml(html))
	.catch(err => {
		console.log("Could not connect to site: " + err.message)
	})
}

function scrapeHtml(html){
	var howToDispose = {};
	//Input: HTML from seattle.gov where does it go site
	//Returns an object that holds formatted data as described in seattleGovScrape.js
	//TODO: finalize data structure on seattleGovScrape.js, then build this
	return howToDispose;
}

function createDataStore(whereDoesItGoArray){
	var dataStore = {};
	recycleTree = createRecycleTree(whereDoesItGoArray);
	recycleTree.findEveryLeaf.forEach(leaf => dataStore[leaf.data] = scrapeSeattle(recycleTree.findUrl(leaf)));
	return dataStore;
}

// createDataStore(whereDoesItGo);