(function(win, doc) {
    /*
    Essa semana você terá dois desafios:
    1) Revisar todo o contéudo passado até aqui, e ver se você realmente entendeu
    tudo o que foi passado! Se tiver dúvidas, anote, e então abra issues,
    ou comente no seu pull request mesmo, que eu irei ajudá-lo a entender
    o que não ficou tão claro das aulas anteriores.
    É essencial que você entenda todo o conteúdo que foi passado até aqui,
    para que possamos prosseguir para a parte mais avançada do curso :D
    2) Estudar eventos!
    Acesse a página do MDN:
    https://developer.mozilla.org/en-US/docs/Web/Events#Categories
    Tente aplicar na prática alguns dos eventos que estão ali e coloque nesse
    desafio os experimentos legais que você conseguir desenvolver :D
    */

    "use strict";

    var username;
    var dayTime;
    var greetings;
    var $body = doc.querySelector('body');
    var $title = doc.querySelector('[data-js="title"]');
    var $titleImage = doc.querySelector('[data-js="titleImage"]');
    var $upperCase = doc.querySelector('[data-js="upperCase"]');
    var $lowerCase = doc.querySelector('[data-js="lowerCase"]');
    var $reverse = doc.querySelector('[data-js="reverse"]');
    var $changeName = doc.querySelector('[data-js="changeName"]');
    var $destroyPage = doc.querySelector('[data-js="destroyPage"]');

    function on(element, event, callback) {
        element.addEventListener(event, callback, false);
    };

    (function init() {
        $body.style.display = 'hidden';
        getData();
        initialGreeting();
        addListeners();
    })();

    function getData() {
        username = prompt("Qual é o seu nome?");
        dayTime = prompt("É dia ou noite?").toLowerCase();
        setDayTime();
    };

    function setDayTime() {
        switch(dayTime) {
            case 'dia':
                return greetings = "Bom dia ";
            case 'noite':
                return greetings = "Boa noite ";
            default:
                dayTime = prompt("Insira 'dia' ou 'noite':");
                setDayTime();
        };  
    };

    function initialGreeting() {      
        $title.innerText = `
            ${greetings} ${username}!            
        `;
        defineBackground();
    };

    function defineBackground() {
        if(dayTime === 'noite') {
            $body.style.backgroundColor = 'black';
            $body.style.color = 'white';
            $titleImage.src = './assets/moon.png';
            $titleImage.alt = 'Moon';
        } else {
            $body.style.backgroundColor = 'lightyellow';
            $body.style.color = 'black';
            $titleImage.src = './assets/sun.png';
            $titleImage.alt = 'Sun';
        };

        $body.style.display = 'block';
    };

    function addListeners() {
        on($titleImage, 'click', changeBackground);
        on($upperCase, 'click', upperCase);
        on($lowerCase, 'click', lowerCase);
        on($reverse, 'click', reverse);
        on($changeName, 'click', changeName);
        on($destroyPage, 'mouseover', destroyPage);
    };

    function changeBackground() {
        if(dayTime === 'noite') {
            dayTime = 'dia';
        } else {
            dayTime = 'noite';
        };

        defineBackground();
        setDayTime();
        initialGreeting();
    };

    function upperCase() {
        $title.innerText = $title.innerText.toUpperCase();
    };

    function lowerCase() {
        $title.innerText = $title.innerText.toLowerCase();
    };

    function reverse() {
        var str = $title.innerText;
        str = str.split("").reverse().join("");
        $title.innerText = str;
    };

    function changeName() {
        if(confirm("Tem certeza de que quer mudar o nome?")) username = prompt("Digite o seu novo nome:");
        initialGreeting();
    };

    function destroyPage() {
        $destroyPage.innerText = "VOCÊ NÃO PODE FAZER ISSO!";
    };

})(window, document);