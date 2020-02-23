// this module helps us define the mime types
var mimeTypes = {
    getMimeType : function(mimeType) {
        if(mimeType) {
            // converting the passed mineType to lower case as we have our data
            // in lower case.
            let mimeTypeVal = this.mimeTypes[mimeType.toLowerCase()];
            if(mimeTypeVal) {
                return mimeTypeVal;
            }
        }
        return null;
    },
    mimeTypes: {
        'html': "text/html",
        'css': "text/css",
        'js': "text/javascript",
        'png': "image/png",
        'jpg': "image/jpg"
    }
}

module.exports = mimeTypes;