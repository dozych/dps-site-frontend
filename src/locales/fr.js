//thx Night la Sorcière

import { fr } from "vuetify/es5/locale";
import monsters from "@/assets/dpsData/regionsData/fr/monsters.json";

export default {
	...fr,
	loadError: "Can't load content",
	dps: "dps",
	search: "Rechercher",
	top: "top",
	info: "info",
	apiInfoLink: "Lien vers API",
	aboutLink: "A propos de",
	uploadsLink: "Mettre en ligne",
	runDetails: "Afficher les informations basiques",
	runDetailsExt: "Afficher les détails",
	recentTopDPS: "Recent top DPS players",
	recentUploads: "Récentes mises en ligne",
	searchCardString: "Configuration de la recherche",
	searchResultString: "Résultats des recherches",
	partyDps: "DPS de l’équipe:",
	duration: "Durée:",
	uploadTime: "Temps de mise en ligne:",
	searchDungeonStr: "Donjon",
	searchButton: "Rechercher",
	searchClassStr: "Classe",
	searchPlayerStr: "Joueur",
	searchIncludeShameStr: "Honte",
	searchIncludeFoodStr: "Plat évènementiel",
	searchIncludeMTankStr: "2+ tanks",
	searchIncludeMHealStr: "2+ heals",
	searchTankType: "Classe Tank",
	searchHealType: "Classe healer",
	debuffsUptime: "Durée des affaiblissements:",
	enrageUptime: "Durée de l’enrage:",
	aggroStats: "Stats d’aggro:",
	avgCritRate: "Taux de crit moyen:",
	contribution: "Contribution:",
	floorTime: "Temps passé au sol:",
	registeredDamage: "Dégât enregistré:",
	buffsUptime: "Durée des bienfaits:",
	castsAndcharges: "Sorts lancés/chargés:",
	contributionGraphs: "Graphique de contribution:",
	damageAndCritsTab: "Dégâts et critiques",
	aggroAndDeathsTab: "Durée d’aggro et de mort",
	contributionDetails: "Contribution détaillée:",
	skillsBreakdown: "Détails des sorts:",
	encounterCard: "Instance:",
	dateCard: "Date:",
	avgDpsCard: "Dps moyen:",
	deathsCard: "Deaths:",
	floortimeCard: "Temps passé au sol:",
	classes: {
		"TWarrior": "Tank Warrior",
		"Warrior": "Guerrier",
		"Lancer": "Lancier",
		"Slayer": "Pourfendeur",
		"TBerserker": "Tank Berserker",
		"Berserker": "Berserker",
		"Sorcerer": "Sorcier",
		"Archer": "Archer",
		"Priest": "Prêtre",
		"Mystic": "Mystique",
		"Reaper": "Mortiféra",
		"Gunner": "Artilleuse",
		"TBrawler": "Tank Brawler",
		"Brawler": "Tempétueuse",
		"Ninja": "Ninja",
		"Valkyrie": "Danselune"
	},
	timeType: {
		"Day": "Day",
		"Week": "Week",
		"Month": "Month"
	},
	multiHeal: "Plusieurs healers",
	multiTank: "Plusieurs tanks",
	p2wFood: "Plat évènementiel",
	validation: {
		"maxPlayerNameLengthError": "Le nom ne doit pas comporter plus que 20 lettres ",
		"minPlayerNameLengthError": "Le nom doit comporter au moins 3 lettres",
		"fieldRequired": "Champ requis",
	},	
	monsters
};
