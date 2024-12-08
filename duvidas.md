## A parte da infra do clean code vai ficar os services da aplicação?

```
No do Clean Code e da arquitetura em camadas, a parte de infra-estrutura geralmente é responsável por componentes que interagem com sistemas externos, como bancos de dados, APIs, e outros serviços. Os "services" da aplicação podem estar localizados em diferentes camadas, dependendo de como você está organizando seu projeto.

Camada de Serviço (Service Layer): Esta camada lida com a lógica de negócio e orquestra as chamadas entre repositórios, modelos e outras partes da aplicação. Os serviços são fundamentais para manter a lógica do domínio isolada da infraestrutura.

Camada de Infraestrutura (Infrastructure Layer): Nesta camada, você pode ter a implementação concreta dos repositórios que acessam a base de dados, serviços de terceiros, e qualquer lógica que seja específica da tecnologia utilizada (como configuração de ORM, conexões de API, etc.).

Portanto, os serviços da aplicação (que contêm lógica de negócio) geralmente não ficam na parte de infraestrutura, mas eles interagem com a infraestrutura para acessar os dados e serviços externos. Essa separação ajuda a manter um código mais limpo, testável e fácil de manter.

Se precisar de mais informações sobre como estruturar sua aplicação seguindo os princípios do Clean Code, sinta-se à vontade para perguntar!
```
