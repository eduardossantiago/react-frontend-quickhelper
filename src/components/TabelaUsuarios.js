import React from 'react';

export default class TabelaUsuario extends React.Component{
    constructor(props){
        super(props);
    }

    render() {
        return(
            <div>
                <table className="tabela-usuarios">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>Autorização</th>
                            <th>Última Modificação</th>
                            <th>Opções</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        {this.props.usuarios.map((usuario, index) => (
                            <tr key={usuario.id}>
                                <td>{usuario.id}</td>
                                <td>{usuario.nome}</td>
                                <td>{usuario.autorizacao}</td>
                                <td>{usuario.ultimaModificacao}</td>
                                <td><button onClick={() =>{
                                        this.props.excluirUsuario(usuario.id);
                                }
                                }>Excluir</button></td>
                            </tr>
                        ))}
                    </tbody>


                </table>
            </div>
        )
    }
}