import { h, Component } from 'preact';
import style from './style';
import Tile from '../tile';
import WordBox from '../wordBox'
//import letters from './letters.json';

class Board extends Component {
    state={
        letters : this.props.letters,
        pointTotal : 0,
        wordString : ""
    };

    recordLetter = letter => {
        //console.log(letter.points);
        const pointTotal = this.state.pointTotal + letter.points;
        const wordString = this.state.wordString + letter.value;
        this.setState({pointTotal : pointTotal});
        this.setState({wordString : wordString});
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
                        <Tile 
                            key={index}
                            id={index}
                            value={letter.value}
                            points={letter.points}
                            letterClicked={this.letterClicked}
                            color={'aqua'}
                            recordLetter={this.recordLetter}
                        ></Tile>
                    ))}
                </div>
                <div class={style.wordBox}
                    style={{
                        paddingLeft: '20px',
                        marginLeft: '20px',
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