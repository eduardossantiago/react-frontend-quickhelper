import React from 'react';

export default class Inicial extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                <div className="titulo">
                    <span className="titulo__fila">Fila</span><br/> 
                    <span className="titulo__num_fila">29 </span><span style={{fontSize:'20px'}}>pessoas</span> <br />
                    <span>Tempo médio de atendimento: </span><span style={{fontSize:'25px'}}>6 </span> <span>minutos </span> <br />
                    <button className="iniciar-atendimento">
                       INICIAR ATENDIMENTO
                    </button><br/>
                
                    <span style={{fontSize:'25px'}}>Atendimentos Feitos Hoje</span>
                </div>
                <div className="div-tabela">
                    <table className="tabela-usuarios">
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>Estado</th>
                            <th>Hora Finalizado</th>
                            <th>Opções</th>
                        </tr>
                        <tr>
                            <td className="usuario-id">28255444</td>
                            <td>Daniel dos Santos</td>
                            <td>Minas Gerais</td>
                            <td>11/09/2018 15:28</td>
                            <td>

                                <a href="blablablabla">a b c</a>
                                <a href="blablablabla">a b c</a>
                                <a href="blablablabla">a b c</a>
                            </td>
                        </tr>
              
                    </table>
                </div>
            </div>
        )
    }
}