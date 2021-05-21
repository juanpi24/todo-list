import React from 'react';

export class Cities extends React.Component {
  constructor() {
    super();
    this.state = {
      someKey: 'Ciudadades'
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

