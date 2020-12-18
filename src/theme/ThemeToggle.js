import "./ThemeToggle.css"
import React from "react"
import ThemeContext from "./ThemeContext"
import Theme from "./Theme"

class ThemeToggle extends React.Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {({ theme, toggleTheme }) => (
          <div className={theme === Theme.LIGHT ? "toggle" : "toggle inverted"}>
            <input type="checkbox" onChange={toggleTheme} checked={theme === Theme.DARK} className="checkbox" id="chk" />
            <label className="label" htmlFor="chk">
              <i className="fas fa-moon"></i>
              <i className="fas fa-sun"></i>
              <div className="ball"></div>
            </label>
          </div>
        )}
      </ThemeContext.Consumer>
    )
  }
}

export default ThemeToggle
