import { combineReducers } from 'redux';
import success from './successReducer/successReducer';
import guessedWords from './guessedWordReducer/guessedWordReducer';

export default combineReducers({
  success,
  guessedWords
});
