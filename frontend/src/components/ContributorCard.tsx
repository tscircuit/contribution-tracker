import { GitPullRequest, MessageSquare } from 'lucide-react';

interface ContributorStats {
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
}

interface ContributorCardProps {
  username: string;
  contributor: ContributorStats;
}

export function ContributorCard({ username, contributor }: ContributorCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="p-4 flex items-center gap-3 border-b border-gray-100">
        <div className="relative flex-shrink-0">
          <img
            src={`https://github.com/${username}.png`}
            alt={`${username}'s avatar`}
            className="w-14 h-14 rounded-full"
          />
        </div>
        <div className="flex-grow min-w-0">
          <div className="flex items-center justify-between gap-2">
            <h3 className="text-base font-semibold truncate">
              <a
                href={`https://github.com/${username}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800"
              >
                {username}
              </a>
            </h3>
            <div className="text-yellow-400 text-lg flex-shrink-0">{contributor.stars || ''}</div>
          </div>
          <div className="mt-1 flex gap-3 text-sm text-gray-600">
            <div className="flex items-center gap-1">
              <span className="font-medium text-blue-600">{contributor.major || 0}</span> major
            </div>
            <div className="flex items-center gap-1">
              <span className="font-medium text-purple-600">{contributor.minor || 0}</span> minor
            </div>
            <div className="flex items-center gap-1">
              <span className="font-medium text-yellow-600">{contributor.tiny || 0}</span> tiny
            </div>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-2 divide-x divide-y divide-gray-100 bg-gray-50/80">
        <div className="p-2.5">
          <div className="text-sm text-gray-500">Pull Requests</div>
          <div className="mt-1 font-medium flex items-center gap-1.5">
            <GitPullRequest className="w-4 h-4 text-green-500" />
            <span>{contributor.prsMerged}/{contributor.prsOpened}</span>
          </div>
        </div>
        
        <div className="p-2.5">
          <div className="text-sm text-gray-500">Reviews</div>
          <div className="mt-1 font-medium flex items-center gap-1.5">
            <MessageSquare className="w-4 h-4 text-blue-500" />
            <span>{contributor.reviewsReceived}</span>
          </div>
        </div>
        
        <div className="p-2.5">
          <div className="text-sm text-gray-500">Approvals</div>
          <div className="mt-1 font-medium">
            {contributor.approvalsReceived}
          </div>
        </div>
        
        <div className="p-2.5">
          <div className="text-sm text-gray-500">Issues</div>
          <div className="mt-1 font-medium">
            {contributor.issuesCreated}
          </div>
        </div>
      </div>
    </div>
  );
}
