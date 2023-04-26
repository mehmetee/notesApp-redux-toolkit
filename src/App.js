import NotesApp from './screen/NotesApp';
import { Provider } from 'react-redux';
import {store} from '../src/context/store' 
export default function App() {
  return (
    <Provider store={store}>
        <NotesApp />
    </Provider>
  );
}


