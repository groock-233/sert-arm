// Lista de ingredientes disponíveis na lanchonete
const INGREDIENTES_CARDAPIO = [
  { id: "pao-hamburguer", nome: "🍔 Pão e Carne" },
  { id: "queijo", nome: "🧀 Queijo" },
  { id: "alface-tomate", nome: "🥗 Salada" },
  { id: "bacon", nome: "🥓 Bacon" },
  { id: "frango", nome: "🍗 Frango" },
  { id: "batata", nome: "🍟 Batata Frita" },
  { id: "suco", nome: "🧃 Suco Natural" },
  { id: "refrigerante", nome: "🥤 Refrigerante" },
  { id: "agua", nome: "💧 Água" },
  { id: "milkshake", nome: "🍨 Vitamina Gelada" }
];

// Os 10 clientes em ordem crescente de dificuldade
const CLIENTES = [
  {
    avatar: "🧑",
    idioma: "Pedido em Português",
    fala: "Oi! Quero um sanduíche simples com pão, carne e queijo, por favor.",
    opcoesResposta: [
      { texto: "Ok, já vai sair seu burger!", correta: false },
      { texto: "Claro! Vou preparar seu hambúrguer com queijo agora mesmo.", correta: true },
      { texto: "Beleza, o snack tá na mão.", correta: false }
    ],
    itensCorretos: ["pao-hamburguer", "queijo"],
    valorBase: 6,
    explicacao: "Em português, usamos 'hambúrguer' (com acento) e evitamos misturar palavras em inglês sem necessidade no atendimento."
  },
  {
    avatar: "👩",
    idioma: "Pedido com Inglês",
    fala: "Hello! Eu quero um cheese burger e uma water para beber.",
    opcoesResposta: [
      { texto: "Pode deixar! Um hambúrguer com queijo e uma água saindo.", correta: true },
      { texto: "Yes! Uma water e um cheese saindo.", correta: false },
      { texto: "Tá bom, vou pegar o drink e o lanche.", correta: false }
    ],
    itensCorretos: ["pao-hamburguer", "queijo", "agua"],
    valorBase: 7,
    explicacao: "'Cheese burger' significa hambúrguer com queijo, e 'water' significa água. O atendente respondeu tudo em bom português!"
  },
  {
    avatar: "🧔",
    idioma: "Pedido com Inglês",
    fala: "Bom dia! Me vê um chicken sandwich com salada e um suco natural.",
    opcoesResposta: [
      { texto: "Saindo um chicken e um juice agora!", correta: false },
      { texto: "Com certeza! Um sanduíche de frango com salada e um suco natural.", correta: true },
      { texto: "Ok, vou fazer o sandwich de frango.", correta: false }
    ],
    itensCorretos: ["frango", "alface-tomate", "suco"],
    valorBase: 8,
    explicacao: "'Chicken sandwich' é sanduíche de frango. Substituir 'sandwich' por 'sanduíche' deixa a comunicação clara em português."
  },
  {
    avatar: "👩‍🎓",
    idioma: "Pedido com Inglês",
    fala: "Oi, estou com pressa! Quero french fries e um refrigerante gelado.",
    opcoesResposta: [
      { texto: "Para já! Uma porção de batata frita e um refrigerante.", correta: true },
      { texto: "Beleza, french fries na chapa!", correta: false },
      { texto: "Vou trazer as fries e o refri.", correta: false }
    ],
    itensCorretos: ["batata", "refrigerante"],
    valorBase: 9,
    explicacao: "'French fries' é o termo em inglês para batata frita. Usar a expressão em português valoriza nossa língua."
  },
  {
    avatar: "👨‍💼",
    idioma: "Pedido em Inglês",
    fala: "Hi! I want a bacon burger with cheese, please.",
    opcoesResposta: [
      { texto: "No problem, senhor!", correta: false },
      { texto: "Pois não! Um hambúrguer com bacon e queijo para o senhor.", correta: true },
      { texto: "Saindo um bacon burger com extra cheese.", correta: false }
    ],
    itensCorretos: ["pao-hamburguer", "bacon", "queijo"],
    valorBase: 10,
    explicacao: "Mesmo quando o cliente fala totalmente em inglês ('I want a bacon burger with cheese'), você respondeu perfeitamente em português."
  },
  {
    avatar: "🧓",
    idioma: "Pedido com Estrangeirismo",
    fala: "Olá, meu jovem! Quero um hambúrguer completo com queijo, bacon e salada.",
    opcoesResposta: [
      { texto: "Perfeito! Um hambúrguer com queijo, bacon e salada saindo.", correta: true },
      { texto: "Show! Um full burger no capricho.", correta: false },
      { texto: "Ok, já vai o combo complete.", correta: false }
    ],
    itensCorretos: ["pao-hamburguer", "queijo", "bacon", "alface-tomate"],
    valorBase: 11,
    explicacao: "Aqui o cliente falou em português e você manteve o padrão culto e educado sem inventar palavras em inglês."
  },
  {
    avatar: "👩‍🔬",
    idioma: "Pedido em Inglês",
    fala: "Hello! Can I have chicken, french fries and a natural juice?",
    opcoesResposta: [
      { texto: "Claro! Frango, batata frita e um suco natural a caminho.", correta: true },
      { texto: "Saindo um chicken com fries e juice!", correta: false },
      { texto: "Ok, vou preparar o pedido fast.", correta: false }
    ],
    itensCorretos: ["frango", "batata", "suco"],
    valorBase: 12,
    explicacao: "'Chicken' (frango), 'french fries' (batata frita) e 'natural juice' (suco natural) foram traduzidos corretamente para o português."
  },
  {
    avatar: "🧑‍🎨",
    idioma: "Pedido Misto",
    fala: "E aí! Quero um milkshake bem gelado e uma porção de batata frita.",
    opcoesResposta: [
      { texto: "Beleza, um shake e fries saindo.", correta: false },
      { texto: "Com prazer! Uma vitamina gelada e uma porção de batata frita.", correta: true },
      { texto: "Tá na mão o seu fast food.", correta: false }
    ],
    itensCorretos: ["milkshake", "batata"],
    valorBase: 13,
    explicacao: "Podemos adaptar 'milkshake' como 'vitamina gelada' ou 'batido de leite' para evitar estrangeirismos no balcão."
  },
  {
    avatar: "👮",
    idioma: "Pedido em Inglês",
    fala: "Good afternoon! I would like a burger with salad, bacon and water.",
    opcoesResposta: [
      { texto: "Boa tarde! Um hambúrguer com salada, bacon e uma água.", correta: true },
      { texto: "Good afternoon! Já vai sair.", correta: false },
      { texto: "Ok, um burger com bacon e water.", correta: false }
    ],
    itensCorretos: ["pao-hamburguer", "alface-tomate", "bacon", "agua"],
    valorBase: 14,
    explicacao: "'Good afternoon' significa 'Boa tarde'. Você cumprimentou e confirmou todo o pedido em português claro."
  },
  {
    avatar: "👩‍🚀",
    idioma: "Pedido Especial Final",
    fala: "Hello! Quero o combo gigante: cheese bacon burger, chicken, french fries e refrigerante!",
    opcoesResposta: [
      { texto: "Super combo! Burger, frango, fries e refri na bandeja!", correta: false },
      { texto: "Excelente escolha! Hambúrguer com queijo e bacon, frango, batata frita e refrigerante!", correta: true },
      { texto: "Yes! O maior combo da loja saindo!", correta: false }
    ],
    itensCorretos: ["pao-hamburguer", "queijo", "bacon", "frango", "batata", "refrigerante"],
    valorBase: 16,
    explicacao: "Parabéns! Você dominou todos os termos em inglês ('cheese', 'bacon', 'chicken', 'french fries') e respondeu em excelente português!"
  }
];

