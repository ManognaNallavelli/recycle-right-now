
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Recycle, Truck, Calendar, Info, ArrowRight } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 lg:pr-12">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Recycle Your <span className="text-primary-600">E-Waste</span> with Ease
              </h1>
              <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-lg">
                Schedule a pickup and contribute to a cleaner, more sustainable planet. We make recycling electronic waste simple and convenient.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/register">
                  <Button className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-6 rounded-lg text-lg">
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/how-it-works">
                  <Button variant="outline" className="border-primary-500 text-primary-700 hover:bg-primary-50 px-8 py-6 rounded-lg text-lg">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
            <div className="lg:w-1/2 mt-12 lg:mt-0">
              <img 
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Electronic waste components" 
                className="rounded-lg shadow-xl max-w-full mx-auto animate-float"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Recycling your electronics has never been easier. Follow these simple steps to contribute to a cleaner environment.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg text-center hover-scale card-hover">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Calendar className="text-primary-600 h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Schedule a Pickup</h3>
              <p className="text-gray-600">
                Select a convenient date and time for our team to collect your electronic waste directly from your location.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg text-center hover-scale card-hover">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Truck className="text-primary-600 h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">We Collect</h3>
              <p className="text-gray-600">
                Our experienced team arrives at your doorstep and safely collects all your e-waste items.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg text-center hover-scale card-hover">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Recycle className="text-primary-600 h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">We Recycle</h3>
              <p className="text-gray-600">
                Your e-waste is transported to our certified recycling facility where it is properly processed and recycled.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link to="/how-it-works">
              <Button variant="outline" className="border-primary-500 text-primary-700 hover:bg-primary-50">
                Learn More About Our Process
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Statistics Section */}
      <section className="py-20 bg-primary-800 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-4xl md:text-5xl font-bold mb-2">5,000+</h3>
              <p className="text-lg text-gray-200">Pickups Completed</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl md:text-5xl font-bold mb-2">250+ tons</h3>
              <p className="text-lg text-gray-200">E-Waste Recycled</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl md:text-5xl font-bold mb-2">3,000+</h3>
              <p className="text-lg text-gray-200">Happy Customers</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Awareness Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Recycle E-Waste?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Electronic waste contains toxic materials that can harm the environment and human health if not properly disposed of.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-sm hover-scale card-hover">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Environmental Impact</h3>
              <p className="text-gray-600 mb-6">
                E-waste contains toxic substances like lead, mercury, and cadmium that can contaminate soil and water sources if improperly disposed of.
              </p>
              <Link to="/awareness" className="text-primary-600 font-medium flex items-center hover:text-primary-700 transition-colors">
                Learn more
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm hover-scale card-hover">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Resource Conservation</h3>
              <p className="text-gray-600 mb-6">
                Recycling e-waste recovers valuable materials like gold, silver, copper, and rare earth elements that can be reused in new products.
              </p>
              <Link to="/awareness" className="text-primary-600 font-medium flex items-center hover:text-primary-700 transition-colors">
                Learn more
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm hover-scale card-hover">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Health Benefits</h3>
              <p className="text-gray-600 mb-6">
                Proper e-waste management prevents toxic chemicals from entering our food chain and causing health issues like neurological damage and cancer.
              </p>
              <Link to="/awareness" className="text-primary-600 font-medium flex items-center hover:text-primary-700 transition-colors">
                Learn more
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm hover-scale card-hover">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Legal Compliance</h3>
              <p className="text-gray-600 mb-6">
                Many regions have laws requiring proper e-waste disposal. Our service helps individuals and businesses meet these regulatory requirements.
              </p>
              <Link to="/awareness" className="text-primary-600 font-medium flex items-center hover:text-primary-700 transition-colors">
                Learn more
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Recycle Your E-Waste?</h2>
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              Join thousands of environmentally conscious individuals and businesses who trust us with their electronic waste recycling needs.
            </p>
            <Link to="/register">
              <Button className="bg-white text-primary-700 hover:bg-gray-100 px-8 py-3 rounded-lg text-lg font-medium">
                Schedule a Pickup
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
