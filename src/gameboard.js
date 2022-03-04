import './App.css';
import { useState, useEffect } from "react";
import { randColors, evaluateTipp, RESULT } from './gamelogic';

const COLORS = ["#996515", "#84DE02", "#4F86F7", "#FFA500", "#44D7A8", "#ED0A3F", "#FC74FD", "#000000", "#FEFEFE", "#828E84"];
const PATTERN = randColors();
let TIPP = [0, 0, 0, 0];
let counter = 0;

function MasterMindApp() {
    return (<>
        <h1>MasterMind</h1>
        <GetFirstRow/>
        <GetTableRows />
        <hr className="Hr" />
        <GetNewGameText />
    </>
    )
}

function GetNewGameText() {
    return (<div>
        <a className="Link-text" onClick={() => window.location.reload()}>Új játék</a>
    </div>
    )
}

function GetFirstRow() {
    const [first, setFirst] = useState(0);
    const [second,setSecond] = useState(0);
    const [third, setThird] = useState(0);
    const [forth, setForth] = useState(0);

   useEffect(() => {
   let intro = setInterval(() => {
        setFirst(() => Math.floor(Math.random() * 8) + 1)
        setSecond(() => Math.floor(Math.random() * 8) + 1)
        setThird(() => Math.floor(Math.random() * 8) + 1)
        setForth(() => Math.floor(Math.random() * 8) + 1)
        counter++;
        if(counter === 30){
            clearInterval(intro)
            setFirst(0);
            setSecond(0);
            setThird(0);
            setForth(0);
            counter = 0;
        }
    }, 100);

   }, [])

    return (<div className='First-row'>
        <button className="Hide-field" style={{backgroundColor : COLORS[first]}}></button>
        <button className="Hide-field" style={{backgroundColor : COLORS[second]}}></button>
        <button className="Hide-field" style={{backgroundColor : COLORS[third]}}></button>
        <button className="Hide-field" style={{backgroundColor : COLORS[forth]}}></button>
        <button className="Show-btn" onClick={() => {
            setFirst(PATTERN[0])
            setSecond(PATTERN[1])
            setThird(PATTERN[2])
            setForth(PATTERN[3])
        }}>Mutasd</button>
        </div>
        );
}

