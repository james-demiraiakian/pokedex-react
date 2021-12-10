import React from 'react';
import './PokemonList.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { minWidth } from '@mui/system';

export default function PokemonList({ pokemon, currentPage, setCurrentPage, setLoading }) {
  const nextPage = () => {
    setCurrentPage((prevState) => ++prevState);
    setLoading(true);
  };

  const previousPage = () => {
    if (currentPage !== 1) {
      setCurrentPage((prevState) => --prevState);
      setLoading(true);
    }
  };

  return (
    <>
      <div className="pokemon-list">
        {pokemon.map((poke) => (
          <Card
            sx={{ maxWidth: 320, minWidth: 300, margin: 2 }}
            key={poke.id}
            className="pokemon-card"
          >
            <CardMedia component="img" height="250" image={poke.url_image} alt={poke.pokemon} />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {poke.pokemon}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                ID: {poke.id}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Type 1: {poke.type_1}
              </Typography>
              {poke.type_2 !== 'NA' && (
                <Typography variant="body2" color="text.secondary">
                  Type 2: {poke.type_2}
                </Typography>
              )}
              {poke.generation_id !== 'NA' && (
                <Typography variant="body2" color="text.secondary">
                  Generation: {poke.generation_id}
                </Typography>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="bottom-buttons">
        <Button onClick={previousPage}>Previous Page</Button>
        <Typography variant="body2" color="text.secondary">
          Page: {currentPage}
        </Typography>
        <Button onClick={nextPage}>Next Page</Button>
      </div>
    </>
  );
}
