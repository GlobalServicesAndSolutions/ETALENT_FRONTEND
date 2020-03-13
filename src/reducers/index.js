import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router'
import Settings from './Settings';
import Auth from './Auth';
import EmployerSection from './EmployerReducers/EmployerSection';
import JobReducers from './JobReducers/JobReducers';


export default (history) => combineReducers({
  router: connectRouter(history),
  settings: Settings,
  auth: Auth,
  employerSection:EmployerSection,
  jobReducer:JobReducers,
});
