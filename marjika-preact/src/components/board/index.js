import { Component } from 'preact';
import style from './style';
import Tile from '../tile';
import WordBox from '../wordBox'
//import letters from './letters.json';

class Board extends Component {
    state={
        letters : this.props.letters,
        pointTotal : 0,
        wordString : "",
        nextArray : []
    };

    recordLetter = (letter, arr) => {
        console.log(arr);
        const pointTotal = this.state.pointTotal + letter.points;
        const wordString = this.state.wordString + letter.value;
        const nextArray = arr;
        this.setState({pointTotal : pointTotal});
        this.setState({wordString : wordString});
        this.setState({nextArray : nextArray});
        //console.log(pointTotal);
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
                </div>
            </div>
        );
    }
}

export default Board;