import './App.css';
import UseEffectExample from './hooks/UseEffectExample';
import { ThemeProvider, useTheme } from './components/theme/ThemeContext';
import ThemeSwitch from './components/theme/ThemeSwitch';
import Greet from './components/basics/Greet';
import Todo from './hooks/useState/Todo';

function App() {
  
  const { theme } = useTheme();
  
  return (
      <div className={`App ${theme}`}>
        <div>
          {/* checkbox for switching theme for the whole app*/}
          <ThemeSwitch />
        </div>
        <div>
          {/* <Greet /> */}
        </div>
        <div>
          <Todo />
        </div>
        <div>
          {/* Understanding useEffect */}
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
