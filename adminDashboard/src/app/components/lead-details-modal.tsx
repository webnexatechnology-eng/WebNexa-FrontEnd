import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/app/components/ui/dialog';
import { Button } from '@/app/components/ui/button';
import { Badge } from '@/app/components/ui/badge';
import { Separator } from '@/app/components/ui/separator';
import { Lead } from '@/app/data/mock-leads';
import { format } from 'date-fns';
import { Mail, Calendar, MessageSquare } from 'lucide-react';

interface LeadDetailsModalProps {
  lead: Lead;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onUpdateStatus: (status: Lead['status']) => void;
}

export function LeadDetailsModal({ lead, open, onOpenChange, onUpdateStatus }: LeadDetailsModalProps) {
  const getStatusBadge = (status: Lead['status']) => {
    const styles = {
      New: 'bg-blue-100 text-blue-700',
      Contacted: 'bg-purple-100 text-purple-700',
      Converted: 'bg-green-100 text-green-700',
    };
    return styles[status];
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl">Lead Details</DialogTitle>
          <DialogDescription>
            View and manage lead information
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 pt-4">
          {/* Name & Status */}
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-xl font-semibold text-gray-900">{lead.name}</h3>
              <div className="flex items-center gap-2 mt-2 text-gray-600">
                <Mail className="w-4 h-4" />
                <span>{lead.email}</span>
              </div>
            </div>
            <Badge className={getStatusBadge(lead.status)}>
              {lead.status}
            </Badge>
          </div>

          <Separator />

          {/* Date */}
          <div className="flex items-center gap-2 text-gray-600">
            <Calendar className="w-4 h-4" />
            <span className="text-sm">
              Submitted on {format(new Date(lead.createdAt), 'MMMM dd, yyyy')} at {format(new Date(lead.createdAt), 'h:mm a')}
            </span>
          </div>

          {/* Message */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-gray-700 font-medium">
              <MessageSquare className="w-4 h-4" />
              <span>Message</span>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <p className="text-gray-700 leading-relaxed">{lead.message}</p>
            </div>
          </div>

          <Separator />

          {/* Actions */}
          <div className="flex flex-col gap-3">
            <p className="text-sm font-medium text-gray-700">Update Status</p>
            <div className="flex gap-3">
              <Button
                onClick={() => {
                  onUpdateStatus('Contacted');
                  onOpenChange(false);
                }}
                disabled={lead.status === 'Contacted' || lead.status === 'Converted'}
                className="flex-1 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800"
              >
                Mark as Contacted
              </Button>
              <Button
                onClick={() => {
                  onUpdateStatus('Converted');
                  onOpenChange(false);
                }}
                disabled={lead.status === 'Converted'}
                className="flex-1 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800"
              >
                Mark as Converted
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
