import React from 'react';
import styled from 'styled-components';
import axios from 'axios';


class MetaWeatherApiTest extends React.Component {
    constructor(props){
        super(props);
            this.state = {
                location:'',
                
            }    
    }
    onChangeLocation = async ()  => {
        const response = await axios.get('https://www.metaweather.com/api/location/search/?query=("São Paulo")/')
        let location = response.data
        console.log(location)
        this.setState({
            location:response,
            
        })
        console.log(response)
    }
    render() {
        return(
            <div>
                <input type="text"
                placeholder="Digite sua localizacao"
                onChange={this.onChangeLocation}
                />
                
            </div>
        )
    }
}
export default MetaWeatherApiTest