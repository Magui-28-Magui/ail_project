import styled from 'styled-components'

export const ModalPop = styled.div`
    background: #fff;
    border: 2px solid #aaa;
    border-radius: 5px;  
    z-index: 999;
    max-width: 420px;
    margin: auto;
    padding: 1em 2em 2em;
    position: relative;
    }
`
export const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 99;
    background-color: #000;
    opacity: 0.75;
    }
`
