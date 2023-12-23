import styled from '@emotion/styled';

interface Props {
    size?: 'small' | 'medium' | 'large';
}
export const Text = styled.p<Props>`
    ${({ size }) => size === 'small' && `font-size: 12px;`}
    ${({ size }) => size === 'medium' || (!size && `font-size: 16px;`)}
    ${({ size }) => size === 'large' && `font-size: 24px;`}
    line-height: 1.5;
    margin: 0;
    color: #333;
`;
