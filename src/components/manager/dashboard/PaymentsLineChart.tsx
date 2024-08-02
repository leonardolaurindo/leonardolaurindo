import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from '@/components/ui/chart';

// Definindo o tipo para os dados do gráfico
type PaymentData = {
    date: string;
    amount: number;
};

// Propriedades do componente
interface PaymentsLineChartProps {
    data: PaymentData[];
}

// Componente de gráfico de linha para pagamentos
const PaymentsLineChart: React.FC<PaymentsLineChartProps> = ({ data }) => {
    return (
        <Card className="w-full h-[400px]">
            <CardHeader>
                <CardTitle>Pagamentos ao Longo do Tempo</CardTitle>
            </CardHeader>
            <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={data}>
                        <XAxis
                            dataKey="date"
                            stroke="#888888"
                            fontSize={12}
                            tickLine={false}
                            axisLine={false}
                        />
                        <YAxis
                            stroke="#888888"
                            fontSize={12}
                            tickLine={false}
                            axisLine={false}
                            tickFormatter={(value) => `R$${value}`}
                        />
                        <CartesianGrid strokeDasharray="3 3" stroke="#e5e5e5" />
                        <Tooltip />
                        <Legend />
                        <Line
                            type="monotone"
                            dataKey="amount"
                            stroke="#8884d8"
                            strokeWidth={2}
                            dot={{ strokeWidth: 2, r: 4 }}
                            activeDot={{ r: 8 }}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    );
};

export default PaymentsLineChart;