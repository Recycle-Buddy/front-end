//Psuedocode for creating a dataStore for recycling information via scraping seattle.gov/wheredoesitgo
//Mapping out things to be done and general pattern for data
import createRecycleTree from './createRecycleTree';
import whereDoesItGo from './whereDoesItGo';
import nodeList from './nodeList';
import scrapeHtml from './seattleGovScrape';

function scrapeSeattle(url){
	//TODO: Figure out best methods for getting HTML from a page, probably have to fake some headers
	fetch(url)
	.then(html => scrapeHtml(html))
	.catch(err => {
		console.log("Could not connect to site: " + err.message)
	})
}



function createDataStore(whereDoesItGoArray){
	var dataStore = {};
	recycleTree = createRecycleTree(whereDoesItGoArray);
	recycleTree.findEveryLeaf.forEach(leaf => dataStore[leaf.data] = scrapeSeattle(recycleTree.findUrl(leaf)));
	return dataStore;
}

// createDataStore(whereDoesItGo);