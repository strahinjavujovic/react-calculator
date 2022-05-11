import React from "react";
import classes from './Calculator.css';

const calculator =(props)=>(
   
            <div className={classes.Calculator}>
                <div className={classes.Border}>
                    <div className={classes.InputDiv}>{props.boardUnosa}</div>
                    <div >
                        <div onClick={props.obrisiBroj}>CE</div>
                        <div onClick={props.deleteAll}>C</div>
                        <div onClick={props.obrisiCifru}>BCKS</div> 
                        <div onClick={()=>props.click('/')}>/</div>
                    </div>
                    <div>
                        <div onClick={()=>props.click(7)}>7</div>
                        <div onClick={()=>props.click(8)}>8</div>
                        <div onClick={()=>props.click(9)}>9</div>
                        <div onClick={()=>props.click('*')}>X</div>
                    </div>
                    <div>
                        <div onClick={()=>props.click(4)}>4</div>
                        <div onClick={()=>props.click(5)}>5</div>
                        <div onClick={()=>props.click(6)}>6</div>
                        <div onClick={()=>props.click('-')}>-</div>
                    </div>
                    <div>
                        <div onClick={()=>props.click(1)}>1</div>
                        <div onClick={()=>props.click(2)}>2</div>
                        <div onClick={()=>props.click(3)}>3</div>
                        <div onClick={()=>props.click('+')}>+</div>
                    </div>
                    <div>
                        <div>,</div>
                        <div onClick={()=>props.click(0)}>0</div>
                        <div className={classes.Jednako} onClick={()=>props.click('=')}>=</div>
                        
                    </div>
                </div>
            </div>
)

export default calculator;