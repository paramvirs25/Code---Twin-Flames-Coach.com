class TfcGlobal {
    static CssJsPath = "https://paramvirs25.github.io/TwinFlamesCoach"; // URL path
    static ShuffleToolsListPath = "HTML/Shuffle/ShuffleToolsList.html";

    static getFullFileUrl(fileUrl) {
        return `${TfcGlobal.CssJsPath}/${fileUrl}`;
    }

    // static loadFile(divToCreateId, filePath) {
    //     const dynamicDiv = document.createElement('div');
    //     dynamicDiv.id = divToCreateId; // Set the id of the div 

    //     // Find the current script tag
    //     const currentScriptTag = document.currentScript;

    //     if (currentScriptTag) {
    //         // Insert the dynamically created div after the current script tag
    //         currentScriptTag.parentNode.insertBefore(dynamicDiv, currentScriptTag.nextSibling);
    //     } else {
    //         // Fallback: if currentScript is not supported, use querySelector
    //         const scriptTags = document.querySelectorAll('script[src*=TfcGlobal]');
    //         if (scriptTags.length > 0) {
    //             scriptTags[scriptTags.length - 1].parentNode.insertBefore(dynamicDiv, null);
    //         }
    //     }

    //     // Load content into the dynamically created div
    //     var fullFileUrl = TfcGlobal.getFullFileUrl(filePath);
    //     jQuery(dynamicDiv).load(fullFileUrl);

    //     console.log("Loaded file " + fullFileUrl);
    // }
}