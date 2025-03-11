// components/Footer.jsx
"use client";
import Link from 'next/link';
import Image from 'next/image';
import { FaFacebook, FaTwitter, FaYoutube, FaLinkedin } from 'react-icons/fa';
import { HiOutlineLocationMarker, HiOutlinePhone, HiOutlineMail } from 'react-icons/hi';
import { FaArrowUp } from 'react-icons/fa';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <footer className="w-full bg-white border-t border-gray-200 py-8">
            <div className="container mx-auto px-4">
                {/* Logo and Contact Info */}
                <div className="flex flex-col md:flex-row justify-between items-start mb-8">
                    <div className="mb-6 md:mb-0">
                        <Link href="/">
                            <div className="flex items-center">
                                <Image
                                    src="/logo.png"
                                    alt="Mindestate Logo"
                                    width={50}
                                    height={50}
                                />
                                <span className="ml-2 text-xl font-bold">Mindestate</span>
                            </div>
                        </Link>

                        <div className="mt-4 space-y-2 text-gray-600">
                            <div className="flex items-center">
                                <HiOutlineLocationMarker className="w-5 h-5 mr-2 text-gray-400" />
                                <span>1889 NW 73rd St, Asheville, NC 28726</span>
                            </div>
                            <div className="flex items-center">
                                <HiOutlinePhone className="w-5 h-5 mr-2 text-gray-400" />
                                <span>(800) 543 5432</span>
                            </div>
                            <div className="flex items-center">
                                <HiOutlineMail className="w-5 h-5 mr-2 text-gray-400" />
                                <span>inquiry@realhomes.com</span>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="mb-6 md:mb-0">
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/properties" className="text-gray-600 hover:text-blue-600">
                                    Properties Listing
                                </Link>
                            </li>
                            <li>
                                <Link href="/blog" className="text-gray-600 hover:text-blue-600">
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-gray-600 hover:text-blue-600">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Other Pages */}
                    <div className="mb-6 md:mb-0">
                        <h3 className="text-lg font-semibold mb-4">Other Pages</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/agents" className="text-gray-600 hover:text-blue-600">
                                    Agents
                                </Link>
                            </li>
                            <li>
                                <Link href="/agencies" className="text-gray-600 hover:text-blue-600">
                                    Agencies
                                </Link>
                            </li>
                            <li>
                                <Link href="/faqs" className="text-gray-600 hover:text-blue-600">
                                    FAQs
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Talk To An Expert */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Talk To An Expert</h3>
                        <p className="text-gray-600 mb-4 max-w-xs">
                            Get expert consultation regarding your Real Estate needs.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-block px-4 py-2 border border-blue-500 text-blue-500 rounded hover:bg-blue-500 hover:text-white transition-colors"
                        >
                            Make an Inquiry
                        </Link>

                        {/* Social Media */}
                        <div className="mt-6">
                            <h4 className="text-sm font-medium mb-3">Connect With Us</h4>
                            <div className="flex space-x-4">
                                <Link href="https://facebook.com" className="text-gray-500 hover:text-blue-600">
                                    <FaFacebook className="w-5 h-5" />
                                </Link>
                                <Link href="https://twitter.com" className="text-gray-500 hover:text-blue-400">
                                    <FaTwitter className="w-5 h-5" />
                                </Link>
                                <Link href="https://youtube.com" className="text-gray-500 hover:text-red-600">
                                    <FaYoutube className="w-5 h-5" />
                                </Link>
                                <Link href="https://linkedin.com" className="text-gray-500 hover:text-blue-700">
                                    <FaLinkedin className="w-5 h-5" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="pt-6 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                    <p>© {new Date().getFullYear()} RealHomes. All Rights Reserved</p>
                    <p>Designed by Manas Agrawal</p>

                    {/* Scroll to top button */}
                    <button
                        onClick={scrollToTop}
                        className="mt-4 md:mt-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                        aria-label="Scroll to top"
                    >
                        <FaArrowUp className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;