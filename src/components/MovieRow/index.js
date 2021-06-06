import {Component} from 'react'
import api from '../../services/api'
import './styles.css';


export default class MovieRow extends Component {

    state = {
        videos:[],
    };

    componentDidMount = async e =>{
        const videos  = await api.get(`/videos`)

        videos.data.map( res=>{
            const {videos} = this.state
            this.setState({  
                videos: [...videos, res]
            });
        } );

    }

    render(){

        const {videos} = this.state;

        return (
            <div>
                {videos.map( (item, key)=>(
                   <div className="movieRow--item" >
                       <img src={`${item.imagem}`} alt={"logo"} />
                    </div>
                ))}
            </div>
        )
    }

}