import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';

interface RazorpayDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
  courseName: string;
  coursePrice: number;
  userName: string;
  userEmail: string;
}

export const RazorpayDialog: React.FC<RazorpayDialogProps> = ({
  isOpen,
  onClose,
  onSuccess,
  courseName,
  coursePrice,
  userName,
  userEmail,
}) => {
  const [isPaying, setIsPaying] = React.useState(false);

  const handlePayment = () => {
    setIsPaying(true);
    // Simulate API call to Razorpay
    setTimeout(() => {
      setIsPaying(false);
      onSuccess();
    }, 2000); // 2-second delay to simulate payment processing
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Razorpay Checkout</DialogTitle>
          <DialogDescription>
            Complete your payment for "{courseName}"
          </DialogDescription>
        </DialogHeader>
        <div className="py-4 space-y-4">
            <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Course:</span>
                <span className="font-semibold">{courseName}</span>
            </div>
            <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Name:</span>
                <span className="font-semibold">{userName}</span>
            </div>
            <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Email:</span>
                <span className="font-semibold">{userEmail}</span>
            </div>
            <div className="flex justify-between items-center text-xl">
                <span className="text-muted-foreground">Amount:</span>
                <span className="font-bold">
                ₹{new Intl.NumberFormat('en-IN').format(coursePrice)}
                </span>
            </div>
        </div>
        <DialogFooter>
          <Button onClick={handlePayment} disabled={isPaying} className="w-full">
            {isPaying ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Processing...
              </>
            ) : (
              `Pay ₹${new Intl.NumberFormat('en-IN').format(coursePrice)}`
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
