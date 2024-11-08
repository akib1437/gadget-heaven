import React, { useEffect, useRef } from 'react';

const BuyingGuide = () => {

    const tipsSectionRef = useRef(null);

    useEffect(() => {
        document.title = 'Buying Guide - Gadget Heaven';
    }, []);

    const scrollToTipsSection = () => {
        if (tipsSectionRef.current) {
            tipsSectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <main className="flex flex-col items-center bg-gray-50 min-h-screen">

            <div className="hero bg-purple-700 h-[400px] text-white">
                <div className="hero-content text-center h-full flex flex-col justify-center">
                    <div className="max-w-md mx-auto">
                        <h1 className="text-5xl font-bold mb-4">Your Ultimate Gadget Buying Guide</h1>
                        <p className="py-6 text-lg">
                            Make an informed choice with our detailed guide. Explore gadgets with confidence and find the perfect tech for your needs!
                        </p>
                        <button onClick={scrollToTipsSection} className="bg-white text-purple-700 px-6 py-3 rounded-lg shadow-lg transform transition-all hover:scale-105 hover:bg-purple-600 hover:text-white duration-300">
                            Tips & FAQs
                        </button>
                    </div>
                </div>
            </div>

            <section className="w-full px-6 md:w-3/4 xl:w-1/2 py-12 space-y-8 ">
                {/* Computers Section */}
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 ">
                    <h2 className="text-3xl font-bold mb-4 text-center text-purple-700">Computers</h2>
                    <ul className="space-y-4">
                        <li>
                            <h3 className="text-xl font-semibold text-purple-600">Processor & Speed</h3>
                            <p className="text-gray-700">Look for at least an Intel i5 or Ryzen 5 for smooth multitasking.</p>
                        </li>
                        <li>
                            <h3 className="text-xl font-semibold text-purple-600">RAM & Storage</h3>
                            <p className="text-gray-700">8GB RAM is standard, and SSDs offer faster performance than HDDs.</p>
                        </li>
                        <li>
                            <h3 className="text-xl font-semibold text-purple-600">Graphics & Display</h3>
                            <p className="text-gray-700">Higher resolution screens and discrete GPUs benefit gamers and designers.</p>
                        </li>
                        <li>
                            <h3 className="text-xl font-semibold text-purple-600">Battery Life</h3>
                            <p className="text-gray-700">Look for laptops with at least 8 hours of battery life for mobility.</p>
                        </li>
                    </ul>
                </div>

                {/* Phones Section */}
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                    <h2 className="text-3xl font-bold mb-4 text-center text-purple-700">Phones</h2>
                    <ul className="space-y-4">
                        <li>
                            <h3 className="text-xl font-semibold text-purple-600">Operating System (OS)</h3>
                            <p className="text-gray-700">Compare Android vs. iOS based on your preferences and needs.</p>
                        </li>
                        <li>
                            <h3 className="text-xl font-semibold text-purple-600">Camera Quality</h3>
                            <p className="text-gray-700">Look for high megapixels and good low-light performance for great photos.</p>
                        </li>
                        <li>
                            <h3 className="text-xl font-semibold text-purple-600">Battery Life</h3>
                            <p className="text-gray-700">Choose a phone with a long-lasting battery, especially if you're a heavy user.</p>
                        </li>
                        <li>
                            <h3 className="text-xl font-semibold text-purple-600">Storage</h3>
                            <p className="text-gray-700">Consider both internal and expandable storage for media and apps.</p>
                        </li>
                    </ul>
                </div>

                {/* Smartwatches Section */}
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                    <h2 className="text-3xl font-bold mb-4 text-center text-purple-700">Smartwatches</h2>
                    <ul className="space-y-4">
                        <li>
                            <h3 className="text-xl font-semibold text-purple-600">Compatibility</h3>
                            <p className="text-gray-700">Ensure the watch works with your phone's OS (Android or iOS).</p>
                        </li>
                        <li>
                            <h3 className="text-xl font-semibold text-purple-600">Battery Life</h3>
                            <p className="text-gray-700">Battery life varies; choose one that fits your daily use needs.</p>
                        </li>
                        <li>
                            <h3 className="text-xl font-semibold text-purple-600">Features</h3>
                            <p className="text-gray-700">Focus on health tracking, GPS, and notifications when choosing a smartwatch.</p>
                        </li>
                    </ul>
                </div>
            </section>

            {/* Tips & FAQs Section */}
            <section ref={tipsSectionRef} className="w-full px-6 md:w-3/4 lg:w-1/2 py-12 mb-8 bg-gray-100 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <h2 className="text-3xl font-bold mb-4 text-center text-purple-700">Tips & FAQs</h2>

                <h3 className="text-2xl font-semibold text-purple-600">Buying Tips</h3>
                <ul className="list-disc ml-6 space-y-2 text-gray-700">
                    <li>Check product reviews and ratings before buying.</li>
                    <li>Compare prices across different platforms.</li>
                    <li>Consider warranty and return policies.</li>
                </ul>

                <h3 className="text-2xl font-semibold text-purple-600 mt-6">Frequently Asked Questions</h3>
                <p className="mt-2"><strong>Q:</strong> How do I choose the best gadget?</p>
                <p><strong>A:</strong> Consider your needs, budget, and product reviews to make an informed decision.</p>
                <p className="mt-2"><strong>Q:</strong> What should I consider before making a purchase?</p>
                <p><strong>A:</strong> Ensure the gadget has the features you need, fits your budget, and has good reviews.</p>
            </section>
        </main>
    );
};

export default BuyingGuide;
