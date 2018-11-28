import React from 'react';
import Header from './Header'
import Chamados from './Chamados'
import NovoUsuario from './NovoUsuario';
import Usuarios from './Usuarios'
import Footer from './Footer'
import Inicial from './Inicial'




export default class QuickHelp extends React.Component{
    constructor(props){
        super(props);
        this.handleOpcaoAtiva = this.handleOpcaoAtiva.bind(this);
        this.adicionarUsuario = this.adicionarUsuario.bind(this);
        this.excluirUsuario = this.excluirUsuario.bind(this);

        this.state = {
            opcaoAtiva : 'inicial',
            usuarios : [{
                id:123,
                nome:'Eduardo',
                autorizacao:'Gerente',
                ultimaModificacao: '15/03/2018'

            }]
        }
    }



    handleOpcaoAtiva(opcao){
        
        const opcaoEscolhida = opcao;

        this.setState(() => {
            return {
            opcaoAtiva: opcaoEscolhida
            }
        })        
    }

    adicionarUsuario(usuario){
        this.setState((prevState) => ({
            usuarios : prevState.usuarios.concat(usuario)
        }))
    }

    excluirUsuario(id) {
        this.setState((prevState) => ({
            usuarios:prevState.usuarios.filter(usuario => usuario.id !== id)
        }))
    }




    render(){

        return (
            <div>
                <Header handleOpcaoAtiva={this.handleOpcaoAtiva}/>


                
                <div className="container">
                    {this.state.opcaoAtiva == "inicial" ? <Inicial /> : undefined}


                    {this.state.opcaoAtiva == "usuarios" ? 
                        <Usuarios 
                            handleOpcaoAtiva= {this.handleOpcaoAtiva}
                            usuarios = {this.state.usuarios}
                            excluirUsuario={this.excluirUsuario}
                        /> 
                        : undefined
                    }
               
                    {this.state.opcaoAtiva == "novoUsuario" ?  
                        <NovoUsuario 
                            handleOpcaoAtiva={this.handleOpcaoAtiva}
                            adicionarUsuario={this.adicionarUsuario}
                            

                        /> 
                        
                        : undefined
                    }


                    {this.state.opcaoAtiva == "chamados" ? <Chamados /> : undefined}
                </div>
                <Footer />
            </div>
        )
    }
}
