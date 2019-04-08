import { Component } from 'preact';
import style from './style';
import Tile from '../tile';
import WordBox from '../wordBox'

class Board extends Component {
    state={
        letters : this.props.letters,
        pointTotal : 0,
        wordString : "",
        nextArray : [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 
        activeArr : [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]
    };

    recordLetter = (letter, arr) => {
        if (this.state.activeArr[letter.id]===false && this.state.nextArray.includes(letter.id)) {
            const activeArr = this.state.activeArr;
            activeArr[letter.id] = true;
            const pointTotal = this.state.pointTotal + letter.points;
            const wordString = this.state.wordString + letter.value;
            const nextArray = [];
            arr.forEach(element => {
                if (this.state.activeArr[element] === false) {
                    nextArray.push(element);
                }
            });
            this.setState({pointTotal : pointTotal});
            this.setState({wordString : wordString});
            this.setState({nextArray : nextArray});
            this.setState({activeArr : activeArr});
        }
    }

    reset = () => {
        this.setState({ pointTotal : 0 });
        this.setState({ wordString : "" });
        this.setState({ nextArray : [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15] });
        this.setState({ activeArr : [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false] });
    }

    render() {
        return (
            <div class={style.board} >
                <div class={style.boggleSquare}
                    style={{
                        padding: 5,
                        margin: 5,
                        maxWidth: '50%',
                        height: '100%'
                    }}
                >   
                    {this.props.letters.map((letter, index) => (
                        <div class={style.boggleTile} >                   
                            {this.state.nextArray.includes(index) &&
                                <Tile 
                                    key={index}
                                    id={index}
                                    value={letter.value}
                                    points={letter.points}
                                    letterClicked={this.letterClicked}
                                    color={'aqua'}
                                    recordLetter={this.recordLetter}
                                    active={this.state.activeArr[index]}
                                />
                            }
                            {!this.state.nextArray.includes(index) &&
                                <Tile 
                                    key={index}
                                    id={index}
                                    value={letter.value}
                                    points={letter.points}
                                    letterClicked={this.letterClicked}
                                    color={'pink'}
                                    recordLetter={this.recordLetter}
                                    active={this.state.activeArr[index]}
                                />
                            }
                        </div>
                    ))}
                </div>
                <div class={style.wordBox}
                    style={{
                        height: '100%'
                    }}
                >
                    <WordBox
                        points={this.state.pointTotal}
                        word={this.state.wordString}
                    />
                    <button  onClick={(event) => { this.reset()}}>Reset</button>
                    <button  onClick={(event) => { this.props.submit(this.state.wordString)}}>Submit</button>
                </div>
            </div>
        );
    }
}

export default Board;