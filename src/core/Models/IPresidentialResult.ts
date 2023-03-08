import { PoliticalPartyType } from './IStateResult';

export interface IPresidentialResult {
	political_party_name: PoliticalPartyType;
	full_name: string;
	candidate_id: string;
	candidates_vote: number;
}
