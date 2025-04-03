const carregarDados = async () => {
  //Esconde a div-erro
  let divErro = document.getElementById("div-erro");
  divErro.style.display = "none";
  divErro.innerHTML = "";

  try {
    const response = await fetch("https://api.coinbase.com/v2/currencies");
    const dados = await response.json(); // Convertendo a resposta para um arquivo json
    prepararTabela(dados.data);
    if (!response.ok) throw new Error(`Erro HTTP: ${response.status}`);
    // else alert("Funcionei")
  } catch (error) {
    divErro.style.display = "block";
    divErro.innerHTML = `<b>Erro ao acessar a API:</b> ${error.message}`;
  }
};

const prepararTabela = (dados) => {
  const linhaTabela = document.getElementById("itens");
  linhaTabela.innerHTML = "";

  let contador = 0

  dados.forEach((moeda) => {
    const linhaAuxiliar =
      contador % 2 !== 0
        ? "<tr class='listra'>"
        : `<td>${moeda.id}</td>
                        <td>${moeda.name}</td></tr>`;
    contador++
    linhaTabela.innerHTML += linhaAuxiliar
  });
};
