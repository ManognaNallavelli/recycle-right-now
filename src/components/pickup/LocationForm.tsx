
import React from 'react';
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { UseFormReturn } from 'react-hook-form';
import { PickupFormValues } from '@/utils/validation';

interface LocationFormProps {
  form: UseFormReturn<PickupFormValues>;
}

const LocationForm = ({ form }: LocationFormProps) => {
  return (
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
  );
};

export default LocationForm;
