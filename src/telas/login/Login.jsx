import React, { Component } from 'react'
import { Link, Navigate } from "react-router-dom";
import "../../styles/login/login.css"
import FundoHome from "../../assets/imgs/home/FundoHome.svg"

export default class Login extends Component {
    
    constructor(props, context) {
        super(props, context)
        this.state = {
          volume: 0
        }
      }

    render() {

        return (
            <div className='tela-login'>
            <h1>Bem vindos, Claranet!</h1>
            <p>Vocês podem ver um dos projetos que estou desenvolvendo atualmente neste link <a href="https://gitlab.com/gicarreira/omni-visita-app">aqui</a>.</p>
            <p>Já neste link <a href="https://github.com/gicarreira">aqui</a> vocês encontram alguns repositórios mais antigos de quando comecei a estudar.</p>
            <br />
            <p>Obrigada! :)</p>
            <img src={FundoHome} alt="" />
            </div>
      )
    }
}