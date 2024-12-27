document.getElementById('solarCalculator').onsubmit = function(event) {
    event.preventDefault();

    const consumo = parseFloat(document.getElementById('consumo').value);
    const localizacao = document.getElementById('localizacao').value;
    const telhado = parseFloat(document.getElementById('telhado').value);

    // Estimativas simplificadas
    const producaoPorPainel = localizacao === 'norte' ? 300 : 250; // kWh por painel por mês
    const custoPorKWh = 0.75; // Custo médio por kWh

    // Cálculo do número de painéis
    const numPainels = Math.ceil(consumo / producaoPorPainel);

    // Cálculo da economia anual
    const economiaAnual = consumo * custoPorKWh * 12;

    // Cálculo do tempo de retorno
    const custoInstalacao = telhado * 100; // Custo simplificado por m² de telhado
    const payback = custoInstalacao / economiaAnual;

    // Exibindo os resultados
    document.getElementById('painel').textContent = numPainels;
    document.getElementById('economia').textContent = `R$ ${economiaAnual.toFixed(2)}`;
    document.getElementById('payback').textContent = `${payback.toFixed(2)} anos`;

    // Exibe o custo de instalação
    document.getElementById('custoInstalacaoValor').textContent = custoInstalacao.toFixed(2);

    // Exibe a seção de resultados
    document.getElementById('resultados').style.display = 'block';
};
