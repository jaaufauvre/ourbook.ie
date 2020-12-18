import React from "react"

class Theme extends React.Component {
  static DARK = 0
  static LIGHT = 1
  static next = (current) => (current + 1) % 2
}

export default Theme
