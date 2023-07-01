"use strict";

class GameContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameButtons: ['', '', '', '', '', '', '', '', ''],
      player: "x",
      run: "begin",
      winner: ""
    };
    this.setButton = this.setButton.bind(this);
    this.resetGame = this.resetGame.bind(this);
  }

  setButton(event) {
    const newButtons = this.state.gameButtons;

    if (newButtons[event.target.id] || this.state.winner) {
      return;
    }

    newButtons[event.target.id] = this.state.player;
    this.setState({
      player: this.state.player == "x" ? "o" : "x",
      gameButtons: newButtons
    }); // Check for winner.

    let winResult = (() => {
      for (let i = 0; i < 3; i++) {
        if (this.state.gameButtons[0 + 3 * i] && this.state.gameButtons[0 + 3 * i] == this.state.gameButtons[1 + 3 * i] && this.state.gameButtons[1 + 3 * i] == this.state.gameButtons[2 + 3 * i]) {
          return this.state.gameButtons[0 + 3 * i];
        } else if (this.state.gameButtons[i] && this.state.gameButtons[i] == this.state.gameButtons[i + 3] && this.state.gameButtons[i + 3] == this.state.gameButtons[i + 6]) {
          return this.state.gameButtons[i];
        } else if (i < 2 && this.state.gameButtons[0] && this.state.gameButtons[0] == this.state.gameButtons[4] && this.state.gameButtons[4] == this.state.gameButtons[8] || this.state.gameButtons[2] == this.state.gameButtons[4] && this.state.gameButtons[4] == this.state.gameButtons[6]) {
          return this.state.gameButtons[4];
        }
      }

      return false;
    })();

    if (winResult) {
      this.setState({
        winner: winResult
      });
    }
  }

  resetGame() {
    this.setState({
      gameButtons: ['', '', '', '', '', '', '', '', ''],
      player: "x",
      winner: ""
    });
  }

  render() {
    const buttonsToRender = this.state.gameButtons.map((button, index) => {
      return /*#__PURE__*/React.createElement("button", {
        onClick: this.setButton,
        key: index,
        id: index
      }, button);
    });
    return /*#__PURE__*/React.createElement("div", {
      id: "primary-container"
    }, /*#__PURE__*/React.createElement("div", {
      id: "secondary-container"
    }, /*#__PURE__*/React.createElement("div", {
      id: "game-grid"
    }, buttonsToRender), this.state.winner && /*#__PURE__*/React.createElement("h1", {
      style: {
        textAlign: "center"
      }
    }, "Player '" + this.state.winner.toUpperCase() + "' wins!"), this.state.winner && /*#__PURE__*/React.createElement("button", {
      className: "play-again-button",
      onClick: this.resetGame
    }, "PLAY AGAIN")));
  }

}

const gameRoot = ReactDOM.createRoot(document.querySelector("#game"));
gameRoot.render( /*#__PURE__*/React.createElement(GameContainer, null));