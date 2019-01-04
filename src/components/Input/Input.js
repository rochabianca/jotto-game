import React, { Component } from 'react';
import { connect } from 'react-redux';

import { guessWord } from '../../actions';

export class UnconnectedInput extends Component {
  /**
   * Create ref for input box
   * @method constructor
   * @param {object} props - Component Props
   * @returns {undefined}
   */
  constructor(props) {
    super(props);
    this.inputBox = React.createRef();
  }

  submitGuessedWord = evt => {
    // don't submit form
    evt.preventDefault();
    const guessedWord = this.inputBox.current.value;
    if (guessedWord && guessWord.length > 0) {
      this.props.guessWord(guessedWord);
    }
  };
  /**
   * Render the component
   * @method Render
   * @returns {JSX.Element} - Rendered Component
   */
  render() {
    const contents = this.props.success ? null : (
      <form className='form-inline'>
        <input
          type='text'
          ref={this.inputBox}
          data-test='input-box'
          className='mb-2 mx-sm-3'
          id='word-guess'
          placeholder='enter guess'
        />
        <button
          data-test='submit-button'
          type='submit'
          className='btn btn-primary mb-2'
          onClick={this.submitGuessedWord}
        >
          Submit
        </button>
      </form>
    );

    return <div data-test='component-input'>{contents}</div>;
  }
}

const mapStateToProps = ({ success }) => {
  return { success };
};

export default connect(
  mapStateToProps,
  { guessWord }
)(UnconnectedInput);
