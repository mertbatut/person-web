import React, { Component } from 'react'
import './style.css'

export default class ToggleButton extends Component {
  constructor(init) {
    super(init);
    this.handleChange = this.handleChange.bind(this);
    this.darkModeEnabled = document.body.classList.contains('dark');
  }

  handleChange({ target }) {
    document.body.classList.toggle('dark', target.checked);
    this.darkModeEnabled = !this.darkModeEnabled;
  }

  render() {
    return (
      <div>
        <label class="switch">
          <input type="checkbox" onClick={this.handleChange} defaultChecked={this.darkModeEnabled} />
          <span class="slider round"></span>
        </label>
        <span className='SwitchSpan'>{this.darkModeEnabled ? "LIGHT MODE" : "DARK MODE"}</span>
      </div>
    )
  }
}
