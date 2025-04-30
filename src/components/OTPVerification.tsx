
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp';
import { toast } from 'sonner';
import { Loader2 } from 'lucide-react';

interface OTPVerificationProps {
  phoneNumber: string;
  onVerificationComplete: () => void;
  onCancel: () => void;
}

const OTPVerification = ({ phoneNumber, onVerificationComplete, onCancel }: OTPVerificationProps) => {
  const [otp, setOtp] = useState('');
  const [isVerifying, setIsVerifying] = useState(false);
  const [resendDisabled, setResendDisabled] = useState(false);
  const [countdown, setCountdown] = useState(0);
  const [generatedOtp, setGeneratedOtp] = useState('');

  // Generate OTP on component mount
  useEffect(() => {
    generateAndSendOTP();
  }, []);

  // Generate a 4-digit OTP and "send" it
  const generateAndSendOTP = () => {
    // Generate a random 4-digit OTP
    const newOtp = Math.floor(1000 + Math.random() * 9000).toString();
    setGeneratedOtp(newOtp);
    
    // In a real app, this would call an API to send the OTP via SMS
    // For demo purposes, we'll show it in a toast
    toast.info(`Demo Mode: OTP is ${newOtp}`, {
      description: `This would be sent to ${phoneNumber} in a real app`,
      duration: 10000,
    });
    
    return newOtp;
  };

  const handleVerify = () => {
    if (otp.length !== 4) {
      toast.error("Please enter a valid 4-digit OTP");
      return;
    }

    setIsVerifying(true);
    
    // Verify that entered OTP matches the generated one
    setTimeout(() => {
      setIsVerifying(false);
      
      if (otp === generatedOtp) {
        toast.success("Phone number verified successfully!");
        onVerificationComplete();
      } else {
        toast.error("Invalid OTP. Please try again.");
        setOtp('');
      }
    }, 1500);
  };

  const handleResendOTP = () => {
    const newOtp = generateAndSendOTP();
    setGeneratedOtp(newOtp);
    setResendDisabled(true);
    setCountdown(30);
    
    const timer = setInterval(() => {
      setCountdown((prevCount) => {
        if (prevCount <= 1) {
          clearInterval(timer);
          setResendDisabled(false);
          return 0;
        }
        return prevCount - 1;
      });
    }, 1000);
  };

  return (
    <div className="p-4 rounded-md border border-gray-200 bg-white shadow-sm">
      <div className="text-center mb-4">
        <h3 className="text-lg font-medium">Phone Verification</h3>
        <p className="text-sm text-gray-600 mt-1">
          Enter the 4-digit code sent to <span className="font-medium">{phoneNumber}</span>
        </p>
      </div>

      <div className="flex justify-center mb-6">
        <InputOTP maxLength={4} value={otp} onChange={setOtp}>
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
            <InputOTPSlot index={3} />
          </InputOTPGroup>
        </InputOTP>
      </div>

      <div className="flex flex-col gap-3">
        <Button 
          onClick={handleVerify} 
          disabled={otp.length !== 4 || isVerifying}
          className="bg-primary-600 hover:bg-primary-700"
        >
          {isVerifying ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Verifying...
            </>
          ) : (
            "Verify OTP"
          )}
        </Button>
        
        <div className="flex justify-between items-center">
          <Button 
            variant="ghost" 
            onClick={onCancel}
            className="text-gray-500"
          >
            Cancel
          </Button>
          
          <Button 
            variant="ghost" 
            onClick={handleResendOTP} 
            disabled={resendDisabled}
            className="text-primary-600"
          >
            {resendDisabled ? `Resend in ${countdown}s` : "Resend OTP"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OTPVerification;
