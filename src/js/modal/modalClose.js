import getRefs from '../refs/getRefs';

const { overlay, closeModalBtn } = getRefs();

export const handleCloseModalEsc = e => {
  if (e.key === 'Escape') {
    handleCloseModal();
  }
};

const handleCloseModal = () => {
  overlay.classList.remove('active');
  window.removeEventListener('keydown', handleCloseModalEsc);
};

const handleCloseModalOverlay = e => {
  if (e.target === e.currentTarget) {
    handleCloseModal();
  }
};

closeModalBtn.addEventListener('click', handleCloseModal);
overlay.addEventListener('click', handleCloseModalOverlay);
