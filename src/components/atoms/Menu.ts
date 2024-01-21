import styled from '@emotion/styled';
import type { Style } from '@/types';

/**
 * Menu component
 * @example
 * <Menu>
 *  <MenuList>Menu item 1</MenuList>
 *  <MenuList>Menu item 2</MenuList>
 * </Menu>
 */
export const Menu = styled.menu<Style>`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    gap: 0.5rem;
    list-style: none;
    ${({ sx }) => sx}
`;
