"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import Spinner from "@/components/ui/Spinner";

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
  const response = await fetch("/data/historicalPeriods.json");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

// Client component to display historical periods
const HistoricalPeriods: React.FC = () => {
  const {
    data: periods,
    error,
    isLoading,
  } = useQuery<Period[], Error>({
    queryKey: ["periods"],
    queryFn: fetchPeriods,
  });

  if (isLoading) return <Spinner />;
  if (error) return <p>Error fetching historical periods: {error.message}</p>;

  return (
    <div className="container mx-auto flex flex-col items-center justify-center p-4">
      <h1 className="mb-6 text-center text-5xl font-bold text-accent">
        Historical Periods
      </h1>
      <p className="mb-6 w-[55rem] text-center text-gray-600">
        Explore the major historical periods of Iran, from ancient times through
        the Islamic era and into the modern age. Each period is rich with its
        own events, significant figures, and cultural developments.
      </p>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        {periods?.map((period) => (
          <div
            key={period.id}
            className="overflow-hidden rounded-lg bg-[#fff] h-[25rem] shadow-md flex flex-col justify-between"
          >
            <Image
              style={{ width: "100%", height: "auto" }}
              width={250}
              height={150}
              objectFit="cover"
              src={period.imageUrl}
              alt={period.title}
            />
            <div className="p-4">
              <h2 className="mb-2 text-3xl font-semibold">{period.title}</h2>
              <p className="mb-4 text-gray-700">{period.description}</p>
              <div className="space-y-2">
                {period.articles.map((article, index) => (
                  <Link
                    key={index}
                    href={article.url}
                    className="text-blue-500 hover:underline"
                  >
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
