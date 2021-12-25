(function(win, doc) {
    /*
    Aproveitando a lib DOM que fizemos na semana anterior, crie agora para ela
    métodos semelhantes aos que existem no array, mas que sirvam para os
    elementos do DOM selecionados.
    Crie os seguintes métodos:
    - forEach, map, filter, reduce, reduceRight, every e some.
    Crie também métodos que verificam o tipo do objeto passado por parâmetro.
    Esses métodos não precisam depender de criar um novo elmento do DOM, podem
    ser métodos estáticos.
    Métodos estáticos não obrigam o uso do `new`, podendo ser usados diretamente
    no objeto, como nos exemplos abaixo:
    DOM.isArray([1, 2, 3]); // true
    DOM.isFunction(function() {}); // true
    DOM.isNumber('numero'); // false
    Crie os seguintes métodos para verificação de tipo:
    - isArray, isObject, isFunction, isNumber, isString, isBoolean, isNull.
    O método isNull deve retornar `true` se o valor for null ou undefined.
    */
   "use strict";

    function DOM(node) {
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
  
    DOM.prototype.get = function() {
      return this.element;
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

    var $a = new DOM('[data-js="link"]');

    // Testes

    $a.on('click', function handleClick(e) {
      e.preventDefault();
      console.log('clicou');
      $a.off('click', handleClick);
    });

    console.log("Get:");
    console.log('Elementos selecionados:', $a.get());
    console.log('$a é filho de body?', $a.get()[0].parentNode === document.body);

    console.log("ForEach:");
    $a.forEach(function(el) {
      console.log(el);
    });

    console.log("Map:");
    console.log($a.map(function(el) {
      el.setAttribute("data-js", "anchor");  
      return el;
    }));

    console.log("Filter:");
    console.log($a.filter(function(el) {
      return el.innerText === "First Node";
    }));

    console.log("Reduce:");
    console.log($a.reduce(function(acc, currentValue) {
      return `${acc.innerText} \& ${currentValue.innerText}`;
    }));

    console.log("ReduceRight:");
    console.log($a.reduceRight(function(acc, currentValue) {
      return `${acc.innerText} \& ${currentValue.innerText}`;
    }));

    console.log("Every:");
    console.log($a.every(function(el) {
      return el.innerText.match(/Node/g);
    }));

    console.log("Some:");
    console.log($a.some(function(el) {
      return el.innerText.match(/First/g);
    }));

    console.log("Array: " + DOM.isArray(([1, 2, 3, 4])));

    console.log("Object: " + DOM.isObject({ property: "a" }));

    console.log("Function: " + DOM.isFunction(function() {
      console.log("Oi");
    }));

    console.log("Number: " + DOM.isNumber(2));

    console.log("String: " + DOM.isString("gustavo"));

    console.log("Boolean: " + DOM.isBoolean(true));

    console.log("Boolean: " + DOM.isBoolean(false));

    console.log("Null: " + DOM.isNull(null));

    console.log("Undefined: " + DOM.isNull(undefined));
    
})(window, document);
