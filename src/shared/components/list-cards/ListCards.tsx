import { styled } from "styled-components";
import { IPokemon } from "../../services/models";
import { typeColors } from "../../types";

interface IListCards{
    dataList: IPokemon[];
    onClick: (data: IPokemon) => void;
}

export const ListCards = ({dataList, onClick}: IListCards) => {
    return(
        <Container>
            {dataList.map((data, i) => (
                <Card backgroundColor={typeColors[data.types[0].type.name]} key={i} tabIndex={0} onClick={() => onClick(data)} onKeyDown={(e: React.KeyboardEvent<HTMLDivElement>) => e.code === 'Enter' && onClick(data)}>
                    <img src={data.sprites.other["official-artwork"].front_default} alt={data.name} />
                    <h3 className='name'>{data.name}</h3>
                </Card>
            ))}
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: ${({theme}) => theme.spacing.gap.medium};
    flex-wrap: wrap;
`

const Card = styled.div<{backgroundColor: string}>`
    padding: ${({theme}) => `0 ${theme.spacing.pad.small}`};
    border-radius: ${({theme}) => theme.border.radius.small};
    border: solid 2px ${({backgroundColor}) => `${backgroundColor}99`};
    text-align: center;
    color: ${({backgroundColor}) => backgroundColor};
    background-color: ${({theme}) => theme.color.tertiary.main};
    box-shadow: ${({theme}) => theme.shadow.defaultShadow};
    cursor: pointer;
    transition: all .25s;

    &:hover{
        box-shadow: ${({theme}) => theme.shadow.directions.down};
    }

    &:hover img{
        transform: translateY(-1em);
    }

    img{
        height: 100px;
        transition: all .25s;
    }

    .name{
        color: inherit;
        font-weight: 100;
        text-align: left;
    }
`