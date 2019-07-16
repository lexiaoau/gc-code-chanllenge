import React from 'react';
import Card from './Card';
import './CardList.css'
import { Gift } from '../types'

export interface CardListProps {
  gifts?: Gift[];
}

const CardList = ({ gifts }: CardListProps) => {
  if (!gifts) {
    return <div></div>
  }
  return (
    <div className="CardList">
      {
        gifts.map((i) => {
          return (
            <div>
              <Card
                key={i.id}
                item={i}
              />
            </div>

          );
        })
      }
    </div>
  );
}

export default CardList;