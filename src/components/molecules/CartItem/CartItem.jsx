import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Title from '../../atoms/Title/Title';
import Image from '../../atoms/Image/Image';
import Flex from '../../_layouts/Flex';
import FlexItem from '../../_layouts/FlexItem';
import Price from '../../atoms/Price/Price';
import Quantity from '../Quantity/Quantity';
import { color } from '../../_settings/_variables';

const Item = styled.li`
  list-style-type: none;
  border-bottom: .05em solid ${color.CRIMSON};

  :first-child {
    border-top: .05em solid ${color.CRIMSON};
  }

  img {
    margin-top: 30px;
  }

  .cart-item {
    margin-top: -20px;
  }
`;

Item.View = styled.span``;

function CartItem({
  handleAddToCart,
  handleRemoveFromCart,
  item: {
    name, subtotal, quantity, thumbnail, productId, itemId,
  },
}) {
  return (
    <Item>
      <Item.View>
        <Title>{name}</Title>
      </Item.View>
      <Flex
        justifyContent="space-around"
        className="cart-item"
      >
        <FlexItem>
          <Image src={`http://${thumbnail}`} />
        </FlexItem>
        <FlexItem>
          <Item.View>
            <Quantity
              quantity={quantity}
              handleIncrement={() => handleAddToCart(productId)}
              handleDecrement={() => handleRemoveFromCart(itemId, quantity)}
            />
          </Item.View>
          <Item.View>
            <Price>{subtotal}</Price>
          </Item.View>
        </FlexItem>
      </Flex>
    </Item>
  );
}

CartItem.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    subtotal: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    productId: PropTypes.number.isRequired,
    itemId: PropTypes.string.isRequired,
  }).isRequired,
  handleAddToCart: PropTypes.func.isRequired,
  handleRemoveFromCart: PropTypes.func.isRequired,
};

export default CartItem;
