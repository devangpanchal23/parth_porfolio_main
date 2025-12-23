import { Film, Github, Linkedin, Mail, Twitter, MapPin, Phone } from "lucide-react";

export function Footer() {
    const currentYear = new Date().getFullYear();

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        } else if (id === "top") {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

    return (
        <footer className="bg-black border-t border-white/10 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand Section */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <Film className="w-6 h-6 text-red-500" />
                            <span className="tracking-widest text-sm font-medium text-white">
                                Parth Panchal
                            </span>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Crafting cinematic stories and visual experiences that leave a lasting impact.
                        </p>
                    </div>

                    {/* Navigation Links */}
                    <div>
                        <h3 className="text-white font-medium mb-4">Navigation</h3>
                        <ul className="space-y-2">
                            <li>
                                <button
                                    onClick={() => scrollToSection("top")}
                                    className="text-gray-400 hover:text-red-500 transition-colors text-sm"
                                >
                                    Home
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => scrollToSection("about")}
                                    className="text-gray-400 hover:text-red-500 transition-colors text-sm"
                                >
                                    About
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => scrollToSection("portfolio")}
                                    className="text-gray-400 hover:text-red-500 transition-colors text-sm"
                                >
                                    Projects
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => scrollToSection("services")}
                                    className="text-gray-400 hover:text-red-500 transition-colors text-sm"
                                >
                                    Services
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => scrollToSection("contact")}
                                    className="text-gray-400 hover:text-red-500 transition-colors text-sm"
                                >
                                    Contact
                                </button>
                            </li>
                        </ul>
                    </div>

                    {/* Legal Links */}
                    <div>
                        <h3 className="text-white font-medium mb-4">Legal</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="text-gray-400 hover:text-red-500 transition-colors text-sm">
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-red-500 transition-colors text-sm">
                                    Terms & Conditions
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-red-500 transition-colors text-sm">
                                    Disclaimer
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact / Connect */}
                    <div>
                        <h3 className="text-white font-medium mb-4">Contact / Connect</h3>
                        <ul className="space-y-4 mb-6">
                            <li className="flex items-start gap-3 text-sm text-gray-400">
                                <Mail className="w-5 h-5 text-red-500 shrink-0" />
                                <a href="mailto:alex.rivera@videoeditor.com" className="hover:text-red-500 transition-colors">
                                    parth26794@gmail.com
                                </a>
                            </li>
                            {/* <li className="flex items-start gap-3 text-sm text-gray-400">
                                <Phone className="w-5 h-5 text-red-500 shrink-0" />
                                <a href="tel:+1234567890" className="hover:text-red-500 transition-colors">
                                    +1 (234) 567-8900
                                </a>
                            </li> */}
                            <li className="flex items-start gap-3 text-sm text-gray-400">
                                <MapPin className="w-5 h-5 text-red-500 shrink-0" />
                                <span>Surat, Gujarat-India</span>
                            </li>
                        </ul>

                        {/* <div className="flex gap-3">
                            <a
                                href="#"
                                className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center hover:bg-red-500 hover:text-white transition-all group"
                                aria-label="GitHub"
                            >
                                <Github className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
                            </a>
                            <a
                                href="#"
                                className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center hover:bg-red-500 hover:text-white transition-all group"
                                aria-label="LinkedIn"
                            >
                                <Linkedin className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
                            </a>
                            <a
                                href="#"
                                className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center hover:bg-red-500 hover:text-white transition-all group"
                                aria-label="Twitter"
                            >
                                <Twitter className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
                            </a>
                        </div> */}
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-gray-500 text-sm">
                        © {currentYear} All Rights Reserved by @parth
                    </p>
                    <p className="text-gray-600 text-xs">
                        Designed & Built with passion
                    </p>
                </div>
            </div>
        </footer>
    );
}
