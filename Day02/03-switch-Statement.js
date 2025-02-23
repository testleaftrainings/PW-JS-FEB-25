
//Switch statement

function getVersion(){

    switch(browser){
        case'chrome':
        console.log(131);
        break;
        case'safari':
        console.log(17);
        break;
        case'firefox':
        console.log(128);
        break;
        default:
            console.log("Unsupported browser");
        break     
    }

}

let browser = "chrome"
getVersion();