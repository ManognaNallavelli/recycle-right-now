
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
import { pickupFormSchema, type PickupFormValues } from '@/utils/validation';
import LocationForm from '@/components/pickup/LocationForm';
import ContactForm from '@/components/pickup/ContactForm';
import ScheduleForm from '@/components/pickup/ScheduleForm';
import ItemsForm from '@/components/pickup/ItemsForm';
import SubmitProgress from '@/components/pickup/SubmitProgress';
import { supabase } from '@/integrations/supabase/client';

const SchedulePickup = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [progress, setProgress] = useState(0);
  
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

  const onSubmit = async (values: PickupFormValues) => {
    // Check if location is Hyderabad
    if (values.city.toLowerCase() !== 'hyderabad') {
      toast.error("Service available only in Hyderabad", {
        description: "We're currently servicing Hyderabad only. We'll expand to other cities soon!"
      });
      return;
    }
    
    // Validate phone number format (Indian number)
    const phoneRegex = /^\+91\s?\d{10}$/;
    if (!phoneRegex.test(values.phoneNumber.trim())) {
      toast.error("Invalid phone number format", {
        description: "Please enter a valid Indian phone number starting with +91 followed by 10 digits"
      });
      return;
    }
    
    // All checks passed, proceed with submission
    setIsSubmitting(true);
    setProgress(0);
    
    // Simulate progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 95) {
          clearInterval(interval);
          return 95;
        }
        return prev + 5;
      });
    }, 100);
    
    try {
      // Save to database
      const { error } = await supabase.from('pickups').insert({
        user_id: user.id,
        address: values.address,
        city: values.city,
        state: values.state,
        zip: values.zip,
        items: values.items,
        phone_number: values.phoneNumber,
        notes: values.notes,
        date: values.date.toISOString().split('T')[0],
        time_slot: values.timeSlot,
        status: 'Scheduled'
      });
      
      if (error) {
        console.error("Error saving pickup:", error);
        toast.error("Failed to schedule pickup", {
          description: error.message
        });
        setIsSubmitting(false);
        clearInterval(interval);
        return;
      }
      
      setProgress(100);
      
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
    } catch (error) {
      console.error("Error scheduling pickup:", error);
      toast.error("Something went wrong", {
        description: "Failed to schedule pickup. Please try again."
      });
    } finally {
      clearInterval(interval);
      setIsSubmitting(false);
    }
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
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <LocationForm form={form} />
                    <ContactForm form={form} />
                    <ScheduleForm form={form} />
                    <ItemsForm form={form} />
                    <SubmitProgress 
                      isSubmitting={isSubmitting} 
                      progress={progress} 
                    />
                  </form>
                </Form>
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