// Variáveis de estado do jogo
let rodadaAtual = 0;
let dinheiroTri = 0;
let acertosTotais = 0;
let multiplicadorGanhos = 1;
let respostaSelecionada = null;
let ingredientesSelecionados = [];
let tempoInicioMs = Date.now();

// Elementos da interface
const telas = {
  inicio: document.getElementById("tela-inicio"),
  jogo: document.getElementById("tela-jogo"),
  feedback: document.getElementById("tela-feedback"),
  fim: document.getElementById("tela-fim")
};

const textoRodada = document.getElementById("texto-rodada");
const textoDinheiro = document.getElementById("texto-dinheiro");
const textoBonus = document.getElementById("texto-bonus");

// Função para avisar o portal da escola sobre a altura da tela
function avisarTamanhoTela() {
  const altura = document.documentElement.scrollHeight;
  window.parent.postMessage({ type: "vrgame:resize", height: altura }, "*");
}

// Função para trocar entre as telas do jogo
function mostrarTela(nomeTela) {
  Object.values(telas).forEach((tela) => tela.classList.remove("ativa"));
  telas[nomeTela].classList.add("ativa");
  avisarTamanhoTela();
}

// Atualiza o placar no topo
function atualizarPlacar() {
  const numeroCliente = Math.min(rodadaAtual + 1, CLIENTES.length);
  textoRodada.textContent = `${numeroCliente} / ${CLIENTES.length}`;
  textoDinheiro.textContent = `R$ ${dinheiroTri} Tri`;
  textoBonus.textContent = `${multiplicadorGanhos}x ${multiplicadorGanhos === 1 ? "Normal" : "Turbo"}`;
}

