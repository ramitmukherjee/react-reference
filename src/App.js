import './App.css';
import UseEffectExample from './hooks/useEffect/UseEffectExample';
import { ThemeProvider, useTheme } from './components/theme/ThemeContext';
import ThemeSwitch from './components/theme/ThemeSwitch';

function App() {
  
  const { theme } = useTheme();
  
  return (
      <div className={`App ${theme}`}>
        <div>
          <ThemeSwitch />
        </div>
        <div>
          <UseEffectExample />
        </div>
      </div>
  );
}

function Root() {
   return (     
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
}

export default Root;
