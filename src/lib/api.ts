import type { DashboardData } from "@/types/dashboard";
import mockData from "@/mocks/dashboardData.json";

// Simulate network delay
const DELAY_MS = 1000;

export const api = {
    getDashboardData: (): Promise<DashboardData> => {
        return new Promise((resolve) => {
            setTimeout(() => {
                // Inject current timestamp for "live" feel
                resolve({
                    ...(mockData as unknown as DashboardData),
                    lastUpdated: new Date().toISOString(),
                });
            }, DELAY_MS);
        });
    },
};
