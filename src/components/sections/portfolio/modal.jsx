import { Modal } from '@mui/material'
import Box from '@mui/material/Box'
import ModalContent from './modalContent'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  // width: 500,
  maxHeight: '90vh',
  border: 'none',
  boxShadow: 90,
  p: 2,
}

const PortfolioModal = ({ open, setOpen, portfolio }) => {
  const handleClose = () => setOpen(false)

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={style}>
          <ModalContent portfolio={portfolio} />
        </Box>
      </Modal>
    </>
  )
}

export default PortfolioModal
