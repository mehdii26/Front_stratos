import React from 'react';
import './FormFicheTech.css'

class FormFicheTech extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            formControls :{
                code : {
                    value: 'code '
                },
                designation : {
                    value : 'designation '
                },
                Catégorie : {
                    value : 'catégorie '
                },
                DateFab : {
                    value : ' '
                },
                DuréeVie : {
                    value : 'Durée '
                },
                Constructeur: {
                    value : 'Constructeur '
                },
            }
        }
    }

    changeHandler = event => {
        const name = event.target.name;
        const value = event.target.value;

        this.setState({
            formControls:{
                ...this.state.formControls,
                [name]: {
                    ...this.state.formControls[name],
                    value
                }
            }
        });
    }

    SubmitFormHandler  = (event)=>{
        console.dir(this.refs.name.value);
    }

    render(){

        return(

            <div className='container' style={{width:'500px'}}>
                <div style={{textAlign:'start',fontSize:'1.4rem',marginBottom:'40px'}}>
                    Fiche technique
                </div>
                <form onSubmit={this.SubmitFormHandler}>
                 <div>
                     
                     <label> code du bien </label>

                 <input type="text" 
                     name="code" 
                     value={this.state.formControls.code.value} 
                     onChange={this.changeHandler} 
              />
                </div>   
                <div>
                    <label>Désignation</label>
                <input type="text" 
                     name="designation" 
                     value={this.state.formControls.designation.value} 
                     onChange={this.changeHandler} 
              />
                </div>  
                <div>
                    <label>Catégorie</label>
                <input type="text" 
                     name="Catégorie" 
                     value={this.state.formControls.Catégorie.value} 
                     onChange={this.changeHandler} 
              />    
                </div>
                    <div>
                        <label>Date de fabrication</label>
                    <input type="Date" 
                     name="Date fabrication" 
                     value={this.state.formControls.DateFab.value} 
                     onChange={this.changeHandler} 
                   
              />
                    </div>
               <div>
                   <label>Durée de vie</label>
               <input type="text" 
                     name="duree de vie" 
                     value={this.state.formControls.DuréeVie.value} 
                     onChange={this.changeHandler} 
              />
               </div>
                <div>
                    <label>Constructeur</label>
                <input type="text" 
                     name="constructeur" 
                     value={this.state.formControls.Constructeur.value} 
                     onChange={this.changeHandler} 
              />
                </div>   
                
                    
                </form>
            </div>
        )
    }
}

export default FormFicheTech;