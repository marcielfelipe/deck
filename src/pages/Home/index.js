import React,{useState} from 'react';
import '../../global.css';
import './styles.css'

export default function Home(){
    const [deck,setDeck]=useState([])
    const [viewDeck,setViewDeck]=useState(false)

    function generate(){

        
        var naipe = ['C','P','O','E']
        var value = ['A','1','2','3','4','5','6','7','8','9','Q','J','K'] 
        

        let i=0;
        for(let iN=0;iN<naipe.length;iN++){
            for(let iV=0;iV<value.length;iV++){
                i++
                let card=(`${value[iV]}${naipe[iN]}`)
                deck.unshift(card)
            }
        }
        setViewDeck(true)
        console.log(deck)
    }
    return(
        <div className="geral">
            <h1>Deck</h1>
            {
                viewDeck && 
                <ul>
                    {
                        deck.map(d=>(
                            <li>{d}</li>
                        ))
                    }
                </ul>
            }
            {
                !viewDeck &&
                <button className="button"onClick={generate}>Gerar Deck</button>
            }
        </div>
    );
}