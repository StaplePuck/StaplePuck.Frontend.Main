import React, { Component } from "react";
import { ApolloProvider, Query } from "react-apollo";
import history from "../history";
import { GetProfileQuery } from "./Queries/GetUserQuery";

//Assests
import "../Assets/css/UserProfile.css";
import Logo from "../Assets/Images/logo-white-with-name.jpg";

class UserProfile extends Component {
  render() {
    return (
      <div className="userProfile">
        <img className="mainLogo" src={Logo} alt="Logo" />
        <h1>Profile</h1>
        <ApolloProvider client={this.props.auth.apolloClient}>
          <Query query={GetProfileQuery}>
            {({ loading, error, data }) => {
              console.log(data);
              if (loading) return <div>Fetching Profile...</div>;
              if (error) return <div>Error Fetching Profile...</div>;
              //Redirect to the Add User form if no user is returned on login
              if (!data || !data.currentUser) {
                history.replace("/adduser");
              }
            }}
          </Query>
        </ApolloProvider>
      </div>
    );
  }
}

export default UserProfile;