// Carrega o cliente da rodada atual
function carregarRodada() {
  const cliente = CLIENTES[rodadaAtual];
  respostaSelecionada = null;
  ingredientesSelecionados = [];

  document.getElementById("avatar-cliente").textContent = cliente.avatar;
  document.getElementById("etiqueta-idioma").textContent = cliente.idioma;
  document.getElementById("fala-cliente").textContent = `"${cliente.fala}"`;
  document.getElementById("contador-itens").textContent = "0 selecionados";

  // Cria os botões de resposta em português
  const containerRespostas = document.getElementById("opcoes-resposta");
  containerRespostas.innerHTML = "";
  cliente.opcoesResposta.forEach((opcao, indice) => {
    const botao = document.createElement("button");
    botao.type = "button";
    botao.className = "btn-opcao";
    botao.textContent = opcao.texto;
    botao.addEventListener("click", () => {
      document.querySelectorAll(".btn-opcao").forEach((b) => b.classList.remove("selecionado"));
      botao.classList.add("selecionado");
      respostaSelecionada = indice;
    });
    containerRespostas.appendChild(botao);
  });

  // Cria os botões dos ingredientes
  const containerIngredientes = document.getElementById("opcoes-ingredientes");
  containerIngredientes.innerHTML = "";
  INGREDIENTES_CARDAPIO.forEach((item) => {
    const botao = document.createElement("button");
    botao.type = "button";
    botao.className = "btn-ingrediente";
    botao.textContent = item.nome;
    botao.addEventListener("click", () => {
      const jaExiste = ingredientesSelecionados.indexOf(item.id);
      if (jaExiste >= 0) {
        ingredientesSelecionados.splice(jaExiste, 1);
        botao.classList.remove("selecionado");
      } else {
        ingredientesSelecionados.push(item.id);
        botao.classList.add("selecionado");
      }
      document.getElementById("contador-itens").textContent =
        `${ingredientesSelecionados.length} selecionado(s)`;
    });
    containerIngredientes.appendChild(botao);
  });

  atualizarPlacar();
  mostrarTela("jogo");
}

// Verifica se os ingredientes escolhidos são exatamente os pedidos
function conferirIngredientes(escolhidos, corretos) {
  if (escolhidos.length !== corretos.length) return false;
  const ordenadosEscolhidos = [...escolhidos].sort();
  const ordenadosCorretos = [...corretos].sort();
  return ordenadosEscolhidos.every((valor, idx) => valor === ordenadosCorretos[idx]);
}

