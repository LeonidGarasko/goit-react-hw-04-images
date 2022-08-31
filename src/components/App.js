import * as API from './Api';
export class App extends Component {
  state = {
    img: null,
  };
  componentDidMount() {
    const cat = API.fetchImg(cat);
    this.setState({ img: this.cat });
  }

  render() {
    <div></div>;
  }
}
