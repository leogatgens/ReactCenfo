import { Select  } from 'antd';
import React from 'react';
import {CountryCard} from './countrycard';

const Option = Select.Option;
const children = [];
class SelectCountry extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        selectedvalue : {
            key : -1,
            label : ""
      },                   
        error : ""       
    };  
    
    children.length = 0;
    this.props.data.countries.forEach(element => {
    children.push(<Option key={element.idCountry}>{element.name}</Option>);
    });
            
}
handleChange = (value) => {  
    this.setState({
      selectedvalue : value
  });   
}

HandleAddedItem = () =>{

  this.props.onAddedCountry();
}

render(){    
    
    let selectedCountry = {
      valor : this.state.selectedvalue,
      auth : this.props.data.auth
    }
    return (
        <div>
        <Select
        labelInValue
        showSearch
        style={{ width: '100%' }}
        placeholder="Select a country"
        optionFilterProp="children"
        onChange={this.handleChange}
        onFocus={this.handleFocus}
        onBlur={this.handleBlur}
        filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
        
      >
        {children}
    </Select>
    {selectedCountry.valor.label !== "" ?   <CountryCard data={selectedCountry} OnAddedItem={this.HandleAddedItem}/> : null}   
    </div>
    );
  }

}

export {SelectCountry};