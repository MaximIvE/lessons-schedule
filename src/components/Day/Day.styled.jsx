import styled from "styled-components";

export const DayStyled = styled.ol`
    /* display: inline-block; */
    background-color: #f2f5ef;
    list-style: none;
    margin: 2px;
    padding: 4px 8px 4px 4px;
    /* width: 90%; */
`;

export const Lesson = styled.li`
   
   text-align: start;
   &:not(:last-child){
        border-bottom: 1px #cdcdcd solid;
    }
`;

export const Link = styled.a`
padding: 2px;
    display: block;
    text-decoration: none;
    color: black;
    width: 100%;
    transition-property: background-color;
    transition-duration: 250ms;
    transition-timing-function: cubic-bezier(0, 0, 0.1, 1);
    &:hover{
        background-color: #cdcdcd;
    }
`;

export const Text = styled.p`
padding: 2px;
  color: grey;
  cursor: default;
`;

export const Line = styled.hr`
  margin:0;
`;