
# Qual é o número?

## Sobre:


 Ao entrar na aplicação, faça um palpite sobre qual seria o número correto.
 Seguindo os critérios abaixo.
- até 3 dígitos;
- pode ser o número 0, mas nunca um número com 0 à esquerda (ex: 029);
- números posítivos;

## Tecnologias usadas:

 - CSS;
 - HTML;
 - JavaScript.

 ## Api:
 
 Foi feito requisição get utilizando fetch do seguinte endereço:
 - https://us-central1-ss-devops.cloudfunctions.net/rand?min=1&max=300

 ## Lógica
Além do index.html o programa está com três tipos diferentes de dependências na pasta assets:
- css 
- imagens
- javascript

Ao entrar na página é setada uma div de carregamento inicial, baseado na lógica condicional do React, utilizando dos métodos das classes CSS para incluir uma classe e esconder a  div de carregamento ("loading") após um certo periódo de tempo, usando setTimeOut.

Essa mesma lógica dos métodos de inclusão e exclusão de classes foi útilizada para "desenhar" os números de led de 7 segmentos encontrados no display.

A configuração inicial foi setada para excluir os dois últimos dígitos e renderizar apenas o primeiro, com o desenho de um 0. Para esconder os digitos é usado a classe "hidden", localizada no arquivo display.css.
Para fazer os desenhos nas tags "polygon" foi usado o conceito de renderização condicional também, de acordo com o número digitado pelo usuário, o programa remove ou adiciona determinada classe. Enquanto ainda não acertou o palpite são incluídas classes com os receptivas letras (seguindo a ordem alfabética de a-g).
Cada um dos três digitos possui:
- Uma tag SVG;
- Uma tag g filha da SVG;
- Sete tags polygon filhos da tag g;
- Divisão de classes de polygon de acordo com o alfabeto - da letra "a" até "g" (somando sete ao todo);
- Primeiro digito recebe as classes "a" - "g", o segundo "a2" - "g2" e o terceiro "a3" - "g3";
- Classificação de id's de acordo com a ordem em que o SVG aparece, sendo: "first", "second", third".

Seguindo a lógica anterior, assim que o usuário entra no programa, caso a requisição para a API apresente erro, é renderizado no display o StatusCode informado e o input e o botão de palpite aparecem desabilitados (foi útilizado pointer-events: none através de CSS para isso, incluindo a classe disable caso ocorra falha na requisição).

Para estilizar a cor em vermelho em casos de erro de requisição, é adicionada a classe "error"; caso o usuário acerte o palpite, é adicionada a classe "right", estilizando a cor para verde, tanto do display quanto da mensagem resultado ("Você acertou!!!").

O botão de "nova partida" é renderizado apenas quando o número digitado pelo usuário for o mesmo obtido na requisição da API, usando a mesma lógica de classes, onde o mesmo possui uma classe chamada "hiddenBtn" e a classe é removida no momento do acerto. 

## Arquivo index.js

 > É o único arquivo vincúlado diretamente ao HTML e segue a seguinte ordem:
- Declaração da constante let number como nula;
- Requisição da API, alterando o valor da constante number com o valor recebido (número) ou com o objeto de erro;
- Função de renderização  do texto de loading em estilo "typewritting";
- Retirada da DIV de loading com setTimeOut e função especifica;
- Tratando erro de requisição com colhimento do badRequest, foi necessário converter o número obtido no StatusCode to string, para conseguir utilizar a função substr e trazer de volta para número parseando o valor obtido, dessa forma conseguindo cada um dos números separadamente (ex: de 505 para > 5 0 5); essa mesma lógica foi útilizada mais pra frente no código, para quando o usuário digitar o palpite no input. Foi necessário pois cada função que utiliza condicionais no código pedia um número e não uma string, e a função substr para pegar cada número individualmente, não funciona em numbers;
- Com os números tratados, são incluídos nas funções que recebem eles como parâmetros;
- A função initialDisplay tem o papel de esconder os dois últimos digitos do display, deixando o estado inicial do mesmo como 0;
- Já a renderResultText tem como principio renderizar o texto de "Erro" caso haja badRequest na API, ou mais adiante quando ela é chamada novamente para reagir ao número digitado pelo usuário com "É menor" ou "É maior";
- Formulário é capturado em uma constante, para receber um EventListener "submit";
- Tratamento do número digitado, seguindo a lógica do informado no item 5 desse tópico; to string para utilização da função substr e parseado em seguida para inclusão no parãmetro da função de renderização do número no display;
- Resultado em texto renderizado de acordo com o número digitado com a função renderResultText;
- Lógica com if else if aplicadas para esconder ou mostrar determinada quantias de digitos no display (ex: usuário digitou 1 > renderizar apenas um digito, usuário digitou 2 > renderizar dois digitos, usuário digitou 3: renderizar os trÊs digitos);
- Alteração dos digitos na tela de acordo com o número, pela função renderNumber, onde recebe por parãmetro os números digitados separadamente e com isso adiciona ou remove as classes CSS com base neles.
