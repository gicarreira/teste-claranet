import React, { Component } from 'react'
import { useNavigate, Navigate, Link, Redirect } from "react-router-dom";
import "../../styles/home/home.css"
import FundoHome from "../../assets/imgs/home/FundoHome.svg"
import LogoFoguete from "../../assets/imgs/home/LogoFoguete.svg"
import Login from '../login/Login';

export default class Home extends Component {
    
    constructor(props, context) {
        super(props, context)
        this.state = {
          emailValido: false,
          senhaValida: false,
          lembrarLog: false,
          dataUriEmail: localStorage.getItem('emaillogin'),
          dataUriSenha: localStorage.getItem('senhalogin')
        }
      }

      lembrarLogin() {
        if (this.lembrarLog==true) {
        localStorage.setItem('emaillogin', this.state.emailUsuario);
        localStorage.setItem('senhalogin', this.state.senhaUsuario);
    }
        else {
        localStorage.clear();
        }
      }

      usuarioEntrada() {
        if (this.state.emailUsuario === "claranet@br.clara.net") {
            this.setState({ emailValido: true })
        }
        else {
            this.setState({ emailValido: false })
        }
    }

      senhaEntrada() {
        if (this.state.senhaUsuario === "claranet1996") {
            this.setState({ senhaValida: true })
        }
        else {
            this.setState({ senhaValida: false })
        }
    }

    loginHome() {
        if (this.state.emailValido===true && this.state.senhaValida===true) {
            this.setState({ navigate: true })
        }
        else {
            alert("Usuário ou senha inválidos!")
        }
    }

    alterarDados(texto) {
        this.setState({ emailUsuario: texto.split("").filter(n => (String(n) || n == 0)).join("") },
            () => { this.usuarioEntrada() })
    }

      alterarDados2(texto) {
        this.setState({ senhaUsuario: texto.split("").filter(n => (String(n) || n == 0)).join("") },
          () => { this.senhaEntrada() })
      }

    render() {

        return (
            <div className='home'>
            <div className='entrada-login'>
            <img src={LogoFoguete} className="logo-img" alt="" />
            <div className='texto-home'>
            <h1>Bem vindo(a)!</h1>
            <p>Insira suas credenciais para continuar.</p>
            </div>
            <input className="input-email" ref={input => this.textInput = input} inputmode="text"
            placeholder='Email'
            value={(this.state.emailUsuario) || (this.state.dataUriEmail)}
            onChange={(e) => this.alterarDados(e.target.value)} />
            <input className="input-senha" ref={input => this.textInput = input} inputmode="text" type="password"
            placeholder='Senha'
            value={(this.state.senhaUsuario) || (this.state.dataUriEmail)}
            onChange={(e) => this.alterarDados2(e.target.value)} />
            <div className='botao-home'>
            <button className="botao-home" onClick={ () =>  { this.setState({redirect: 'login'})
            this.loginHome() && this.lembrarLogin()}}>Começar</button>
            { this.state.navigate ? <Navigate to='/login' /> : null }
            </div></div>
            </div>
      )
    }
}