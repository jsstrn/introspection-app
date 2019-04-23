import React, { Component } from "react";
import Plot from "react-plotly.js";
import {
  nameArray,
  categoriesAngleArray,
  getCategories,
  levelArrayRandomized,
  thetaArray,
  oneAngle
} from "../../services/serveIntrospections.js";
import IntroDataContext from "../../IntroDataContext";

class Radar extends Component {
  static contextType = IntroDataContext;
  constructor(props, context) {
    super(props, context);
    this.state = {};
  }

  render() {
    const { data } = this.context;
    console.log(data);
    const radius = levelArrayRandomized(data);
    const theta = thetaArray(data);
    const names = nameArray(data);

    return (
      <React.Fragment>
        <h1 className="tc radar-title">Singapore's Introspection Radar</h1>
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
            margin: { r: 200, l: 200, t: 50 },
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
