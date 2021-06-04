import { Component } from "react";
import './styles.css'

export class Button  extends Component {
  render() {
    const { text } = this.props;
    const yOnClick = this.props.wOnClick;
    const yDisabled = this.props.wDisabled;
    return (
        <button className='button'
            disabled={yDisabled}
            onClick={yOnClick}>
             {text}
        </button>
    );
  }
}
