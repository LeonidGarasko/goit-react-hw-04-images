import OverlayStyled from './Overlay/Overlay.styled';
import ModalStyled from './Modal.styled';
import PropTypes from 'prop-types';
import { useEffect } from 'react';

const Modal = ({ onClose, src }) => {
  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('click', handleBackdropClick);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('click', handleBackdropClick);
    };
  }, []);

  return (
    <OverlayStyled onClick={handleBackdropClick}>
      <ModalStyled>
        <img src={src} alt="" />
      </ModalStyled>
    </OverlayStyled>
  );
};

// class Modal1 extends Component {
// componentDidMount() {
//   window.addEventListener('keydown', this.handleKeyDown);
//   window.addEventListener('click', this.handleBackdropClick);
// }

// componentWillUnmount() {
//   window.removeEventListener('keydown', this.handleKeyDown);
//   window.removeEventListener('click', this.handleBackdropClick);
// }

//   handleKeyDown = e => {
//     if (e.code === 'Escape') {
//       this.props.onClose();
//     }
//   };

//   handleBackdropClick = e => {
//     if (e.target === e.currentTarget) {
//       this.props.onClose();
//     }
//   };

//   render() {
//     return (
//       <OverlayStyled onClick={this.handleBackdropClick}>
//         <ModalStyled>
//           <img src={this.props.src} alt="" />
//         </ModalStyled>
//       </OverlayStyled>
//     );
//   }
// }

export default Modal;

Modal.propType = {
  src: PropTypes.string.isRequired,
};
