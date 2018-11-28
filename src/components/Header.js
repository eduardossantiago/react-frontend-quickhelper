import React from 'react';

class Header extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            opcaoAtiva : 'inicial'
        };

    }




    render(){ 
        return(
            <div className="header">
        
            <span className="logotipo">QH</span>
            <div>

                <div className="menu-items">
                    <button  onClick={() => {
                        this.props.handleOpcaoAtiva("inicial")
                        this.setState(() => {
                            opcaoAtiva:"inicial"
                        })
                    }}>Inicial</button>

                    <button  onClick={() => {
                        this.props.handleOpcaoAtiva("chamados")
                        this.setState(() => {
                            opcaoAtiva:"chamados"
                        })
                    }}>Chamados</button>


                    <button  onClick={() => {
                        this.props.handleOpcaoAtiva("usuarios")
                        this.setState(() => {
                            opcaoAtiva:"usuarios"
                        })
                    }}>Usuários</button>

                    <button  onClick={() => {
                        this.props.handleOpcaoAtiva("relatorios")
                        this.setState(() => {
                            opcaoAtiva:"relatorios"
                        })
                    }}>Relatórios</button>


                    <button className="logout">Logout</button>
                    
                </div>
                
            </div>
        </div>
    )};
};


export default Header;