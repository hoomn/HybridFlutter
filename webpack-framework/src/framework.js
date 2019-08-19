
global.events = {};

global.guid = function() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

global.judgeIsNotNull = function(pageId, id, val) {
    if (pageId && id && val) return true;
    return false;
}

function cc() {

    this.requestData = {};
    
    this.onNetworkResult = function(requestId, result, json) {
        console.log('onNetworkResult requestId = ' + requestId);
        var req = this.requestData[requestId];
        console.log('onNetworkResult req = ' + req);
        if (req) {
            if (result === 'success') {
                req['success'](JSON.parse(json));
                console.log('success json = ' + json);
            } else {
                req['fail'](JSON.parse(json));
            }
            req['complete']();
        }
    }

}

global.cc = new cc();

Array.prototype.contains = function (needle) {
    for (i in this) {
        if (this[i] == needle) return true;
    }
    return false;
}

require('./page')
//require('./element')
//require('./jsbridge')
