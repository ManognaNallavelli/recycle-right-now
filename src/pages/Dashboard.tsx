
import React, { useState } from 'react';
import { Navigate, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useAuth } from '@/hooks/useAuth';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Calendar, Clock, Package, User, Recycle, Clock3, MapPin, FileText, X } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose
} from "@/components/ui/dialog";

// Mock data for pickup history
const pickupHistory = [
  {
    id: 'PU001',
    date: '2024-04-15',
    timeSlot: '9:00 AM - 12:00 PM',
    status: 'Completed',
    items: ['Old laptop', 'Mobile phone', 'Printer'],
    address: '123 Main St, Anytown, CA 94000',
    collectedBy: 'John Smith',
    weight: '5.2 kg',
    recyclingFacility: 'EcoTech Recycling Center',
    carbonSaved: '12.5 kg CO₂'
  },
  {
    id: 'PU002',
    date: '2024-03-28',
    timeSlot: '12:00 PM - 3:00 PM',
    status: 'Completed',
    items: ['Computer monitor', 'Keyboard', 'Mouse'],
    address: '123 Main St, Anytown, CA 94000',
    collectedBy: 'Sarah Johnson',
    weight: '3.8 kg',
    recyclingFacility: 'GreenCycle Processing',
    carbonSaved: '8.7 kg CO₂'
  },
  {
    id: 'PU003',
    date: '2024-05-10',
    timeSlot: '3:00 PM - 6:00 PM',
    status: 'Scheduled',
    items: ['TV', 'DVD player'],
    address: '123 Main St, Anytown, CA 94000',
    collectedBy: 'Pending Assignment',
    weight: 'Pending',
    recyclingFacility: 'To be determined',
    carbonSaved: 'Pending'
  },
];

