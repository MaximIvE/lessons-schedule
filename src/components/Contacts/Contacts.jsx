import { Component } from "react";
import {List} from './Contacts.styled';
import ConactCard from "components/ConactCard/ConactCard";




export default class Contacts extends Component{
   

    getCardMarking(){
        return (this.props.contacts.map( (user) =>
                <ConactCard 
            key={user.name + user.phone}
            name = {user.name}
            number = {user.number}
            removeCard={this.removeCard}/>
            )
            );
    }

    removeCard = (e) => {
        this.props.removeConactApp(e.currentTarget.name);
    }
    
    render(){
        return (
            <List>
                {this.getCardMarking()}
            </List>
        )
    }
}
