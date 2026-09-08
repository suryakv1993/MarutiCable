export interface NewConnectionRequest {
  id?: string;
  name: string;
  mobile: string;
  area: string;
  pincode: string;
  serviceRequired: 'Fiber' | 'Air-Fiber' | 'Not sure';
  selectedPlan?: string;
  message?: string;
  timestamp?: string;
}

export interface ServiceResponse {
  success: boolean;
  referenceId?: string;
  message: string;
}

export const leadService = {
  submitNewConnection(data: NewConnectionRequest): ServiceResponse {
    const referenceId = 'MC-' + Math.floor(100000 + Math.random() * 900000);
    const enrichedLead: NewConnectionRequest = {
      ...data,
      id: referenceId,
      timestamp: new Date().toISOString(),
    };

    // Persist a local backup of the lead so data is never lost,
    // even if the browser blocks the WhatsApp handoff below.
    try {
      const existing = JSON.parse(localStorage.getItem('maruti_leads') || '[]');
      existing.push(enrichedLead);
      localStorage.setItem('maruti_leads', JSON.stringify(existing));
    } catch {
      // Ignore private browsing restrictions
    }

    return {
      success: true,
      referenceId,
      message: 'Your connection request has been registered with Maruti Cable Sindri.',
    };
  },

  getSavedLeads(): NewConnectionRequest[] {
    try {
      return JSON.parse(localStorage.getItem('maruti_leads') || '[]');
    } catch {
      return [];
    }
  },
};