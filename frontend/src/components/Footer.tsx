const Footer = () => (
  <footer className="bg-brightRed text-light py-10 px-6">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
      <div>
        <h3 className="font-semibold mb-2">Quick Links</h3>
        <ul className="space-y-1">
          <li>Become a Baker</li>
          <li>Create an Account</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>FAQs</li>
        </ul>
      </div>
      <div>
        <h3 className="font-semibold mb-2">Follow Us</h3>
        <ul className="space-y-1">
          <li>Instagram</li>
          <li>Facebook</li>
          <li>TikTok</li>
          <li>LinkedIn</li>
        </ul>
      </div>
      <div>
        <h3 className="font-semibold mb-2">Legal</h3>
        <ul className="space-y-1">
          <li>Terms of Service</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
      <div>
      </div>
    </div>
    <div className="text-center mt-6 text-xs">&copy; 2025 Syfting Incorporated</div>
  </footer>
);

export default Footer;
