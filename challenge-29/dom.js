(function(win, doc) {
    function DOM(node) {
        if(!(this instanceof DOM)) return new DOM(node);

        this.element = doc.querySelectorAll(node);
    };

    DOM.prototype.on = function(event, callback) {
        this.element.forEach(function(el) {
            el.addEventListener(event, callback)
        });
    };

    DOM.prototype.off = function(event, callback) {
        this.element.forEach(function(el) {
            el.removeEventListener(event, callback);
        });
    };

    DOM.prototype.get = function(index) {
        if(!index) return this.element[0];
        return this.element[index];
    };

    DOM.prototype.forEach = function(callback) {
        return Array.prototype.forEach.call(this.element, callback);
    };

    DOM.prototype.map = function(callback) {
        return Array.prototype.map.call(this.element, callback);    
    };

    DOM.prototype.filter = function(callback) {
        return Array.prototype.filter.call(this.element, callback);
    };

    DOM.prototype.reduce = function(callback) {
        return Array.prototype.reduce.call(this.element, callback);
    };

    DOM.prototype.reduceRight = function(callback) {
        return Array.prototype.reduceRight.call(this.element, callback);
    };

    DOM.prototype.every = function(callback) {
        return Array.prototype.every.call(this.element, callback);
    };

    DOM.prototype.some = function(callback) {
        return Array.prototype.some.call(this.element, callback);
    };

    DOM.isArray = function(array) {
        if(Object.prototype.toString.call(array) === '[object Array]') return true;
        else return false;      
    };

    DOM.isObject = function(object) {
        if(Object.prototype.toString.call(object) === '[object Object]') return true;
        else return false;
    };

    DOM.isFunction = function(func) {
        if(Object.prototype.toString.call(func) === '[object Function]') return true;
        else return false;
    };

    DOM.isNumber = function(number) {
        if(Object.prototype.toString.call(number) === '[object Number]') return true;
        else return false;
    };

    DOM.isString = function(string) {
        if(Object.prototype.toString.call(string) === '[object String]') return true;
        else return false;    
    };

    DOM.isBoolean = function(boolean) {
        if(Object.prototype.toString.call(boolean) === '[object Boolean]') return true;
        else return false;    
    };

    DOM.isNull = function(data) {
        if(Object.prototype.toString.call(data) === '[object Null]' || Object.prototype.toString.call(data) === '[object Undefined]') return true;
        else return false;
    };

    win.DOM = DOM;
})(window, document);