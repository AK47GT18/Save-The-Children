"use client";

import React, { useState } from 'react';
import { X, Heart, CreditCard, Wallet, Smartphone, CheckCircle2 } from 'lucide-react';
import Button from '../ui/Button';
import { useDonation } from '@/context/DonationContext';

interface DonationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DonationModal = ({ isOpen, onClose }: DonationModalProps) => {
  const { addDonation } = useDonation();
  const [step, setStep] = useState<'amount' | 'payment' | 'success'>('amount');
  const [selectedAmount, setSelectedAmount] = useState<number>(84000);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'momo' | 'wallet'>('card');

  if (!isOpen) return null;

  const handleDonate = () => {
    const finalAmount = customAmount ? parseInt(customAmount) : selectedAmount;
    if (isNaN(finalAmount)) return;
    addDonation(finalAmount);
    setStep('success');
  };

  const resetAndClose = () => {
    onClose();
    setTimeout(() => {
      setStep('amount');
      setCustomAmount('');
    }, 300);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-brand-dark/40 backdrop-blur-sm transition-opacity" 
        onClick={resetAndClose}
      ></div>
      
      <div className="relative bg-white w-full max-w-lg rounded-[2.5rem] shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
        {/* Header */}
        <div className="relative h-32 bg-brand-dark flex flex-col items-center justify-center text-white">
          <button 
            onClick={resetAndClose}
            className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center text-brand-dark shadow-lg mb-3">
            <Heart className="w-6 h-6 fill-current" />
          </div>
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">Stand For Children</p>
        </div>

        <div className="p-8 md:p-10">
          {step === 'amount' && (
            <div className="space-y-8">
              <div className="text-center">
                <h3 className="text-3xl font-bold text-brand-dark font-serif mb-2">Select Amount</h3>
                <p className="text-slate-500 text-sm">Every donation is tracked for 100% transparency.</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[42000, 84000, 168000, 500000].map((amt) => (
                  <button
                    key={amt}
                    onClick={() => { setSelectedAmount(amt); setCustomAmount(''); }}
                    className={`py-4 rounded-2xl font-bold border-2 transition-all ${
                      selectedAmount === amt && !customAmount
                        ? 'border-secondary bg-secondary/5 text-secondary shadow-md'
                        : 'border-slate-100 text-slate-400 hover:border-secondary/20'
                    }`}
                  >
                    MK{amt.toLocaleString()}
                  </button>
                ))}
              </div>

              <div className="relative">
                <input
                  type="number"
                  placeholder="Enter custom amount (MK)"
                  value={customAmount}
                  onChange={(e) => setCustomAmount(e.target.value)}
                  className="w-full px-6 py-4 rounded-2xl border-2 border-slate-100 focus:border-secondary focus:outline-none transition-all placeholder:text-slate-300 font-bold"
                />
              </div>

              <Button variant="secondary" size="lg" className="w-full" onClick={() => setStep('payment')}>
                Continue to Payment
              </Button>
            </div>
          )}

          {step === 'payment' && (
            <div className="space-y-8">
              <div className="text-center">
                <button 
                  onClick={() => setStep('amount')}
                  className="text-xs font-bold text-slate-400 uppercase tracking-widest hover:text-secondary mb-2"
                >
                  ← Back to Amount
                </button>
                <h3 className="text-3xl font-bold text-brand-dark font-serif mb-2">Payment Method</h3>
                <p className="text-slate-500 text-sm">Secure, encrypted processing.</p>
              </div>

              <div className="space-y-3">
                {[
                  { id: 'card', label: 'Credit/Debit Card', icon: CreditCard },
                  { id: 'momo', label: 'Mobile Money', icon: Smartphone },
                  { id: 'wallet', label: 'Digital Wallet', icon: Wallet },
                ].map((method) => (
                  <button
                    key={method.id}
                    onClick={() => setPaymentMethod(method.id as any)}
                    className={`w-full p-4 rounded-2xl border-2 flex items-center justify-between transition-all ${
                      paymentMethod === method.id 
                        ? 'border-secondary bg-secondary/5 shadow-md' 
                        : 'border-slate-100 hover:border-secondary/10'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`p-2 rounded-lg ${paymentMethod === method.id ? 'bg-secondary text-white' : 'bg-slate-50 text-slate-400'}`}>
                        <method.icon className="w-5 h-5" />
                      </div>
                      <span className={`font-bold ${paymentMethod === method.id ? 'text-brand-dark' : 'text-slate-400'}`}>{method.label}</span>
                    </div>
                    {paymentMethod === method.id && <CheckCircle2 className="w-5 h-5 text-secondary" />}
                  </button>
                ))}
              </div>

              <Button variant="secondary" size="lg" className="w-full" onClick={handleDonate}>
                Confirm Donation
              </Button>
            </div>
          )}

          {step === 'success' && (
            <div className="text-center py-10 space-y-6">
              <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6 scale-110">
                <CheckCircle2 className="w-10 h-10 text-brand-dark animate-bounce" />
              </div>
              <h3 className="text-4xl font-bold text-brand-dark font-serif tracking-tight">Gift Received!</h3>
              <p className="text-slate-500 leading-relaxed">
                Thank you for your support. A tracked donation receipt and verification code has been sent to your email.
              </p>
              <div className="pt-6">
                <Button variant="outline" size="lg" className="w-full" onClick={resetAndClose}>Back to Site</Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DonationModal;
