"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Building2,
  Wallet,
  Copy,
  Check,
  Heart,
  Shield,
  Users,
} from "lucide-react";

const bankDetails = {
  bankName: "First Bank of Nigeria",
  accountName: "Eloke O. Victor Campaign",
  accountNumber: "3012345678",
  sortCode: "011152003",
};

const cryptoDetails = {
  network: "TRC20 (Tron Network)",
  walletAddress: "TXyz1234567890abcdefghijklmnopqrst",
  currency: "USDT",
};

export function DonateSection() {
  const [copiedBank, setCopiedBank] = useState(false);
  const [copiedCrypto, setCopiedCrypto] = useState(false);

  const copyToClipboard = async (text: string, type: "bank" | "crypto") => {
    try {
      await navigator.clipboard.writeText(text);
      if (type === "bank") {
        setCopiedBank(true);
        setTimeout(() => setCopiedBank(false), 2000);
      } else {
        setCopiedCrypto(true);
        setTimeout(() => setCopiedCrypto(false), 2000);
      }
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <section id="donate" className="py-20 bg-[oklch(0.40_0.12_160)]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
            <Heart className="w-4 h-4 text-[oklch(0.75_0.12_85)]" />
            <span className="text-white/90 text-sm font-medium tracking-wide">
              Support the Movement
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6 text-balance">
            Invest in Our{" "}
            <span className="text-[oklch(0.75_0.12_85)]">Shared Future</span>
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
            Your generous contribution fuels our mission to bring fresh ideas
            and purposeful leadership to Igueben, Esan Central & Esan West. Every
            donation brings us closer to a brighter tomorrow.
          </p>
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-wrap justify-center gap-8 mb-12">
          <div className="flex items-center gap-2 text-white/80">
            <Shield className="w-5 h-5 text-[oklch(0.75_0.12_85)]" />
            <span className="text-sm">Secure & Transparent</span>
          </div>
          <div className="flex items-center gap-2 text-white/80">
            <Users className="w-5 h-5 text-[oklch(0.75_0.12_85)]" />
            <span className="text-sm">2,500+ Supporters</span>
          </div>
          <div className="flex items-center gap-2 text-white/80">
            <Heart className="w-5 h-5 text-[oklch(0.75_0.12_85)]" />
            <span className="text-sm">Every Naira Counts</span>
          </div>
        </div>

        {/* Payment Options */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Bank Transfer Card */}
          <Card className="bg-white/10 backdrop-blur-md border-white/20 overflow-hidden group hover:bg-white/15 transition-all duration-300">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-[oklch(0.75_0.12_85)] flex items-center justify-center">
                  <Building2 className="w-7 h-7 text-[oklch(0.20_0.02_250)]" />
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold text-white">
                    Bank Transfer
                  </h3>
                  <p className="text-white/60 text-sm">Nigerian Naira (NGN)</p>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-white/60 text-xs uppercase tracking-wider mb-1">
                    Bank Name
                  </p>
                  <p className="text-white font-medium">{bankDetails.bankName}</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-white/60 text-xs uppercase tracking-wider mb-1">
                    Account Name
                  </p>
                  <p className="text-white font-medium">
                    {bankDetails.accountName}
                  </p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-white/60 text-xs uppercase tracking-wider mb-1">
                    Account Number
                  </p>
                  <div className="flex items-center justify-between">
                    <p className="text-white font-bold text-lg tracking-wider">
                      {bankDetails.accountNumber}
                    </p>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-[oklch(0.75_0.12_85)] hover:bg-white/10"
                      onClick={() =>
                        copyToClipboard(bankDetails.accountNumber, "bank")
                      }
                    >
                      {copiedBank ? (
                        <Check className="w-4 h-4" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                      <span className="ml-2 text-xs">
                        {copiedBank ? "Copied!" : "Copy"}
                      </span>
                    </Button>
                  </div>
                </div>
              </div>

              <p className="text-white/50 text-xs text-center">
                Please use your full name as payment reference
              </p>
            </CardContent>
          </Card>

          {/* Crypto Card */}
          <Card className="bg-white/10 backdrop-blur-md border-white/20 overflow-hidden group hover:bg-white/15 transition-all duration-300">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-[oklch(0.75_0.12_85)] flex items-center justify-center">
                  <Wallet className="w-7 h-7 text-[oklch(0.20_0.02_250)]" />
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold text-white">
                    Crypto Wallet
                  </h3>
                  <p className="text-white/60 text-sm">USDT (Tether)</p>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-white/60 text-xs uppercase tracking-wider mb-1">
                    Network
                  </p>
                  <p className="text-white font-medium">{cryptoDetails.network}</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-white/60 text-xs uppercase tracking-wider mb-1">
                    Currency
                  </p>
                  <p className="text-white font-medium">{cryptoDetails.currency}</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-white/60 text-xs uppercase tracking-wider mb-1">
                    Wallet Address
                  </p>
                  <div className="flex items-center justify-between gap-2">
                    <p className="text-white font-mono text-sm truncate">
                      {cryptoDetails.walletAddress}
                    </p>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-[oklch(0.75_0.12_85)] hover:bg-white/10 flex-shrink-0"
                      onClick={() =>
                        copyToClipboard(cryptoDetails.walletAddress, "crypto")
                      }
                    >
                      {copiedCrypto ? (
                        <Check className="w-4 h-4" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                      <span className="ml-2 text-xs">
                        {copiedCrypto ? "Copied!" : "Copy"}
                      </span>
                    </Button>
                  </div>
                </div>
              </div>

              <div className="bg-amber-500/20 border border-amber-500/30 rounded-xl p-3">
                <p className="text-amber-200 text-xs text-center">
                  Only send USDT via TRC20 network to this address
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Bottom Message */}
        <div className="text-center mt-12">
          <p className="text-white/70 text-sm max-w-xl mx-auto">
            All contributions are used exclusively for campaign activities in
            accordance with electoral guidelines. Thank you for believing in
            Fresh Ideas 2027.
          </p>
        </div>
      </div>
    </section>
  );
}
