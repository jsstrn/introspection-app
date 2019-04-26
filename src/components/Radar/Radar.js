import React, { Component } from "react";
import Plot from "react-plotly.js";
import {
  nameArray,
  categoriesAngleArray,
  getCategories,
  levelArrayRandomized,
  thetaArray,
  oneAngle,
  getAvailableOffices
} from "../../services/serveIntrospections.js";
import IntroDataContext from "../../IntroDataContext";
import FilterBar from "../FilterBar/FilterBar.jsx";

class Radar extends Component {
  static contextType = IntroDataContext;
  constructor(props, context) {
    super(props, context);
    this.state = {
      office: ""
    };
  }

  componentDidMount() {
    this.setState({
      office: "All"
    });
  }

  handleOfficeSelect = office => {
    const officeSelected = office === "All" ? "All" : office;
    this.setState({ office: officeSelected });
  };

  render() {
    const { data } = this.context;
    const { office } = this.state;
    const offices = ["All", ...getAvailableOffices(data)];
    const filteredData = data.filter(a => {
      if (office === "All") {
        return true;
      }
      return a.office === office;
    });
    const radius = levelArrayRandomized(filteredData);
    const theta = thetaArray(filteredData);
    const names = nameArray(filteredData);

    return (
      <React.Fragment>
        <div className="tc center mb3 mt3">
          <FilterBar
            handleClick={this.handleOfficeSelect}
            offices={offices}
            selected={office}
          />
        </div>
        <h1 className="tc radar-title text-info font-weight-bolder">
          {office === "All" ? "All Offices' " : `${office}'s `}Introspection
          Radar
        </h1>
        <Plot
          className="tc mt0 center"
          useResizeHandler={true}
          data={[
            ...categoriesAngleArray(data).map(a => ({
              r: [0, 6.2],
              theta: [0, a],
              type: "scatterpolar",
              line: { dash: "dash", color: "gray", width: 1 },
              hoverinfo: "text"
            })),

            {
              r: [1, 2.6, 4.0, 5.5],
              theta: [90, 90, 90, 90],
              text: ["open", "informed", "engaged", "activated"],
              mode: "text",
              type: "scatterpolar",
              hoverinfo: "none",

              textfont: { size: 15 },
              hoverlabel: {
                bgcolor: "black",
                bordercolor: "black",
                font: { family: "calibri", color: "white", size: 20 },
                align: "left",
                namelength: 30
              }
            },
            {
              r: radius,
              theta: theta,
              text: names,
              hoverinfo: "text",

              hoverlabel: {
                bgcolor: "black",
                bordercolor: "black",
                font: { family: "calibri", color: "white", size: 20 }
              },
              mode: "markers",

              marker: {
                symbol: "circle",
                color: "rgb(138, 42, 226)",
                size: 13,
                opacity: 0.5
              },
              type: "scatterpolar"
            }
          ]}
          layout={{
            dragmode: "pan",
            paper_bgcolor: "rgba(0,0,0,0)",
            plot_bgcolor: "rgba(0,0,0,0)",
            margin: { r: 200, l: 200, t: 0, b: 0 },
            width: 1000,
            height: 1000,
            showlegend: false,
            polar: {
              sector: this.props.sector,
              opacity: 1,
              layer: "above traces",
              radialaxis: {
                showline: false,
                ticks: "",
                angle: 0,
                tickangle: 0,
                visible: true,
                tickfont: {
                  size: 17,
                  color: "gray"
                },
                tickmode: "array",
                tickvals: [0, 1.9, 3.35, 4.8, 6.2],
                showticklabels: false,
                range: [0, 6.5]
              },
              angularaxis: {
                showgrid: false,
                tickmode: "array",
                showline: false,
                tickvals: getCategories(data).map(
                  (a, index) =>
                    (index + 1) * oneAngle(data) - oneAngle(data) / 2
                ),
                ticks: "",
                ticktext: getCategories(data),
                tickfont: {
                  size: 18,
                  color: "gray"
                },
                visible: true
              }
            }
          }}
        />
      </React.Fragment>
    );
  }
}

export default Radar;
