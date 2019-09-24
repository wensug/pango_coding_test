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
    influencer: {
      name: 'Zoe Sugg',
      fee: '',
      usageFee: '',
      totalFee: 0,
    },
    postOptions: ['Post', 'Story', 'Video'],
    contentOptions: [
      'Event',
      'Influencer blog content',
      'Brand Website content',
      'Newsletter',
      'In-store appearance',
      'Other',
    ],
  };

  handleChange() {}
  render() {
    return (
      <PageSection>
        <h1>Define Influencer Deliverables</h1>
        <span>0 of 2 complete</span>
        <form>
          <FormSection>
            <header>
              <h1>{this.state.influencer.name}</h1>
            </header>
            <UnderLine />
            <SectionOne>
              <div>
                <Label>Influencer Fee </Label>
                <SubLabel>
                  How much are you paying Zoe for the agreed deliverables?
                </SubLabel>
                <input
                  name="fee"
                  type="number"
                  value={this.state.influencer.fee}
                  onChange={e => this.handleChange(e)}
                />
              </div>
              <div>
                <Label>Usage Fee</Label>
                <SubLabel>
                  Are you paying Zoe a usage fee for this content?
                </SubLabel>
                <input
                  name="usageFee"
                  type="number"
                  value={this.state.influencer.usageFee}
                  onChange={e => this.handleChange(e)}
                />
              </div>
              <div>
                <Label>Total fee:</Label>
                <input
                  name="totalFee"
                  type="number"
                  value={this.state.influencer.totalFee}
                  onChange={e => this.handleChange(e)}
                />
              </div>
            </SectionOne>
            <UnderLine />
            <SectionTwo>
              <Label>Social deliverables</Label>
              <p>What posts have you asked Zoe to do?</p>
              <div>
                <Select
                  title={'INSTAGRAM'}
                  name={'instagram'}
                  options={this.state.postOptions}
                  value={this.state.postOptions.value}
                  placeholder={'Select post type'}
                  handleChange={this.handleInput}
                />
              </div>
              <div>
                <Select
                  title={'YOUTUBE'}
                  name={'youtube'}
                  options={this.state.postOptions}
                  value={this.state.postOptions.value}
                  placeholder={'Select post type'}
                  handleChange={this.handleInput}
                />
              </div>
              <div>
                <Select
                  title={'FACEBOOK'}
                  name={'facebook'}
                  options={this.state.postOptions}
                  value={this.state.postOptions.value}
                  placeholder={'Select post type'}
                  handleChange={this.handleInput}
                />
              </div>
            </SectionTwo>
            <UnderLine />

            <div>
              <button>Save</button>
              <button>Cancel</button>
            </div>
          </FormSection>
        </form>
      </PageSection>
    );
  }
}

export default Form;
