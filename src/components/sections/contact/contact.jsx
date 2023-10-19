const Contact = () => {
  return (
    <div className="w-[400px] p-6 bg-slate-500 rounded-xl">
      <img
        className="w-full rounded-md object-cover"
        src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
        alt="Laptop"
      />
      <div className="mt-4">
        <h3 className="text-lg text-white font-semibold">About Macbook</h3>
        <span>Designation</span>
        <p className="text-white mt-3 mb-5">
          I am available for freelance work. Connect with me via and call in to
          my account.
        </p>
        <span>Phone: +880 123 456 789</span>
        <span>Email: admin@example.com</span>
      </div>
      <div className="mt-5">
        <h5 className="capitalize">Find with me</h5>
        <div className="flex items-center gap-5 mt-2">
          <i className="fw-i fab fa-facebook-f"></i>
          <i className="fw-i fab fa-twitter"></i>
          <i className="fw-i fab fa-linkedin-in"></i>
          <i className="fw-i fas fa-envelope"></i>
        </div>
      </div>
    </div>
  );
};

export default Contact;
