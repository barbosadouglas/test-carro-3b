# test-carro-3b

# Teste Unitário

Neste tipo de teste, unidades ou módulos do sistema são avaliados de forma isolada. O objetivo principal é garantir que essas unidades operem conforme suas especificações (Naik e Tripathy, 2008). Este processo é conduzido pelo próprio desenvolvedor durante a construção preliminar da aplicação.

É a forma de se testar partes do código em forma isolada, garantindo que cada parte do código funcione corretamente, são testes rápidos de executar e ajudam a identificar possíveis problemas em nível unitário.

---

Referências:

- Naik, K., & Tripathy, A. K.Software Evolution and Maintenance. 2008.

# Teste E2E(End-to-End)

Esse é modelo de teste que interage com a interface da aplicação mobile, é mais lento que os testes realizados diretamente no código
da aplicação, devido a necessidade de interação constante com a estrutura de UI da aplicação(FOWLER, 2012).

Diferentemente do teste unitário, tem como propósito testar a funcionalidade completa da aplicação, tem ênfase em replicar a experiência do usuário, verificando se todas as partes
da aplicação estão funcionando corretamente juntas.

---

Referências:

- FOWLER, M. Test Pyramid. 2012.

## Dependências

Execute os seguintes comandos para instalar as dependências do projeto:
```
npx expo install jest-expo jest

npm i --save-dev @types/jest

npm install --save-dev @types/react-test-renderer
```

## Configuração Jest no ‘package.json’

Adicione as configurações do Jest no seu arquivo ‘package.json’:
```
"scripts": {
//… outros scripts
"test": "jest"
},
"jest": {
"preset": "jest-expo",
"transformIgnorePatterns": [
"node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg)"
]
},
```
## Executar os testes

Utilizar o terminal para executar o comando:
```
npm run test
```
## Observações:

Neste projeto foi utilizado o terminal presente na IDE VSCode como ambiente para executar os testes implementados.

Utilizando estrutura de pastas indicado pela documentação expo, com uma pasta separada para os arquivos de teste.
