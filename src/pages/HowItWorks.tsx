
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { CalendarDays, Truck, Recycle, CheckCircle2, Clock, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const HowItWorks = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <section className="pt-32 pb-16 bg-gradient-to-br from-primary-50 via-white to-secondary-50">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">How It Works</h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Our simple process makes recycling electronics easy and convenient, from pickup scheduling to responsible recycling.
            </p>
          </div>
        </section>
        
        {/* Process Overview Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 text-center hover-scale card-hover">
                  <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CalendarDays className="text-primary-600 h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Step 1</h3>
                  <h4 className="text-lg font-medium text-primary-700 mb-3">Schedule a Pickup</h4>
                  <p className="text-gray-700">
                    Create an account and select a convenient date and time for our team to collect your e-waste.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 text-center hover-scale card-hover">
                  <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Truck className="text-primary-600 h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Step 2</h3>
                  <h4 className="text-lg font-medium text-primary-700 mb-3">We Collect</h4>
                  <p className="text-gray-700">
                    Our trained team arrives at your location and safely collects all your electronic waste items.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 text-center hover-scale card-hover">
                  <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Recycle className="text-primary-600 h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Step 3</h3>
                  <h4 className="text-lg font-medium text-primary-700 mb-3">We Process</h4>
                  <p className="text-gray-700">
                    Your e-waste is transported to our certified facility where it is sorted and prepared for recycling.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 text-center hover-scale card-hover">
                  <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="text-primary-600 h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Step 4</h3>
                  <h4 className="text-lg font-medium text-primary-700 mb-3">Responsible Recycling</h4>
                  <p className="text-gray-700">
                    Materials are recycled following environmental standards, and you receive a confirmation report.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Detailed Process Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">The Process in Detail</h2>
              
              <div className="space-y-20">
                <div className="flex flex-col md:flex-row md:items-center">
                  <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Schedule a Pickup</h3>
                    <div className="space-y-4 text-gray-700">
                      <p>
                        Creating a pickup request is simple and takes just a few minutes. You can schedule a pickup through our website or mobile app.
                      </p>
                      <ol className="list-decimal pl-5 space-y-2">
                        <li>Create an account or log in to your existing account</li>
                        <li>Enter your address and preferred pickup date and time</li>
                        <li>Specify the types of electronic items you want to recycle</li>
                        <li>Review and confirm your pickup details</li>
                      </ol>
                      <p>
                        After scheduling, you'll receive a confirmation email with your pickup ID and instructions.
                      </p>
                    </div>
                  </div>
                  <div className="md:w-1/2">
                    <Card className="overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                        alt="Person scheduling a pickup on laptop" 
                        className="w-full h-64 object-cover"
                      />
                      <CardContent className="bg-white p-4">
                        <div className="flex items-center text-sm text-gray-600">
                          <Clock className="h-4 w-4 mr-2" />
                          <span>Takes only 2-3 minutes to schedule</span>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row md:items-center">
                  <div className="md:w-1/2 mb-8 md:mb-0 md:order-2 md:pl-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Pickup Day</h3>
                    <div className="space-y-4 text-gray-700">
                      <p>
                        On your scheduled day, our trained team will arrive during the selected time window to collect your e-waste items.
                      </p>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Our team arrives in clearly marked vehicles</li>
                        <li>We handle all items carefully to prevent damage</li>
                        <li>You'll receive a receipt for the collected items</li>
                        <li>For larger items, our team will help with safe removal</li>
                      </ul>
                      <p>
                        You don't need to package your items, but having them collected in one location makes the process more efficient.
                      </p>
                    </div>
                  </div>
                  <div className="md:w-1/2 md:order-1">
                    <Card className="overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                        alt="Pickup service collecting e-waste" 
                        className="w-full h-64 object-cover"
                      />
                      <CardContent className="bg-white p-4">
                        <div className="flex items-center text-sm text-gray-600">
                          <Truck className="h-4 w-4 mr-2" />
                          <span>Professional and convenient pickup service</span>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row md:items-center">
                  <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Processing & Recycling</h3>
                    <div className="space-y-4 text-gray-700">
                      <p>
                        Once collected, your e-waste is transported to our certified recycling facility where it undergoes a thorough process:
                      </p>
                      <ol className="list-decimal pl-5 space-y-2">
                        <li>Items are sorted by category and material type</li>
                        <li>Data-containing devices undergo secure data destruction</li>
                        <li>Devices are disassembled into component materials</li>
                        <li>Materials like metal, plastic, and glass are separated</li>
                        <li>Components are processed for resource recovery</li>
                        <li>Hazardous materials are safely handled and disposed of</li>
                      </ol>
                      <p>
                        Our facility follows all environmental regulations and industry best practices to ensure responsible recycling.
                      </p>
                    </div>
                  </div>
                  <div className="md:w-1/2">
                    <Card className="overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                        alt="E-waste recycling facility" 
                        className="w-full h-64 object-cover"
                      />
                      <CardContent className="bg-white p-4">
                        <div className="flex items-center text-sm text-gray-600">
                          <Recycle className="h-4 w-4 mr-2" />
                          <span>Certified eco-friendly recycling process</span>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* What We Accept Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">What We Accept</h2>
              <p className="text-center text-lg text-gray-700 mb-12 max-w-2xl mx-auto">
                We accept a wide range of electronic items for recycling. Here's a list of the most common items we collect:
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                <div className="p-6 bg-gray-50 rounded-lg hover-scale card-hover">
                  <h3 className="font-bold text-gray-900 mb-3">Computers & Laptops</h3>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li>Desktop computers</li>
                    <li>Laptops & notebooks</li>
                    <li>Servers & workstations</li>
                    <li>Computer parts & components</li>
                  </ul>
                </div>
                
                <div className="p-6 bg-gray-50 rounded-lg hover-scale card-hover">
                  <h3 className="font-bold text-gray-900 mb-3">Mobile Devices</h3>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li>Mobile phones</li>
                    <li>Tablets</li>
                    <li>E-readers</li>
                    <li>Smart watches</li>
                  </ul>
                </div>
                
                <div className="p-6 bg-gray-50 rounded-lg hover-scale card-hover">
                  <h3 className="font-bold text-gray-900 mb-3">Office Equipment</h3>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li>Printers & scanners</li>
                    <li>Fax machines</li>
                    <li>Copiers</li>
                    <li>Telephones & systems</li>
                  </ul>
                </div>
                
                <div className="p-6 bg-gray-50 rounded-lg hover-scale card-hover">
                  <h3 className="font-bold text-gray-900 mb-3">Entertainment Devices</h3>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li>Televisions</li>
                    <li>DVD/Blu-ray players</li>
                    <li>Gaming consoles</li>
                    <li>Audio equipment</li>
                  </ul>
                </div>
                
                <div className="p-6 bg-gray-50 rounded-lg hover-scale card-hover">
                  <h3 className="font-bold text-gray-900 mb-3">Accessories</h3>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li>Keyboards & mice</li>
                    <li>Cables & chargers</li>
                    <li>External drives</li>
                    <li>Speakers & headphones</li>
                  </ul>
                </div>
                
                <div className="p-6 bg-gray-50 rounded-lg hover-scale card-hover">
                  <h3 className="font-bold text-gray-900 mb-3">Other Electronics</h3>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li>Batteries</li>
                    <li>Small appliances</li>
                    <li>Circuit boards</li>
                    <li>Power supplies</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-12 bg-primary-50 border border-primary-200 rounded-lg p-6">
                <h3 className="font-bold text-gray-900 mb-4">Items We Cannot Accept</h3>
                <p className="text-gray-700 mb-4">For safety and regulatory reasons, we cannot accept:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li>Large appliances (refrigerators, washers)</li>
                    <li>Light bulbs & fluorescent tubes</li>
                    <li>Broken cathode ray tube (CRT) devices</li>
                  </ul>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li>Smoke detectors</li>
                    <li>Medical devices</li>
                    <li>Items with chemical or biological contamination</li>
                  </ul>
                </div>
                <p className="mt-4 text-sm text-gray-600">If you're unsure about any item, please contact us before scheduling your pickup.</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Frequently Asked Questions</h2>
              
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="font-bold text-gray-900 mb-2">Is there a fee for your pickup service?</h3>
                  <p className="text-gray-700">
                    Our standard pickup service is completely free for most consumer electronics. For large quantities or specialized items, there may be a small fee. You'll always be informed of any potential costs before scheduling.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="font-bold text-gray-900 mb-2">What areas do you service?</h3>
                  <p className="text-gray-700">
                    We currently provide pickup services in most major metropolitan areas and their surrounding suburbs. Enter your ZIP code during scheduling to check if we service your area.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="font-bold text-gray-900 mb-2">How is my data secured when recycling devices?</h3>
                  <p className="text-gray-700">
                    We take data security seriously. All devices that store data undergo a certified data destruction process that meets or exceeds industry standards. You can request a certificate of data destruction for your devices.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="font-bold text-gray-900 mb-2">Can I track my recycling impact?</h3>
                  <p className="text-gray-700">
                    Yes! When you create an account, you'll have access to a dashboard that tracks your recycling history and environmental impact metrics, including CO₂ savings and materials recovered.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="font-bold text-gray-900 mb-2">Do you offer services for businesses?</h3>
                  <p className="text-gray-700">
                    Yes, we offer specialized e-waste recycling services for businesses of all sizes. This includes bulk pickups, regular collection schedules, and detailed reporting for compliance purposes. Contact our business services team for more information.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="font-bold text-gray-900 mb-2">What happens if I need to reschedule my pickup?</h3>
                  <p className="text-gray-700">
                    No problem! You can reschedule your pickup through your account dashboard or by contacting customer service at least 24 hours before your scheduled pickup time.
                  </p>
                </div>
              </div>
              
              <div className="text-center mt-12">
                <p className="text-gray-700 mb-4">Don't see your question answered here?</p>
                <Button variant="outline" className="border-primary-500 text-primary-700">
                  Contact Customer Support
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Call-to-Action Section */}
        <section className="py-16 bg-gradient-to-r from-primary-600 to-primary-700 text-white">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Recycle Your E-Waste?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join thousands of environmentally conscious individuals who trust us with their electronic recycling needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/register">
                <Button className="bg-white text-primary-700 hover:bg-gray-100">
                  Schedule Your First Pickup
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/awareness">
                <Button variant="outline" className="border-white text-white hover:bg-primary-500">
                  Learn More About Recycling
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default HowItWorks;
