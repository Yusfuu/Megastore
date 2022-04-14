import Link from 'next/link';
import { useState } from 'react';

import { styled } from '@mui/styles';
import Badge from '@mui/material/Badge';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

export const CartIcon = () => {
  const [itemCount, setItemCount] = useState(1);

  const StyledBadge = styled(Badge)({
    '& .MuiBadge-badge': {
      color: 'white',
      backgroundColor: '#fbba00',
    },
  });

  return (
    <div className='items-center hidden m-4 cursor-pointer xl:flex'>
      <Link href='/cart' passHref>
        <StyledBadge badgeContent={itemCount}>
          <ShoppingBasketIcon />
        </StyledBadge>
      </Link>
      {/* To test number of items in cart */}
      {/* <ButtonGroup>
        <Button
          onClick={() => {
            setItemCount(Math.max(itemCount - 1, 0));
          }}
        >
          <RemoveIcon fontSize='small' />
        </Button>
        <Button
          onClick={() => {
            setItemCount(itemCount + 1);
          }}
        >
          <AddIcon fontSize='small' />
        </Button>
      </ButtonGroup> */}
    </div>
  );
};

export default CartIcon;
