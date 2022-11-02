import React from "react";
import Ref from './Card'
import styled from "styled-components";

const SwiperSlide = styled.div`
    display: block;
    width: 100%;
    @media only screen and (min-width: 768px) {
        max-width: 25%;
    }
`;

const Row = styled.div`
    display: flex;
    flex-wrap: wrap;
`;
function Slide() {
    return (
        <Row>
            <SwiperSlide>
                <Ref institutionlink="https://www.etecfernandoprestes.com.br/" institution="Fernando Prestes" title="Informática para Internet" titlesub="Technologist (3 years)" data="03/03/2016" type="Web" />
            </SwiperSlide>
            <SwiperSlide>
                <Ref institutionlink="https://www.dio.me/" institution="Digital innovation one" title="Eduzz Fullstack Developer" titlesub="Bootcamp" data="26/11/2021" type="Web" />
            </SwiperSlide>
            <SwiperSlide>
                <Ref institutionlink="https://www.dio.me/" institution="Digital innovation one" title="Introdução aos React Hooks" titlesub="Practical class" data="01/11/2021" type="Web" />
            </SwiperSlide>
            <SwiperSlide>
                <Ref institutionlink="https://www.dio.me/" institution="Digital innovation one" title="Fundamentos de Arquitetura de Sistemas" titlesub="Introductory class" data="09/11/2021" type="Web" />
            </SwiperSlide>
            <SwiperSlide>
                <Ref institutionlink="https://www.dio.me/" institution="Digital innovation one" title="JavaScript ES6 essencial" titlesub="Practical class" data="19/10/2021" type="Web" />
            </SwiperSlide>
            <SwiperSlide>
                <Ref institutionlink="https://www.dio.me/" institution="Digital innovation one" title="Introdução ao TypeScript: Explorando Classes, Tipos e Interfaces" titlesub="Practical class" data="13/10/2021" type="Web" />
            </SwiperSlide>
            <SwiperSlide>
                <Ref institutionlink="https://www.dio.me/" institution="Digital innovation one" title="Projetos ágeis com SCRUM" titlesub="Practical class" data="01/10/2021" type="Enginner" />
            </SwiperSlide>
            <SwiperSlide>
                <Ref institutionlink="https://www.dio.me/" institution="Digital innovation one" title="Microsserviços e Integrações com Node.js" titlesub="Practical class" data="10/11/2021" type="Web" />
            </SwiperSlide>
            <SwiperSlide>
                <Ref institutionlink="https://www.dio.me/" institution="Digital innovation one" title="Criando aplicações móveis multiplataforma com React Native" titlesub="Practical class" data="10/11/2021" type="Mobile" />
            </SwiperSlide>
            <SwiperSlide>
                <Ref institutionlink="https://www.dio.me/" institution="Digital innovation one" title="Trabalhando com Componentes em React" titlesub="Practical class" data="24/10/2021" type="Web" />
            </SwiperSlide>
            <SwiperSlide>
                <Ref institutionlink="https://www.codecademy.com" institution="Codeacademy" title="PHP and PHP Functions" titlesub="Introductory class" data="25/04/2017" type="Web" />
            </SwiperSlide>
            <SwiperSlide>
                <Ref institutionlink="https://www.dio.me/" institution="Digital innovation one" title="Introdução ao MongoDB e Bancos de Dados NoSQL" titlesub="Practical class" data="28/10/2021" type="Web" />
            </SwiperSlide>
            <SwiperSlide>
                <Ref institutionlink="https://www.dio.me/" institution="Digital innovation one" title="Introdução ao Node.js com JavaScript" titlesub="Practical class" data="26/10/2021" type="Web" />
            </SwiperSlide>
            <SwiperSlide>
                <Ref institutionlink="https://www.dio.me/" institution="Digital innovation one" title="Desenvolvimento avançado com JavaScript ES6" titlesub="Practical class" data="24/10/2021" type="Web" />
            </SwiperSlide>
            <SwiperSlide>
                <Ref institutionlink="https://www.dio.me/" institution="Digital innovation one" title="Introdução a orquestração de contêineres com Docker" titlesub="Introductory class" data="05/11/2021" type="Enginner" />
            </SwiperSlide>
            <SwiperSlide>
                <Ref institutionlink="https://www.dio.me/" institution="Digital innovation one" title="Introdução prática a computação em nuvem usando AWS" titlesub="Introductory  class" data="05/11/2021" type="Enginner" />
            </SwiperSlide>
            <SwiperSlide>
                <Ref institutionlink="https://www.codecademy.com" institution="Codeacademy" title="Javascript (ES6)" titlesub="Introductory class" data="15/06/2016" type="Web" />
            </SwiperSlide>
            <SwiperSlide>
                <Ref institutionlink="https://www.codecademy.com" institution="Codeacademy" title="Less and Scss" titlesub="Introductory class" data="14/07/2019" type="Web" />
            </SwiperSlide>
            <SwiperSlide>
                <Ref institutionlink="https://www.dio.me/" institution="Digital innovation one" title="Node.js com Bancos de Dados Relacionais (SQL)" titlesub="Introductory class" data="09/11/2021" type="Web" />
            </SwiperSlide>
            <SwiperSlide>
                <Ref institutionlink="https://www.codecademy.com" institution="Codeacademy" title="MySQL and SQL" titlesub="Introductory class" data="25/07/2017" type="Web" />
            </SwiperSlide>
            <SwiperSlide>
                <Ref institutionlink="https://www.dio.me/" institution="Digital innovation one" title="Criando um front-end totalmente componentizado na prática com ReactJS" titlesub="Practical class" data="10/11/2021" type="Web" />
            </SwiperSlide>
            <SwiperSlide>
                <Ref institutionlink="https://www.dio.me/" institution="Digital innovation one" title="Construindo Encurtador de URL" titlesub="Practical class" data="13/11/2021" type="Web" />
            </SwiperSlide>
            <SwiperSlide>
                <Ref institutionlink="https://www.codecademy.com" institution="Codeacademy" title="Git / GitHubGit" titlesub="Introductory class" data="15/06/2016" type="Web" />
            </SwiperSlide>
            <SwiperSlide>
                <Ref institutionlink="https://www.codecademy.com" institution="Codeacademy" title="Html 5" titlesub="Introductory class" data="15/06/2016" type="Web" />
            </SwiperSlide>
            <SwiperSlide>
                <Ref institutionlink="https://www.dio.me/" institution="Digital innovation one" title="Explorando o Estilo Arquitetural REST com Node.js" titlesub="Introductory class" data="30/10/2021" type="Web" />
            </SwiperSlide>
            <SwiperSlide>
                <Ref institutionlink="https://www.dio.me/" institution="Digital innovation one" title="Resolvendo Desafios de Código em Javascript" titlesub="Practical class" data="24/10/2021" type="Web" />
            </SwiperSlide>
            <SwiperSlide>
                <Ref institutionlink="https://www.dio.me/" institution="Digital innovation one" title="Práticas avançadas em projetos com ReactJS" titlesub="Practical class" data="24/10/2021" type="Web" />
            </SwiperSlide>
            <SwiperSlide>
                <Ref institutionlink="https://www.dio.me/" institution="Digital innovation one" title="Desenvolvimento de aplicações para internet com ReactJS" titlesub="Practical class" data="24/10/2021" type="Web" />
            </SwiperSlide>
            <SwiperSlide>
                <Ref institutionlink="https://www.dio.me/" institution="Digital innovation one" title="Criando seu jogo de memória estilo Genius" titlesub="Practical class" data="24/10/2021" type="Web" />
            </SwiperSlide>
            <SwiperSlide>
                <Ref institutionlink="https://www.dio.me/" institution="Digital innovation one" title="Introdução ao ReactJS" titlesub="Practical class" data="20/10/2021" type="Web" />
            </SwiperSlide>
            <SwiperSlide>
                <Ref institutionlink="https://www.dio.me/" institution="Digital innovation one" title="MySql - Trabalhando com as suas primeiras tabelas" titlesub="Practical class" data="19/10/2021" type="Web" />
            </SwiperSlide>
        </Row>
    );
  };

  export default Slide;