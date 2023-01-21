import { Maybe } from "graphql/jsutils/Maybe";
import { TextContent } from "../graphqlGenerated/graphql";
import LanguageStoreV2 from "../Stores/LanguageStoreV2";

export const getTextContent = (obj: TextContent | undefined): string | Maybe<string> => {
	if (obj === undefined) {
		return "Failed to fetch";
	}
    console.log((obj as TextContent)[LanguageStoreV2.currentLanguage] ?? (obj as TextContent).EST ?? "Failed to fetch")
	return (obj as TextContent)[LanguageStoreV2.currentLanguage] ?? (obj as TextContent).EST ?? "Failed to fetch";
};