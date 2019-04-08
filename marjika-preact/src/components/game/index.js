import { Component } from 'preact';
import style from './style';
import Board from '../board';
import letters from './letters.json';

//var chosenLetters = letters;

class Game extends Component {
    state={
        letters : letters,
        randomIds : [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]
    };
        
    componentDidMount() {

        this.chooseLetters();

    }


    submit = (word) => {
        console.log(word);
    }

    chooseLetters = () => {
        const randomLetters = this.shuffle(this.state.randomIds);
        const letters= [];
        for (var i=0; i<16; i++) {
            letters.push(this.state.letters[randomLetters[i]]);
        }
        //const letters = this.state.letters.filter(letter => letter.points<4);

        this.setState({letters: letters});
    }
    
    shuffle = (indexes) => {
        var i = indexes.length,
            j = 0,
            temp;

        while (i--) {
            j = Math.floor(Math.random() * (i+1));

            temp = indexes[i];
            indexes[i] = indexes[j];
            indexes[j] = temp;
        }
        return indexes;
    }



    render() {
        return (
            <div class={style.game}
                // style={{
                //     padding: 5,
                //     margin: 5,
                //     maxWidth: '50%',
                //     height: '100%'
                // }}
            >
                    <Board 
                        letters={this.state.letters}
                        submit={this.submit}
                    ></Board>
            </div>
        );
    }
}

export default Game;
  