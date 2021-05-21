import React from 'react';

export class Companies extends React.Component {
  constructor() {
    super();
    this.state = {
      someKey: 'Compañias'
    };
  }

  render() {
    return (
      <div class="alert alert-primary" role="alert">
      {this.state.someKey}
    </div>
    );
  }
}


