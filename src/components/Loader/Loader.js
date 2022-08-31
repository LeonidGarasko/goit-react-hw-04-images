import LoaderStyled from './Loader.styled';
import { Bars } from 'react-loader-spinner';

const Loader = () => (
  <LoaderStyled>
    <Bars
      height="80"
      width="80"
      color="#07c"
      ariaLabel="bars-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
  </LoaderStyled>
);

export default Loader;
