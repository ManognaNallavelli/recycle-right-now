
import React from 'react';
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Loader2 } from 'lucide-react';

interface SubmitProgressProps {
  isSubmitting: boolean;
  progress: number;
}

const SubmitProgress = ({ isSubmitting, progress }: SubmitProgressProps) => {
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
      
      <Button 
        type="submit" 
        className="w-full bg-primary-600 hover:bg-primary-700"
        disabled={isSubmitting}
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
