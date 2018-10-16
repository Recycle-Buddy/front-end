import leafURLS from './URLs.js';
import whereDoesItGo from './whereDoesItGo.js'

function getURLindex(label){
    //first find which URL maps to it
    const targetURL= whereDoesItGo.find(el => el.label === label)
    
    //found mapped URL, now check in URLS.js array to find which file to use
    let URLindex;
    for (int URLindex = 0; URLindex < leafURLS.length; ++URLindex){
        if (leafURLS[URLindex] == targetURL){
            break;
        }
    }

    return URLindex;
}