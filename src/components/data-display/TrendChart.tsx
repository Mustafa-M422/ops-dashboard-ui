import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card"
import { format } from "date-fns"

interface TrendChartProps {
    data: { timestamp: string;[key: string]: any }[]
    dataKey: string
    title?: string
    color?: string
}

import { useTheme } from "@/components/theme-provider"

export function TrendChart({ data, dataKey, title, color }: TrendChartProps) {
    const { theme } = useTheme()

    // Determine effective color based on theme if not explicitly provided
    const isDark = theme === "dark" || (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches)

    const axisColor = isDark ? "#a1a1aa" : "#888888"
    const lineColor = color || (isDark ? "#60a5fa" : "#2563eb") // blue-400 : blue-600

    return (
        <Card className="col-span-4 lg:col-span-3 border-none shadow-none"> {/* Default sizing overrides can happen via parent grid */}
            {title && (
                <CardHeader>
                    <CardTitle>{title}</CardTitle>
                </CardHeader>
            )}
            <CardContent className="pl-2">
                <div className="h-[300px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={data}>
                            <XAxis
                                dataKey="timestamp"
                                stroke={axisColor}
                                fontSize={12}
                                tickLine={false}
                                axisLine={false}
                                tickFormatter={(value) => format(new Date(value), "HH:mm")}
                            />
                            <YAxis
                                stroke={axisColor}
                                fontSize={12}
                                tickLine={false}
                                axisLine={false}
                                tickFormatter={(value) => `${value}`}
                            />
                            <Tooltip
                                contentStyle={{
                                    backgroundColor: isDark ? '#1f2937' : '#ffffff',
                                    borderColor: isDark ? '#374151' : '#e5e7eb',
                                    borderRadius: '8px',
                                    boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                                }}
                                itemStyle={{ color: isDark ? '#f3f4f6' : '#1f2937' }}
                                labelFormatter={(label) => format(new Date(label), "MMM d, HH:mm")}
                            />
                            <Line
                                type="monotone"
                                dataKey={dataKey}
                                stroke={lineColor}
                                strokeWidth={2}
                                activeDot={{ r: 6, style: { fill: lineColor, opacity: 0.8 } }}
                                dot={false}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </CardContent>
        </Card>
    )
}
