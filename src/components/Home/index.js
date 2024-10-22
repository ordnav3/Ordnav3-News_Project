import React, { useState, useEffect } from 'react';
import axios from '../../services/axios';
import * as S from './style';

export default function Home() {
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get('/');
        setNoticias(response.data.items);
        console.log(response.data.items);
      } catch (error) {
        console.error('Erro ao buscar notícias:', error);
      }
    }
    getData();
  }, []);

  return (
    <S.ContainerHome>
      {noticias.length > 0 ? (
        noticias.map((noticia) => {
          const imagens = JSON.parse(noticia.imagens);
          const baseUrl = 'http://servicodados.ibge.gov.br/';
          const imageUrl = `${baseUrl}${imagens.image_fulltext}`;

          return (
            <>
              <hr />
              <S.ContainerNews key={noticia.id}>
                <h2>{noticia.titulo}</h2>
                <div>
                  <img
                    src={imageUrl}
                    alt={imagens.image_fulltext_alt || 'Imagem da notícia'}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = 'https://placehold.co/600x400';
                    }}
                  />
                  <p>
                    {noticia.introducao}
                    {' '}
                    <a href={noticia.link}>Ler notícia  completa</a>
                  </p>
                </div>
              </S.ContainerNews>
            </>
          );
        })
      ) : (
        <h2>Carregando notícias...</h2>
      )}
    </S.ContainerHome>
  );
}
