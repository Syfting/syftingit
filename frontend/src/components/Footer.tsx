const Footer = () => (
    <footer className="bg-brightRed text-light py-10 px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-md mb-8">
            
             {/* quick links */}
            <div className="col-span-2">
                <h3 className="font-semibold mb-2">Quick Links</h3>
                <div className="flex gap-24">
                    <div>
                        <ul className="space-y-1">
                            <li>Become a Baker</li>
                            <li>Create an Account</li>
                            <li>About Us</li>
                            <li>Contact Us</li>
                            <li>FAQs</li>
                        </ul>
                    </div>
                    <div>
                        <ul className="space-y-1">
                            <li>Terms of Service</li>
                            <li>Privacy Policy</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* follow us */}
            <div className="border-l border-light pl-8 col-span-2">
                <div className="ml-20">
                    <h3 className="font-semibold mb-2">Follow Us</h3>
                        <ul className="space-y-1">
                            <li>
                                <a href="https://www.instagram.com/syftingit" target="_blank" rel="noopener noreferrer">
                                Instagram
                                </a>
                            </li>
                            <li>Facebook</li>
                            <li>TikTok</li>
                            <li>LinkedIn</li>
                        </ul>
                </div>
            </div>
        </div>

        <div className="flex items-center justify-center gap-4">
            <div className="w-5/6">
                <hr className="h-0.5 w-full border-0 bg-light mb-2" />
                <hr className="h-0.5 w-full border-0 bg-light mb-2" />
                <hr className="h-0.5 w-full border-0 bg-light mb-2" />
            </div>
            <div className="w-auto">
                <img
                    src="/assets/mainlogo-light.png"
                    alt="Syfting logo mark"
                    className="w-36"/>
            </div>
        </div>

        <div className="justify-left ml-12 text-xs">&copy; 2025 Syfting Incorporated</div>
    </footer>
);

export default Footer;
