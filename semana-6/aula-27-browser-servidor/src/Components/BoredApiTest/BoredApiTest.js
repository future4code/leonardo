import React from 'react';
import styled from 'styled-components';
import axios from 'axios';


class BoredApiTest extends React.Component {
    constructor(props){
        super(props);
            this.state = {
                activity:'',
                link:''
            }    
    }
    fetchActivity = async ()  => {
        const response = await axios.get('https://www.boredapi.com/api/activity/')
        let activity = response.data
        console.log(activity)
        this.setState({
            activity:response,
            
        })
        console.log(response)
    }
    render() {
        return(
            <div>
                <button onClick={this.fetchActivity}>nova Atividade</button>
                {this.state.activity && 
                    <div>
                        <p>
                        {this.state.activity.data.activity}
                        </p>
                        <p> {(this.state.activity.data.participants > 1) ?
                                `You will nedd at least ${this.state.activity.data.participants} persons to do it ` :
                                "You can do it alone" }
                        </p>
                    </div>
                }
                
            </div>
        )
    }
}
export default BoredApiTest