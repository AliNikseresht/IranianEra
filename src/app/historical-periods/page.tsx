'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import Spinner from '@/components/Spinner';

// Type definitions
interface Article {
    title: string;
    url: string;
}

interface Period {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    articles: Article[];
}

// Function to fetch data
const fetchPeriods = async (): Promise<Period[]> => {
    const response = await fetch('/data/historicalPeriods.json');
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
};

// Client component to display historical periods
const HistoricalPeriods: React.FC = () => {
    const { data: periods, error, isLoading } = useQuery<Period[], Error>({
        queryKey: ['periods'],
        queryFn: fetchPeriods
    });

    if (isLoading) return <Spinner />;
    if (error) return <p>Error fetching historical periods: {error.message}</p>;

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-4xl font-bold mb-6 text-center text-accent">Historical Periods</h1>
            <p className="text-center text-gray-600 mb-6">
                Explore the major historical periods of Iran, from ancient times through the Islamic era and into the modern age. Each period is rich with its own events, significant figures, and cultural developments.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {periods?.map((period) => (
                    <div key={period.id} className="bg-white shadow-md rounded-lg overflow-hidden">
                        <Image style={{ width: "100%", height: "auto" }} width={250} height={150} objectFit='cover' src={period.imageUrl} alt={period.title} />
                        <div className="p-4">
                            <h2 className="text-2xl font-semibold mb-2">{period.title}</h2>
                            <p className="text-gray-700 mb-4">{period.description}</p>
                            <div className="space-y-2">
                                {period.articles.map((article, index) => (
                                    <Link key={index} href={article.url} className="text-blue-500 hover:underline">
                                        {article.title}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HistoricalPeriods;
