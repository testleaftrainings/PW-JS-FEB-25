class Browsers {

    browserName: string
    browserVersion: any

    constructor(brower: string, verion: any) {
        this.browserName = brower;
        this.browserVersion = verion;
        this.openURL(this.browserName, this.browserVersion);
    }

    openURL(browerName: string, version: any) {
        console.log(`Opening the URL in ${this.browserName = browerName} browser and the version is ${this.browserVersion = version}`);
        this.navigateBack()
    }

    navigateBack() {
        console.log("Navigating back");
        this.closeBrowser();
    }

    closeBrowser() {
        console.log("The Browser has been closed");
    }
}

class Chrome extends Browsers {
    openIncognito() {
        super.openURL("Chrome", "C.1002");
        this.clearCache()
    }

    clearCache() {
        console.log("Cache has been cleared");
    }

}

class Edge extends Browsers {

    takeSnap() {
        super.openURL("Edge", "E.2002");
        this.clearCookies();
    }

    clearCookies() {
        console.log("The Cookies are cleared");
    }
}

const chr = new Chrome("Chromium", "c21");
chr.openIncognito()
const ede = new Edge("WebkitEdge", "e21");
ede.takeSnap()