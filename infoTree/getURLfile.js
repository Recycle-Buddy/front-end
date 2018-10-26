import leafURLS from './URLs.js';
import whereDoesItGo from './whereDoesItGo.js'

const errorPage = 223;

export default function getURLindex(label){
    //first find which URL maps to it
    const targetURLobj= whereDoesItGo.find(el => splitOnSeps(el.label) === label);
    if (!targetURLobj){
        return errorPage; //TODO add render page where content says NOT FOUND
    }
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

function splitOnSeps(str){
    const separators = ['-',' '];
    let prejoin = str.split(new RegExp(separators.join('|'), 'g'));
    return prejoin.join('');
}