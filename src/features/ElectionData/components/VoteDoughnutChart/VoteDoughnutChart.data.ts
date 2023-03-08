import { ChartData, ChartOptions } from 'chart.js';

import { IPresidentialResult, PoliticalPartyType } from '../../../../core';
import { COLOR } from '../../../../core/Constants';

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

export const ParseData = (
	data: IPresidentialResult[]
): ChartData<"doughnut", number[], unknown> => {
	const resultData = data.map((result) => result.candidates_vote);
	return {
		datasets: [
			{
				data: resultData,
				backgroundColor: [COLOR.LP, COLOR.PDP, COLOR.APC],
			},
		],
	};
};

const DataLabel: PoliticalPartyType[] = [
	"Labour Party",
	"People's Democratic Party",
	"All Progressives Congress",
];

type IOptions = ChartOptions<"doughnut">;
