
import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuth } from '@/hooks/useAuth';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Form } from "@/components/ui/form";
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from "sonner";
import { format } from "date-fns";
import OTPVerification from '@/components/OTPVerification';
import { pickupFormSchema, type PickupFormValues } from '@/utils/validation';
import LocationForm from '@/components/pickup/LocationForm';
import ContactForm from '@/components/pickup/ContactForm';
import ScheduleForm from '@/components/pickup/ScheduleForm';
import ItemsForm from '@/components/pickup/ItemsForm';
import SubmitProgress from '@/components/pickup/SubmitProgress';

const SchedulePickup = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showOtpVerification, setShowOtpVerification] = useState(false);
  const [phoneVerified, setPhoneVerified] = useState(false);
  
  const form = useForm<PickupFormValues>({
    resolver: zodResolver(pickupFormSchema),
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

  const onSubmit = async (values: PickupFormValues) => {
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
                      <LocationForm form={form} />
                      <ContactForm 
                        form={form} 
                        phoneVerified={phoneVerified} 
                        handleVerifyPhone={handleVerifyPhone} 
                      />
                      <ScheduleForm form={form} />
                      <ItemsForm form={form} />
                      <SubmitProgress 
                        isSubmitting={isSubmitting} 
                        progress={progress} 
                        phoneVerified={phoneVerified} 
                      />
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
