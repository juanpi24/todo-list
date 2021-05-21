import React from 'react';

export class Countries extends React.Component {
  constructor() {
    super();
    this.state = {
      someKey: 'Paises'
    };
  }

  render() {
    return (  <div class="alert alert-primary" role="alert">
    {this.state.someKey}
  </div>
  );
  }
}


