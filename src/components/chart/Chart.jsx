import "./chart.css";
import {
	LineChart,
	Line,
	XAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer,
} from "recharts";

function Chart({ title, data, dataKey, grid }) {
	return (
		<div className="chart">
			<h3 className="chartTitle">{title}</h3>
			<ResponsiveContainer width="100%" height="100%" aspect={4 / 1}>
				<LineChart data={data}>
					<XAxis dataKey="name" stroke="#5550bd" />
					<Tooltip />
					<Line
						type="monotone"
						dataKey={dataKey}
						stroke="#5550bd"
						activeDot={{ r: 8 }}
					/>
					{grid && <CartesianGrid strokeDasharray="5 5" stroke="#5550bd" />}
				</LineChart>
			</ResponsiveContainer>
		</div>
	);
}

export default Chart;
