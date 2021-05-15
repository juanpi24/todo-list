import React from 'react';

export class Jobs extends React.Component {
  constructor() {
    super();
    this.state = {
      jobs:[
      {name:'FrontEnd',company:'UNLaR',city:'La Rioja',country:'Argentina'},
      ],
      newJobs:{
          name:'',
          company:'',
          city:'',
          country:''
      }
    };
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
<div class="row">
<div class="col-sm-6">


<div class="panel panel-default">
<div class="panel-heading">
<h3 class="panel-title">Cargar Trabajos</h3>
</div>
<div class="panel-body">
    
        <form onSubmit={(e) => this.onNewJobstSubmit(e)}>
        <div class="form-group col-sm-5">
            <input  class="form-control" type="text" required placeholder="Ingrese Nombre" type="text"  value={this.state.newJobs.name} onChange={(e) => this.handleNewJobsName(e)}/> 
        </div>
        <div class="form-group col-sm-5">
            <input  class="form-control" type="text" required placeholder="Ingrese Compañia" type="text"  value={this.state.newJobs.company} onChange={(e) => this.handleNewJobsCompany(e)}/> 
        </div>
        <div class="form-group col-sm-5">
            <input  class="form-control" type="text" required placeholder="Ingrese Ciudad" type="text"  value={this.state.newJobs.city} onChange={(e) => this.handleNewJobsCity(e)}/> 
        </div>
        <div class="form-group col-sm-5">
            <input  class="form-control" type="text" required placeholder="Ingrese Pais" type="text"  value={this.state.newJobs.country} onChange={(e) => this.handleNewJobsCountry(e)}/>
        </div>
       <button type="submit" class="btn btn-success">Agregar Oferta</button> 
       </form>
             
</div>
</div>
</div>


<div class="col-sm-6">
<div class="panel panel-default">
<div class="panel-heading">
<h2 class="panel-title">Lista de Trabajos</h2>
</div>
<div class="panel-body">
    <ul>
        { this.state.jobs.map((elem,index) => {return <li key={index}>
            <h3>{elem.name}</h3>
            <p>{elem.company}</p>
            <p>{elem.city}</p>
            <p>{elem.country}</p>
            <button type="button" class="btn btn-danger" onClick={() => this.deleteJobs(index)}>Eliminar</button>
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