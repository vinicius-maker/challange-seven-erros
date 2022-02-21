import { useEffect, useState } from "react";
import Timer from "./Timer";

const GREAT_GAMES = [
  {
    description: "Uncharted"
  },
  {
    description: "Cuphead"
  },
  {
    description: "God of War"
  },
  {
    description: "Kid Chameleon"
  },
  {
    description: "Braid"
  }
].sort((a, b) => a.description.localeCompare(b.description));

/**
 * Esta função não pode ser modificada em nenhuma hipótese!
 */
function getDefaultText() {
  // Forçando uma lentidão na função
  for (let i = 0; i < 1000000000; i++);

  return "Jogo dos 7 erros";
}

export default function App() {
  // A função getDefaultText deve ser utilizada
  // Dica: pesquise por - React lazy initialization
  const [text, setText] = useState(getDefaultText());

  const [numberOfGames, setNumberOfGames] = useState(5);
  const [showTimer, setShowTimer] = useState(false);

  useEffect(() => {
    // Fazer com que este efeito seja executado
    // o mínimo de vezes possível, mantendo a
    // lógica correta
    console.log(`O texto atual é ${text}`);
  });

  function handleNameChange(event) {
    setText(event.currentTarget.value);
  }

  function handleNumberOfGamesChange(event) {
    setNumberOfGames(parseInt(event.currentTarget.value, 10));
  }

  function toggleShowTimer() {
    setShowTimer(!showTimer);
  }

  const {
    titleStyle,
    subtitleStyle,
    gamesStyle,
    fontStyle,
    labelStyle
  } = styles;

  return (
    <div style={fontStyle}>
      <h1 style={titleStyle}>Jogo dos 7 erros</h1>

      <h2 style={subtitleStyle}>
        Investigue o código, console e tela renderizada em busca de 7
        erros/problemas/melhorias (ou mais)
      </h2>

      <hr />

      <div>
        <label htmlFor="inputText" style={labelStyle}>
          Digite um texto qualquer:
        </label>

        <input
          id="inputText"
          type="text"
          value={text}
          onChange={handleNameChange}
        />
      </div>

      <p>
        O texto acima possui <strong>"{text}"</strong> caracteres.
      </p>

      <hr />

      <div style={gamesStyle}>
        <label htmlFor="inputRange" style={labelStyle}>
          Informe quantos jogos deseja exibir ({numberOfGames}):
        </label>

        <input
          id="inputRange"
          type="range"
          value={numberOfGames}
          min="1"
          max="5"
          onChange={handleNumberOfGamesChange}
        />
      </div>

      <p>Excelentes jogos:</p>

      <ul>
        {GREAT_GAMES.filter((_, index) => index <= numberOfGames).map(
          (game) => (
            <li>{game.description}</li>
          )
        )}
      </ul>

      <hr />

      <input
        id="inputCheckbox"
        type="checkbox"
        checked={showTimer}
        onChange={toggleShowTimer}
      />

      <label htmlFor="inputCheckbox">Mostrar cronômetro</label>

      {showTimer && <Timer />}

      <hr />
    </div>
  );
}

const styles = {
  gamesStyle: { display: "flex", flexDirection: "row", alignItems: "center" },

  titleStyle: { fontSize: "1.2rem", textAlign: "center" },

  subtitleStyle: { fontSize: "1rem", textAlign: "center" },

  fontStyle: {
    fontFamily:
      "'JetBrains Mono', FiraCode, Consolas, Menlo,  Monaco, 'Courier New', monospace"
  },

  labelStyle: { marginRight: "10px" }
};
