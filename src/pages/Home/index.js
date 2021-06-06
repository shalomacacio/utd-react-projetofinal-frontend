import {Component} from 'react'
import {Link} from 'react-router-dom'
import api from '../../services/api'
import {FaTrash, FaEdit} from 'react-icons/fa';
import MovieRow from '../../components/MovieRow';
import Header from '../../components/Header'
import './styles.css';


export default class Home extends Component {

    render(){
        return (
            <div>
                <Header />
                <MovieRow />
            </div>
        )
    }

}