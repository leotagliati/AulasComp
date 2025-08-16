// escrever uma funcao criadora de acao
// ela produz uma acao que representa a criacao de um novo contrato
const criarContrato = (nome, taxa) => {
    return {
        type: 'CRIAR_CONTRATO',
        payload: {
            nome: nome,
            taxa: taxa
        }
    };
}
// escrever uma funcao criadora de acao
// ela serve para cancelar contratos, dado um nome

const cancelarContrato = (nome) => {
    return {
        type: 'CANCELAR_CONTRATO',
        payload: {
            nome: nome
        }
    };
}

// escrever uma funcao criadora de acao
// ela serve para solicitar cashback
const solicitarCashback = (nome, valor) => {
    return {
        type: 'SOLICITAR_CASHBACK',
        payload: {
            nome,
            valor
        }
    };
}
// redux para cashback
const historicoCashback = (historicoDePedidosDoCashbackAtual = [], acao) => {
    return (acao.type === 'SOLICITAR_CASHBACK') ?
        [...historicoDePedidosDoCashbackAtual, acao.payload] :
        historicoDePedidosDoCashbackAtual;
}
// resolver a manipulacao do caixa, usanod somente ternarios
const caixa = (valorAtualDoCaixa = 1000, acao) => {
    return (acao.type === 'CRIAR_CONTRATO') ?
        valorAtualDoCaixa + acao.payload.taxa
        : (acao.type === 'SOLICITAR_CASHBACK') ?
            valorAtualDoCaixa - acao.payload.valor
            : valorAtualDoCaixa;
}
// redux para novos contratos, se for CRIAR_CONTRATO, adiciona o contrato
const pedidoContratos = (listaDeContratos = [], acao) => {
    return (acao.type === 'CRIAR_CONTRATO') ?
        [...listaDeContratos, acao.payload] :
        (acao.type === 'CANCELAR_CONTRATO') ?
            listaDeContratos.filter(contrato => contrato.nome !== acao.payload.nome)
            : listaDeContratos;
}

