
import React from 'react';
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Loader2, AlertTriangle } from 'lucide-react';

interface SubmitProgressProps {
  isSubmitting: boolean;
  progress: number;
  phoneVerified: boolean;
}

const SubmitProgress = ({ isSubmitting, progress, phoneVerified }: SubmitProgressProps) => {
  return (
    <>
      {isSubmitting && (
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Processing...</span>
            <span>{progress}%</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>
      )}
      
      {!phoneVerified && !isSubmitting && (
        <div className="mb-4 p-3 bg-amber-50 border border-amber-200 rounded-md flex items-center text-amber-700">
          <AlertTriangle className="h-4 w-4 mr-2 flex-shrink-0" />
          <p className="text-sm">Please verify your phone number before scheduling a pickup</p>
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
    </>
  );
};

export default SubmitProgress;
