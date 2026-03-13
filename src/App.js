import './App.css';
import UseEffectExample from './hooks/useEffect/UseEffectExample';
import { ThemeProvider, useTheme } from './components/theme/ThemeContext';
import ThemeSwitch from './components/theme/ThemeSwitch';
import Greet from './components/basics/Greet';
import Todo from './hooks/useState/Todo';
import RedPanelWithFetch from './components/higher-order-components/RedPanelWithFetch';
import YellowPanelWithFetch from './components/higher-order-components/YellowPanelWithFetch';

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
        <div>
          <RedPanelWithFetch />
          <YellowPanelWithFetch />
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
