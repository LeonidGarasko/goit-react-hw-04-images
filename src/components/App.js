import AppStyled from './App.styled';
import Searchbar from './Searchbar/Searchbar';
import SearchForm from './SearchForm/SearchForm';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Loader from './Loader/Loader';
import getImage from './Api';
import { useState, useEffect } from 'react';

export const App = () => {
  const [gallery, setGallery] = useState([]);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const [total, setTotal] = useState(null);
  const [loading, setLoading] = useState(false);
  const [imageURL, setImageURL] = useState(null);

  useEffect(() => {
    if (query.trim().length === 0) {
      return;
    }
    getImage(query, page).then(data => {
      setGallery(prevState => [...prevState, ...data.hits]);
      setTotal(data.totalHits);
      setLoading(false);
    });
  }, [query, page]);

  const handleSubmit = query => {
    if (query.trim().length === 0) {
      return;
    }
    setGallery([]);
    setQuery(query);
    setPage(1);
    setLoading(true);
  };

  const handleLoadMoreBtn = () => {
    setPage(prevState => prevState + 1);
    setLoading(true);
  };
  const onClickGalleryImage = imageURL => {
    setImageURL(imageURL);
  };

  return (
    <AppStyled>
      <Searchbar>
        <SearchForm onSubmit={handleSubmit} />
      </Searchbar>
      {gallery.length > 0 && (
        <>
          <ImageGallery
            galleryList={gallery}
            onClick={onClickGalleryImage}
            imageURL={imageURL}
          />
          {total !== gallery.length && (
            <Button text="Load more" id="box" onClick={handleLoadMoreBtn} />
          )}
        </>
      )}
      {loading && <Loader />}
    </AppStyled>
  );
};
