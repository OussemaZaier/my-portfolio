import { useState, useEffect } from 'react';
import { categoriesAPI } from '../services/api';

interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  color: string;
  icon: string;
  article_count: number;
}

export const useCategories = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const response = await categoriesAPI.getAll({ include_count: true });
        
        if (response.data.success) {
          setCategories(response.data.data);
        } else {
          setError('Failed to fetch categories');
        }
      } catch (err: any) {
        setError(err.response?.data?.message || 'Failed to fetch categories');
        console.error('Error fetching categories:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  return { categories, loading, error };
};