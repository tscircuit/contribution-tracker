export interface ContributorStats {
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

export interface ContributorCardProps {
    username: string;
    contributor: ContributorStats;
}