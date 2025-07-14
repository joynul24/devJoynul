const Footer = () => {
  return (
    <footer className="footer roboto sm:footer-horizontal text-white footer-center bg-[#242734] p-4">
      <aside>
        <p>
          &copy; {new Date().getFullYear()} — Joynul. All rights reserved.
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
