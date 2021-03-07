### PARA CRIAMOS UM SERVIDO EM NOSSA MAQUINA IREMOS PRECISA DO NO CARA expresss
yarn add express => 

### FAZENDO CONEXAO COM BANCO DE DADO MYSQL 
yarn add sequelize sequelize-cli --save

### PARA USAR O BM MYSQL PRECISO ISTALAR
yarn add msql2

### PARA PODEMOS RODA UMA MIGRATION E CRIAR NOSSO BANCO DE DADOS EM NOSSO SERIVDOR
yarn sequelize db:create

### PRECISAMOS FALA PRO SEQUELIZE QUE EM NOSSO APP TEMOS UM ARQUIVO DE CONFIGURAÇÃO
### CRIA O ARQUIVO .sequelizerc e coloca pra js

### PARA PODEMOS CRIAR TABELAS PRECISAMOS RODAS O CAMANDO
yarn sequelize migration:create --name=create-name..

### PARA RODA NOSSA MIGRATION
yarn sequelize db:migrate

### PARA INICIAMOS NOSSO FRONT END COM REACT JS
npx create-react-app my-app

### PARA RODA NOSSA APLICACAO FRON E BECK JUNTOS
npm install concurrently -D
npm install concurrently

## ISTALANDO O MATERIAL UI DO REACT
npm install @material-ui/core
npm install @material-ui/icons
