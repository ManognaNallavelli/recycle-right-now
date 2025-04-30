
import React from 'react';
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { UseFormReturn } from 'react-hook-form';
import { PickupFormValues } from '@/utils/validation';

interface ContactFormProps {
  form: UseFormReturn<PickupFormValues>;
}

const ContactForm = ({ form }: ContactFormProps) => {
  return (
    <div className="space-y-4 pt-4 border-t">
      <h3 className="text-lg font-medium">Contact Information</h3>
      
      <div className="flex gap-4">
        <FormField
          control={form.control}
          name="phoneNumber"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormLabel>Phone Number (Indian Format)</FormLabel>
              <FormControl>
                <Input 
                  placeholder="+91 1234567890" 
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
  );
};

export default ContactForm;
