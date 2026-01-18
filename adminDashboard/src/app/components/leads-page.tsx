import { useEffect, useState } from "react";
import { DashboardLayout } from "@/app/components/dashboard-layout";
import { Card, CardContent } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { Badge } from "@/app/components/ui/badge";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/app/components/ui/table";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/app/components/ui/dropdown-menu";

import { Eye, Trash2 } from "lucide-react";
import { LeadDetailsModal } from "@/app/components/lead-details-modal";
import { format } from "date-fns";

const API_URL = "http://localhost:3000/api";

type LeadStatus = "new" | "contacted" | "converted";

export interface Lead {
  _id: string;
  name: string;
  email: string;
  message: string;
  status: LeadStatus;
  createdAt: string;
}

export function LeadsPage() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    loadLeads();
  }, []);

  async function loadLeads() {
    try {
      setLoading(true);

      const token = localStorage.getItem("admin_token");

      const res = await fetch(`${API_URL}/leads`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.status === 401) {
        throw new Error("Unauthorized");
      }

      if (!res.ok) {
        throw new Error("Failed to fetch leads");
      }

      const data = await res.json();
      setLeads(data);
    } catch (err: any) {
      setError(err.message || "Failed to load leads");
    } finally {
      setLoading(false);
    }
  }

  async function changeStatus(id: string, status: LeadStatus) {
    const token = localStorage.getItem("admin_token");

    await fetch(`${API_URL}/leads/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ status }),
    });

    await loadLeads();
  }

  async function deleteLead(id: string) {
    if (!confirm("Delete this lead?")) return;

    const token = localStorage.getItem("admin_token");

    await fetch(`${API_URL}/leads/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    await loadLeads();
  }

  function getStatusBadge(status: LeadStatus) {
    const styles: Record<LeadStatus, string> = {
      new: "bg-blue-100 text-blue-700",
      contacted: "bg-purple-100 text-purple-700",
      converted: "bg-green-100 text-green-700",
    };
    return styles[status];
  }

  if (loading) {
    return (
      <DashboardLayout title="Leads">
        <div className="p-8 text-center text-gray-500">Loading leads...</div>
      </DashboardLayout>
    );
  }

  if (error) {
    return (
      <DashboardLayout title="Leads">
        <div className="p-8 text-center text-red-500">{error}</div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout title="Leads">
      <Card className="border-0 shadow-md">
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow className="bg-gray-50">
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Message</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Date</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {leads.map((lead) => (
                <TableRow key={lead._id}>
                  <TableCell className="font-medium">{lead.name}</TableCell>
                  <TableCell>{lead.email}</TableCell>
                  <TableCell className="max-w-xs truncate">
                    {lead.message}
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <button>
                          <Badge className={getStatusBadge(lead.status)}>
                            {lead.status}
                          </Badge>
                        </button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuItem onClick={() => changeStatus(lead._id, "new")}>
                          New
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => changeStatus(lead._id, "contacted")}>
                          Contacted
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => changeStatus(lead._id, "converted")}>
                          Converted
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                  <TableCell>
                    {format(new Date(lead.createdAt), "dd MMM yyyy")}
                  </TableCell>
                  <TableCell className="text-right space-x-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => {
                        setSelectedLead(lead);
                        setIsModalOpen(true);
                      }}
                    >
                      <Eye className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => deleteLead(lead._id)}
                      className="text-red-600"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {selectedLead && (
        <LeadDetailsModal
          lead={selectedLead}
          open={isModalOpen}
          onOpenChange={setIsModalOpen}
          onUpdateStatus={(status) =>
            changeStatus(selectedLead._id, status as LeadStatus)
          }
        />
      )}
    </DashboardLayout>
  );
}
