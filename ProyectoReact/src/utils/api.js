import AlfajorMaxti from '../Images/AlfajorMaxti.webp';
import Cafe1111 from '../Images/Cafe1111.webp';
import CafeBalance from '../Images/CafeBalance.webp';
import CafeCafetal from '../Images/CafeCafetal.png';
import CafeSelecta from '../Images/CafeSelecta.webp';
import CaramelosQuindio from '../Images/CaramelosQuindio.png';
import DulceChocolate from '../Images/DulceChocolate.jpeg'

const itemsMock = [
  { 
    id: '1', 
    name: 'Alfajor Maxti', 
    description: 'Delicioso alfajor relleno de dulce de leche, cubierto con chocolate.', 
    category: 'snacks', 
    image: AlfajorMaxti 
  },
  { 
    id: '2', 
    name: 'Caramelos Quindio', 
    description: 'Caramelos tradicionales con sabores frutales, perfectos para un antojo.', 
    category: 'snacks', 
    image: CaramelosQuindio 
  },
  { 
    id: '3', 
    name: 'Café 11:11', 
    description: 'Café suave y aromático, ideal para cualquier momento del día.', 
    category: 'cafe', 
    image: Cafe1111 
  },
  { 
    id: '4', 
    name: 'Café Balance', 
    description: 'Una mezcla equilibrada de café que resalta su sabor natural.', 
    category: 'cafe', 
    image: CafeBalance 
  },
  { 
    id: '5', 
    name: 'Café Cafetal', 
    description: 'Café de origen selecto, con un perfil de sabor único y delicioso.', 
    category: 'cafe', 
    image: CafeCafetal 
  },
  { 
    id: '6', 
    name: 'Café Selecta', 
    description: 'Café premium, cuidadosamente seleccionado para los amantes del buen café.', 
    category: 'cafe', 
    image: CafeSelecta 
  },
  { 
    id: '7', 
    name: 'Chocolate Café', 
    description: 'Disfruta de la perfecta fusión entre el rico sabor del chocolate y el aroma intenso del café.', 
    category: 'snacks', 
    image: DulceChocolate 
  },  
];

export const fetchItems = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(itemsMock);
    }); 
  });
};

export const fetchItemsByCategory = async (categoryId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const filteredItems = itemsMock.filter(item => item.category === categoryId);
      resolve(filteredItems);
    });
  });
};

export const fetchItemDetails = async (itemId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const item = itemsMock.find(item => item.id === itemId);
      resolve(item);
    }); 
  });
};
