import React { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { selectData } from '../actions';

const dataTypes = {
  user:user,
  input: input,
  output: ouput,
  extruder1: extruder1,
  extruder2: extruder2,
  pressure: pressure,
  clEnabled: clEnabled,
  clDuration: clDuration,
  clIntensity: clIntensity,
  layerNum: layerNum,
  layerHeight: layerHeight,
  livePercent: livePercent,
  deadPercent: deadPercent,
  elasticity: elasticity
}


class DataSelect extends Component {
  constructor(props){
    super(props);
    this.state={ data: [], sortedBy: null };
  }


  handleSubmit(event){
    this.setState({data:this.target.value.data});
    this.setState({sortedBy: this.target.value.sortedBy});
    this.props.selectData(this.state.data, this.state.sortedBy);
  }

  renderDataTypes(){
    return dataTypes.map((data)=>{
      return <dataType dataType={data} key={data} value={data}/>
    });
  }

  renderSelectBy(){
    return dataTypes.map((data)=>{
      return <SelectBy selectBy={data} key={data} value={data}/>
    });
  }

  render(){
    return(
      <form onSubmit = {this.handleSubmit.bind(this)} className = "radioButton">
        <div className="displayData">
          <h3> Data XXX to Display </h3>
          <ul className="list-group">
            {this.renderDataTypes()}
          </ul>
        </div>
        <div className="sortBy">
          <h3> Sort Data By </h3>
          <ul className="list-group">
            {this.renderSelectBy()}
          </ul>
        </div>
        <div>
          <button action = "submit" >Render Graph</button>
        </div>
      </form>
    );

  }
}

export default connect()