import './App.css';
import { Text, useTheme } from '@itwin/itwinui-react';
import { SerachAreaComponent } from './components/SearchAreaComponent.jsx';

function App() {
  useTheme('dark');
  return (
    <div className="main-container">
      <Text
        variant="headline"
        style={{ fontWeight: 'bold', textAlign: 'center' }}
      >
        Github Search
      </Text>
      <Text variant="subheading" style={{ textAlign: 'center' }}>
        Search any github profile in the box below.
      </Text>
      <SerachAreaComponent />
    </div>
  );
}

export default App;
