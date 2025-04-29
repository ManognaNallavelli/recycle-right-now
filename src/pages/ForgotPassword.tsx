
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { toast } from 'sonner';
import { Loader2, Mail, ArrowLeft } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

const formSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email address' }),
});

type FormValues = z.infer<typeof formSchema>;

const ForgotPassword = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
    },
  });

  const onSubmit = async (values: FormValues) => {
    setIsSubmitting(true);
    
    // Simulate API call with delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast.success("Reset link sent!", {
        description: "Check your email for further instructions"
      });
    }, 2000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-1 flex items-center justify-center p-4 bg-gray-50">
        <div className="w-full max-w-md animate-fade-in">
          <Card className="border-gray-200 shadow-md">
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl font-bold text-center">
                {isSubmitted ? "Check Your Email" : "Reset Password"}
              </CardTitle>
              <CardDescription className="text-center">
                {isSubmitted 
                  ? "We've sent a password reset link to your email" 
                  : "Enter your email to receive a password reset link"}
              </CardDescription>
            </CardHeader>
            
            {isSubmitted ? (
              <CardContent className="space-y-4 text-center">
                <div className="mx-auto w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                  <Mail className="h-6 w-6 text-green-600" />
                </div>
                <p className="text-gray-600">
                  If an account exists with the email you entered, you will receive a password reset link shortly.
                </p>
                <p className="text-gray-600 text-sm">
                  Please check your spam folder if you don't see the email.
                </p>
              </CardContent>
            ) : (
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="name@example.com" 
                              type="email" 
                              {...field} 
                              className="focus-visible:ring-primary-500"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-primary-600 hover:bg-primary-700"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        "Send Reset Link"
                      )}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            )}
            
            <CardFooter className="flex justify-center">
              <Link to="/login" className="flex items-center text-sm text-primary-600 hover:underline">
                <ArrowLeft className="mr-1 h-4 w-4" />
                Back to Login
              </Link>
            </CardFooter>
          </Card>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ForgotPassword;
