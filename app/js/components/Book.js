import React from "react";

export default class Book extends React.Component {
    constructor(props){
        super(props);
        this.state = {activeId:"", isDisabled:false, btnText:"Delete"};
        this.isDisabled = false;
    }
    handleBookDelete = (event) => {
        const {book} = this.props;

        event.stopPropagation();
        this.setState({btnText:"Deleting..."});
        this.setState({isDisabled:true});
        console.log("Delete book with id: ", book.id, " and name: ", book.title);
        setTimeout(() => {            
            this.props.deleteBook(book.id);
        }, 1000);
    }
    handleStatus = () =>{
        const {book} = this.props;
        this.props.setStatus(book.id);
    }
    render() {
        const {book, active} = this.props;
        return (
            <tr onClick={this.handleStatus}>
                <td>{book.id}</td>
                <td>{book.title}</td>
                <td>
                    {active && <button type="button" className="btn btn-danger" onClick={this.handleBookDelete} disabled={this.state.isDisabled}>{this.state.btnText}</button>}
                </td>
            </tr>
        );
    }
}
