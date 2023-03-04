import { ChartData, ChartOptions } from "chart.js";

export const options: IOptions = {
	plugins: {
		tooltip: {
			callbacks: {
				label: function (context) {
					const label = DataLabel[context.dataIndex] || "";
					const count = context.formattedValue;
					return [label, count];
				},
			},
		},
	},
	rotation: 45,
	maintainAspectRatio: true,
	responsive: true,
	cutout: "75%",
	borderColor: "transparent",
};

export const data: ChartData<"doughnut", number[], unknown> = {
	datasets: [
		{
			data: [160512222, 8400000],
			backgroundColor: ["#449352", "#E30325"],
		},
	],
};

const DataLabel = ["Accepted Votes", "Rejected Votes"];

type IOptions = ChartOptions<"doughnut">;
