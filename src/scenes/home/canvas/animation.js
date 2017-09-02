import React, { Component } from 'react';
// import axios from 'axios';
// import ReactDOM from 'react-router-dom';

class CanvasAnimation extends Component {
  state = {
    data: []
  };

  componentDidMount() {
    this.loadData();
  }

  loadData() {
    function animation(json) {
      return json.map(function (data) {
        return (
          new CanvasSprite(
            document.getElementById(data.id),
            data.width,
            data.height,
            data.spriteSheetURL,
            data.rows,
            data.columns,
            data.totalFrames
          )
        );
      });
    }
    fetch(request)
      .then(response => response.json())
      .then(json => {
        console.log(json);
        this.setState({
          data: json,
          animation: animation(json)
        });
      });
  }

  // componentDidMount() {
  //   this.loadData();
  // }

  handleInteraction(e) {
    const offsetY = e.clientY - e.node.getBoundingClientRect().top;
    const relY = offsetY/this.state.data.height;
    this.props.animation.setFrame(relY);
  }

  render() {
    const canvases = this.state.data.map(function (data) {
      return (
        <canvas
          id={data.id}
          width={data.width}
          height={data.height}
          style={{ border: '5px white' }}
          onMouseOver={this.handleInteraction}
        />
      );
    });

    return (
        render(
          <CanvasAnimation />,
          content
        )
    );
  }
}
