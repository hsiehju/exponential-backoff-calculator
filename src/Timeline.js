import React from 'react';
import Table from 'react-bootstrap/Table';


export default class Timeline extends React.Component {
  render() {
    return (
        <div style={{maxWidth: '700px'}}>
        <h2>
            Backoff Simulation
        </h2>
        <Table striped bordered hover size="sm">
            <thead>
                <tr>
                <th>Run</th>
                <th>Seconds</th>
                <th>Timestamp</th>
                </tr>
            </thead>
            <tbody>
                {this.props.runNumber.map( runIndex => (
                    <tr>
                        <td>{runIndex}</td>
                        <td>{this.props.runSecond[runIndex]}</td>
                        <td>{this.props.runTimestamp[runIndex]} UTC</td>
                    </tr>
                ))}
            </tbody>
        </Table>
        </div>
    );
  }
}

