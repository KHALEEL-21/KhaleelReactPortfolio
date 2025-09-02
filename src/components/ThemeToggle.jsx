import { useTheme } from '../context/ThemeContext';
import "./ThemeToggle.scss";

function ThemeToggle() {
  const { darkMode, setDarkMode } = useTheme();

  return (
    <button onClick={() => setDarkMode(!darkMode)} className='themeButtonStyles'>
      {darkMode ?  <span className='sun-icon' title='LightMode'>🌞</span> : 
      <span className='moon-icon' title='DarkMode'>🌙</span>
      }
    </button>
  );
}

export default ThemeToggle;
