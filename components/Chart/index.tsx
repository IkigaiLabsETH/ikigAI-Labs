import {
    ComposedChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    ResponsiveContainer,
} from "recharts";
import millify from "millify";
import { useColorMode } from "@chakra-ui/color-mode";

type ChartProps = {
    className?: string;
    items: any;
};

const Chart = ({ className, items }: ChartProps) => {
    const { colorMode } = useColorMode();
    const isDarkMode = colorMode === "dark";

    const formatterYAxis = (value: number) => {
        if (value === 0) {
            return "";
        }
        return `${millify(value)}`;
    };

    return (
        <div className={className}>
            <div className="h-80 md:h-64">
                <ResponsiveContainer width="100%" height="100%">
                    <ComposedChart
                        width={500}
                        height={400}
                        data={items}
                        margin={{
                            top: 2,
                            right: 0,
                            bottom: 0,
                            left: 0,
                        }}
                    >
                        <CartesianGrid
                            stroke={isDarkMode ? "#393E44" : "#E3E9EE"}
                        />
                        <XAxis dataKey="name" hide={true} />
                        <YAxis
                            tickFormatter={formatterYAxis}
                            type="number"
                            tickLine={false}
                            axisLine={false}
                            tick={{
                                fontSize: 11,
                                fontWeight: "500",
                                fill: "#7C878E",
                            }}
                        />
                        <Area
                            type="monotone"
                            dataKey="price"
                            fill="#EBDBFF"
                            fillOpacity={isDarkMode ? "0.05" : "0.2"}
                            stroke="#735FFA"
                            strokeWidth={4}
                        />
                    </ComposedChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default Chart;
