import React, { Component } from "react";

import AuthContext from "../context/auth-context";
import "./Events.css";
import { runInThisContext } from "vm";

class GardenersPage extends Component {
  state = {
    creating: false,
    gardeners: []
  };

  static contextType = AuthContext;

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.fetchGardeners();
  }

  startCreateEventHandler = () => {
    this.setState({ creating: true });
  };

  fetchGardeners() {
    const requestBody = {
      query: `
        query {
          gardeners {
            _id
            name
          }
        }
      `
    };

    const token = this.context.token;

    fetch("http://localhost:8000/graphql", {
      method: "POST",
      body: JSON.stringify(requestBody),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => {
        if (res.status !== 200 && res.status !== 201) {
          throw new Error("Failed!");
        }
        return res.json();
      })
      .then(resData => {
        const gardeners = resData.data.gardeners;
        this.setState({ gardeners: gardeners });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const gardenerList = this.state.gardeners.map(gardener => {
      return (
        <li key={gardener._id} className="events__list-item">
          {gardener.name}
        </li>
      );
    });
    return (
      <React.Fragment>
        <ul className="events__list">{gardenerList}</ul>
      </React.Fragment>
    );
  }
}

export default GardenersPage;
