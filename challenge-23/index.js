(function(win, doc) {
    /*
    Vamos desenvolver mais um projeto. A ideia é fazer uma mini-calculadora.
    As regras são:
    - Deve ter somente 1 input, mas não deve ser possível entrar dados nesse input
    diretamente;
    - O input deve iniciar com valor zero;
    - Deve haver 10 botões para os números de 0 a 9. Cada botão deve ser um número;
    - Deve haver 4 botões para as operações principais: soma (+), subtração(-),
    multiplicação(x) e divisão(÷);
    - Deve haver um botão de "igual" (=) que irá calcular os valores e um botão "CE"
    que irá limpar o input, deixando-o com valor 0;
    - A cada número pressionado, o input deve atualizar concatenando cada valor
    digitado, como em uma calculadora real;
    - Ao pressionar um botão com uma das 4 operações, deve aparecer o símbolo da
    operação no input. Se o último caractere no input já for um símbolo de alguma
    operação, esse caractere deve ser substituído pelo último pressionado.
    Exemplo:
    - Se o input tem os valores: "1+2+", e for pressionado o botão de
    multiplicação (x), então no input deve aparecer "1+2x".
    - Ao pressionar o botão de igual, o resultado do cálculo deve ser mostrado no
    input;
    - Ao pressionar o botão "CE", o input deve ficar zerado.
    */
    var $visor = doc.querySelector("[data-js='visor']");
    var $operations = doc.querySelectorAll("[data-js='operations']");
    var $clear = doc.querySelector("[data-js='clear']");
    var $result = doc.querySelector("[data-js='result']");
    var $numbers = doc.querySelectorAll("[data-js='numbers']");

    $clear.addEventListener('click', handleCEClick, false);    
    $result.addEventListener('click', handleResultClick, false);

    Array.prototype.forEach.call($numbers, function(number) {
        number.addEventListener('click', handleNumberClick, false);
    });

    Array.prototype.forEach.call($operations, function(operation) {
        operation.addEventListener('click', handleOperationClick, false);
    });

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

    function handleNumberClick() {        
        if($visor.value.length == 1 && $visor.value == 0) $visor.value = this.value;
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
        $visor.value = values.reduce(function(acc, currentValue){
            var firstValue = acc.slice(0, -1);
            var operator = acc.split('').pop();
            var lastValue = removeLastItemIfItIsAnOperator(currentValue);
            var lastOperator = isLastItemAnOperator(currentValue) ? currentValue.split('').pop() : '';
            switch(operator){
                case '+':
                    return (Number(firstValue) + Number(lastValue)) + lastOperator;
                case '-':
                    return (Number(firstValue) - Number(lastValue)) + lastOperator;
                case '*':
                    return (Number(firstValue) * Number(lastValue)) + lastOperator;
                case '/':
                    return (Number(firstValue) / Number(lastValue)) + lastOperator;
            }
        });        
    };

})(window, document);