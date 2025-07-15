const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Branding/About */}
        <div>
          <h3 className="text-2xl font-bold mb-3">ConsultPro</h3>
          <p className="text-gray-400 text-sm">
            We provide consulting, marketing and technology services to help brands grow faster and smarter.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#projects" className="hover:text-blue-400 transition">Our Projects</a></li>
            <li><a href="#clients" className="hover:text-blue-400 transition">Happy Clients</a></li>
            <li><a href="#contact" className="hover:text-blue-400 transition">Contact</a></li>
            <li><a href="#newsletter" className="hover:text-blue-400 transition">Newsletter</a></li>
            <li><a href="#about" className="hover:text-blue-400 transition">About Us</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Contact</h4>
          <ul className="text-sm space-y-2 text-gray-300">
            <li>Email: contact@consultpro.com</li>
            <li>Phone: +91 98765 43210</li>
            <li>City: Indore, MP</li>
          </ul>
        </div>

        {/* Newsletter Call (Optional) */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Stay Updated</h4>
          <p className="text-gray-400 text-sm mb-4">Subscribe to get the latest insights and updates.</p>
          <a href="#newsletter">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm">
              Subscribe Now
            </button>
          </a>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center mt-10 text-gray-500 text-xs">
        © {new Date().getFullYear()} ConsultPro. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;