import { Container } from "reactstrap";
import React, { Component } from "react";
import Alert from "react-s-alert";

const isDev = process.env.NODE_ENV !== "production";
const getUrl = isDev
  ? "http://localhost:7890"
  : "https://auto-introspection-api.herokuapp.com";

const alertOpts = {
  effect: "genie",
  position: "top-right",
  timeout: 1500
};

export class AdminPage extends Component {
  state = {
    csv: []
  };

  handleSubmit = async e => {
    e.preventDefault();
    const formData = new FormData();
    const { csv } = this.state;
    formData.append("file", csv);
    try {
      const res = await fetch(`${getUrl}/upload`, {
        method: "POST",
        body: formData,
        credentials: "include"
      });
      // const data = await res.json();
      if (res.status !== 201) {
        Alert.warning("File upload failed, please try again", alertOpts);
      } else {
        Alert.info("Upload successful", alertOpts);
        window.setTimeout(() => {
          this.props.history.push("/");
        }, 1500);
      }
    } catch (error) {
      Alert.warning("File upload failed, please try again", alertOpts);
      console.error(error);
    }
  };

  handleChange = e => {
    this.setState({
      csv: e.target.files[0]
    });
  };

  renderCsvUploader() {
    return (
      <React.Fragment>
        <h3>🗄 Upload CSV File</h3>
        <form
          data-testid="form"
          action="upload"
          method="post"
          encType="multipart/form-data"
          onSubmit={this.handleSubmit}
        >
          <input
            type="file"
            ref={input => {
              this.filesInput = input;
            }}
            name="file"
            accept=".csv"
            data-testid="uploader"
            onChange={this.handleChange}
          />
          <button type="submit" data-testid="file-submit">
            Send
          </button>
        </form>
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
