# Nasa Robot

Controle um robô em marte!

## Description

Através de comandos disponíveis enviados, é possível rotacionar e mover um robô dentro de um campo de 5x5. A posição do robô sempre possui as coordenadas X e Y além da sua direção (norte, sul, leste ou oeste). Se for enviado um comando inválido, o robô não o executa. O sistema mantém um histórico dos comandos enviados.

## Getting Started

### Dependencies

* Node
* NestJS
* PostgreSQL

### Installing

#### Install Node

Se você utilizar um gerenciados de versões node (NVM)

`nvm install 14.17.3`

#### Install js packages

Instale as dependências com: `yarn`

#### Configure database

```
$sudo -U postgres
$psql
$create database nasa_role
$create user nasa_role with encrypted password nasa_role
$grant all privileges on database nasa_role to nasa_role
```

(Muito a melhorar nessa configuração)

### Executing program

* Para rodar o servidor
`yarn start` ou `yarn start:dev`

* Para enviar comandos para o robô

POST localhost:3000/command
Body: {
  command: "YOUR_COMMAND_HERE"
}