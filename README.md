**Real Profit** é uma aplicação para **simulação de rentabilidade** entre diferentes **criptoativos e o tesouro direto pré-fixado**.

## Atores e Ações

1. Usuário: seleciona um criptoativo
2. Usuário: informa a data do investimento
3. Usuário: informa o valor investido
4. Sistema: processa informações
5. Sistema: redireciona para o gráfico
6. Usuário: clica na área do gráfico
7. Sistema: exibe detalhes dos rendimentos
8. Usuário: pode alterar criptoativo
9. Usuário: pode alterar data do investimento
10. Usuário: pode alterar o valor do investimento
11. Usuário: processa informações atualizadas
12. Sistema: atualiza informações da simulação

## Funcionamento e Soluções adotadas

- _Seleção do Criptoativo_

Nesta funcionalidade utilizei a API _[CryptoCompare](https://min-api.cryptocompare.com/documentation)_ para buscar uma lista dos 10 criptoativos que tiveram maior volume nas últimas 24hs, listando-os no _Select_ implementado no primeiro passo do _Stepper_ e nos Detalhes dos rendimentos.

- _Seleção da Data do investimento_

Optei por trabalhar com datas no formato _timestamp_, pois é o formado que a API externa aceita como parâmetro (_totimestamp_) nas requisições, e criei uma _'lib'_ de funções para fazer conversões quando necessário, como será possível ver no módulo _time.ts_.

- _Valor investido_

Para este campo utilizei o _CurrencyTextField_ um componente de terceiros que já faz toda a validação de números em formato _currency_.

- _Processamento de informações e exibição do gráfico_

Nesta parte utilizei o próprio Redux para definir quando o usuário está definindo parâmetros da simulação ou está visualizando o gráfico através do parâmetro _simulator_ do estado global, de forma que depois do processamento, com a alteração no estado, o recarregamento automático de componentes do React levaria o usuário para a página do gráfico.

- _Detalhes dos rendimentos_

Para a exibição dos detalhes em tempo real criei _sagas_ e _actions_ que seriam disparadas a cada alteração dos campos abertos para edição. Optei por esta sugestão desde o princípio, pois ela daria uma melhor liberdade para o usuário escolher um novo _criptoativo_, uma nova _data_ ou mesmo um novo _valor_ de investimento, agregando à experiência do usuário.

## Tecnologias e impressões

- _Redux, Redux Saga e Estado Global_

Desde os primeiros _insights_ pensei a aplicação com _estado global_ com _Redux_ por perceber que apesar de haver muitas informações definidas isoladamente, numa _perspectiva global_, esses dados seriam _interdependentes_ e todo o fluxo de definição de _ativo, data e valor_ seriam essenciais para a atribuição dos _parâmetros da requisição_ de cotações, e logo deveriam estar _acessíveis_ a qualquer _tempo_ e de qualquer _lugar_ da aplicação.

- _TypeScript, Tipos e Estruturas_

A sugestão do TypeScript para o desafio veio num ótimo momento. Não tem nem como comparar o desenvolvimento com Typescript e o desenvolvimento sem Typescript. O controle das variáveis, tipos e estrutura dentro da aplicação é algo que trás bastante segurança no desenvolvimento e livra a nós desenvolvedores das tão conhecidas inconsistências.

- _React Hooks e Simplicidade_

Os React Hooks me permitiram aplicar de forma bem mais simples toda a lógica e estrutura de componentização do React, sem mencionar que o próprio _Redux_ já tem implementações que permitem disparar _actions_ e 'escutar' variáveis da _Store_, o que permitiu deixar o código muito mais simples do que com versões anteriores do Redux.

- _Jest, Unit e Validação_

Um ponto que me preocupou muito no início do projeto, uma vez que no desenvolvimento lidamos com matemática mesmo não sendo nosso foco principal, foi a lógica das funções de rentabilidade que pensei para a solução (depois de muita pesquisa). Mas foi algo que eu sabia que com um _testes unitários_ no _Jest_ seria tranquilamente validado.
