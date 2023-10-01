import React from 'react';
import styled, { css } from 'styled-components';
import Styles from '../styles/button.module.css';

interface ButtonProps {
  color?: 'ac' | 'equal' | 'operator';
  isLarge?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
  description?: string;
}


function colorToCss(color: ButtonProps['color']) {
  switch (color) {
    case 'ac':
      return {
        backgroundColor: '#37353B',
        color: '#fff',
        isLarge: false, // Cuando el color es 'ac', isLarge es false
      };
    case 'equal':
      return {
        backgroundColor: '#31B6BD',
        color: '#fff',
        isLarge: true, // Cuando el color es 'equal', isLarge es true
      };
    case 'operator':
      return {
        backgroundColor: '#4F474F',
        color: '#fff',
        isLarge: false, // Cuando el color es 'operator', isLarge es false
      };
    default:
      return {
        backgroundColor: '#5E555E',
        color: '#fff',
        isLarge: false, // Por defecto, isLarge es false
      };
  }
}

const StyledButton = styled.button<ButtonProps>`
  border: none;
  border-radius: 10px;
  padding: 10px 20px;
  cursor: pointer;
  ${({ color }) => {
    const styles = colorToCss(color);
    return css`
      background-color: ${styles.backgroundColor};
      color: ${styles.color};
      ${styles.isLarge && `grid-column-end: span 2;`}
    `;
  }}
`;

export default function Button({ children, color, onClick }: ButtonProps) {
  return (
    <StyledButton color={color} onClick={onClick} className={Styles.button}>
      {children}
    </StyledButton>
  );
}
