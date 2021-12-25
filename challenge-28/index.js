(function(win, doc) {
  /*
  No HTML:
  - Crie um formulário com um input de texto que receberá um CEP e um botão
  de submit;
  - Crie uma estrutura HTML para receber informações de endereço:
  "Logradouro, Bairro, Estado, Cidade e CEP." Essas informações serão
  preenchidas com os dados da requisição feita no JS.
  - Crie uma área que receberá mensagens com o status da requisição:
  "Carregando, sucesso ou erro."
  No JS:
  - O CEP pode ser entrado pelo usuário com qualquer tipo de caractere, mas
  deve ser limpo e enviado somente os números para a requisição abaixo;
  - Ao submeter esse formulário, deve ser feito um request Ajax para a URL:
  "https://viacep.com.br/ws/[CEP]/json/", onde [CEP] será o CEP passado
  no input criado no HTML;
  - Essa requisição trará dados de um CEP em JSON. Preencha campos na tela
  com os dados recebidos.
  - Enquanto os dados são buscados, na área de mensagens de status, deve mostrar
  a mensagem: "Buscando informações para o CEP [CEP]..."
  - Se não houver dados para o CEP entrado, mostrar a mensagem:
  "Não encontramos o endereço para o CEP [CEP]."
  - Se houver endereço para o CEP digitado, mostre a mensagem:
  "Endereço referente ao CEP [CEP]:"
  - Utilize a lib DOM criada anteriormente para facilitar a manipulação e
  adicionar as informações em tela.
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

  DOM.prototype.get = function() {
    return this.element;
  };

  var $insertCEP = new DOM("[data-js='insertCEP']");
  var $submitButton = new DOM("[data-js='submitButton']");
  var $message = new DOM("[data-js='message']");
  var $logradouro = new DOM("[data-js='logradouro']");
  var $bairro = new DOM("[data-js='bairro']");
  var $estado = new DOM("[data-js='estado']");
  var $cidade = new DOM("[data-js='cidade']");
  var $cep = new DOM("[data-js='cep']");

  var ajax = new XMLHttpRequest(); 

  $submitButton.on('click', loadData);

  function loadData(e) {
    e.preventDefault();

    ajax.open('GET', `https://ws.apicep.com/cep/${validateCEP()}.json`);
    ajax.send();

    $message.get()[0].textContent = `Buscando informações para o CEP ${validateCEP()}...`;
    ajax.onreadystatechange = ifRequestOk;
  };

  function validateCEP() {
    return $insertCEP.get()[0].value.match(/\d/g).join('');
  };

  function ifRequestOk() {
    if(ajax.readyState == 4 && ajax.status == 200) {
      var response;
      try {
        response = JSON.parse(ajax.responseText);           
      } catch(e) {
        response = null;
      }
      setValues(response); 
    };
  };

  function setValues(resp) {
    if(resp.status == 400) {
      clearValues();
    } else {
      $message.get()[0].textContent = `Endereço referente ao CEP ${resp.code}.`;
      $logradouro.get()[0].value = resp.address;
      $bairro.get()[0].value = resp.district;
      $estado.get()[0].value = resp.state;
      $cidade.get()[0].value = resp.city;
      $cep.get()[0].value = resp.code;
    };
  };

  function clearValues() {
    $message.get()[0].textContent = `Não encontramos o endereço para o CEP ${validateCEP()}.`;
    $logradouro.get()[0].value = "";
    $bairro.get()[0].value = "";
    $estado.get()[0].value = "";
    $cidade.get()[0].value = "";
    $cep.get()[0].value = "";
  };

})(window, document);