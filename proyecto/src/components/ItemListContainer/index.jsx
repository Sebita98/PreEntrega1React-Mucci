import React, { useState, useEffect } from 'react';
import ItemList from '../ItemList'
import Title from '../Title';
import ItemCount from '../ItemCount';
import { useParams } from 'react-router-dom';


const perfumes = [
  { id: 1, image: "https://www.juleriaque.com.ar/good-girl-edp-31865/p?skuId=778", category: 'femenino', title: "GOOD GIRL EDP 80 ML AG21" },
  { id: 2, image: "https://www.juleriaque.com.ar/miss-dior-edp-860/p?skuId=2569", category: 'femenino', title: "MISS DIOR EDP 100 ML SP21L" },
  { id: 3, image: "https://www.juleriaque.com.ar/invictus-platinum-edp-81671/p?skuId=2321", category: 'masculino', title: "INVICTUS PLATINUM EDP 100 ML" },
  { id: 4, image: "https://www.juleriaque.com.ar/sauvage-edp-47960/p?skuId=1079", category: 'masculino', title: "SAUVAGE EDP 100 ML" },
  { id: 5, image: "https://www.juleriaque.com.ar/bleu-de-chanel-edp-22374/p?skuId=625", category: 'masculino', title: "BLEU DE CHANEL EDP 150 ML" },
];


const ItemListContainer = (props) => {
  const [data, setData] = useState([]);

  const {categoriaId} = useParams();

  useEffect(() => {
    const getData = new Promise(resolve => {
      setTimeout(() => {
        resolve(perfumes);
      }, 2000);
    });
    if (categoriaId){
      getData.then(res => setData(res.filter(masculino => masculino.category === categoriaId)));
    }else{
      getData.then(res => setData(res));
    }
  }, [categoriaId])


  const onAdd = (quantity) => {
    console.log(`Compraste ${quantity} unidades`);
  }


  return (
    <>
      <Title greeting='Seba' />
      <ItemCount initial={1} stock={5} onAdd={onAdd} />
      <ItemList data={data} />
    </>
  );
}

export default ItemListContainer