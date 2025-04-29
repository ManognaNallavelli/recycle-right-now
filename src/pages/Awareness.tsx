
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { AlertTriangle, Activity, Leaf, BarChart, Save, ArrowRight, Download } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Awareness = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <section className="pt-32 pb-16 bg-gradient-to-br from-primary-50 via-white to-secondary-50">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">E-Waste Awareness</h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Learn about the environmental impact of electronic waste and why proper recycling is crucial for our planet's future.
            </p>
          </div>
        </section>
        
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <Tabs defaultValue="impact" className="space-y-8">
              <div className="flex justify-center">
                <TabsList className="bg-muted/50">
                  <TabsTrigger value="impact">Environmental Impact</TabsTrigger>
                  <TabsTrigger value="facts">Key Facts</TabsTrigger>
                  <TabsTrigger value="solutions">Solutions</TabsTrigger>
                  <TabsTrigger value="resources">Resources</TabsTrigger>
                </TabsList>
              </div>
              
              <TabsContent value="impact" className="animate-fade-in">
                <div className="max-w-4xl mx-auto space-y-8">
                  <div className="space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">The Environmental Impact of E-Waste</h2>
                    <p className="text-gray-700">
                      Electronic waste, or e-waste, is one of the fastest-growing waste streams globally. When improperly disposed of, e-waste poses severe risks to the environment and human health.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <Card className="hover-scale card-hover">
                      <CardHeader className="pb-2">
                        <div className="bg-red-100 w-12 h-12 rounded-full flex items-center justify-center mb-3">
                          <AlertTriangle className="text-red-600 h-6 w-6" />
                        </div>
                        <CardTitle className="text-xl">Toxic Substances</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-700">
                          Electronic devices contain hazardous materials like lead, mercury, cadmium, and brominated flame retardants. When improperly disposed of, these toxins can leach into soil and water, causing long-term environmental contamination.
                        </p>
                      </CardContent>
                    </Card>
                    
                    <Card className="hover-scale card-hover">
                      <CardHeader className="pb-2">
                        <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-3">
                          <Activity className="text-blue-600 h-6 w-6" />
                        </div>
                        <CardTitle className="text-xl">Water & Soil Pollution</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-700">
                          When e-waste is dumped in landfills, toxic chemicals can seep into groundwater and surrounding soil. This contamination affects ecosystems, agriculture, and can eventually make its way into the food chain.
                        </p>
                      </CardContent>
                    </Card>
                    
                    <Card className="hover-scale card-hover">
                      <CardHeader className="pb-2">
                        <div className="bg-yellow-100 w-12 h-12 rounded-full flex items-center justify-center mb-3">
                          <BarChart className="text-yellow-600 h-6 w-6" />
                        </div>
                        <CardTitle className="text-xl">Resource Depletion</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-700">
                          Manufacturing electronic devices requires significant resources, including rare earth elements and precious metals. When we don't recycle e-waste, we lose these valuable materials and increase the demand for raw material extraction.
                        </p>
                      </CardContent>
                    </Card>
                    
                    <Card className="hover-scale card-hover">
                      <CardHeader className="pb-2">
                        <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mb-3">
                          <Leaf className="text-green-600 h-6 w-6" />
                        </div>
                        <CardTitle className="text-xl">Climate Impact</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-700">
                          Improper e-waste disposal contributes to greenhouse gas emissions. Additionally, the mining and manufacturing processes required for new electronics production are energy-intensive and contribute significantly to carbon emissions.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                    <h3 className="text-lg font-medium text-red-800 mb-3">Health Impacts</h3>
                    <p className="text-gray-700 mb-4">
                      The improper handling of e-waste exposes workers and nearby communities to toxic substances that can cause:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li>Respiratory issues from inhaling toxic fumes</li>
                      <li>Neurological damage from exposure to heavy metals</li>
                      <li>Reproductive problems and developmental issues</li>
                      <li>Chronic diseases and cancers from long-term exposure</li>
                      <li>DNA damage from certain chemicals in electronics</li>
                    </ul>
                  </div>
                  
                  <div className="text-center pt-4">
                    <Link to="/schedule-pickup">
                      <Button className="bg-primary-600 hover:bg-primary-700">
                        Recycle Your E-Waste Now
                      </Button>
                    </Link>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="facts" className="animate-fade-in">
                <div className="max-w-4xl mx-auto space-y-8">
                  <div className="space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Key E-Waste Facts</h2>
                    <p className="text-gray-700">
                      Understanding the scale and impact of electronic waste helps underscore the importance of proper recycling and disposal methods.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:border-primary-300 transition-colors">
                      <h3 className="text-3xl font-bold text-primary-600 mb-2">50+ Million</h3>
                      <p className="text-gray-700">Tons of e-waste generated globally each year</p>
                    </div>
                    
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:border-primary-300 transition-colors">
                      <h3 className="text-3xl font-bold text-primary-600 mb-2">20%</h3>
                      <p className="text-gray-700">Of global e-waste is formally recycled</p>
                    </div>
                    
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:border-primary-300 transition-colors">
                      <h3 className="text-3xl font-bold text-primary-600 mb-2">$57 Billion</h3>
                      <p className="text-gray-700">Value of raw materials in global e-waste annually</p>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <h3 className="text-xl font-bold text-gray-900">Did You Know?</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-gray-50 p-6 rounded-lg">
                        <p className="text-gray-700">
                          <span className="font-semibold">📱</span> One million recycled cell phones can recover approximately 35,000 pounds of copper, 772 pounds of silver, 75 pounds of gold, and 33 pounds of palladium.
                        </p>
                      </div>
                      
                      <div className="bg-gray-50 p-6 rounded-lg">
                        <p className="text-gray-700">
                          <span className="font-semibold">💻</span> Recycling one million laptops saves the energy equivalent to electricity used by 3,657 U.S. homes in a year.
                        </p>
                      </div>
                      
                      <div className="bg-gray-50 p-6 rounded-lg">
                        <p className="text-gray-700">
                          <span className="font-semibold">🔋</span> Americans throw away more than 3 billion batteries each year, which can leach chemicals into soil and water.
                        </p>
                      </div>
                      
                      <div className="bg-gray-50 p-6 rounded-lg">
                        <p className="text-gray-700">
                          <span className="font-semibold">🌍</span> E-waste represents 2% of America's trash in landfills, but it equals 70% of overall toxic waste.
                        </p>
                      </div>
                    </div>
                    
                    <div className="bg-secondary-50 border border-secondary-200 rounded-lg p-6">
                      <h4 className="text-lg font-medium text-secondary-800 mb-3">Growth Trend</h4>
                      <p className="text-gray-700 mb-4">
                        The amount of worldwide e-waste generation is expected to exceed 74 million tons by 2030. This is nearly double the amount generated in 2014.
                      </p>
                    </div>
                  </div>
                  
                  <div className="text-center pt-4">
                    <Link to="/schedule-pickup">
                      <Button className="bg-primary-600 hover:bg-primary-700">
                        Be Part of the Solution
                      </Button>
                    </Link>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="solutions" className="animate-fade-in">
                <div className="max-w-4xl mx-auto space-y-8">
                  <div className="space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Solutions & Best Practices</h2>
                    <p className="text-gray-700">
                      There are many ways individuals and organizations can contribute to reducing the e-waste problem through responsible practices.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <Card className="hover-scale card-hover">
                      <CardHeader>
                        <CardTitle className="text-xl">Recycling</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2 text-gray-700">
                          <li className="flex items-start">
                            <div className="bg-primary-100 rounded-full p-1 mr-2 mt-1">
                              <Save className="h-3 w-3 text-primary-600" />
                            </div>
                            <span>Use certified e-waste recycling services like EcoRecycle</span>
                          </li>
                          <li className="flex items-start">
                            <div className="bg-primary-100 rounded-full p-1 mr-2 mt-1">
                              <Save className="h-3 w-3 text-primary-600" />
                            </div>
                            <span>Ensure data is properly destroyed before recycling devices</span>
                          </li>
                          <li className="flex items-start">
                            <div className="bg-primary-100 rounded-full p-1 mr-2 mt-1">
                              <Save className="h-3 w-3 text-primary-600" />
                            </div>
                            <span>Look for manufacturer take-back programs for eligible devices</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                    
                    <Card className="hover-scale card-hover">
                      <CardHeader>
                        <CardTitle className="text-xl">Reuse & Repair</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2 text-gray-700">
                          <li className="flex items-start">
                            <div className="bg-primary-100 rounded-full p-1 mr-2 mt-1">
                              <Save className="h-3 w-3 text-primary-600" />
                            </div>
                            <span>Repair devices when possible instead of replacing them</span>
                          </li>
                          <li className="flex items-start">
                            <div className="bg-primary-100 rounded-full p-1 mr-2 mt-1">
                              <Save className="h-3 w-3 text-primary-600" />
                            </div>
                            <span>Donate working electronics to schools or charities</span>
                          </li>
                          <li className="flex items-start">
                            <div className="bg-primary-100 rounded-full p-1 mr-2 mt-1">
                              <Save className="h-3 w-3 text-primary-600" />
                            </div>
                            <span>Consider purchasing refurbished electronics</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                    
                    <Card className="hover-scale card-hover">
                      <CardHeader>
                        <CardTitle className="text-xl">Reduce Consumption</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2 text-gray-700">
                          <li className="flex items-start">
                            <div className="bg-primary-100 rounded-full p-1 mr-2 mt-1">
                              <Save className="h-3 w-3 text-primary-600" />
                            </div>
                            <span>Only upgrade devices when necessary, not just for new features</span>
                          </li>
                          <li className="flex items-start">
                            <div className="bg-primary-100 rounded-full p-1 mr-2 mt-1">
                              <Save className="h-3 w-3 text-primary-600" />
                            </div>
                            <span>Choose devices with longer lifespans and better repairability</span>
                          </li>
                          <li className="flex items-start">
                            <div className="bg-primary-100 rounded-full p-1 mr-2 mt-1">
                              <Save className="h-3 w-3 text-primary-600" />
                            </div>
                            <span>Consider if you really need multiple devices with similar functions</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                    
                    <Card className="hover-scale card-hover">
                      <CardHeader>
                        <CardTitle className="text-xl">Advocate</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2 text-gray-700">
                          <li className="flex items-start">
                            <div className="bg-primary-100 rounded-full p-1 mr-2 mt-1">
                              <Save className="h-3 w-3 text-primary-600" />
                            </div>
                            <span>Support "right to repair" legislation</span>
                          </li>
                          <li className="flex items-start">
                            <div className="bg-primary-100 rounded-full p-1 mr-2 mt-1">
                              <Save className="h-3 w-3 text-primary-600" />
                            </div>
                            <span>Encourage your workplace to implement e-waste recycling programs</span>
                          </li>
                          <li className="flex items-start">
                            <div className="bg-primary-100 rounded-full p-1 mr-2 mt-1">
                              <Save className="h-3 w-3 text-primary-600" />
                            </div>
                            <span>Share information about proper e-waste disposal with your community</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="bg-primary-50 border border-primary-200 rounded-lg p-6">
                    <h3 className="text-lg font-medium text-primary-800 mb-3">Business Solutions</h3>
                    <p className="text-gray-700 mb-4">
                      Companies can make a significant impact by implementing these strategies:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li>Develop a formal e-waste management policy</li>
                      <li>Partner with certified e-waste recyclers for proper disposal</li>
                      <li>Consider leasing equipment instead of purchasing</li>
                      <li>Implement internal reuse programs for electronic components</li>
                      <li>Train employees on proper e-waste disposal practices</li>
                    </ul>
                  </div>
                  
                  <div className="text-center pt-4">
                    <Link to="/schedule-pickup">
                      <Button className="bg-primary-600 hover:bg-primary-700">
                        Schedule a Pickup Today
                      </Button>
                    </Link>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="resources" className="animate-fade-in">
                <div className="max-w-4xl mx-auto space-y-8">
                  <div className="space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Educational Resources</h2>
                    <p className="text-gray-700">
                      Expand your knowledge about e-waste management with these helpful resources and tools.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card className="hover-scale card-hover">
                      <CardHeader>
                        <CardTitle>Reports & Studies</CardTitle>
                        <CardDescription>In-depth research on e-waste</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="border-b pb-4">
                          <h4 className="font-medium text-gray-900">Global E-waste Monitor</h4>
                          <p className="text-sm text-gray-600 mb-2">UN report on global e-waste statistics, flows, and policy actions.</p>
                          <Button variant="outline" size="sm" className="text-primary-700 border-primary-500">
                            <Download className="h-4 w-4 mr-1" />
                            Download PDF
                          </Button>
                        </div>
                        <div className="border-b pb-4">
                          <h4 className="font-medium text-gray-900">E-Waste Impact Assessment</h4>
                          <p className="text-sm text-gray-600 mb-2">Environmental and health impacts of improper e-waste disposal.</p>
                          <Button variant="outline" size="sm" className="text-primary-700 border-primary-500">
                            <Download className="h-4 w-4 mr-1" />
                            Download PDF
                          </Button>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">Circular Economy & E-Waste</h4>
                          <p className="text-sm text-gray-600 mb-2">How circular economy principles apply to electronics.</p>
                          <Button variant="outline" size="sm" className="text-primary-700 border-primary-500">
                            <Download className="h-4 w-4 mr-1" />
                            Download PDF
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card className="hover-scale card-hover">
                      <CardHeader>
                        <CardTitle>Videos & Webinars</CardTitle>
                        <CardDescription>Educational multimedia content</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="border-b pb-4">
                          <h4 className="font-medium text-gray-900">The E-Waste Crisis Explained</h4>
                          <p className="text-sm text-gray-600 mb-2">A 15-minute documentary on global e-waste challenges.</p>
                          <Button variant="outline" size="sm" className="text-primary-700 border-primary-500">
                            Watch Video
                            <ArrowRight className="h-4 w-4 ml-1" />
                          </Button>
                        </div>
                        <div className="border-b pb-4">
                          <h4 className="font-medium text-gray-900">Webinar: Business E-Waste Solutions</h4>
                          <p className="text-sm text-gray-600 mb-2">Expert panel discusses corporate e-waste management.</p>
                          <Button variant="outline" size="sm" className="text-primary-700 border-primary-500">
                            Watch Webinar
                            <ArrowRight className="h-4 w-4 ml-1" />
                          </Button>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">How Recycling Electronics Works</h4>
                          <p className="text-sm text-gray-600 mb-2">Inside look at an e-waste processing facility.</p>
                          <Button variant="outline" size="sm" className="text-primary-700 border-primary-500">
                            Watch Video
                            <ArrowRight className="h-4 w-4 ml-1" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <Card className="hover-scale card-hover">
                    <CardHeader>
                      <CardTitle>Educational Tools</CardTitle>
                      <CardDescription>Resources to help spread awareness</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-medium text-gray-900 mb-2">E-Waste Calculator</h4>
                          <p className="text-sm text-gray-600 mb-3">
                            Calculate the environmental impact of your electronic devices.
                          </p>
                          <Button size="sm" className="bg-primary-600 hover:bg-primary-700 w-full">
                            Try Calculator
                          </Button>
                        </div>
                        
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-medium text-gray-900 mb-2">Classroom Resources</h4>
                          <p className="text-sm text-gray-600 mb-3">
                            Lesson plans and activities for teachers about e-waste.
                          </p>
                          <Button size="sm" className="bg-primary-600 hover:bg-primary-700 w-full">
                            Download Kit
                          </Button>
                        </div>
                        
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-medium text-gray-900 mb-2">Infographics Pack</h4>
                          <p className="text-sm text-gray-600 mb-3">
                            Shareable graphics about e-waste facts and solutions.
                          </p>
                          <Button size="sm" className="bg-primary-600 hover:bg-primary-700 w-full">
                            Download Pack
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <div className="text-center pt-4">
                    <Link to="/schedule-pickup">
                      <Button className="bg-primary-600 hover:bg-primary-700">
                        Take Action Now
                      </Button>
                    </Link>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
        
        {/* Call-to-Action Section */}
        <section className="py-16 bg-primary-600 text-white">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Make a Difference?</h2>
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              Schedule an e-waste pickup today and take the first step toward responsible electronics disposal.
            </p>
            <Link to="/register">
              <Button className="bg-white text-primary-700 hover:bg-gray-100">
                Schedule a Pickup
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Awareness;
