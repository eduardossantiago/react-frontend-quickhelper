import React from 'react';
import TabelaUsuarios from './TabelaUsuarios'
import NovoUsuario from './NovoUsuario';
import FontAwesome from 'react-fontawesome'

export default class Usuarios extends React.Component{
    constructor(props){
        super(props);


    }

    // excluirUsuario(id) {
    //     this.props.excluirUsuario(id);
    // }




    render(){
        return(
            <div>
                <div className="submenu-header">
                    <div className="submenu">
                        <button className="submenu-item">Sistema</button>
                        <button className="submenu-item">Cliente</button>
                    </div>
                </div>
                <div className="localizar-barra">
                    <button className="button-novo" onClick={() => {
                        this.props.handleOpcaoAtiva('novoUsuario');
                    }}

                    //adicionarUsuario={this.adicionarUsuario}
                    //handleOpcaoAtiva={this.props.handleOpcaoAtiva}
                    >
                         Criar Usuário
                    
                    </button>
                    <input type="text" className="input-localizar" placeholder="Buscar Usuário"/>
                </div>
                
                <TabelaUsuarios usuarios={this.props.usuarios} excluirUsuario={this.props.excluirUsuario}/>
                
            </div>
        );
    }


}