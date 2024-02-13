import styled from "styled-components";

export const Home = styled.div`
    display: flex;
    flex-direction: column;
    padding: 15rem 8rem;
`
export const HomeSection = styled.section`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 8rem;
`
export const HomeDescription = styled.div`
    display: block;
    max-width: 500px;
    z-index: 1;
    
    h1 {
        display: inline-block;
        position: relative;
        font-size: var(--fs-extra-large);
        line-height: 1.2;
        margin-bottom: 2rem;
        
        &:before {
            content: '';
            position: absolute;
            top: 55%;
            left: 3%;
            height: 50%;
            width: 100%;
            background-color: var(--color-tertiary);
            transform: skew(-10deg);
            z-index: -1;
        }
    }
    
    h3 {
        font-size: var(--fs-regular);
        font-weight: var(--fw-medium);
    }
`
export const HeroImage = styled.img`
    display: block;
    max-width: 450px;
    box-shadow: 1rem 1rem 0 0 var(--color-tertiary);
`