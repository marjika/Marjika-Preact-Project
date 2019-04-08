import { Component } from 'preact';
import style from './style';
import Board from '../board';
import letters from './letters.json';

//var chosenLetters = letters;

class Game extends Component {
    state={
        letters : letters,
        randomIds : [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97]
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
  