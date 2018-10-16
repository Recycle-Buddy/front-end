function getURLindex(label){
    //first find which URL maps to it
    let targetURL = "";
    for (int i = 0; i < whereDoesItGo.length; ++i){
        let cur = whereDoesItGo[i];
        if (cur.label === label)
            targetURL = cur.value;
    }
    //found mapped URL, now check in URLS.js array to find which file to use
    let URLindex;
    for (int URLindex = 0; URLindex < leafURLS.length; ++URLindex){
        if (leafURLS[URLindex] == targetURL){
            break;
        }
    }

    return URLindex;
}