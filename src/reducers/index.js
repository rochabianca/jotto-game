import { combineReducers } from 'redux';
import success from './successReducer/successReducer';
import guessedWords from './guessedWordReducer/guessedWordReducer';
import secretWord from './secretWordReducer/secretWordReducer';

export default combineReducers({
  secretWord,
  success,
  guessedWords
});
