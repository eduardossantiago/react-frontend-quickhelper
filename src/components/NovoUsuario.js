import React from 'react';
import validator from 'validator';

export default class NovoUsuario extends React.Component{
    constructor(props){
        super(props);
        this.onHandleSubmit = this.onHandleSubmit.bind(this);

    }


    
    onHandleSubmit(e){
        e.preventDefault();

        let tudoOk = true;

        if(!validator.isEmail(formulario.email.value)){
            alert('E-mail invalido')
            formuario.email.focuss();
            tudoOk = false;
        }
        if(validator.isEmpty(formulario.cep.value)){
            alert('CEP não pode estar vazio')
            formulario.cep.focus();
            tudoOk = false;
        }
        if(validator.isEmpty(formulario.nome.value)){
            alert('Nome não pode estar vazio')
            formulario.nome.focus();
            tudoOk = false;
        }
        if(validator.isEmpty(formulario.cpf.value)){
            alert('CPF não pode estar vazio')
            formulario.cpf.focus();
            tudoOk = false;
        } else if(isNaN(formulario.cpf.value)){
            alert("CPF Inválido");
            formulario.cpf.focus();
            tudoOk=false;
        }
        if(validator.isEmpty(formulario.nascimento.value)){
            alert('Nascimento não pode estar vazio')
            formulario.nascimento.focus();
            tudoOk = false;
        }
        
        if(isNaN(formulario.rg.value)){
            alert("RG Inválido");
            formulario.rg.focus();
            tudoOk=false;
        } else if(validator.isEmpty(formulario.rg.value)){
            alert('RG não pode estar vazio')
            formulario.rg.focus();
            tudoOk = false;
        }

        if(tudoOk){
            const usuario = {
                id: Math.floor((Math.random() * 10000) + 1),
                nome: formulario.nome.value,
                autorizacao: formulario.autorizacao.value,
                ultimaModificacao: '27/11/2018'
            }

            this.props.adicionarUsuario(usuario);
            this.props.handleOpcaoAtiva('usuarios');
        }

    }


    render(){
        return(
            <div className="formulario">
                <span className="formulario__title">Novo Usuário</span>

                <div>
                    <form name="formulario" className="formulario__campos">
                        <label>Nome</label>
                        <input name="nome" type="text" id="nome"></input>
                        <label>Nascimento</label>
                        <input name="nascimento" type="text" id="nascimento"></input> <br />
                        <label>Autorização</label>
                        <select name="autorizacao">
                            <option value="Atendente">Atendente</option>
                            <option value="Gerente">Gerente</option>
                            <option value="Auditor">Auditor</option>
                            <option value="Visualização">Visualização</option>
                        </select>
                        <label>CPF</label>
                        <input name="cpf" type="text" id="cpf"></input>
                        <label>RG</label>
                        <input name="rg" type="text" id="rg"></input> <br/>
                        <label>CEP</label>
                        <input name="cep" type="text" id="cep"></input>
                        <label>Endereço</label>
                        <input name="endereco" type="text" id="endereco"></input> <br/>
                        <label>Número</label>
                        <input name="numero" type="text" id="numero"></input>
                        <label>Complemento</label>
                        <input name="complemento" type="text" id="complemento"></input>
                        <label>Cidade</label>
                        <input name="cidade" type="text" id="cidade"></input>
                        <label>UF</label>
                        <input name="uf" type="text" id="uf"></input> <br/>
                        <label>Unidade de Atendimento</label>
                        <input  name="atendimento" type="text" id="atendimento"></input> 
                        <label>E-mail</label>
                        <input type="text" id="e-mail" name="email"></input> <br />
                        <button onClick={this.onHandleSubmit} id="submit">CADASTRAR</button>
                    </form>
                </div>
            </div>
        );
    }
}