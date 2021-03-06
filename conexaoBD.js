// JavaScript source code
let conexao;

(async () => {
  conectar();
  await criarTabela();
  await inserir();
  await mostrarLinhas();
})();

function conectar() {
  let { Client } = require('pg');
  conexao = new Client({
    host: 'localhost',
    database: 'nomeBanco',
    user: 'usuario_banco_aqui',
    password: 'password_banco_aqui',
    port: 5432,
  });
  conexao.conectar();
}

async function criarTabela() {
  await conexao.query();
  console.log('Tabela Criada');
}

async function inserir() {
  let { linhas } = await conexao.query(
  );
  console.log(`Linhas inseridas: ${linhas.length}`);
}

async function mostrarLinhas() {
  let { linhas } = await conexao.query();
  for (const linha of linhas) {
    console.log(linha);
  }
}