import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchItems, fetchItemsByCategory } from '../../utils/api';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Button, ButtonGroup } from '@mui/material';

const categories = ['todo', 'snacks', 'cafe'];

const ItemListContainer = () => {
  const { categoryId } = useParams();
  const [items, setItems] = useState([]);

  // Mueve loadItems fuera de useEffect para que sea accesible
  const loadItems = async (category) => {
    try {
      let data;
      if (category === 'todo') {
        data = await fetchItems(); // Carga todos los productos
      } else {
        data = await fetchItemsByCategory(category);
      }
      setItems(data);
    } catch (err) {
      console.error('Error al cargar los productos.', err);
    }
  };

  useEffect(() => {
    loadItems(categoryId); // Llama a loadItems con categoryId inicial
  }, [categoryId]);

  const handleCategoryChange = (category) => {
    // Si seleccionan "todo", solo carga todos los productos
    loadItems(category);
    // No es necesario cambiar la URL si no quieres redirigir
  };

  return (
    <div style={{ marginTop: '130px' }}>
      <Box display="flex" justifyContent="center" marginBottom="20px">
        <ButtonGroup variant="contained" aria-label="outlined primary button group">
          {categories.map(category => (
            <Button key={category} onClick={() => handleCategoryChange(category)}>
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </Button>
          ))}
        </ButtonGroup>
      </Box>
      
      <Grid container spacing={3} justifyContent="center">
        {items.length > 0 ? (
          items.map(item => (
            <Grid item xs={12} sm={6} md={4} key={item.id}>
              <Box display="flex" justifyContent="center" alignItems="center" height="100%">
                <Link to={`/item/${item.id}`} style={{ textDecoration: 'none' }}>
                  <Card sx={{ maxWidth: 345, marginBottom: '50px' }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="350"
                        image={item.image}
                        alt={item.name}
                        sx={{ objectFit: 'cover' }}
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
                </Link>
              </Box>
            </Grid>
          ))
        ) : (
          <Typography variant="h6">No se encontraron productos.</Typography>
        )}
      </Grid>
    </div>
  );
};

export default ItemListContainer;
