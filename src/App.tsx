import { Component } from 'react';

type State = {
  pressedKey: string,
  isKeyPressed: boolean,
};

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    pressedKey: '',
    isKeyPressed: false,
  };

  componentDidMount() {
    window.addEventListener('keyup', this.handleKeyup);
  }

  componentWillUnmount() {
    window.removeEventListener('keyup', this.handleKeyup);
  }

  handleKeyup = (event: KeyboardEvent) => {
    const { key } = event;

    this.setState({
      pressedKey: key,
      isKeyPressed: true,
    });
  };

  render() {
    const { pressedKey, isKeyPressed } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {isKeyPressed ? `The last pressed key is [${pressedKey}] ` : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}
