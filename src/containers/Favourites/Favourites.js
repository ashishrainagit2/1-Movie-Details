import React  , {Component} from 'react';
import { directive } from '@babel/types';

class Favourites extends Component {
    render (){
        return (
            <div>
                <div>
                    <h2>Top 10 movies</h2>
                </div>
                <div>
                    <h2>Top 10 Movies to watch</h2>
                </div>
                <div>
                    <h2>Top 10 Series </h2>
                </div>
                <div>
                    <h2>Top 10 Series  to watch</h2>
                </div>

                <div>
                    <h2>currently watching</h2>
                </div>
            </div>
        )
    }
}

export default Favourites;