import { Modal } from '@mui/material'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  // bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}

const img =
  'https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60'

let content = (
  <div className="w-full p-6 border border-[#475569] rounded-lg hover:cursor-pointer">
    <img className="rounded-md object-cover" src={img} alt="image" />
    <div className="mt-4">
      <Typography id="modal-modal-title" variant="h6" component="h2">
        <div className="flex items-center justify-between font-semibold">
          <span>Gallery</span>
          <span>375</span>
        </div>
      </Typography>
      <Typography id="modal-modal-description" sx={{ mt: 2 }}>
        <p className="mt-3">Online food delivery app design</p>
      </Typography>
    </div>
  </div>
)

const PortfolioModal = ({ open, setOpen }) => {
  const handleClose = () => setOpen(false)

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={style}>{content}</Box>
      </Modal>
    </>
  )
}

export default PortfolioModal
