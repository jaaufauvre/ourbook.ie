import "./App.css"
import Slideshow from "react-slidez"
import React from "react"
import Theme from "./theme/Theme"
import ThemeToggle from "./theme/ThemeToggle"
import ThemeContext from "./theme/ThemeContext"

class App extends React.Component {
  static pageBaseUrl = "https://cdn.jsdelivr.net/gh/jaaufauvre/ourbook.ie/public/Book/" // https://raw.githubusercontent.com/jaaufauvre/ourbook.ie/master/public/Book/
  static pageRatio = 4 / 5
  static pageCount = 30

  state = {
    height: window.innerHeight,
    width: window.innerWidth,
    theme: Theme.LIGHT
  }

  toggleTheme = () => {
    this.setState({ theme: Theme.next(this.state.theme) })
  }

  componentDidMount() {
    window.addEventListener("resize", this.resize)
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.resize)
  }

  resize = () => {
    this.setState({ width: window.innerWidth, height: window.innerHeight })
  }

  render() {
    let { width, height } = this.state
    const isPortrait = width / height < App.pageRatio
    const actualWidth = isPortrait ? width : height * App.pageRatio
    const actualHeight = isPortrait ? width / App.pageRatio : height

    let slides = []
    Array.from(Array(App.pageCount)).forEach((a, i) => {
      slides[i] = App.pageBaseUrl + String(i).padStart(2, "0") + ".jpg"
    })

    return (
      <ThemeContext.Provider
        value={{
          theme: this.state.theme,
          toggleTheme: this.toggleTheme
        }}>
        <div className={this.state.theme === Theme.DARK ? "main inverted" : "main"}>
          <Slideshow
            autoplay={false}
            showIndex
            showArrows
            enableKeyboard
            defaultIndex={0}
            slides={slides}
            effect="fade"
            height={actualHeight}
            width={actualWidth}
          />
          <ThemeToggle />
        </div>
      </ThemeContext.Provider>
    )
  }
}

export default App
