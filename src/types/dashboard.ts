export type DeploymentStatus = 'success' | 'failed' | 'in-progress' | 'queued';
export type Environment = 'production' | 'staging' | 'development';
export type TrendDirection = 'up' | 'down' | 'neutral';

// 1. KPI Stats Card Data
export interface MetricStats {
    id: string;
    label: string;
    value: string | number; // String allows pre-formatted currency/units
    changePercentage: number;
    trend: TrendDirection;
    description?: string; // Tooltip helper
}

// 2. Chart Data (Time-series)
export interface ActiveUserHistory {
    timestamp: string; // ISO 8601
    users: number;
}

// 3. Table Data (Deployments)
export interface Deployment {
    id: string;
    projectName: string;
    commitMessage: string;
    commitHash: string; // Short hash (e.g. 7 chars)
    authorName: string;
    authorAvatar?: string;
    status: DeploymentStatus;
    environment: Environment;
    deployedAt: string; // ISO 8601
}

// 4. API Response Wrapper
export interface DashboardData {
    metrics: MetricStats[];
    activity: ActiveUserHistory[];
    recentDeployments: Deployment[];
    lastUpdated: string;
}
