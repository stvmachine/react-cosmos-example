import React from 'react'
import { Icon, Form, Step, Button, Placeholder, Message } from 'semantic-ui-react'
import Step1 from './Step1'

const PlaceholderExampleLineLengthWithHeader = () => (
  <Placeholder>
    <Placeholder.Header image>
      <Placeholder.Line length='medium' />
      <Placeholder.Line length='full' />
    </Placeholder.Header>
    <Placeholder.Paragraph>
      <Placeholder.Line length='full' />
      <Placeholder.Line length='medium' />
    </Placeholder.Paragraph>
  </Placeholder>
)

export default class MultiStepsForm extends React.Component {
  state = {
    step: ''
  };

  render () {
    const { step } = this.state
    if (step === '') {
      return <Message
        error
        header='Error'
        content='An error has happened'
      />
    }

    return (
      <React.Fragment>
        {/* Displaying tabs */}
        <Step.Group>
          <Step active={step === 1}>
            <Icon name='truck' />
            <Step.Content>
              <Step.Title>Shipping</Step.Title>
              <Step.Description>Choose your shipping options</Step.Description>
            </Step.Content>
          </Step>

          <Step active={step === 2}>
            <Icon name='payment' />
            <Step.Content>
              <Step.Title>Billing</Step.Title>
              <Step.Description>Enter billing information</Step.Description>
            </Step.Content>
          </Step>

          <Step active={step === 3}>
            <Icon name='info' />
            <Step.Content>
              <Step.Title>Confirm Order</Step.Title>
            </Step.Content>
          </Step>
          <Step active={step === 4}>
            <Icon name='info' />
            <Step.Content>
              <Step.Title>Do something else</Step.Title>
            </Step.Content>
          </Step>
        </Step.Group>

        {/* Displaying content of each step */}
        <React.Fragment>
          {step === 1 && (
            <Step1 />
          )}
          {step === 2 && (
            <Form style={{ padding: '30px' }}>
              <PlaceholderExampleLineLengthWithHeader />
              <PlaceholderExampleLineLengthWithHeader />
              <Button style={{ marginTop: '20px' }} color='green'>
                Next
              </Button>
            </Form>
          )}
          {step === 3 && (<Form style={{ padding: '30px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
              <div style={{ display: 'flex', flexDirection: 'column', width: '50%' }}>
                <PlaceholderExampleLineLengthWithHeader style={{ width: '200px' }} />
                <PlaceholderExampleLineLengthWithHeader style={{ width: '200px' }} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', width: '50%' }}>
                <PlaceholderExampleLineLengthWithHeader style={{ width: '200px' }} />
                <PlaceholderExampleLineLengthWithHeader style={{ width: '200px' }} />
              </div>
            </div>
            <Button style={{ marginTop: '20px' }} color='green'>
            Next
            </Button>
          </Form>)}
          {step === 4 && (
            <Message
              success
              header='Form Completed'
              content="You're all signed up for the newsletter"
            />
          )}
        </React.Fragment>
      </React.Fragment>
    )
  }
}
