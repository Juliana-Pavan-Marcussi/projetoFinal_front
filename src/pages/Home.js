import React from 'react';
import imgagemEscolhida from '../assets/download.jpg';
import './Home.css';
import { FaTv } from 'react-icons/fa';
import { FaScroll } from 'react-icons/fa';
import { FaMoneyBillAlt } from 'react-icons/fa';

function Home() {
    return (
        <div>
            <img src={imgagemEscolhida} width="650px" height="350px" class="image"/>
            <p class="info-text"><FaTv class="icon" />Aulas sob demanda com conteúdo escolhido.</p>
            <p class="info-text"><FaScroll class="icon" />Professores qualificados e especializados.</p>
            <p class="info-text"><FaMoneyBillAlt class="icon" />Retorno do investimento.</p>
            <div class="footer">
                <div class="footer-info">
                    <h5 class="footer-info-title">Aulas Sob Demanda</h5>
                    <p>Agende sua aula de acordo com o horádio e a necessidade</p>
                </div>
                <div class="footer-info">
                    <h5 class="footer-info-title">Professores Qualificados</h5>
                    <p>Profissionais com ampla vivencia de mercado e especializações em diversas áreas</p>
                </div>
                <div class="footer-info">
                    <h5 class="footer-info-title">Retorno do Investimento</h5>
                    <p>Você investe para tirar dúvidas específicas, economizando tempo e dinheiro</p>
                </div>
            </div>
        </div>
    )
}

export default Home
