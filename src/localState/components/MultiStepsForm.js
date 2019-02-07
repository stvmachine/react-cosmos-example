import React from "react";
import { Icon, Step, Button, Placeholder } from "semantic-ui-react";

const PlaceholderExampleLineLengthWithHeader = () => (
  <Placeholder>
    <Placeholder.Header image>
      <Placeholder.Line length="medium" />
      <Placeholder.Line length="full" />
    </Placeholder.Header>
    <Placeholder.Paragraph>
      <Placeholder.Line length="full" />
      <Placeholder.Line length="medium" />
    </Placeholder.Paragraph>
  </Placeholder>
);

export default class MultiStepsForm extends React.Component {
  state = {
    step: ""
  };

  render() {
    const { step } = this.state;
    if (step === "") {
      return <div>Nothing to show</div>;
    }

    return (
      <React.Fragment>
        {/* Displaying tabs*/}
        <Step.Group>
          <Step active={step === 1}>
            <Icon name="truck" />
            <Step.Content>
              <Step.Title>Shipping</Step.Title>
              <Step.Description>Choose your shipping options</Step.Description>
            </Step.Content>
          </Step>

          <Step active={step === 2}>
            <Icon name="payment" />
            <Step.Content>
              <Step.Title>Billing</Step.Title>
              <Step.Description>Enter billing information</Step.Description>
            </Step.Content>
          </Step>

          <Step active={step === 3}>
            <Icon name="info" />
            <Step.Content>
              <Step.Title>Confirm Order</Step.Title>
            </Step.Content>
          </Step>
          <Step active={step === 4}>
          <Icon name="info" />
          <Step.Content>
            <Step.Title>Do something else</Step.Title>
          </Step.Content>
        </Step>
        </Step.Group>

        {/* Displaying content of each step*/}
        <React.Fragment>
          {step === 1 && (
            <div>
              <PlaceholderExampleLineLengthWithHeader />
              <Button style={{ marginTop: "20px"}} color="green">Next</Button>
            </div>
          )}
          {step === 2 && (
            <div>
              <PlaceholderExampleLineLengthWithHeader />
              <PlaceholderExampleLineLengthWithHeader />
              <Button style={{ marginTop: "20px"}} color="green">Next</Button>
            </div>
          )}
          {step === 3 && <div>Not yet</div>}
          {step === 4 && <div>You finish!</div>}
        </React.Fragment>
      </React.Fragment>
    );
  }
}
