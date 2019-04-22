import { Container } from "reactstrap";
import React, { Component } from "react";
import DragAndDropUpload from "../../components/DragAndDropUpload/DragAndDropUpload";

export class AdminPage extends Component {
  renderCsvUploader() {
    return (
      <React.Fragment>
        <h3>🗄 Upload CSV File</h3>
        <DragAndDropUpload history={this.props.history} />
      </React.Fragment>
    );
  }

  render() {
    return (
      <Container
        className="mx-auto text-center mt-5"
        style={{ width: "100vw" }}
      >
        <h1 className="text-info font-weight-bolder">Admin Page</h1>
        {process.env.REACT_APP_FEATURE_TOGGLE_UPLOADER === "true" &&
          this.renderCsvUploader()}
      </Container>
    );
  }
}

export default AdminPage;
