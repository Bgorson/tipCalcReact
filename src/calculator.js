import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css'

export default class TipCalculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bill: 0,
            tipPercentage:10,
            amountSplit:1,
            total:0,
            tipAmount:0
          }
          this.handleChange = this.handleChange.bind(this);
          this.handleSubmit = this.handleSubmit.bind(this);
          this.HandleTipSubmit= this.HandleTipSubmit.bind(this)
    }
    handleChange(event){
        if (event.target.value <0 ){
            event.target.value =0
        }
        if (event.target.name=== 'amountSplit'){
            event.target.value= parseInt(event.target.value)
        }

       
        this.setState({
            [event.target.name]: event.target.value,
    
        })
        
    }
    
      handleSubmit(event) {
        event.preventDefault();
        let state= this.state;
        let peopleToSplit= state.amountSplit
        if (this.state.amountSplit <= 0 ){
            this.setState ({
                amountSplit: 1
            })
        }
        if (this.state.bill <= 0) {
            this.setState ({
                bill:1
            })
        }

        
       
        console.log(state.bill)
        console.log(state.tipPercentage)
        let totalBill= (state.bill * (state.tipPercentage/100))+parseFloat(state.bill)
        totalBill= totalBill/state.amountSplit
        
        this.setState ({
            total:totalBill.toFixed(2),
            tipAmount:  ((state.bill * (state.tipPercentage/100))/(peopleToSplit)).toFixed(2)
        })
      }
      HandleTipSubmit(event){
          event.preventDefault();
          this.setState ({
              tipPercentage: event.target.value
          })
      }

    render() { 
        return (  
        <div className= "container">
            <form onSubmit= {this.handleSubmit}>
         <label>
           Bill
           <input onChange = {this.handleChange} type="number" name="bill" value = {this.state.bill}/>
         </label>
         <br></br>
       
          Quick Tip 
           <button className= "tip btn btn-primary" onClick= {this.HandleTipSubmit} value = {20} >20%</button>
           <button className= "tip btn btn-primary"onClick= {this.HandleTipSubmit} value = {15}> 15%</button>
           <button className= "tip btn btn-primary" onClick= {this.HandleTipSubmit} value = {10} >10%</button>
           Current Tip Amount:
           <label>
           <input onChange = {this.handleChange} type="number" name="tipPercentage" value = {this.state.tipPercentage} />%
         </label>
         <br></br>
         <label>
           People to split bill with
           <input onChange = {this.handleChange} type="number" name="amountSplit" value = {this.state.amountSplit}  />
         </label>
         <br></br>
         <input className= "btn btn-success" type="submit" value="Submit" />
       </form>
       <div>
           <p>Tip per person: $ {this.state.tipAmount}</p>
           <p>The cost per person here: ${this.state.total}</p>
       </div>
           </div> 
           );
    }
}
 
