export const fetchContentByLanguage = async (lang: string) => {
    // Make an API call or DB query to fetch content based on the language
    const response = await fetch(`/api/content?lang=${lang}`);
    const data = await response.json();
    return data;
  };
  