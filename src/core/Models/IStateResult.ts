export interface IStateResultData {
	state_name: string;
	political_party_name: PoliticalPartyType;
	candidate_votes: number;
}

export type PoliticalPartyType =
	| "Labour Party"
	| "People's Democratic Party"
	| "All Progressives Congress";

export interface IStateResult {
	[state: string]: {
		state_name: string;
		political_party_name: PoliticalPartyType;
		candidate_votes: number;
	}[];
}
