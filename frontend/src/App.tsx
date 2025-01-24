import { useEffect, useState } from 'react';
import { GithubIcon } from 'lucide-react';
import { ContributorCard } from './components/ContributorCard';

type ContributorStats = {
  reviewsReceived: number;
  rejectionsReceived: number;
  approvalsReceived: number;
  approvalsGiven: number;
  rejectionsGiven: number;
  prsOpened: number;
  prsMerged: number;
  issuesCreated: number;
  bountiedIssuesCount: number;
  bountiedIssuesTotal: number;
  major?: number;
  minor?: number;
  tiny?: number;
  stars?: string;
};

function App() {
  const [data, setData] = useState<Record<string, ContributorStats>>({});
  const [dateUsed, setDateUsed] = useState<string>('');

  useEffect(() => {
    // First fetch the list of files in the contribution-overviews directory
    fetch('https://api.github.com/repos/tscircuit/contribution-tracker/contents/contribution-overviews')
      .then((resp) => resp.json())
      .then((files) => {
        // Filter for JSON files and sort by name to get the latest
        const jsonFiles = files
          .filter((file: { name: string }) => file.name.endsWith('.json'))
          .sort((a: { name: string }, b: { name: string }) => b.name.localeCompare(a.name));

        if (jsonFiles.length === 0) throw new Error('No JSON files found');

        const latestFile = jsonFiles[0];
        setDateUsed(latestFile.name.replace('.json', ''));

        // Fetch the content of the latest JSON file
        return fetch(latestFile.download_url);
      })
      .then((resp) => resp.json())
      .then((json) => {
        setData(json);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const getStarCount = (stars?: string) => (stars ?? '').length;
  
  const sortedContributors = Object.entries(data)
    .sort((a, b) => {
      // Primary sort by star count
      const starDiff = getStarCount(b[1].stars) - getStarCount(a[1].stars);
      if (starDiff !== 0) return starDiff;
      
      // Secondary sort by PR count
      return (b[1].prsMerged ?? 0) - (a[1].prsMerged ?? 0);
    });

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            TSCircuit Contributors
          </h1>
          <div className="flex items-center justify-center gap-2 text-gray-600">
            <GithubIcon className="w-5 h-5" />
            <a
              href="https://github.com/tscircuit/contribution-tracker"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition-colors"
            >
              View on GitHub
            </a>
          </div>
          <p className="text-gray-600 mt-2">
            Last updated: {dateUsed}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedContributors.map(([username, stats]) => (
            <ContributorCard
              key={username}
              username={username}
              contributor={stats}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