const Dashboard = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedPickup, setSelectedPickup] = useState<typeof pickupHistory[0] | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  const handleViewDetails = (pickup: typeof pickupHistory[0]) => {
    setSelectedPickup(pickup);
    setIsDialogOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Welcome, {user.name}</h1>
          <p className="text-gray-600 mb-8">User ID: {user.id}</p>
          
          <Tabs 
            defaultValue="overview" 
            value={activeTab}
            onValueChange={setActiveTab}
            className="space-y-6"
          >
            <TabsList className="bg-gray-100 p-1">
              <TabsTrigger value="overview" className="data-[state=active]:bg-white">Overview</TabsTrigger>
              <TabsTrigger value="pickups" className="data-[state=active]:bg-white">Pickup History</TabsTrigger>
              <TabsTrigger value="profile" className="data-[state=active]:bg-white">Profile</TabsTrigger>
            </TabsList>
            
            {/* Overview Tab */}
            <TabsContent value="overview" className="animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="hover-scale card-hover">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg font-semibold flex items-center">
                      <Calendar className="mr-2 h-5 w-5 text-primary-600" />
                      Schedule a Pickup
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Ready to recycle your e-waste? Schedule a convenient pickup time.
                    </p>
                    <Link to="/schedule-pickup">
                      <Button className="w-full bg-primary-600 hover:bg-primary-700">
                        Schedule Now
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
                
                <Card className="hover-scale card-hover">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg font-semibold flex items-center">
                      <Clock className="mr-2 h-5 w-5 text-primary-600" />
                      Upcoming Pickups
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    {pickupHistory.filter(p => p.status === 'Scheduled').length > 0 ? (
                      pickupHistory.filter(p => p.status === 'Scheduled').map((pickup) => (
                        <div key={pickup.id} className="mb-4 last:mb-0">
                          <p className="font-medium">{pickup.date}</p>
                          <p className="text-sm text-gray-600">{pickup.items.join(', ')}</p>
                          <div className="flex items-center mt-2">
                            <div className="h-2 w-2 rounded-full bg-primary-500 mr-2"></div>
                            <span className="text-sm font-medium text-primary-600">Scheduled</span>
                          </div>
                        </div>
                      ))
                    ) : (
                      <p className="text-gray-500">No upcoming pickups scheduled.</p>
                    )}
                    
                    <div className="mt-4">
                      <Link to="/schedule-pickup">
                        <Button variant="outline" className="w-full border-primary-500 text-primary-700">
                          Schedule New Pickup
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover-scale card-hover">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg font-semibold flex items-center">
                      <Recycle className="mr-2 h-5 w-5 text-primary-600" />
                      Your Impact
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <p className="text-gray-600 text-sm">Items Recycled</p>
                        <p className="text-2xl font-bold">{
                          pickupHistory
                            .filter(p => p.status === 'Completed')
                            .flatMap(p => p.items)
                            .length
                        }</p>
                      </div>
                      <div>
                        <p className="text-gray-600 text-sm">Pickups Completed</p>
                        <p className="text-2xl font-bold">
                          {pickupHistory.filter(p => p.status === 'Completed').length}
                        </p>
                      </div>
                      <div>
                        <p className="text-gray-600 text-sm">Environmental Impact</p>
                        <p className="text-sm text-green-600 font-medium">
                          You've helped save approximately 25kg of CO₂ emissions!
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="mt-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Awareness Tips</CardTitle>
                    <CardDescription>
                      Learn more about e-waste and how to reduce your environmental footprint
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <h3 className="font-medium text-lg mb-2">Did you know?</h3>
                        <p className="text-gray-600 text-sm">
                          The world generates around 50 million tons of e-waste annually, and only 20% is formally recycled.
                        </p>
                      </div>
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <h3 className="font-medium text-lg mb-2">Quick Tip</h3>
                        <p className="text-gray-600 text-sm">
                          Before recycling devices, make sure to back up important data and perform a factory reset to protect your personal information.
                        </p>
                      </div>
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <h3 className="font-medium text-lg mb-2">Recycling Benefit</h3>
                        <p className="text-gray-600 text-sm">
                          Recycling one million laptops saves the energy equivalent to electricity used by 3,657 U.S. homes in a year!
                        </p>
                      </div>
                    </div>
                    <div className="mt-4">
                      <Link to="/awareness">
                        <Button variant="link" className="text-primary-600 p-0 hover:text-primary-700">
                          Read more awareness articles →
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            {/* Pickup History Tab */}
            <TabsContent value="pickups" className="animate-fade-in">
              <Card>
                <CardHeader>
                  <CardTitle>Your Pickup History</CardTitle>
                  <CardDescription>
                    View all your past and upcoming pickups
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {pickupHistory.length > 0 ? (
                    <div className="space-y-6">
                      {pickupHistory.map((pickup) => (
                        <div key={pickup.id} className="border rounded-lg p-4 bg-white">
                          <div className="flex justify-between items-start mb-4">
                            <div>
                              <h3 className="font-medium">Pickup #{pickup.id}</h3>
                              <div className="flex items-center mt-1">
                                <Clock3 className="h-4 w-4 text-gray-500 mr-1" />
                                <span className="text-sm text-gray-600">{pickup.date}</span>
                              </div>
                            </div>
                            <div className={`text-sm font-medium px-2 py-1 rounded-full ${
                              pickup.status === 'Completed' 
                                ? 'bg-green-100 text-green-700' 
                                : 'bg-blue-100 text-blue-700'
                            }`}>
                              {pickup.status}
                            </div>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <p className="text-sm text-gray-600 font-medium mb-1">Items:</p>
                              <ul className="list-disc list-inside text-sm text-gray-700 pl-1">
                                {pickup.items.map((item, i) => (
                                  <li key={i}>{item}</li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <div className="flex items-start">
                                <MapPin className="h-4 w-4 text-gray-500 mr-1 mt-0.5" />
                                <p className="text-sm text-gray-600">{pickup.address}</p>
                              </div>
                            </div>
                          </div>
                          <div className="mt-4 flex justify-end">
                            <Button 
                              variant="outline" 
                              size="sm" 
                              className="text-sm"
                              onClick={() => handleViewDetails(pickup)}
                            >
                              <FileText className="mr-1 h-4 w-4" />
                              View Details
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <p className="text-gray-500 mb-4">You haven't scheduled any pickups yet.</p>
                      <Link to="/schedule-pickup">
                        <Button className="bg-primary-600 hover:bg-primary-700">
                          Schedule Your First Pickup
                        </Button>
                      </Link>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
            
            {/* Profile Tab */}
            <TabsContent value="profile" className="animate-fade-in">
              <Card>
                <CardHeader>
                  <CardTitle>Your Profile</CardTitle>
                  <CardDescription>
                    Manage your personal information
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="flex flex-col md:flex-row md:items-center">
                      <div className="md:w-1/4">
                        <p className="font-medium text-gray-700">Name:</p>
                      </div>
                      <div className="md:w-3/4">
                        <p>{user.name}</p>
                      </div>
                    </div>
                    <div className="flex flex-col md:flex-row md:items-center">
                      <div className="md:w-1/4">
                        <p className="font-medium text-gray-700">Email:</p>
                      </div>
                      <div className="md:w-3/4">
                        <p>{user.email}</p>
                      </div>
                    </div>
                    <div className="flex flex-col md:flex-row md:items-center">
                      <div className="md:w-1/4">
                        <p className="font-medium text-gray-700">User ID:</p>
                      </div>
                      <div className="md:w-3/4">
                        <p>{user.id}</p>
                      </div>
                    </div>
                    <div className="flex flex-col md:flex-row md:items-center">
                      <div className="md:w-1/4">
                        <p className="font-medium text-gray-700">Default Address:</p>
                      </div>
                      <div className="md:w-3/4">
                        <p className="text-gray-500 italic">No default address set</p>
                      </div>
                    </div>
                    <div className="space-x-4 pt-4">
                      <Button className="bg-primary-600 hover:bg-primary-700">
                        <User className="mr-2 h-4 w-4" />
                        Edit Profile
                      </Button>
                      <Button variant="outline" className="border-primary-500 text-primary-700">
                        Change Password
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      {/* Pickup Details Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle>Pickup Details</DialogTitle>
            <DialogDescription>
              Details for pickup #{selectedPickup?.id}
            </DialogDescription>
          </DialogHeader>
          
          {selectedPickup && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-medium text-gray-600">Date</p>
                  <p>{selectedPickup.date}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">Time Slot</p>
                  <p>{selectedPickup.timeSlot}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">Status</p>
                  <p className={`font-medium ${
                    selectedPickup.status === 'Completed' 
                      ? 'text-green-600' 
                      : 'text-blue-600'
                  }`}>
                    {selectedPickup.status}
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">Collected By</p>
                  <p>{selectedPickup.collectedBy}</p>
                </div>
              </div>
              
              <div>
                <p className="text-sm font-medium text-gray-600">Address</p>
                <p>{selectedPickup.address}</p>
              </div>
              
              <div>
                <p className="text-sm font-medium text-gray-600">Items Collected</p>
                <ul className="list-disc list-inside pl-2">
                  {selectedPickup.items.map((item, idx) => (
                    <li key={idx} className="text-gray-700">{item}</li>
                  ))}
                </ul>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Weight</p>
                  <p>{selectedPickup.weight}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">Carbon Saved</p>
                  <p className="text-green-600">{selectedPickup.carbonSaved}</p>
                </div>
              </div>
              
              <div>
                <p className="text-sm font-medium text-gray-600">Recycling Facility</p>
                <p>{selectedPickup.recyclingFacility}</p>
              </div>
              
              {selectedPickup.status === 'Scheduled' && (
                <div className="bg-blue-50 p-3 rounded-md">
                  <p className="text-sm text-blue-700">
                    This pickup is scheduled for collection. You'll receive updates via email and SMS.
                  </p>
                </div>
              )}
              
              {selectedPickup.status === 'Completed' && (
                <div className="bg-green-50 p-3 rounded-md">
                  <p className="text-sm text-green-700">
                    Thank you for recycling responsibly! Your contribution helps make our planet greener.
                  </p>
                </div>
              )}
            </div>
          )}
          
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Close</Button>
            </DialogClose>
            {selectedPickup?.status === 'Scheduled' && (
              <Button variant="destructive">
                Cancel Pickup
              </Button>
            )}
          </DialogFooter>
        </DialogContent>
      </Dialog>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
