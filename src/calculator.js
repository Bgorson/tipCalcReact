import React, {Component} from 'react';

export default class TipCalculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bill: 0,
            tipPercentage:0,
            amountSplit:1,
            total:0
          }
          this.handleChange = this.handleChange.bind(this);
          this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event){
        this.setState({[event.target.name]: event.target.value})
    }
    
      handleSubmit(event) {
        event.preventDefault();
        let state= this.state;
        console.log(state.bill)
        console.log(state.tipPercentage)
        let totalBill= (state.bill * (state.tipPercentage/100))+parseFloat(state.bill)
        totalBill= totalBill/state.amountSplit
        this.setState ({
            total:totalBill.toFixed(2)
        })
      }
    render() { 
        return (  
        <div>
            <form onSubmit= {this.handleSubmit}>
         <label>
           Bill
           <input onChange = {this.handleChange} type="number" name="bill" value = {this.state.bill}/>
         </label>
         <label>
           Tip
           <input onChange = {this.handleChange} type="number" name="tipPercentage" value = {this.state.tipPercentage} />
         </label>
         <label>
           People to split bill with
           <input onChange = {this.handleChange} type="number" name="amountSplit" value = {this.state.amountSplit}  />
         </label>


         <input type="submit"/>
       </form>
       <div>
           <p>The cost per person here: ${this.state.total}</p>
       </div>
           </div> 
           );
    }
}
 