// Atualiza os botões da lojinha de melhorias
function atualizarLoja() {
  const btnChapa = document.getElementById("btn-upgrade-chapa");
  const btnBalcao = document.getElementById("btn-upgrade-balcao");

  btnChapa.disabled = dinheiroTri < 15 || multiplicadorGanhos >= 2;
  if (multiplicadorGanhos >= 2) {
    btnChapa.querySelector("strong").textContent = "✅ Chapa Turbo (Comprada)";
  } else {
    btnChapa.querySelector("strong").textContent = "🔥 Chapa Turbo (R$ 15 Tri)";
  }

  btnBalcao.disabled = dinheiroTri < 30 || multiplicadorGanhos >= 3;
  if (multiplicadorGanhos >= 3) {
    btnBalcao.querySelector("strong").textContent = "✅ Balcão VIP (Comprado)";
  } else {
    btnBalcao.querySelector("strong").textContent = "⭐ Balcão VIP (R$ 30 Tri)";
  }
}

// Confere o pedido quando o jogador clica em Entregar
function entregarPedido() {
  if (respostaSelecionada === null) {
    alert("Escolha primeiro como você vai responder ao cliente em português!");
    return;
  }
  if (ingredientesSelecionados.length === 0) {
    alert("Selecione pelo menos um item para colocar na bandeja!");
    return;
  }

  const cliente = CLIENTES[rodadaAtual];
  const acertouResposta = cliente.opcoesResposta[respostaSelecionada].correta;
  const acertouLanche = conferirIngredientes(ingredientesSelecionados, cliente.itensCorretos);

  const caixaResultado = document.getElementById("caixa-resultado");
  const tituloResultado = document.getElementById("titulo-resultado");
  const explicacaoResultado = document.getElementById("explicacao-resultado");
  const ganhoRodada = document.getElementById("ganho-rodada");

  if (acertouResposta && acertouLanche) {
    const ganho = cliente.valorBase * multiplicadorGanhos;
    dinheiroTri += ganho;
    acertosTotais += 1;

    caixaResultado.className = "resultado-box acerto";
    tituloResultado.textContent = "✅ Atendimento Perfeito!";
    explicacaoResultado.textContent = cliente.explicacao;
    ganhoRodada.textContent = `Você ganhou + R$ ${ganho} Trilhões!`;
  } else {
    caixaResultado.className = "resultado-box erro";
    tituloResultado.textContent = "❌ O cliente reclamou do pedido!";

    if (!acertouResposta && !acertouLanche) {
      explicacaoResultado.textContent = `Você misturou inglês na resposta e errou os itens do lanche. Dica: ${cliente.explicacao}`;
    } else if (!acertouResposta) {
      explicacaoResultado.textContent = `Os itens estavam certos, mas a resposta não seguiu o bom português. Dica: ${cliente.explicacao}`;
    } else {
      const nomesCorretos = cliente.itensCorretos
        .map((id) => INGREDIENTES_CARDAPIO.find((i) => i.id === id).nome)
        .join(", ");
      explicacaoResultado.textContent = `Sua resposta em português foi ótima, mas faltou ou sobrou algo na bandeja! O certo era: ${nomesCorretos}.`;
    }
    ganhoRodada.textContent = "Você ganhou R$ 0 Trilhões nesta rodada.";
  }

  atualizarPlacar();

  // Mostra a lojinha apenas se ainda houver próximos clientes
  const areaLoja = document.getElementById("area-loja");
  const btnProximo = document.getElementById("btn-proximo");

  if (rodadaAtual < CLIENTES.length - 1) {
    areaLoja.style.display = "flex";
    atualizarLoja();
    btnProximo.textContent = "Próximo Cliente ➡️";
  } else {
    areaLoja.style.display = "none";
    btnProximo.textContent = "Ver Resultado Final 🏆";
  }

  mostrarTela("feedback");
}

