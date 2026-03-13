import './App.css';
import UseEffectExample from './hooks/useEffect/UseEffectExample';
import { ThemeProvider, useTheme } from './components/theme/ThemeContext';
import ThemeSwitch from './components/theme/ThemeSwitch';
import Greet from './components/basics/Greet';
import Todo from './hooks/useState/Todo';
import YellowPanelWithFetch from './components/higher-order-components/YellowPanelWithFetch';
import RedPanelWithFetchAndScroller from './components/higher-order-components/RedPanelWithFetchAndScroller';

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
          <h1>Higher Order Components</h1>
          <YellowPanelWithFetch />
          <ul>
            <li>This is an example of a Higher Order Component</li>
            <li>The YellowPanel component was wrapped using WithFetch to get YellowPanelWithFetch component</li>
            <li>The WithFetch component has the common cross cutting concern of fetching data using the URL provided</li>
          </ul>
          
          <RedPanelWithFetchAndScroller />
          <ul>
            <li>This is an example of a component which has been wrapped with higher order components twice</li>
            <li>First it was wrapped with WithFetch to get RedPanelWithFetch HOC</li>
            <li>Then the RedPanelWithFetch was again wrapped with WithScroller to get RedPanelWithFetchAndScroller HOC</li>
            <li>Then the WithScroller HOC adds a coordinates prop to the wrapped component to display ClientX and ClientY</li>
          </ul>
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
