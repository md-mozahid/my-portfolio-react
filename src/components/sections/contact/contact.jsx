import Logo from '../../../assets/img/contact/contact1.png'

const Contact = () => {
  return (
    <div className="w-[400px] p-6 border border-[#475569] rounded-xl">
      <img className="w-96 rounded-md" src={Logo} alt="Contact logo" />
      <div className="mt-4">
        <h5 className="uppercase">Find with me</h5>
        <div className="space-y-4 mt-4">
          <button
            className="btn btn-fw text-left py-2.5 pl-5 border border-[#475569]"
            type="button">
            <i className="fas fa-envelope mr-2 text-[#7289da]"></i> Email
          </button>
          <button
            className="btn btn-fw text-left py-2.5 pl-5 border border-[#475569]"
            type="button">
            <i className="fab fa-linkedin-in mr-2 text-[#0077b5]"></i> Linkedin
          </button>
          <button
            className="btn btn-fw text-left py-2.5 pl-5 border border-[#475569]"
            type="button">
            <i className="fab fa-twitter mr-2 text-[#1ba1f2]"></i> Twitter
          </button>
          <button
            className="btn btn-fw text-left py-2.5 pl-5 border border-[#475569]"
            type="button">
            <i className="fa-brands fa-square-instagram mr-2 text-[#c231a1]"></i>
            Instagram
          </button>
          <button
            className="btn btn-fw text-left py-2.5 pl-5 border border-[#475569]"
            type="button">
            <i className="fa-brands fa-whatsapp mr-2 text-[#7289da]"></i>
            Whatsapp
          </button>
          <button
            className="btn btn-fw text-left py-2.5 pl-5 border border-[#475569]"
            type="button">
            <i className="fa-brands fa-facebook-messenger mr-2 text-[#3b5997]"></i>
            Messenger
          </button>
        </div>
      </div>
    </div>
  )
}

export default Contact
