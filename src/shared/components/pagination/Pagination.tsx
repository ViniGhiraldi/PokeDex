import { useContext, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { ThemeContext, styled } from "styled-components";
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface IPagination{
    paginationNumber: number;
    page: number;
}

export const Pagination = ({paginationNumber, page}: IPagination) => {
    const [_, setSearchParams] = useSearchParams();
    const themeContext = useContext(ThemeContext);

    const paginationData = useMemo(() => {
        const paginationData: number[] = [];

        const paginationNumberMoreOne = paginationNumber + 1;

        const isSmScreen = themeContext ? innerWidth < themeContext.screens.sm : false;
        const startCount = isSmScreen ? (page > 1 ? page-1 : 1) : (page > 2 ? page - 2 : 1);
        const quantPaginationItem = isSmScreen ? 3 : 5
        for (let i = startCount; i < startCount + quantPaginationItem && i < paginationNumberMoreOne; i++) {
            paginationData.push(i);
        }
        return paginationData;
    }, [page])

    return(
        <Container>
            <PaginationItem href='#main' onClick={() => page > 1 && setSearchParams({page: (page - 1).toString()})}>
                <ChevronLeft strokeWidth={1} color={page === 1 ? '#00000050' : '#000'}/>
            </PaginationItem>

            {paginationData[0] > 1 && (
                <PaginationItem href='#main' onClick={() => setSearchParams({page: '1'})}>
                    ...
                </PaginationItem>
            )}

            {paginationData.map((paginationItem, i) => (
                <PaginationItem href='#main' key={i} onClick={() => setSearchParams({page: paginationItem.toString()})} currentPaginationItem={page === paginationItem}>
                    {paginationItem}
                </PaginationItem>
            ))}

            {paginationData[paginationData.length - 1] < paginationNumber && (
                <PaginationItem href='#main' onClick={() => setSearchParams({page: paginationNumber.toString()})}>
                    ...
                </PaginationItem>
            )}

            <PaginationItem href='#main' onClick={() => page < paginationNumber && setSearchParams({page: (page + 1).toString()})}>
                <ChevronRight strokeWidth={1} color={page === paginationNumber ? '#00000050' : '#000'}/>
            </PaginationItem>
        </Container>
    );
}

const Container = styled.nav`
    display: flex;
    justify-content: center;
    gap: ${({theme}) => theme.spacing.gap.small};
`

const PaginationItem = styled.a<{currentPaginationItem?: boolean}>`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2em;
    height: 2em;
    border-radius: 100%;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    text-decoration: none;
    cursor: pointer;
    background-color: ${({currentPaginationItem, theme}) => currentPaginationItem ? theme.color.secondary.main : 'inherit'};
        
    &:hover{
        background-color: ${({theme}) => theme.color.secondary.main};
    }
`