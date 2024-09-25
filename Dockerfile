# Usa uma imagem base do Node.js
FROM node:14

# Define o diretório de trabalho no container
WORKDIR /app

# Copia o package.json e package-lock.json para o container
COPY package*.json ./

# Instala as dependências do projeto
RUN npm install

# Copia o restante do código para o container
COPY . .

# Compila o projeto para produção
RUN npm run build

# Define a porta que a aplicação vai usar
EXPOSE 3000

# Comando para iniciar o servidor da aplicação
CMD ["npm", "start"]
