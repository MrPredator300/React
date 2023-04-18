//import { Component } from "react";
import React from "react";
import CalculatorTitle from "./CalculatorTitle";
import OutputScreen from "./OutputScreen";
import Button from "./Button";

class Calculator extends React.Component
{

    constructor()
    {
        super();
        this.state = {
            question: '',
            answer: ''
        }
        this.handelClick = this.handelClick.bind(this);
    }

    handelClick(event)
    {
        const value = event.target.value;
        switch(value) 
        {
            case '=': {
                if(this.state.question!=='')
                {
                    var ans='';
                        try
                        {
                            ans = eval(this.state.question);
                        }
                        catch(err)
                        {
                            this.setState({
                                answer: "Math Error"
                            });
                        }
                        if(ans === undefined)
                            this.setState({
                                answer: "Math Error"
                            });
                        else
                            this.setState({
                                answer: ans,
                                question: ''
                            });
                        break;
                }
            }
            case 'Clear': {
                this.setState({
                    question: '',
                    answer: ''
                });
                break;
            }
            case 'Delete': {
                var str = this.state.question;
                str = str.substr(0,str.length-1);
                this.setState({
                    question: str
                });
                break;
            }
            default: {
                this.setState({
                    question: this.state.question += value
                })
                break;
            }
        }
    }


    render()
    {
        return <div className="frame">
            <p align="Center"><h1>Calculator Project 1</h1></p>
            <CalculatorTitle value="My Calculator" />
            <div class="mainCalc">
                <OutputScreen />
                <div className="button-row-1">
                    <Button label={"Clear"} />
                    <Button label={"Delete"} />
                    <Button label={"."} />
                    <Button label={"/"} />
                </div>
                <div className="button-row-2">
                    <Button label={"7"} />
                    <Button label={"8"} />
                    <Button label={"9"} />
                    <Button label={"*"} />
                </div>
                <div className="button-row-3">
                    <Button label={"4"} />
                    <Button label={"5"} />
                    <Button label={"6"} />
                    <Button label={"-"} />
                </div>
                <div className="button-row-4">
                    <Button label={"1"} />
                    <Button label={"2"} />
                    <Button label={"3"} />
                    <Button label={"+"} />
                </div>
                <div className="button-row-5">
                    <Button label={"0"} />
                    <Button label={"="} />
                </div>
            </div>
        </div>
    }

}

export default Calculator;
