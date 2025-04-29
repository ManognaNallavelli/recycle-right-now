
import React from 'react';
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { UseFormReturn } from 'react-hook-form';
import { Phone } from 'lucide-react';
import { PickupFormValues } from '@/utils/validation';

interface ContactFormProps {
  form: UseFormReturn<PickupFormValues>;
  phoneVerified: boolean;
  handleVerifyPhone: (e: React.MouseEvent) => void;
}

const ContactForm = ({ form, phoneVerified, handleVerifyPhone }: ContactFormProps) => {
  return (
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
  );
};

export default ContactForm;
