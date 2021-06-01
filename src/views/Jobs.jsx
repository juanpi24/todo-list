import React from 'react';
import axios from 'axios';

export class Jobs extends React.Component {
  constructor() {
    super();
    this.state = {
      jobs:[ ],
      withError:false,
      newJobs:{
          name:'',
          company:'',
          city:'',
          country:''
      }
    };
  }

componentDidMount(){
   // axios.get('https://my-json-server.typicode.com/juanpi24/fake-todo-list-api/jobs')
   axios.get('https://api-fake-pilar-tecno.herokuapp.com/jobs?_expand=organization')
         .then(res => this.setState({
             jobs: res.data
         }))
         .catch(err => this.setState({
             withError:TextTrackCue
         }))

}


  /*Agrega Nuevo Trabajo*/
  addJobs (newJobs) {
    this.setState (
        {
          jobs: [...this.state.jobs,{
              name:this.state.newJobs.name,
              company:this.state.newJobs.company,
              city:this.state.newJobs.city,
              country:this.state.newJobs.country
            }]
        }
      )
  }

   /*Elimnar Trabajo*/
   deleteJobs(id){

    this.setState ({
          jobs: this.state.jobs.filter((jobs, index)=> index!==id)
        })
   }
   /*Evento Submit*/ 
   onNewJobstSubmit(event){
   event.preventDefault();
   this.setState ({
    jobs: [...this.state.jobs, this.state.newJobs]
        })
   }

/*Evento Nome*/
  handleNewJobsName(event){

    this.setState( prevState => (

        {
            newJobs: 
          {...prevState.newJobs,
            name: event.target.value
          }
        }
    )
    )
     }
/*Evento Company*/
handleNewJobsCompany(event){

    this.setState( prevState => (
    
        {
            newJobs: 
            {...prevState.newJobs,
             company: event.target.value
        }
        }
    )
    )
    }
/*Evento City*/
handleNewJobsCity(event){

    this.setState( prevState => (
        
        {
            newJobs: 
            {...prevState.newJobs,
           city: event.target.value
            }
        }
        )
    )
}
/*Evento Country*/
handleNewJobsCountry(event){

    this.setState( prevState => (
            
    {
        newJobs: 
        {...prevState.newJobs,
            country: event.target.value
        }
    }
    )
     )
 }

  render() {
    return(
        <>

<div class="container">
{this.state.withError && <div class="alert alert-primary" role="alert">Hubo un Error al Conectarse a la API de JOBS
    </div>} 
<div className="row">
<div className="col">
<div className="panel panel-default">
<div className="panel-heading">
<h3 className="panel-title">Cargar Trabajos</h3>
</div>
<div className="panel-body list-group-item mb-3">
    
        <form clasName="" onSubmit={(e) => this.onNewJobstSubmit(e)}>
        <div class="form-group col-sm-6">
            <input  class="form-control" type="text" required placeholder="Ingrese Nombre" type="text"  value={this.state.newJobs.name} onChange={(e) => this.handleNewJobsName(e)}/> 
        </div>
        <div class="form-group col-sm-6">
            <input  class="form-control" type="text" required placeholder="Ingrese Compañia" type="text"  value={this.state.newJobs.company} onChange={(e) => this.handleNewJobsCompany(e)}/> 
        </div>
        <div class="form-group col-sm-6">
            <input  class="form-control" type="text" required placeholder="Ingrese Ciudad" type="text"  value={this.state.newJobs.city} onChange={(e) => this.handleNewJobsCity(e)}/> 
        </div>
        <div class="form-group col-sm-6">
            <input  class="form-control" type="text" required placeholder="Ingrese Pais" type="text"  value={this.state.newJobs.country} onChange={(e) => this.handleNewJobsCountry(e)}/>
        </div>
        <div class="form-group col-sm-6">
       <button type="submit" class="btn btn-success">Agregar Oferta</button> 
       </div>
       </form>
             
</div>
</div>
</div>



<div className="col">
<div className="panel panel-default">
<div className="panel-heading">
<h2 className="panel-title">Lista de Trabajos</h2>
</div>
<div className="panel-body">
    <ul className="list-group">
   
        { this.state.jobs.map((elem,index) => {return <li className="list-group-item mb-3" key={index}>
         {/* <h5>Trabajos</h5>
          {elem.name}
          <h5>Compañia</h5>
          {elem.company}
          <h5>Ciudad</h5>
          {elem.city}
          <h5>Pais</h5>
          {elem.country}
          */}

 <table class="table">
    <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Position</th>
      <th scope="col">Description</th>
      <th scope="col">organization</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">{index}</th>
      <td> {elem.position}</td>
      <td> {elem.description}</td>
      <td> {elem.organization.name}</td>
      <td> <p>  
            <button type="button" class="btn btn-danger" onClick={() => this.deleteJobs(index)}>Eliminar</button>
        </p></td>
    </tr>
  </tbody>
</table>
        
        </li>
           
        })}
        
     </ul>
</div>
</div>
</div>

</div>
</div>
 </>
)
}
}