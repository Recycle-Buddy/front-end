import leafURLS from './URLs.js';
import whereDoesItGo from './whereDoesItGo.js'

export default function getURLindex(label){
  console.log('getURLFile LABEL: ', label);
    //first find which URL maps to it
    const targetURLobj= whereDoesItGo.find(el => el.label === label);
    const targetURL = targetURLobj.value;

    //found mapped URL, now check in URLS.js array to find which file to use
    let URLindex;
    for (URLindex = 0; URLindex < leafURLS.length; ++URLindex){
        if (leafURLS[URLindex] === targetURL){
            break;
        }
    }

    return URLindex;
}
