import { useState, useEffect } from 'react';
import { articlesAPI } from '../services/api';

interface Article {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content?: string;
  featured_image: string;
  category: {
    id: string;
    name: string;
    slug: string;
    color: string;
  };
  tags: Array<{
    id: string;
    name: string;
    slug: string;
    color: string;
  }>;
  author: {
    id: string;
    name: string;
    avatar: string;
  };
  read_time: number;
  views: number;
  likes: number;
  published_at: string;
  created_at: string;
  updated_at: string;
}

interface UseArticlesOptions {
  page?: number;
  limit?: number;
  search?: string;
  category?: string;
  tags?: string[];
  featured?: boolean;
  sortBy?: string;
  sortOrder?: 'ASC' | 'DESC';
}

export const useArticles = (options: UseArticlesOptions = {}) => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [pagination, setPagination] = useState({
    currentPage: 1,
    totalPages: 1,
    totalItems: 0,
    itemsPerPage: 10
  });

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const response = await articlesAPI.getAll(options);
        
        if (response.data.success) {
          setArticles(response.data.data.articles);
          setPagination(response.data.data.pagination);
        } else {
          setError('Failed to fetch articles');
        }
      } catch (err: any) {
        setError(err.response?.data?.message || 'Failed to fetch articles');
        console.error('Error fetching articles:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, [JSON.stringify(options)]);

  return { articles, loading, error, pagination };
};

export const useArticle = (slug: string) => {
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArticle = async () => {
      if (!slug) return;
      
      try {
        setLoading(true);
        setError(null);
        
        const response = await articlesAPI.getBySlug(slug);
        
        if (response.data.success) {
          setArticle(response.data.data);
        } else {
          setError('Article not found');
        }
      } catch (err: any) {
        setError(err.response?.data?.message || 'Failed to fetch article');
        console.error('Error fetching article:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchArticle();
  }, [slug]);

  const toggleLike = async () => {
    if (!article) return;
    
    try {
      const response = await articlesAPI.toggleLike(article.slug);
      if (response.data.success) {
        setArticle(prev => prev ? {
          ...prev,
          likes: response.data.data.totalLikes
        } : null);
      }
    } catch (err) {
      console.error('Error toggling like:', err);
    }
  };

  return { article, loading, error, toggleLike };
};