import Navigation from './router/navigation';
import { Provider } from 'react-redux'
import { store } from './store';
export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}


