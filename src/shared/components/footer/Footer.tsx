import { Copyright, Github, Instagram, Linkedin } from "lucide-react";
import { styled } from "styled-components";

export const Footer = () => {
    return(
        <Container>
            <Main>

                <FooterElementBox>
                    <h1>Redes Sociais</h1>
                    <RedesSociais>
                        <div className="rede_social">
                            <a href='https://www.instagram.com/vinighiraldi/' target='_blank' className='rede_social_icon instagram'><Instagram color='#fff'/></a>
                            <span>ViniGhiraldi</span>
                        </div>
                        <div className="rede_social">
                            <a href='https://github.com/ViniGhiraldi' target='_blank' className='rede_social_icon github'><Github color='#fff'/></a>
                            <span>ViniGhiraldi</span>
                        </div>
                        <div className="rede_social">
                            <a href='https://www.linkedin.com/in/vinighiraldi/' target='_blank' className='rede_social_icon linkedin'><Linkedin color='#fff'/></a>
                            <span>ViniGhiraldi</span>
                        </div>
                    </RedesSociais>
                </FooterElementBox>

                <FooterElementBox>
                    <h1>Descrição</h1>
                    <Descricao>
                        <span>
                            A Pokédex desenvolvida em ReactJs é capaz de fazer buscas paginadas através de parâmetros na URL. A aplicação conta também com um componente de navegação em páginas com adaptação dinâmica a novos valores para as variáveis globais. Estilizado com Styled-Components, a Pokédex trás para você a melhor expêriencia com listagem de pokémons! Leia mais no meu <a href='https://github.com/ViniGhiraldi/pokedex' target='_blank'>GitHub</a>
                        </span>
                    </Descricao>
                </FooterElementBox>

                <FooterElementBox>
                    <h1>Portfólio</h1>
                    <Portfolio>
                        <h3>Acesse o meu portfólio <a href='https://vinighiraldi.github.io/' target='_blank'>clicando aqui</a></h3>
                    </Portfolio>
                </FooterElementBox>

            </Main>

            <span>Vinícius Correia Ghiraldi <Copyright size={11} strokeWidth={3} color='#fff'/> Copyright</span>
        </Container>
    );
}

const Container = styled.div`
    padding: ${({theme}) => theme.spacing.pad.big};
    background-color: ${({theme}) => theme.color.tertiary.main};
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${({theme}) => theme.spacing.gap.medium};

    span {
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
        color: ${({theme}) => theme.color.tertiary.contrastText};
    }
`;

const Main = styled.main`
    display: grid;
    grid-template-columns: ${({theme}) => innerWidth < theme.screens.sm ? '100%' : innerWidth < theme.screens.md ? '45% 45%' : '30% 30% 30%'};
    justify-content: space-between;
    align-items: flex-start;
    gap: ${({theme}) => theme.spacing.gap.medium};
`;

const FooterElementBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${({theme}) => theme.spacing.gap.medium};
    border-top: solid 1px #ffcb05;
    padding-top: ${({theme}) => theme.spacing.pad.small};

    h1{
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-weight: 400;
        color: ${({theme}) => theme.color.tertiary.contrastText};
    }
`;

const RedesSociais = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: ${({theme}) => theme.spacing.gap.big};

    .rede_social{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: ${({theme}) => theme.spacing.gap.small};

        span{
            font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
            font-weight: 100;
        }

        .rede_social_icon{
            height: 3em;
            width: 3em;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
        }

        .instagram:hover{
            background: linear-gradient(to right bottom, rgb(236, 72, 153), rgb(239, 68, 68), rgb(234, 179, 8));
        }

        .github:hover{
            background-color: #00000099;
        }

        .linkedin:hover{
            background-color: #0e76a8;
        }
    }
`;

const Descricao = styled.div`
    text-align: justify;
    span{
        font-family: Arial, Helvetica, sans-serif;
        font-size: medium;

        a{
            font-family: inherit;
            color: #ffcb05;
        }
    }
`;

const Portfolio = styled.div`
    h3{
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-weight: 100;
        color: ${({theme}) => theme.color.tertiary.contrastText};

        a{
            font-family: inherit;
            color: #ffcb05;
        }
    }
`;