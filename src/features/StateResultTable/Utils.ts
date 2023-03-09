import { IStateResult, IStateResultData, PoliticalPartyAcronym } from "../../core";

export type IResultItem = Omit<IStateResultData, "political_party_name"> & {
	[K in PoliticalPartyAcronym]: number;
} & { leading: PoliticalPartyAcronym };

export function TransformStateResults(originalData: IStateResult) {
	const transformedData = {} as Record<string, Omit<IResultItem, "political_party_name">>;
	for (const [key, value] of Object.entries(originalData)) {
		const transformedValue = {} as Record<PoliticalPartyAcronym, number>;
		let leading: PoliticalPartyAcronym = "APC";
		let leadingCount = 0;
		for (const obj of value) {
			const acronym = getAcronym(obj.political_party_name);

			transformedValue[acronym] = obj.candidate_votes;

			if (obj.candidate_votes > leadingCount) {
				leading = acronym;
				leadingCount = obj.candidate_votes;
			}
		}
		transformedData[key] = {
			state_name: value[0].state_name,
			leading,
			...transformedValue,
			candidate_votes: value.reduce((total, obj) => total + obj.candidate_votes, 0),
		};
	}
	return Object.values(transformedData);
}

function getAcronym(str: string): PoliticalPartyAcronym {
	const words = str.split(" ");
	const acronym = words.reduce((acronym, word) => acronym + word[0], "");
	return acronym.toUpperCase() as PoliticalPartyAcronym;
}

//console.log(getAcronym("he kd"))
