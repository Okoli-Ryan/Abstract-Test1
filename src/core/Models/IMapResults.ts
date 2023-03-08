import { PoliticalPartyType } from "./IStateResult";

export interface IMapResult {
	political_party_name: PoliticalPartyType;
	id: number;
	country_id: number;
	name: string;
	abbr: string;
	is_active: 1 | 0;
	created_at: Date;
	updated_at: Date;
	candidate_votes: number;
}
