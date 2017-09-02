import React from 'react';
import ReactDOM from 'react-dom';
import 'font-awesome/css/font-awesome.css';
import App from './App';
import './shared/styles/normalize.global.css';
import './shared/styles/react-table.global.css';
import './index.css';

// const StateStore = { inc, dec, evolve };
// const decCount = evolve({ count: dec });
// const incCount = evolve({ count: inc });
//
// export default class StateStore extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: this.process.nextTick(() => {
//         this.StateStore;
//       })
//     };
//     this.increase = this.increase.bind(this);
//     this.decrease = this.decrease.bind(this);
//   }
//
//   increase() {
//     this.setState(incCount);
//   }
//
//   decrease() {
//     this.setState(decCount);
//   }
//
//   render() {
//     return (
//       <StateStore>
//         <button onClick={this.increase}>+</button>
//         <div>
//           {this.state.count}
//         </div>
//         <button onClick={this.decrease}>-</button>
//       </StateStore>
//     );
//   }
// }

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
