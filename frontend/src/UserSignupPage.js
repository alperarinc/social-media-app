import React from "react";

class UserSingupPage extends React.Component{
    state = {
        username:null,
        displayName:null,
        password:null,
        passwordRepeat:null
    };

    onChange = event => {
        const{name, value} = event.target;
        this.setState({
            [name]:value
        });
    };
    render() {
        return(
            <form>
                <h1>Sing Up</h1>
                <div>
                    <label>Username</label>
                    <input name="username" onChange={this.onChange}/>                                   
                </div>
                <div>
                    <label>Display Name</label>
                    <input name ="displayName" onChange={this.onChange}/>                                   
                </div>
                <div>
                    <label>Password</label>
                    <input name = "password" type="password" onChange={this.onChange}/>                                   
                </div>
                <div>
                    <label>Password Repeat</label>
                    <input name = "passwordRepeat" type="password" onChange={this.onChange}/>                                   
                </div>
                <button>Sing Up</button>
                  
            </form>
          
        )
    }
}

export default UserSingupPage;
