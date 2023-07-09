import { styled } from "styled-components";
import { IPokemon } from "../../services/models";
import { typeColors } from "../../types";

interface IMainCard{
    data: IPokemon;
}

export const MainCard = ({data}: IMainCard) => {
    return(
        <Container>
            <Card mainColor={typeColors[data.types[0].type.name]} secondColor={data.types[1] && typeColors[data.types[1].type.name]}>
                <span className='id'>Nº {data.id}</span>
                <img src={data.sprites.other["official-artwork"].front_default} alt={data.name} />
                <div className='content'>
                    <h1 className='name'>{data.name}</h1>
                    <div className='types'>
                        {data.types.map((type, i) => <TypeSpan backgroundcolor={typeColors[type.type.name]} key={i}>{type.type.name}</TypeSpan>)}
                    </div>
                </div>
            </Card>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const Card = styled.div<{mainColor: string; secondColor?: string}>`
    padding: ${({theme}) => theme.spacing.pad.medium};
    display: flex;
    flex-direction: column;
    border-radius: ${({theme}) => theme.border.radius.small};
    gap: ${({theme}) => theme.spacing.gap.small};
    box-shadow: ${({theme}) => theme.shadow.directions.down};
    background: ${({mainColor, secondColor}) => {
        if(secondColor){
            return `linear-gradient(to right bottom, ${mainColor} 10%, ${secondColor} 90%)`;
        }
        return mainColor;
    }};

    .id{
        align-self: flex-end;
        padding: ${({theme}) => `0 ${theme.spacing.pad.medium}`};
        background-color: ${({theme}) => theme.color.primary.main};
        border-radius: 20px;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    }

    img{
        height: 200px;
        align-self: center;
    }

    .content{
        width: 100%;
        text-align: center;
        border-radius: ${({theme}) => theme.border.radius.small};
        padding: .5em 1em;
        background-color: ${({theme}) => theme.color.primary.main};
        box-shadow: ${({theme}) => theme.shadow.defaultShadow};

        .name{
            font-weight: 100;
        }

        .types{
            display: flex;
            justify-content: center;
            gap: ${({theme}) => theme.spacing.gap.medium};
        }
    }
`;

const TypeSpan = styled.span<{backgroundcolor: string}>`
    font-family: monospace;
    color: ${({backgroundcolor}) => backgroundcolor};
    font-weight: bold;
    font-size: large;
    text-transform: uppercase;
    /* text-shadow: ${({theme}) => theme.shadow.defaultShadow}; */
`;