// Finaliza o jogo e envia a pontuação para o portal
function finalizarJogo() {
  const tituloFinal = document.getElementById("titulo-final");
  const mensagemFinal = document.getElementById("mensagem-final");
  const atingiuMeta = dinheiroTri >= 100;

  if (atingiuMeta) {
    tituloFinal.textContent = "🏆 Meta Batida! Lanchonete Bilionária!";
    mensagemFinal.textContent =
      "Incrível! Você atendeu os clientes usando o português corretamente e ultrapassou os R$ 100 Trilhões!";
  } else {
    tituloFinal.textContent = "🍔 Fim do Expediente!";
    mensagemFinal.textContent =
      "Bom trabalho! Tente usar as melhorias da lojinha e acertar mais pedidos para alcançar os R$ 100 Trilhões.";
  }

  document.getElementById("final-dinheiro").textContent = `R$ ${dinheiroTri} Trilhões`;
  document.getElementById("final-acertos").textContent = `${acertosTotais} de ${CLIENTES.length}`;

  mostrarTela("fim");

  // Envia o resultado final para o portal da escola
  const tempoTotalMs = Date.now() - tempoInicioMs;
  window.parent.postMessage(
    {
      type: "vrgame:finish",
      score: Math.min(dinheiroTri, 100),
      maxScore: 100,
      timeMs: tempoTotalMs,
      detail: { jogo: "lanche-e-lingua", dinheiroTrilhoes: dinheiroTri, acertos: acertosTotais }
    },
    "*"
  );
}

// Eventos dos botões
document.getElementById("btn-comecar").addEventListener("click", () => {
  rodadaAtual = 0;
  dinheiroTri = 0;
  acertosTotais = 0;
  multiplicadorGanhos = 1;
  tempoInicioMs = Date.now();
  carregarRodada();
});

document.getElementById("btn-limpar").addEventListener("click", () => {
  ingredientesSelecionados = [];
  document.querySelectorAll(".btn-ingrediente").forEach((b) => b.classList.remove("selecionado"));
  document.getElementById("contador-itens").textContent = "0 selecionados";
});

document.getElementById("btn-entregar").addEventListener("click", entregarPedido);

document.getElementById("btn-upgrade-chapa").addEventListener("click", () => {
  if (dinheiroTri >= 15 && multiplicadorGanhos < 2) {
    dinheiroTri -= 15;
    multiplicadorGanhos = 2;
    atualizarPlacar();
    atualizarLoja();
  }
});

document.getElementById("btn-upgrade-balcao").addEventListener("click", () => {
  if (dinheiroTri >= 30 && multiplicadorGanhos < 3) {
    dinheiroTri -= 30;
    multiplicadorGanhos = 3;
    atualizarPlacar();
    atualizarLoja();
  }
});

document.getElementById("btn-proximo").addEventListener("click", () => {
  if (rodadaAtual < CLIENTES.length - 1) {
    rodadaAtual += 1;
    carregarRodada();
  } else {
    finalizarJogo();
  }
});

document.getElementById("btn-reiniciar").addEventListener("click", () => {
  mostrarTela("inicio");
});

// Alternar tema claro/escuro manualmente
document.getElementById("btn-tema").addEventListener("click", () => {
  const atual = document.documentElement.getAttribute("data-theme");
  const novoTema = atual === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", novoTema);
  avisarTamanhoTela();
});

// Alternar tela cheia
document.getElementById("btn-tela-cheia").addEventListener("click", () => {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen().catch(() => {});
  } else {
    document.exitFullscreen().catch(() => {});
  }
});

// Contrato de comunicação com o portal
window.addEventListener("message", (evento) => {
  const dados = evento.data;
  if (!dados || typeof dados !== "object") return;

  if (dados.type === "vrgame:theme" && (dados.theme === "dark" || dados.theme === "light")) {
    document.documentElement.setAttribute("data-theme", dados.theme);
    avisarTamanhoTela();
  }

  if (dados.type === "vrgame:fullscreen") {
    if (dados.fullscreen && !document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else if (!dados.fullscreen && document.fullscreenElement) {
      document.exitFullscreen().catch(() => {});
    }
  }
});

window.addEventListener("resize", avisarTamanhoTela);

// Avisa o portal que o jogo carregou
window.addEventListener("load", () => {
  window.parent.postMessage({ type: "vrgame:ready" }, "*");
  avisarTamanhoTela();
});