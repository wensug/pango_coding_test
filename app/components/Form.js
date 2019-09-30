import React from 'react';
import Select from './Select';
import styled from 'styled-components';

const PageSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  align-items: center;
  padding-right: 1rem;
  padding-left: 1rem;
`;

const FormSection = styled.div`
  flex-basis: 0;
  flex-grow: 1;
  justify-content: center;
  text-align: left;
  margin: 1em;
  padding: 1em;
  border: 1px solid grey;
  border-radius: 4px;
`;

const Label = styled.label`
  font-size: 1.1em;
  padding-right: 1em;
  font-weight: bold;
`;

const SubLabel = styled.span`
  font-size: 1em;
`;

const SectionOne = styled.div`
  margin: 1em;
  padding: 1em;
`;

const SectionTwo = styled.div`
  margin: 1em;
  padding: 1em;
  font-weight: bold;
`;

const UnderLine = styled.div`
  display: block;
  height: 1px;
  border: 0;
  border-top: 1px solid #ccc;
  margin: 1em 0;
  padding: 0;
`;

class Form extends React.Component {
  state = {
    influencerName: 'Zoe Sugg',
    influencerFee: '',
    influencerUsageFee: '',
    influencerTotalFee: 0,
    postOptions: ['Post', 'Story', 'Video'],
  };

  onChangeFee(e) {
    this.setState({ influencerFee: e.target.value });
  }

  onChangeUsageFee(e) {
    this.setState({ influencerUsageFee: e.target.value });
  }

  onChangeTotalFee(e) {
    this.setState({ influencerTotalFee: e.target.value });
  }

  onChangePost(e) {
    this.setState(
      { postOptions: [...new Set(this.state.postOptions, e.target.value)] },
      console.log(this.state),
    );
  }
  handleSubmit(event) {
    event.preventDefault(event);
    const data = this.state; // data can be used to send the data to the server
  }

  handleClearForm(event) {
    event.preventDefault();
    this.setState({
      influencerFee: '',
      influencerUsageFee: '',
      influencerTotalFee: 0,
      postOptions: [],
    });
    // redirect the HomePage
  }

  render() {
    const { influencerFee, influencerUsageFee } = this.state;
    const total = +influencerFee + +influencerUsageFee;
    return (
      <PageSection>
        <h1>Define Influencer Deliverables</h1>
        <span>0 of 2 complete</span>
        <form onSubmit={e => this.handleSubmit(e)}>
          <FormSection>
            <header>
              <h1>{this.state.influencerName}</h1>
            </header>
            <UnderLine />
            <SectionOne>
              <div>
                <Label>Influencer Fee</Label>
                <SubLabel>
                  How much are you paying Zoe for the agreed deliverables?
                </SubLabel>
                <input
                  type="number"
                  value={this.state.influencerFee}
                  onChange={e => this.onChangeFee(e)}
                />
              </div>
              <div>
                <Label>Usage Fee</Label>
                <SubLabel>
                  Are you paying Zoe a usage fee for this content?
                </SubLabel>
                <input
                  type="number"
                  value={this.state.influencerUsageFee}
                  onChange={e => this.onChangeUsageFee(e)}
                />
              </div>
              <div>
                <Label>Total fee:</Label>
                <input
                  type="number"
                  value={this.state.influencerTotalFee}
                  value={total}
                  onChange={e => this.onChangeTotalFee(e)}
                />
              </div>
            </SectionOne>
            <UnderLine />
            <SectionTwo>
              <Label>Social deliverables</Label>
              <p>What posts have you asked Zoe to do?</p>
              <div>
                <Select
                  title="INSTAGRAM"
                  name="instagram"
                  options={this.state.postOptions}
                  value={this.state.postOptions.value}
                  placeholder={'Select post type'}
                  onChangePost={this.onChangePost.bind(this)}
                />
              </div>
              <div>
                <Select
                  title="YOUTUBE"
                  name="youtube"
                  options={this.state.postOptions}
                  value={this.state.postOptions.value}
                  placeholder={'Select post type'}
                  onChangePost={this.onChangePost.bind(this)}
                />
              </div>
              <div>
                <Select
                  title="FACEBOOK"
                  name="facebook"
                  options={this.state.postOptions}
                  value={this.state.postOptions.value}
                  placeholder={'Select post type'}
                  onChangePost={this.onChangePost.bind(this)}
                />
              </div>
            </SectionTwo>
            <UnderLine />
            <div>
              <button>Save</button>
              <button onClick={e => this.handleClearForm(e)}>Cancel</button>
            </div>
          </FormSection>
        </form>
      </PageSection>
    );
  }
}

export default Form;
