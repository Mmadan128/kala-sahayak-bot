// Kala Sahayak API Integration
const API_BASE_URL = process.env.NODE_ENV === 'production' 
  ? 'https://your-api-domain.com' 
  : 'http://localhost:8080';

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}

export interface ProductDetails {
  artisan_id: string;
  enhanced_image_path: string;
  description: string;
  hashtags: string[];
  price: number;
  original_note: string;
}

export interface HealthStatus {
  service: string;
  llm_initialized: boolean;
  twilio_initialized: boolean;
  active_sessions: number;
}

// API Client Class
class KalaSahayakAPI {
  private baseURL: string;

  constructor(baseURL: string = API_BASE_URL) {
    this.baseURL = baseURL;
  }

  // Health check endpoint
  async getHealthStatus(): Promise<ApiResponse<HealthStatus>> {
    try {
      const response = await fetch(`${this.baseURL}/health`);
      const data = await response.json();
      
      if (response.ok) {
        return { success: true, data };
      } else {
        return { success: false, error: 'Health check failed' };
      }
    } catch (error) {
      return { 
        success: false, 
        error: error instanceof Error ? error.message : 'Network error' 
      };
    }
  }

  // Get basic API status
  async getApiStatus(): Promise<ApiResponse<{ message: string }>> {
    try {
      const response = await fetch(`${this.baseURL}/`);
      const data = await response.json();
      
      if (response.ok) {
        return { success: true, data };
      } else {
        return { success: false, error: 'API unavailable' };
      }
    } catch (error) {
      return { 
        success: false, 
        error: error instanceof Error ? error.message : 'Network error' 
      };
    }
  }

  // WhatsApp integration methods would be used server-side
  // These are placeholder methods for potential future web-based integrations

  // Submit artisan inquiry (potential web form integration)
  async submitArtisanInquiry(data: {
    name: string;
    email: string;
    phone: string;
    message: string;
  }): Promise<ApiResponse<{ message: string }>> {
    try {
      // This would be a future endpoint to handle web-based artisan inquiries
      const response = await fetch(`${this.baseURL}/api/artisan-inquiry`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      
      if (response.ok) {
        return { success: true, data: result };
      } else {
        return { success: false, error: result.message || 'Submission failed' };
      }
    } catch (error) {
      return { 
        success: false, 
        error: error instanceof Error ? error.message : 'Network error' 
      };
    }
  }

  // Get published products (if you add a public products endpoint)
  async getPublishedProducts(params?: {
    category?: string;
    limit?: number;
    offset?: number;
  }): Promise<ApiResponse<ProductDetails[]>> {
    try {
      const queryParams = new URLSearchParams();
      if (params?.category) queryParams.append('category', params.category);
      if (params?.limit) queryParams.append('limit', params.limit.toString());
      if (params?.offset) queryParams.append('offset', params.offset.toString());

      const url = `${this.baseURL}/api/products${queryParams.toString() ? '?' + queryParams.toString() : ''}`;
      const response = await fetch(url);
      const data = await response.json();
      
      if (response.ok) {
        return { success: true, data };
      } else {
        return { success: false, error: 'Failed to fetch products' };
      }
    } catch (error) {
      return { 
        success: false, 
        error: error instanceof Error ? error.message : 'Network error' 
      };
    }
  }
}

// Export singleton instance
export const api = new KalaSahayakAPI();

// Utility functions for WhatsApp integration
export const whatsappUtils = {
  // Generate WhatsApp link for customer support
  generateSupportLink: (message: string = "Hello! I need help with Kala Sahayak.") => {
    const phone = "+919876543210"; // Replace with your support number
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${phone}?text=${encodedMessage}`;
  },

  // Generate WhatsApp link for artisan onboarding
  generateArtisanOnboardingLink: () => {
    const phone = "+919876543210"; // Replace with your onboarding number
    const message = "Hi! I'm an artisan interested in joining Kala Sahayak platform. Can you help me get started?";
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${phone}?text=${encodedMessage}`;
  },

  // Check if user is on mobile for better WhatsApp integration
  isMobile: () => {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
  }
};

// Error handling utilities
export const handleApiError = (error: any): string => {
  if (error.response?.data?.message) {
    return error.response.data.message;
  }
  if (error.message) {
    return error.message;
  }
  return 'An unexpected error occurred';
};

export default api;