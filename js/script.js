var state = { currentGame: [], savedGames: [], board: [] };

function start() {
  createBoard();
  newGame();
}

function createBoard() {
  state.board = [];

  for (var i = 1; i <= 60; i++) {
    state.board.push(i);
  }
}

function newGame() {
  state.currentGame = [];
  render();
  console.log(state.currentGame);
}

function render() {
  renderBoard();
  renderButtons();
  renderSavedGames();
}

function renderBoard() {
  var divGame = document.querySelector("#megasena-numbers");
  divGame.innerHTML = "";

  var ulGames = document.createElement("ul");
  ulGames.classList.add("numbers");

  for (var i = 0; i < state.board.length; i++) {
    var currentNumber = state.board[i];

    var liGame = document.createElement("li");
    liGame.textContent = currentNumber.toString().padStart(2, "0");
    liGame.classList.add("number");

    liGame.addEventListener("click", handleNumberClick);

    if (state.currentGame.includes(currentNumber)) {
      liGame.classList.add("selected-number");
    }

    ulGames.appendChild(liGame);
  }

  divGame.appendChild(ulGames);
}

function handleNumberClick(event) {
  var element = event.currentTarget;
  var clickedNumber = Number(element.textContent);

  var numberInGame = state.currentGame.includes(clickedNumber);
  var totalNumbers = state.currentGame.length;

  if (numberInGame) {
    removeNumberFromGame(clickedNumber);
  } else {
    if (totalNumbers === 6) {
      return;
    } else {
      addNumberToGame(clickedNumber);
    }
  }

  render();
}

function removeNumberFromGame(numberToRemove) {
  var newGame = [];

  for (var i = 0; i < state.currentGame.length; i++) {
    var currentNumber = state.currentGame[i];

    if (currentNumber === numberToRemove) {
      continue;
    }

    newGame.push(currentNumber);
  }

  state.currentGame = newGame;
}

function addNumberToGame(numberToAdd) {
  state.currentGame.push(numberToAdd);
}

function renderButtons() {
  var divButtons = document.querySelector("#megasena-buttons");
  divButtons.innerHTML = "";

  var ulButtons = document.createElement("ul");
  ulButtons.classList.add("buttons");

  var liNewGameButton = renderNewGameButton();
  var liRandomGameButton = renderRandomGameButton();
  var liSaveGameButton = renderSaveGameButton();

  ulButtons.appendChild(liNewGameButton);
  ulButtons.appendChild(liRandomGameButton);
  ulButtons.appendChild(liSaveGameButton);

  divButtons.appendChild(ulButtons);
}

function renderNewGameButton() {
  var li = document.createElement("li");
  li.classList.add("button");

  var button = document.createElement("button");

  button.textContent = "Novo jogo";
  button.addEventListener("click", newGame);

  li.appendChild(button);

  return li;
}

function renderRandomGameButton() {
  var li = document.createElement("li");
  li.classList.add("button");

  var button = document.createElement("button");

  button.textContent = "Jogo aleatório";
  button.addEventListener("click", function () {
    randomGame();
  });

  li.appendChild(button);

  return li;
}

function isGameComplete() {
  return state.currentGame.length === 6;
}

function renderSaveGameButton() {
  var li = document.createElement("li");
  li.classList.add("button");

  var button = document.createElement("button");

  button.textContent = "Salvar jogo";
  button.disabled = !isGameComplete();

  button.addEventListener("click", saveGame);

  li.appendChild(button);

  return li;
}

function saveGame() {
  if (!isGameComplete()) {
    console.error("O jogo não está completo!");
    return;
  }

  state.savedGames.push(state.currentGame); // se esta completo salva o jogo
  newGame();

  console.log(state.savedGames);
}

function renderSavedGames() {
  var divSavedGames = document.querySelector("#megasena-saved-games");
  divSavedGames.innerHTML = "";

  if (state.savedGames.length === 0) {
    divSavedGames.innerHTML = "<p>Nenhum jogo gravado até o momento.</p>";
  } else {
    var h2 = document.createElement("h2");
    h2.textContent = "Jogos salvos:";

    var ul = document.createElement("ul");
    ul.classList.add("saved-games");

    for (var i = 0; i < state.savedGames.length; i++) {
      var currentGame = state.savedGames[i];

      var li = document.createElement("li");
      var numbers = currentGame.sort((a, b) => a - b);

      li.textContent = numbers.join(" ");

      ul.appendChild(li);
    }

    divSavedGames.appendChild(h2);
    divSavedGames.appendChild(ul);
  }
}

function randomGame() {
  state.currentGame = [];

  while (!isGameComplete()) {
    var newNumber = Math.ceil(Math.random() * 60);
    newNumber = Math.max(newNumber, 1);

    if (!state.currentGame.includes(newNumber)) {
      state.currentGame.push(newNumber);
    }
  }

  state.currentGame.sort();

  render();
}

start();
