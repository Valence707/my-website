// COMPILE TO 'game-production.js' BEFORE PRODUCTION.

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            board: [

                /**
                 * s = Snake segment.
                 * a = Apple.
                 * '' = Empty board segment.
                 */
                ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
                ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
                ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
                ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
                ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
                ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
                ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
                ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
                ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
                ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
                ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
                ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
                ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
                ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
                ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
                ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
                ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
                ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
                ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
                ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
                ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
                ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
                ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
                ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
                ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
            ],

            snakeHead: [2, 2],
            snakeBody: [
                [2, 2],
                [2, 2],
                [2, 2]
            ],
            snakeVelocity: [0, 1],
            applePos: [0, 0],
            snakeLength: 3,
            score: 0,
            gameRunner: null,
            refreshRate: 60,
            gameOver: false,
            timer: null,
            time: 0,
            results: []
        }
        this.updateGame = this.updateGame.bind(this);
        this.toggleGame = this.toggleGame.bind(this);
        this.handleKeyInput = this.handleKeyInput.bind(this);
        this.gameOver = this.gameOver.bind(this);
    }

    componentDidMount() {
        document.addEventListener("keydown", this.handleKeyInput);
    }

    toggleGame() {
        // Start the game.
        if (!this.state.gameRunner) {
            this.setState({
                board: [

                    /**
                     * s = Snake segment.
                     * a = Apple.
                     * '' = Empty board segment.
                     */
                    ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
                    ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
                    ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
                    ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
                    ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
                    ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
                    ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
                    ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
                    ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
                    ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
                    ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
                    ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
                    ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
                    ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
                    ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
                    ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
                    ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
                    ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
                    ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
                    ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
                    ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
                    ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
                    ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
                    ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
                    ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
                ],
                gameRunner: setInterval(() => {
                    this.updateGame();
                }, this.state.refreshRate),
                gameOver: false,
                applePos: (() => {
                    let applePos = [0, 0];
                    let board = this.state.board;
                    do {
                        applePos = [Math.floor(Math.random()*board.length), Math.floor(Math.random()*board[0].length)]
                    } while (board[applePos[0]][applePos[1]] != '');
                    return applePos;
                })(),
                time: 0,
                score: 0,
                timer: setInterval(() => {
                    this.setState({
                        time: this.state.time+1
                    });
                }, 1000),
                snakeHead: [2, 2],
                snakeVelocity: [0, 1],
                snakeLength: 3,
                snakeBody: [
                    [2, 2],
                    [2, 2],
                    [2, 2]
                ]
            })

        // End the game
        } else {
            this.setState({
                gameRunner: (() => {
                    clearInterval(this.state.gameRunner);
                    return null;
                })(),
                gameOver: true,
                snakeVelocity: [0, 1],
                timer: (() => {clearInterval(this.state.timer); return null})(),
                results: (() => {
                    let newResults = this.state.results;
                    newResults.push({
                        "score": this.state.score,
                        "time": this.state.time
                    });
                    return newResults;
                })()
            });
        }
    }

    handleKeyInput(e) {
        let sVel = this.state.snakeVelocity;
        let sHead = this.state.snakeHead;

        if (e.key == 'w' && sVel[0] != -1 && this.state.board[sHead[0]-1][sHead[1]] != 's' && this.state.gameRunner) {
            sVel = [-1, 0];
        } else if (e.key == 's' && sVel[0] != 1 && this.state.board[sHead[0]+1][sHead[1]] != 's' && this.state.gameRunner) {
            sVel = [1, 0];
        } else if (e.key == 'a' && sVel[1] != -1 && this.state.board[sHead[0]][sHead[1]-1] != 's' && this.state.gameRunner) {
            sVel = [0, -1];
        } else if (e.key == 'd' && sVel[1] != 1 && this.state.board[sHead[0]][sHead[1]+1] != 's' && this.state.gameRunner) {
            sVel = [0, 1];
        } else if (e.key == ' ' && !this.state.gameRunner) {
            this.toggleGame();
        }

        this.setState({
            snakeVelocity: sVel
        });
    }

    updateGame() {
        let sVel = [...this.state.snakeVelocity];
        let sHead = [...this.state.snakeHead];
        let sBody = [...this.state.snakeBody];
        let board = [...this.state.board];
        let applePos = [...this.state.applePos];

        // Update snake head
        sHead[0] += sVel[0];
        sHead[1] += sVel[1];

        // Check if snake is touching border or itself.
        if (sHead[0] < 0 || sHead[0] >= board.length || sHead[1] < 0 || sHead[1] >= board[0].length || sBody.filter(item => {return item[0] === sHead[0] && item[1] === sHead[1]}).length) {
            this.gameOver();
            return;
        }

        // Update score if snake has collected an apple and generate a new apple.
        if (sHead[0] == applePos[0] && sHead[1] == applePos[1]) {
            this.setState({
                score: this.state.score+1,
                snakeLength: this.state.snakeLength+1
            });

            new Audio('/public/sounds/POP.mp3').play();
            do {
                applePos = [Math.floor(Math.random()*board.length), Math.floor(Math.random()*board[0].length)]
            } while (board[applePos[0]][applePos[1]] != '');
            this.setState({
                applePos: applePos
            })
        }

        // Update snake body
        sBody.unshift(sHead);

        if (sBody.length-1 >= this.state.snakeLength) {
            sBody.pop();
        }

        // Update entire board
        board.map((row, rowNum) => {
            row.map((spot, colNum) => {
                if (board[rowNum][colNum] != 'a') {
                    board[rowNum][colNum] = '';
                }
            })
        });

        sBody.map((spot) => {
            board[spot[0]][spot[1]] = 's';
        });

        board[sHead[0]][sHead[1]] = 's';
        board[applePos[0]][applePos[1]] = 'a';
        

        this.setState({
            board: board,
            snakeHead: sHead,
            snakeBody: sBody
        })
    }

    gameOver() {
        this.toggleGame();
        this.setState({
            gameOver: true
        })
    }

    render() {
        return (
            <div className="app">
                <h1>Snake</h1>
                <div className="status-display">
                    <h3>Score: {this.state.score}</h3>
                    <h3>Time: {this.state.time}</h3>
                </div>
                
                <Board board={this.state.board} gameOver={this.state.gameOver} score={this.state.score} time={this.state.time} gameRun={this.state.gameRunner} results={this.state.results[this.state.results.length-1]} />
            </div>
        );
    }
}

function Board(props) {
    return (
        <svg>
            {!props.gameRun && <text className="game-over-text" style={{"fontSize": 20}} x="175" y="280">Press 'space' to start the game.</text>}
            {props.board.map((row, rowCount) => {
                return row.map((item, colCount) => {
                    if (item != '') {
                        return <Square pos={[rowCount, colCount]} type={item == 's' ? "green" : item == 'a' ? 'red' : 'black'} key={(rowCount*row.length)+colCount} />;
                    }
                });
            })}
            {props.gameOver && <text x="175" y="150" className="game-over-text">Game Over!
                <tspan x="175" y="200">Score: {props.results.score}</tspan>
                <tspan x="175" y="230">Time elapsed: {props.results.time}</tspan>
            </text>}
        </svg>
    )
}

function Square(props) {
    return (
        <rect x={props.pos[1]*25} y={props.pos[0]*25} width="25" height="25" style={{fill: `${props.type}`, strokeWidth: "0", stroke: "black"}}></rect>
    )
}

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<App />);