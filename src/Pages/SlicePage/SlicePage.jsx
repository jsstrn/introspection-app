import React, { Component } from "react";
import {
  Container,
  Row,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import HPJumbotron from "../../components/HPJumbotron/HPJumbotron";
import SliceDetails from "../../components/SliceDetails/SliceDetails";
import BrickContainer from "../../components/BrickContainer/BrickContainer";
import IntroDataContext from "../../IntroDataContext";
import FilterBar from "../../components/FilterBar/FilterBar";
import { getAvailableOffices } from "../../services/serveIntrospections";

export class SlicePage extends Component {
  static contextType = IntroDataContext;
  constructor(props, context) {
    super(props, context);
    this.state = {
      office: "",
      category: ""
    };
  }

  handleOfficeSelect = office => {
    const officeSelected = office === "All" ? "All" : office;
    this.setState({ office: officeSelected });
  };

  handleCategorySelector = event => {
    this.setState({ category: event.currentTarget.textContent });
  };

  componentDidMount() {
    this.setState({
      office: this.props.location.state
        ? this.props.location.state.office
        : this.context.office
        ? this.context.office
        : "All",
      category: this.props.location.state
        ? this.props.location.state.category
        : "Equitable Tech"
    });
  }

  render() {
    const { data } = this.context;
    const { office, category } = this.state;
    const offices = ["All", ...getAvailableOffices(data)];
    const categories = [
      "Society and Privilege",
      "Religious Minorities",
      "Diversity and Inclusion",
      "Economic Justice",
      "Racial Minorities",
      "Sexual Orientation and Gender Identity",
      "Equitable Tech",
      "Climate Injustice"
    ];

    return (
      <>
        <HPJumbotron />
        <Container className="mx-auto mb5">
          <div className="flex justify-between">
            <FilterBar
              handleClick={this.handleOfficeSelect}
              offices={offices}
              selected={office}
              className="actionPlanOfficeFilter"
            />
            <UncontrolledDropdown>
              <DropdownToggle caret>{category}</DropdownToggle>
              <DropdownMenu>
                {categories.map((a, index) => (
                  <DropdownItem
                    key={index}
                    onClick={this.handleCategorySelector}>
                    {a}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </UncontrolledDropdown>
          </div>
          <Row>
            <SliceDetails category={category} />
          </Row>
          <Row>
            <BrickContainer category={category} office={office} />
          </Row>
        </Container>
      </>
    );
  }
}

export default SlicePage;
