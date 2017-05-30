import React from "react";

export default class Info extends React.Component {

    render() {
        return (
            <div className="alert alert-success alert-dismissable">
                <a href="#" className="close" data-dismiss="alert" aria-label="close">&times;</a>
                <strong>Success!</strong> Indicates a successful or positive action.
            </div>
        );
    }
}
