import React from "react";

class Profile extends React.Component {

    render(){
        return (
            <div>
                <h1>
                this is profile of ---------
            </h1>
            <h2>
                name is {this.props.name}
            </h2>
            </div>
            
        );
    }
    

}

export default Profile;