function GetTableRows() {
    return (<>
        <div>
        <GetTableRow ID1={0} ID2={1} ID3={2} ID4={3}/>   
        </div>
        <div>
        <GetTableRow ID1={4} ID2={5} ID3={6} ID4={7}/>
        </div>
        <div>
        <GetTableRow ID1={8} ID2={9} ID3={10} ID4={11}/>
        </div>
        <div>
        <GetTableRow ID1={12} ID2={13} ID3={14} ID4={15}/>
        </div>
        <div>
        <GetTableRow ID1={16} ID2={17} ID3={18} ID4={19}/>
        </div>
        <div>
        <GetTableRow ID1={20} ID2={21} ID3={22} ID4={23}/>
        </div>
        <div>
        <GetTableRow ID1={24} ID2={25} ID3={26} ID4={27}/>
        </div>
        <div>
        <GetTableRow ID1={28} ID2={29} ID3={30} ID4={31}/>
        </div>
        <div>
        <GetTableRow ID1={32} ID2={33} ID3={34} ID4={35}/>
        </div>
        <div>
        <GetTableRow ID1={36} ID2={37} ID3={38} ID4={39}/>
        </div>
        </>)
}

        function GetTableRow(props){
        const [firstResultColor, setFirstResultColor] = useState("");
        const [secondResultColor, setSecondResultColor] = useState("");
        const [thirdResultColor, setThirdResultColor] = useState("");
        const [forthResultColor, setForthResultColor] = useState("");
        const [firstFieldColor, setFirstFieldColor] = useState(0);
        const [secondFieldColor, setSecondFieldColor] = useState(0);
        const [thirdFieldColor, setThirdFieldColor] = useState(0);
        const [forthFieldColor, setForthFieldColor] = useState(0);
        const[disabled, setDisabled] = useState(false);
        const[firstTextColor, setFirstTextColor] = useState("#996515");
        const[secondTextColor, setSecondTextColor] = useState("#996515");
        const[thirdTextColor, setThirdTextColor] = useState("#996515");
        const[forthTextColor, setForthTextColor] = useState("#996515");
        return <>
            <div className="Result-fields">
            <button className="Result-field" style={{ backgroundColor: COLORS[firstResultColor] }}></button>
            <button className="Result-field" style={{ backgroundColor: COLORS[secondResultColor] }}></button>
            <button className="Result-field" style={{ backgroundColor: COLORS[thirdResultColor] }}></button>
            <button className="Result-field" style={{ backgroundColor: COLORS[forthResultColor] }}></button>
            </div>
            <button className="Color-field" id={props.ID1} style={{ backgroundColor: COLORS[firstFieldColor], color: firstTextColor }}
            onClick={() => {
            setFirstTextColor("#666666");
            setFirstFieldColor((n) => n === 9 ? n = 1 : n = n + 1)
            setTipp(props.ID1, firstFieldColor)
            }}>{firstFieldColor}</button>
            <button className="Color-field" id={props.ID2} style={{ backgroundColor: COLORS[secondFieldColor], color: secondTextColor}}
            onClick={() => {
            setSecondTextColor("#666666");
            setSecondFieldColor((n) => n === 9 ? n = 1 : n = n + 1)
            setTipp(props.ID2, secondFieldColor)
            }}>{secondFieldColor}</button>
            <button className="Color-field" id={props.ID3} style={{ backgroundColor: COLORS[thirdFieldColor], color: thirdTextColor }}
            onClick={() => {
            setThirdTextColor("#666666");
            setThirdFieldColor((n) => n === 9 ? n = 1 : n = n + 1)
            setTipp(props.ID3, thirdFieldColor)
            }}>{thirdFieldColor}</button>
            <button className="Color-field" id={props.ID4} style={{ backgroundColor: COLORS[forthFieldColor], color: forthTextColor }}
            onClick={() => {
            setForthTextColor("#666666");
            setForthFieldColor((n) => n === 9 ? n = 1 : n = n + 1)
            setTipp(props.ID4, forthFieldColor)
            }}>{forthFieldColor}</button>
            <button className="Ok-btn" 
            onClick={() => {
            setDisabled(true)
            evaluateTipp()
            counter++;
            TIPP = [0, 0, 0 ,0]
            setFirstResultColor(() => {if( RESULT[0] ) { return 8; }
                                    else if( RESULT[0] != null && !RESULT[0] ){
                                            return 7;}
        });
            setSecondResultColor(() =>{if( RESULT[1]) { return 8; }
                                     else if( RESULT[1] != null && !RESULT[1] ){
                                            return 7;}
        });
            setThirdResultColor(() => {if( RESULT[2] ) { return 8; }
                                    else if( RESULT[2] != null && !RESULT[2] ){
                                            return 7;}
        });
            setForthResultColor(() => {if( RESULT[3] ){ return 8; }
                                     else if( RESULT[3] != null && !RESULT[3] ){
                                            return 7;}
        });
        endOfTheGame();
        }} disabled={disabled}>Ok</button>
            </>
}

function setTipp(fieldId, colorValue){
colorValue === 9 ? colorValue = 0 : colorValue = colorValue + 1;
TIPP[fieldId % 4] = colorValue;
}

function endOfTheGame(){
if(RESULT[0] && RESULT[1] && RESULT[2] && RESULT[3]){
    alert("Gratulálunk!");
}
else if( counter === 10){
    alert("Sebaj, legközelebb!");
}
}
        export default MasterMindApp;
        export  { PATTERN, TIPP };