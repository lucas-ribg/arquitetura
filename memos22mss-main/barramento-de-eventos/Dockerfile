# imagem com o node versão 14
FROM node:14

# diretório no sistema de arquivos do contêiner para os comandos a seguir
WORKDIR /app

#copiamos o package.json para poder executar npm install
COPY package.json .

#executamos npm install
RUN npm install

#copiamos os demais arquivos
COPY . .

#tornamos o contêiner disponível na porta 5200
#EXPOSE 5200

#colocamos o aplicativo em execução
CMD ["npm", "start"]