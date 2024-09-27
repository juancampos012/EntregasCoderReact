import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchItemDetails } from '../../utils/api';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const loadItemDetails = async () => {
      const data = await fetchItemDetails(itemId);
      setItem(data);
    };

    loadItemDetails();
  }, [itemId]);

  return (
    <div style={{ marginTop: '130px' }}>
      {item ? (
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="350"
              image={item.image} 
              alt={item.name} 
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {item.name} 
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.description} 
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ) : (
        <div>Ítem no encontrado</div>
      )}
    </div>
  );
};

export default ItemDetailContainer;
