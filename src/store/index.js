import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { reducer as basket } from './basket';

const reducer = combineReducers({basket});

export default configureStore({reducer});

