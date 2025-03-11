'use client';
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from 'react';

const PropertyCard = ({ property }) => {
    return (
        <div className="flex flex-col overflow-hidden rounded shadow">
            <div className="relative h-48 w-full">
                <Image
                    src={property.image}
                    alt={property.title}
                    fill
                    className="object-cover"
                />
            </div>
            <div className="p-4">
                <div className="flex justify-between items-start">
                    <h3 className="text-base font-medium">{property.title}</h3>
                    <span className="font-bold">${property.price.toLocaleString()}</span>
                </div>
                <p className="text-xs text-gray-600 mt-1">{property.location}</p>
                <div className="flex gap-2 mt-4">
                    <button className="flex-1 bg-green-500 text-white py-2 px-4 rounded text-sm">
                        Whatsapp Us
                    </button>
                    <button className="flex-1 bg-blue-500 text-white py-2 px-4 rounded text-sm">
                        Get a Call
                    </button>
                </div>
            </div>
        </div>
    );
};

export default function HeroSection() {
    const trendingArticles = [
        {
            id: 1,
            image: "/t1.png",
            title: "As The Real Estate Market Heats Up, Here's How First-time Buyers Can Keep Their Cool",
            link: "/blog/first-time-buyers-guide"
        },
        {
            id: 2,
            image: "/t2.png",
            title: "Real Estate Market Heats Up, Here's How First-time Buyers Can Keep Their Cool",
            link: "/blog/market-insights"
        },
        {
            id: 3,
            image: "/t3.png",
            title: "Here's How First-time Buyers Can Keep Their Cool As The Real Estate Market Heats Up",
            link: "/blog/buyer-strategies"
        }
    ];

    const properties = [
        {
            id: 1,
            title: 'Home in Merrick Way',
            price: 540000,
            location: 'Merrick Way, Miami, FL 33134, USA',
            image: '/image.png',
            type: 'sale'
        },
        {
            id: 2,
            title: 'Home in Merrick Way',
            price: 540000,
            location: 'Merrick Way, Miami, FL 33134, USA',
            image: '/image.png',
            type: 'rent'
        },
        {
            id: 3,
            title: 'Home in Merrick Way',
            price: 540000,
            location: 'Merrick Way, Miami, FL 33134, USA',
            image: '/image.png',
            type: 'sale'
        },
    ];

    const faqItems = [
        {
            id: 'where',
            question: 'Where can I watch?',
            answer: 'Nam venenatis aenean fermentum massa fusce faucibus nulla. Orci, dictumst nec aliquam id ullamcorper venenatis. Fermentum sulla cras pharetra fringilla. Iaculis ullamcorper lorem purus quis consectetur. Felis ultricies nisi, quis malesuada sem odio. Potentium natoque amet amet, tincidunt ultricies et. Et nam mornuis sit nullam diam tincidunt condimentum nullam.'
        },
        {
            id: 'tempus',
            question: 'Tempus magna risus interdum ultricies sed urna?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce commodo, magna nec ultricies sollicitudin, velit nunc mollis dui, vel mattis dui dolor sit amet magna.'
        },
        {
            id: 'augue',
            question: 'Augue in nibh urna volutpat mattis?',
            answer: 'Nullam sodales, magna at elementum ultricies, sem magna suscipit eros, eu commodo lorem libero nec purus. Proin sagittis magna non lectus tempus.'
        },
        {
            id: 'egestas',
            question: 'Eu egestas sed sed posuere ultrices?',
            answer: 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec ullamcorper nulla non metus auctor fringilla.'
        },
        {
            id: 'elementum',
            question: 'Elementum facilisi aliquam, nisi, orci vulputate?',
            answer: 'Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.'
        }
    ];

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const [activeTab, setActiveTab] = useState('all');
    const [filteredProperties, setFilteredProperties] = useState(properties);
    const [isClient, setIsClient] = useState(false);
    const [openQuestion, setOpenQuestion] = useState('where');

    useEffect(() => {
        setIsClient(true);
        const filtered = activeTab === 'all'
            ? properties
            : properties.filter(property => property.type === activeTab.toLowerCase());
        setFilteredProperties(filtered);
    }, [activeTab]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    const toggleQuestion = (id) => {
        if (openQuestion === id) {
            setOpenQuestion(null);
        } else {
            setOpenQuestion(id);
        }
    };

    return (
        <section className="relative">
            {/* Hero Section */}
            <div className="relative h-[650px]">
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent flex flex-col justify-center items-center text-white text-center px-4">
                    <Image
                        src="/home1.png"
                        alt="Modern interior with wooden slats"
                        fill
                        priority
                        className="object-cover"
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30 flex flex-col justify-center items-center text-white text-center px-4">
                    <h1 className="text-5xl md:text-6xl font-serif font-extrabold mb-6 leading-tight max-w-4xl">
                        Find. Invest. Thrive.
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 max-w-2xl font-light font-serif">
                        Find Your Perfect Home in Ahmedabad – Effortless, Reliable, and Made for You!
                    </p>
                </div>
            </div>


            {/* Search Panel Section */}
            <div className="relative -mt-14 px-4 z-10">
                <div className="w-full max-w-5xl mx-auto bg-white rounded-full shadow-lg overflow-hidden border border-gray-100">
                    <div className="flex flex-wrap md:flex-nowrap items-center justify-between">
                        <div className="w-full md:flex-1 px-4 py-3 md:border-r border-gray-100 flex items-center">
                            <div className="text-blue-500 mr-3">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>
                            <div className="flex-1">
                                <label className="block text-gray-400 text-xs font-medium">Location</label>
                                <select className="w-full bg-transparent border-none focus:outline-none text-gray-800 font-medium text-sm py-1">
                                    <option>Select Area</option>
                                    <option>Bodakdev</option>
                                    <option>Satellite</option>
                                    <option>Prahlad Nagar</option>
                                </select>
                            </div>
                        </div>
                        <div className="w-full md:flex-1 px-4 py-3 md:border-r border-gray-100 flex items-center">
                            <div className="text-blue-500 mr-3">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                </svg>
                            </div>
                            <div className="flex-1">
                                <label className="block text-gray-400 text-xs font-medium">Property Type</label>
                                <select className="w-full bg-transparent border-none focus:outline-none text-gray-800 font-medium text-sm py-1">
                                    <option>Choose Type</option>
                                    <option>Apartment</option>
                                    <option>Villa</option>
                                    <option>Penthouse</option>
                                </select>
                            </div>
                        </div>
                        <div className="w-full md:flex-1 px-4 py-3 md:border-r border-gray-100 flex items-center">
                            <div className="text-blue-500 mr-3">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <div className="flex-1">
                                <label className="block text-gray-400 text-xs font-medium">Price Range</label>
                                <select className="w-full bg-transparent border-none focus:outline-none text-gray-800 font-medium text-sm py-1">
                                    <option>Price</option>
                                    <option>₹50L - ₹1Cr</option>
                                    <option>₹1Cr - ₹2Cr</option>
                                    <option>₹2Cr+</option>
                                </select>
                            </div>
                        </div>
                        <div className="py-3 pr-4 pl-2">
                            <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full w-12 h-12 flex items-center justify-center transition-colors duration-300 shadow-md">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Gateway Section */}
            <section className="pt-12 pb-24 px-4 -mt-6" style={{ backgroundColor: 'rgb(246, 249, 255)' }}>
                <div className="container mx-auto">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                        <div className="md:w-2/5 w-full">
                            <h2 className="text-3xl font-bold mb-6 text-gray-900 leading-tight">
                                Your Trusted Gateway to Ahmedabad's Finest Homes
                            </h2>
                            <p className="text-gray-700 mb-8 leading-relaxed text-base">
                                Mindsestate is a dedicated real estate consultancy focused on bringing Ahmedabad's most promising under-construction residential projects to discerning homebuyers. We simplify the home-buying process with expert market insights, personalized assistance, and a commitment to transparency.
                            </p>
                            <button className="border-2 border-blue-600 text-blue-600 font-medium rounded-full px-8 py-3 inline-flex items-center text-sm hover:bg-blue-50 transition-all duration-300 shadow-sm">
                                Read More <span className="ml-2">→</span>
                            </button>
                        </div>
                        <div className="md:w-1/2 w-full">
                            <div className="grid grid-cols-12 gap-3">
                                <div className="col-span-6 relative">
                                    <div className="aspect-[3/4] relative overflow-hidden rounded-md shadow-sm">
                                        <Image
                                            src="/building1.png"
                                            alt="Tall orange residential tower"
                                            fill
                                            className="object-cover hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>
                                </div>
                                <div className="col-span-6 grid grid-rows-2 gap-3">
                                    <div className="relative overflow-hidden rounded-md shadow-sm h-full">
                                        <Image
                                            src="/building2.png"
                                            alt="Modern apartment complex"
                                            fill
                                            className="object-cover hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>
                                    <div className="relative overflow-hidden rounded-md shadow-sm h-full">
                                        <Image
                                            src="/building4.png"
                                            alt="Night view of illuminated building"
                                            fill
                                            className="object-cover hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Properties Section */}
            <section className="py-12 px-4" style={{ backgroundColor: 'rgb(246, 249, 255)' }}>
                <div className="container mx-auto py-8 px-4">
                    <h1 className="text-2xl font-bold mb-6">Our Featured Exclusives</h1>

                    {isClient && (
                        <>
                            <div className="flex items-center space-x-6 mb-6">
                                <span
                                    className={`text-sm cursor-pointer ${activeTab === 'all' ? 'text-blue-600 font-medium' : 'text-gray-500'}`}
                                    onClick={() => setActiveTab('all')}
                                >
                                    All
                                </span>
                                <span
                                    className={`text-sm cursor-pointer ${activeTab === 'rent' ? 'text-blue-600 font-medium' : 'text-gray-500'}`}
                                    onClick={() => setActiveTab('rent')}
                                >
                                    For Rent
                                </span>
                                <span
                                    className={`text-sm cursor-pointer ${activeTab === 'sale' ? 'text-blue-600 font-medium' : 'text-gray-500'}`}
                                    onClick={() => setActiveTab('sale')}
                                >
                                    For Sale
                                </span>
                            </div>

                            <div className="relative">
                                <button className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow z-10">
                                    &lt;
                                </button>

                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 overflow-x-auto">
                                    {filteredProperties.map(property => (
                                        <PropertyCard key={property.id} property={property} />
                                    ))}
                                </div>

                                <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow z-10">
                                    &gt;
                                </button>
                            </div>
                        </>
                    )}
                </div>
            </section>

            {/* Testimonial and Following Sections */}
            <section className="py-16 px-4" style={{ backgroundColor: 'rgb(246, 249, 255)' }}>
                <div className="container mx-auto">
                    <div className="mb-16 relative">
                        <div className="max-w-4xl mx-auto text-center">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                                Finding My Dream Home Was Seamless With Mindestate. Their Expertise And Guidance Made The Process Stress-Free. Thank You!
                            </h2>
                            <div className="h-1 w-24 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto my-6"></div>
                            <div className="flex justify-center mt-8">
                                <div className="flex items-center bg-white rounded-lg shadow-sm px-4 py-2 border border-gray-100">
                                    <Image
                                        src="/google.png"
                                        alt="Google Rating"
                                        width={24}
                                        height={24}
                                        className="mr-2"
                                    />
                                    <div className="flex flex-col items-start">
                                        <div className="flex items-center">
                                            <span className="font-bold text-lg text-gray-800 mr-2">4.8</span>
                                            <div className="flex">
                                                {[...Array(5)].map((_, i) => (
                                                    <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3 .921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784 .57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81 .588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                    </svg>
                                                ))}
                                            </div>
                                        </div>
                                        <span className="text-xs text-gray-500">Total of 142 reviews</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-between items-center mb-8">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">What's in Trending</h2>
                        <Link
                            href="/blog"
                            className="text-blue-600 hover:text-blue-700 font-medium flex items-center transition-colors"
                        >
                            View All
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                            </svg>
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                        {trendingArticles.map(article => (
                            <div key={article.id} className="bg-white rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
                                <div className="relative h-64 w-full">
                                    <Image
                                        src={article.image}
                                        alt={article.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="p-5">
                                    <h3 className="font-bold text-gray-800 text-lg mb-3 line-clamp-2">
                                        {article.title}
                                    </h3>
                                    <Link
                                        href={article.link}
                                        className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors"
                                    >
                                        Read More
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* Contact Form Section */}
                    <section className="py-12 px-4 max-w-5xl mx-auto">
                        <div className="mb-2">
                            <p className="text-sm font-medium">Get Started</p>
                        </div>
                        <div className="flex flex-col md:flex-row justify-between mb-10">
                            <div className="md:w-2/3">
                                <h2 className="text-3xl font-bold mb-6">Get in touch with us. We're here to assist you.</h2>
                            </div>
                            <div className="flex items-start space-x-4 mt-4 md:mt-0">
                                <Link href="https://facebook.com" aria-label="Facebook">
                                    <div className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center">
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                            <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                </Link>
                                <Link href="https://instagram.com" aria-label="Instagram">
                                    <div className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center">
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                            <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                </Link>
                            </div>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Your Name"
                                        className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-blue-500 transition-colors"
                                        required
                                    />
                                </div>
                                <div>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Email Address"
                                        className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-blue-500 transition-colors"
                                        required
                                    />
                                </div>
                                <div>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="Phone Number (optional)"
                                        className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-blue-500 transition-colors"
                                    />
                                </div>
                            </div>
                            <div>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Message"
                                    rows="4"
                                    className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                                    required
                                ></textarea>
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    className="bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full px-6 py-3 inline-flex items-center transition-colors"
                                >
                                    Leave us a Message
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 ml-2"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </form>
                    </section>

                    {/* FAQ Section */}
                    <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md mb-12">
                        <h1 className="text-2xl font-bold mb-6">Wondering How This Works</h1>
                        <div className="space-y-2">
                            {faqItems.map((item) => (
                                <div key={item.id} className="border border-gray-200 rounded-md overflow-hidden">
                                    <button
                                        className="w-full p-4 text-left flex items-center justify-between bg-white hover:bg-gray-50 transition-colors"
                                        onClick={() => toggleQuestion(item.id)}
                                    >
                                        <span className="font-medium">{item.question}</span>
                                        <span className="text-2xl">
                                            {openQuestion === item.id ? '−' : '+'}
                                        </span>
                                    </button>

                                    {openQuestion === item.id && (
                                        <div className="p-4 border-t border-gray-200 text-gray-700">
                                            {item.answer}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </section>
    );
}