function createGame(group, player1, player1name, hour, player2, player2name) {
  return `
    <li>
      <h3>Grupo ${group}</h3>
      <div class="games-details">
        <div class="countries">
          <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}">
          <p class="country">${player1name}</p>
        </div>
        <strong>${hour}</strong>
        <div class="countries">
          <img src="./assets/icon-${player2}.svg" alt="Bandeira da ${player2}">
          <p class="country">${player2name}</p>
        </div>
      </div>
    </li>
  `
}

let delay = -0.4 /* variável para criação da animação */

function createCard(date, day, games) {
  delay = delay + 0.4
  return ` 
    <div class="card" style="animation-delay: ${delay}s">
      <h2>${date} <span>${day}</span></h2>
      <ul>
        ${games}
      </ul>
    </div>
    
  
  `
}

document.querySelector(".cards").innerHTML =
  createCard(
    "20/11",
    "domingo",
    createGame("A", "catar", "Catar", "13:00", "equador", "Equador")
  ) +
  createCard(
    "21/11",
    "segunda",
    createGame("B", "inglaterra", "Inglaterra", "10:00", "ira", "Irã") +
      createGame(
        "A",
        "senegal",
        "Senegal<br><br>",
        "13:00",
        "paises-baixos",
        "Países Baixos"
      ) +
      createGame(
        "B",
        "usa",
        "USA<br><br>",
        "16:00",
        "pais-gales",
        "País de Gales"
      )
  ) +
  createCard(
    "22/11",
    "terça",
    createGame(
      "C",
      "argentina",
      "Argentina<br><br>",
      "07:00",
      "arabia-saudita",
      "Arábia Saudita"
    ) +
      createGame("D", "dinamarca", "Dinamarca", "10:00", "tunisia", "Tunísia") +
      createGame("C", "mexico", "México", "13:00", "polonia", "Polônia") +
      createGame("D", "franca", "França", "16:00", "australia", "Austrália")
  ) +
  createCard(
    "23/11",
    "quarta",
    createGame("F", "marrocos", "Marrocos", "07:00", "croacia", "Croácia") +
      createGame("E", "alemanha", "Alemanha", "10:00", "japao", "Japão") +
      createGame(
        "E",
        "espanha",
        "Espanha",
        "13:00",
        "costa-rica",
        "Costa Rica"
      ) +
      createGame("F", "belgica", "Bélgica", "16:00", "canada", "Canadá")
  ) +
  createCard(
    "24/11",
    "quinta",
    createGame("G", "suica", "Suíça", "07:00", "camaroes", "Camarões") +
      createGame(
        "H",
        "uruguai",
        "Uruguai<br><br>",
        "10:00",
        "coreia-sul",
        "Coréia do Sul"
      ) +
      createGame("H", "portugal", "Portugal", "13:00", "gana", "Gana") +
      createGame("G", "brasil", "Brasil", "16:00", "servia", "Sérvia")
  ) +
  createCard(
    "25/11",
    "sexta",
    createGame(
      "B",
      "pais-gales",
      "País de Gales",
      "07:00",
      "ira",
      "Irã<br><br>"
    ) +
      createGame("A", "catar", "Catar", "10:00", "senegal", "Senegal") +
      createGame(
        "A",
        "paises-baixos",
        "Países Baixos",
        "13:00",
        "equador",
        "Equador<br><br>"
      ) +
      createGame("B", "inglaterra", "Inglaterra", "16:00", "usa", "USA")
  ) +
  createCard(
    "26/11",
    "sábado",
    createGame("D", "tunisia", "Tunísia", "07:00", "australia", "Austrália") +
      createGame(
        "C",
        "polonia",
        "Polônia<br><br>",
        "10:00",
        "arabia-saudita",
        "Arábia Saudita"
      ) +
      createGame("D", "franca", "França", "13:00", "dinamarca", "Dinamarca") +
      createGame("C", "argentina", "Argentina", "16:00", "mexico", "México")
  ) +
  createCard(
    "27/11",
    "domingo",
    createGame("E", "japao", "Japão", "07:00", "costa-rica", "Costa Rica") +
      createGame("F", "belgica", "Bélgica", "10:00", "marrocos", "Marrocos") +
      createGame("F", "croacia", "Croácia", "13:00", "canada", "Canadá") +
      createGame("E", "espanha", "Espanha", "16:00", "alemanha", "Alemanha")
  ) +
  createCard(
    "28/11",
    "segunda",
    createGame("G", "camaroes", "Camarões", "07:00", "servia", "Sérvia") +
      createGame(
        "H",
        "coreia-sul",
        "Coréia do Sul",
        "10:00",
        "gana",
        "Gana<br><br>"
      ) +
      createGame("G", "brasil", "Brasil", "13:00", "suica", "Suíça") +
      createGame("H", "portugal", "Portugal", "16:00", "uruguai", "Uruguai")
  ) +
  createCard(
    "29/11",
    "terça",
    createGame("A", "equador", "Equador", "12:00", "senegal", "Senegal") +
      createGame(
        "A",
        "paises-baixos",
        "Países Baixos",
        "12:00",
        "catar",
        "Catar<br><br>"
      ) +
      createGame("B", "ira", "Irã", "16:00", "usa", "USA") +
      createGame(
        "B",
        "pais-gales",
        "País de Gales",
        "16:00",
        "inglaterra",
        "Inglaterra<br><br>"
      )
  ) +
  createCard(
    "30/11",
    "quarta",
    createGame("D", "tunisia", "Tunísia", "12:00", "franca", "França") +
      createGame(
        "D",
        "australia",
        "Austrália",
        "12:00",
        "dinamarca",
        "Dinamarca"
      ) +
      createGame("C", "polonia", "Polônia", "16:00", "argentina", "Argentina") +
      createGame(
        "C",
        "arabia-saudita",
        "Arábia Saudita",
        "16:00",
        "mexico",
        "México<br><br>"
      )
  ) +
  createCard(
    "01/12",
    "quinta",
    createGame("F", "croacia", "Croácia", "12:00", "belgica", "Bélgica") +
      createGame("F", "canada", "Canadá", "12:00", "marrocos", "Marrocos") +
      createGame("E", "japao", "Japão", "16:00", "espanha", "Espanha") +
      createGame(
        "E",
        "costa-rica",
        "Costa Rica",
        "16:00",
        "alemanha",
        "Alemanha"
      )
  ) +
  createCard(
    "02/12",
    "sexta",
    createGame(
      "H",
      "coreia-sul",
      "Coréia do Sul",
      "12:00",
      "portugal",
      "Portugal"
    ) +
      createGame("H", "gana", "Gana", "12:00", "uruguai", "Uruguai") +
      createGame("G", "servia", "Sérvia", "16:00", "suica", "Suíça") +
      createGame("G", "camaroes", "Camarões", "16:00", "brasil", "Brasil")
  )
