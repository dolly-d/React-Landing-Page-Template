import React, { Component } from "react";
import { Box } from "@material-ui/core";

export class about extends Component {
  render() {
    return (
      <div id="about">
        <div className="container">
          <div className="row">
            <main className="grid">
              <Box alignItems="center">
                <img
                  src="img/Me.jpg"
                  width="50"
                  alt=""
                  
                />
              </Box>
              <Box alignSelf="flex-end">
                <img
                  src="img/Me2.jpg"
                  width="50"
                  alt=""
                  
                />
              </Box>
              <Box>
                {" "}
                <img
                  src="img/Me3.jpg"
                  width="50"
                  alt=""
                 
                />
              </Box>

              <div className="col-xs-12 col-md-6"> </div>
            </main>
            <div className="col-xs-12 col-md-6">
              <div className="about-text">
                <p>
                  {this.props.data ? this.props.data.paragraph : "loading..."}
                </p>
                <h2>Tech Stack</h2>
                <div className="list-style">
                  <div className="col-lg-6 col-sm-6 col-xs-12">
                    <ul>
                      {this.props.data
                        ? this.props.data.Why.map((d, i) => (
                            <li key={`${d}-${i}`}>{d}</li>
                          ))
                        : "loading"}
                    </ul>
                  </div>
                  <div className="col-lg-6 col-sm-6 col-xs-12">
                    <ul>
                      {this.props.data
                        ? this.props.data.Why2.map((d, i) => (
                            <li key={`${d}-${i}`}> {d}</li>
                          ))
                        : "loading"}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default about;
