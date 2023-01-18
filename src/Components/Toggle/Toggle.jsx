import React from 'react'
import './Toggle.css'

import WbSunnyIcon from '@mui/icons-material/WbSunny';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { themeContext } from '../../Context'
import { useContext } from 'react'

const Toggle = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode

    const handleClick = () => {
        theme.dispatch({type: 'toggle'})
    }
  return (
<div className="toggle"  onClick={handleClick}>
    <DarkModeIcon />
    <WbSunnyIcon />
    <div className="t-button"
    style={darkMode? {left:'2px'}: {right: '2px'}}></div>
</div>
    )
}

export default Toggle