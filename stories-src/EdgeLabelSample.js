import React from 'react';
import {
  Sigma,
  RandomizeNodePositions,
  RelativeSize,
  EdgeShapes,
  ForceAtlas2
} from '../src/index';

class EdgeLabelSample extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      graph: {
        nodes: [
          { id: 'a', label: 'A', color: '#123dc1', c2: 'black', size: 30 },
          { id: 'b', label: 'B', color: '#123211', c2: 'red', size: 5 },
          { id: 'c', label: 'C', color: '#44d311', c2: 'blue', size: 8 }
        ],
        edges: [
          { id: 'a_to_b', source: 'a', target: 'b', label: 'A -> B', size: 10 },
          { id: 'b_to_c', source: 'b', target: 'c', label: 'B -> C', size: 2 },
          { id: 'c_to_a', source: 'c', target: 'a', label: 'C -> A', size: 7 },
          { id: 'b_to_a', source: 'b', target: 'a', label: 'B -> A', size: 3 }
        ]
      },
      nodeColorMapping: 'color'
    };
  }

  changeColorMapping = () => {
    console.log('changing colors');
    this.setState({
      nodeColorMapping: 'c2'
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.changeColorMapping}>Click</button>
        <div>
          <Sigma
            renderer="canvas"
            graph={this.state.graph}
            settings={{
              drawEdges: true,
              drawEdgeLabels: true,
              minNodeSize: 1,
              maxNodeSize: 100
            }}
            nodeColorMapping={this.state.nodeColorMapping}
          >
            <EdgeShapes default="curvedArrow" />
            <RandomizeNodePositions>
              <ForceAtlas2 iterationsPerRender={1} timeout={10000} />
              <RelativeSize initialSize={15} />
            </RandomizeNodePositions>
          </Sigma>
        </div>
      </div>
    );
  }
}

export default EdgeLabelSample;
