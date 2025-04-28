"use client";

import { useState, useEffect } from 'react';
import { Page } from '../types/content';

const useFetchPageContent = (slug: string) => {
  const [pageContent, setPageContent] = useState<Page | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPageContent = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(`/api/content`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ slug, lang: 'en' }),
        });

        console.log('Response:', response);
        if (!response.ok) {
          throw new Error('Page Content not found');
        }

        const data = await response.json();
        setPageContent(data.page as Page);
      } catch (err) {
        setError(`Failed to fetch camp program ${err}`);
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchPageContent();
    }
  }, [slug]);
  
  return { loading, error, pageContent };
};

export default useFetchPageContent;