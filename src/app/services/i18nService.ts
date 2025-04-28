export const fetchContentByLanguage = async (lang: string) => {
    const response = await fetch(`/api/content?lang=${lang}`);
    const data = await response.json();
    return data;
  };
  