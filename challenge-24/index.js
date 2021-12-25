(function(win, doc) {
    /*
    Nossa calculadora agora está funcional! A ideia desse desafio é modularizar
    o código, conforme vimos na aula anterior. Quebrar as responsabilidades
    em funções, onde cada função faça somente uma única coisa, e faça bem feito.
    - Remova as duplicações de código;
    - agrupe os códigos que estão soltos em funções (declarações de variáveis,
    listeners de eventos, etc);
    - faça refactories para melhorar esse código, mas de forma que o mantenha com a
    mesma funcionalidade.
    */

    var $visor = doc.querySelector("[data-js='visor']");
    var $operations = doc.querySelectorAll("[data-js='operations']");
    var $clear = doc.querySelector("[data-js='clear']");
    var $result = doc.querySelector("[data-js='result']");
    var $numbers = doc.querySelectorAll("[data-js='numbers']");
    
    (function addEventListeners() {
        $clear.addEventListener('click', handleCEClick, false);    
        $result.addEventListener('click', handleResultClick, false);
    
        Array.prototype.forEach.call($numbers, function(number) {
            number.addEventListener('click', handleNumberClick, false);
        });
    
        Array.prototype.forEach.call($operations, function(operation) {
            operation.addEventListener('click', handleOperationClick, false);
        });
    })();

    function isLastItemAnOperator(number) {
        var ops = ['+', '-', '*', '/'];
        var lastItem = number.split('').pop();
        return ops.some(function(op) {
            return op === lastItem;
        });
    };

    function removeLastItemIfItIsAnOperator(number) {
        if(isLastItemAnOperator(number)) {
            return number.slice(0, -1);
        };
        return number;
    };

    function removeFirstNumberIfItsZero() {
        if($visor.value.length == 1 && $visor.value == 0) return true;
        else return false;
    };

    function handleNumberClick() {        
        if(removeFirstNumberIfItsZero()) $visor.value = this.value;
        else $visor.value += this.value;
    };

    function handleOperationClick() {
        $visor.value = removeLastItemIfItIsAnOperator($visor.value);        
        $visor.value += this.value;
    };

    function handleCEClick() {
        $visor.value = 0;
    };

    function handleResultClick() {
        $visor.value = removeLastItemIfItIsAnOperator($visor.value);
        var values = $visor.value.match(/\d+[+\-*\/]?/g);
        $visor.value = values.reduce(handleValues);
    };

    function handleValues(acc, currentValue) {
        var firstValue = acc.slice(0, -1);
        var operator = acc.split('').pop();
        var lastValue = removeLastItemIfItIsAnOperator(currentValue);
        var lastOperator = isLastItemAnOperator(currentValue) ? currentValue.split('').pop() : '';
        return calculate(operator, firstValue, lastValue, lastOperator);
    };

    function calculate(operator, firstValue, lastValue, lastOperator) {
        switch(operator){
            case '+':
                return (Number(firstValue) + Number(lastValue)) + lastOperator;
            case '-':
                return (Number(firstValue) - Number(lastValue)) + lastOperator;
            case '*':
                return (Number(firstValue) * Number(lastValue)) + lastOperator;
            case '/':
                return (Number(firstValue) / Number(lastValue)) + lastOperator;
        };
    };

})(window, document);