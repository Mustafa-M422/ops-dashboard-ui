import type { DashboardData } from "@/types/dashboard";
import mockData from "@/mocks/dashboardData.json";

// Simulate network delay
const DELAY_MS = 1000;

export const api = {
    getDashboardData: (): Promise<DashboardData> => {
        return new Promise((resolve) => {
            setTimeout(() => {
                // Cast mock data to typed interface to ensure contract matching
                resolve(mockData as unknown as DashboardData);
            }, DELAY_MS);
        });
    },
};
