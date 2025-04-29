
import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuth } from '@/hooks/useAuth';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Loader2, CalendarIcon, Clock, Phone } from 'lucide-react';
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format, addDays, isBefore } from "date-fns";
import { cn } from "@/lib/utils";
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from "sonner";
import { Progress } from "@/components/ui/progress";
import OTPVerification from '@/components/OTPVerification';

const formSchema = z.object({
  address: z.string().min(5, { message: 'Address is required' }),
  city: z.string().min(2, { message: 'City is required' }).refine(val => val.toLowerCase() === 'hyderabad', {
    message: "We currently only service Hyderabad. Please contact support for other locations."
  }),
  state: z.string().min(2, { message: 'State is required' }),
  zip: z.string().min(5, { message: 'Valid ZIP code is required' }),
  date: z.date({ required_error: 'Please select a date' }).refine(date => {
    const minDate = addDays(new Date(new Date().setHours(0, 0, 0, 0)), 2);
    return !isBefore(date, minDate);
  }, {
    message: "Pickup date must be at least 2 days from today",
  }),
  timeSlot: z.string({ required_error: 'Please select a time slot' }),
  items: z.array(z.string()).refine((val) => val.length > 0, {
    message: "Select at least one item",
  }),
  phoneNumber: z.string().min(10, { message: 'Valid phone number is required' }),
  notes: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const timeSlots = [
  "9:00 AM - 12:00 PM",
  "12:00 PM - 3:00 PM",
  "3:00 PM - 6:00 PM",
];

const electronicItems = [
  { id: "computers", label: "Computers & Laptops" },
  { id: "phones", label: "Mobile Phones & Tablets" },
  { id: "tvs", label: "TVs & Monitors" },
  { id: "printers", label: "Printers & Scanners" },
  { id: "audio", label: "Audio Equipment" },
  { id: "batteries", label: "Batteries" },
  { id: "cables", label: "Cables & Chargers" },
  { id: "other", label: "Other Electronics" },
];

const SchedulePickup = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showOtpVerification, setShowOtpVerification] = useState(false);
  const [phoneVerified, setPhoneVerified] = useState(false);
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      address: '',
      city: '',
      state: '',
      zip: '',
      items: [],
      phoneNumber: '',
      notes: '',
    },
  });

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  const handleVerifyPhone = (e: React.MouseEvent) => {
    e.preventDefault();
    
    const phoneNumber = form.getValues('phoneNumber');
    if (!phoneNumber || phoneNumber.length < 10) {
      form.setError('phoneNumber', { 
        type: 'manual', 
        message: 'Please enter a valid phone number' 
      });
      return;
    }
    
    // Show OTP verification component
    setShowOtpVerification(true);
    
    // Simulate sending OTP
    toast.info(`OTP sent to ${phoneNumber}`);
  };

  const handleOtpVerificationComplete = () => {
    setShowOtpVerification(false);
    setPhoneVerified(true);
    toast.success("Phone number verified!");
  };

  const handleOtpVerificationCancel = () => {
    setShowOtpVerification(false);
  };

  const onSubmit = async (values: FormValues) => {
    // Check if location is Hyderabad
    if (values.city.toLowerCase() !== 'hyderabad') {
      toast.error("Service available only in Hyderabad", {
        description: "We're currently servicing Hyderabad only. We'll expand to other cities soon!"
      });
      return;
    }
    
    // Check if phone is verified
    if (!phoneVerified) {
      toast.error("Phone verification required", {
        description: "Please verify your phone number before scheduling a pickup"
      });
      return;
    }
    
    // All checks passed, proceed with submission
    setIsSubmitting(true);
    setProgress(0);
    
    // Simulate API call with progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 5;
      });
    }, 100);
    
    // Mock submission delay
    setTimeout(() => {
      clearInterval(interval);
      setProgress(100);
      setIsSubmitting(false);
      
      // Show success toast
      toast.success("Pickup scheduled successfully!", {
        description: `Your pickup has been scheduled for ${format(values.date, 'PPP')} (${values.timeSlot})`,
        action: {
          label: "View Details",
          onClick: () => navigate("/dashboard"),
        },
      });
      
      // Redirect to dashboard
      setTimeout(() => {
        navigate('/dashboard');
      }, 1500);
    }, 2000);
  };

  const minSelectableDate = addDays(new Date(new Date().setHours(0, 0, 0, 0)), 2);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="mb-8">
              <h1 className="text-3xl font-bold mb-2">Schedule a Pickup</h1>
              <p className="text-gray-600">
                Fill out the form below to schedule an e-waste pickup from your location.
              </p>
            </div>
            
            <Card className="border-gray-200 shadow-sm">
              <CardHeader>
                <CardTitle>Pickup Details</CardTitle>
                <CardDescription>
                  Provide the details for your e-waste collection
                </CardDescription>
              </CardHeader>
              <CardContent>
                {showOtpVerification ? (
                  <OTPVerification 
                    phoneNumber={form.getValues('phoneNumber')} 
                    onVerificationComplete={handleOtpVerificationComplete}
                    onCancel={handleOtpVerificationCancel}
                  />
                ) : (
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <div className="space-y-4">
                        <h3 className="text-lg font-medium">Pickup Location</h3>
                        
                        <FormField
                          control={form.control}
                          name="address"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Address</FormLabel>
                              <FormControl>
                                <Input 
                                  placeholder="Street address" 
                                  {...field} 
                                  className="focus-visible:ring-primary-500"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <FormField
                            control={form.control}
                            name="city"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>City</FormLabel>
                                <FormControl>
                                  <Input 
                                    placeholder="City" 
                                    {...field} 
                                    className={`focus-visible:ring-primary-500 ${
                                      field.value && field.value.toLowerCase() !== 'hyderabad' ? 'border-red-500' : ''
                                    }`}
                                  />
                                </FormControl>
                                {field.value && field.value.toLowerCase() !== 'hyderabad' && (
                                  <p className="text-xs text-amber-600 mt-1">
                                    * Currently available only in Hyderabad
                                  </p>
                                )}
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          
                          <FormField
                            control={form.control}
                            name="state"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>State</FormLabel>
                                <FormControl>
                                  <Select 
                                    onValueChange={field.onChange} 
                                    defaultValue={field.value}
                                  >
                                    <SelectTrigger className="focus-visible:ring-primary-500">
                                      <SelectValue placeholder="Select state" />
                                    </SelectTrigger>
                                    <SelectContent>
                                      <SelectItem value="TS">Telangana</SelectItem>
                                      <SelectItem value="AP">Andhra Pradesh</SelectItem>
                                      <SelectItem value="KA">Karnataka</SelectItem>
                                      <SelectItem value="TN">Tamil Nadu</SelectItem>
                                      <SelectItem value="MH">Maharashtra</SelectItem>
                                    </SelectContent>
                                  </Select>
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          
                          <FormField
                            control={form.control}
                            name="zip"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>ZIP Code</FormLabel>
                                <FormControl>
                                  <Input 
                                    placeholder="ZIP code" 
                                    {...field} 
                                    className="focus-visible:ring-primary-500"
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-4 pt-4 border-t">
                        <h3 className="text-lg font-medium">Contact Information</h3>
                        
                        <div className="flex gap-4">
                          <FormField
                            control={form.control}
                            name="phoneNumber"
                            render={({ field }) => (
                              <FormItem className="flex-1">
                                <FormLabel>Phone Number</FormLabel>
                                <div className="flex">
                                  <FormControl>
                                    <Input 
                                      placeholder="Enter phone number" 
                                      {...field} 
                                      className="focus-visible:ring-primary-500 rounded-r-none"
                                      disabled={phoneVerified}
                                    />
                                  </FormControl>
                                  <Button 
                                    type="button" 
                                    onClick={handleVerifyPhone}
                                    className="rounded-l-none"
                                    variant={phoneVerified ? "outline" : "default"}
                                    disabled={phoneVerified}
                                  >
                                    {phoneVerified ? (
                                      <>Verified <Phone className="ml-2 h-4 w-4 text-green-500" /></>
                                    ) : (
                                      "Verify"
                                    )}
                                  </Button>
                                </div>
                                {phoneVerified && (
                                  <p className="text-xs text-green-600 mt-1">
                                    Phone number verified successfully
                                  </p>
                                )}
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-4 pt-4 border-t">
                        <h3 className="text-lg font-medium">Pickup Schedule</h3>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <FormField
                            control={form.control}
                            name="date"
                            render={({ field }) => (
                              <FormItem className="flex flex-col">
                                <FormLabel>Pickup Date</FormLabel>
                                <Popover>
                                  <PopoverTrigger asChild>
                                    <FormControl>
                                      <Button
                                        variant={"outline"}
                                        className={cn(
                                          "w-full pl-3 text-left font-normal",
                                          !field.value && "text-muted-foreground"
                                        )}
                                      >
                                        {field.value ? (
                                          format(field.value, "PPP")
                                        ) : (
                                          <span>Pick a date</span>
                                        )}
                                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                      </Button>
                                    </FormControl>
                                  </PopoverTrigger>
                                  <PopoverContent className="w-auto p-0 pointer-events-auto" align="start">
                                    <Calendar
                                      mode="single"
                                      selected={field.value}
                                      onSelect={field.onChange}
                                      disabled={(date) =>
                                        isBefore(date, minSelectableDate) ||
                                        date > new Date(new Date().setMonth(new Date().getMonth() + 2))
                                      }
                                      className="p-3 pointer-events-auto"
                                    />
                                  </PopoverContent>
                                </Popover>
                                <p className="text-xs text-muted-foreground mt-1">
                                  Pickup dates are available starting 2 days from today
                                </p>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          
                          <FormField
                            control={form.control}
                            name="timeSlot"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Time Slot</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                  <FormControl>
                                    <SelectTrigger className="focus-visible:ring-primary-500">
                                      <SelectValue placeholder="Select a time slot" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    {timeSlots.map((slot) => (
                                      <SelectItem key={slot} value={slot}>
                                        <div className="flex items-center">
                                          <Clock className="mr-2 h-4 w-4 text-primary-600" />
                                          {slot}
                                        </div>
                                      </SelectItem>
                                    ))}
                                  </SelectContent>
                                </Select>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-4 pt-4 border-t">
                        <h3 className="text-lg font-medium">Items for Recycling</h3>
                        <p className="text-sm text-gray-600">
                          Select the types of electronic items you want to recycle.
                        </p>
                        
                        <FormField
                          control={form.control}
                          name="items"
                          render={() => (
                            <FormItem>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                {electronicItems.map((item) => (
                                  <FormField
                                    key={item.id}
                                    control={form.control}
                                    name="items"
                                    render={({ field }) => {
                                      return (
                                        <FormItem
                                          key={item.id}
                                          className="flex flex-row items-start space-x-3 space-y-0"
                                        >
                                          <FormControl>
                                            <Checkbox
                                              checked={field.value?.includes(item.id)}
                                              onCheckedChange={(checked) => {
                                                return checked
                                                  ? field.onChange([...field.value, item.id])
                                                  : field.onChange(
                                                      field.value?.filter(
                                                        (value) => value !== item.id
                                                      )
                                                    )
                                              }}
                                            />
                                          </FormControl>
                                          <FormLabel className="font-normal">
                                            {item.label}
                                          </FormLabel>
                                        </FormItem>
                                      )
                                    }}
                                  />
                                ))}
                              </div>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="notes"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Additional Notes</FormLabel>
                              <FormControl>
                                <Textarea 
                                  placeholder="Provide any additional details or special instructions for the pickup" 
                                  {...field} 
                                  className="focus-visible:ring-primary-500"
                                  rows={3}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      {isSubmitting && (
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>Processing...</span>
                            <span>{progress}%</span>
                          </div>
                          <Progress value={progress} className="h-2" />
                        </div>
                      )}
                      
                      <Button 
                        type="submit" 
                        className="w-full bg-primary-600 hover:bg-primary-700"
                        disabled={isSubmitting || !phoneVerified}
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Scheduling Pickup...
                          </>
                        ) : (
                          "Schedule Pickup"
                        )}
                      </Button>
                    </form>
                  </Form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SchedulePickup;
