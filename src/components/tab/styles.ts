import { styled } from '../../system';

export const ItemContainer = styled('div', {
  color: '$white',
  display: 'flex',
  flexDirection: 'column'
});

export const Container = styled('div', {
  position: 'relative'
});

export const List = styled('ul', {
  display: 'flex',
  listStyle: 'none',
  borderBottom: '1px solid $white',
  margin: 0,
  padding: 0
});

export const ListItem = styled('li', {
  cursor: 'pointer',
  textTransform: 'uppercase',
  color: '$grey3',
  padding: '$2 45px',
  fontWeight: 600,

  /**
   * Variants
   */
  variants: {
    /**
     * selectedTab variant
     */
    selectedTab: {
      true: {
        border: '1px solid $white',
        marginBottom: -1,
        borderBottom: '1px solid $black',
        color: '$white',
        fontWeight: '$bold'
      }
    }
  }
});
