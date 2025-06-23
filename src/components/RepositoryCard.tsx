import { Star, GitFork, Calendar, ExternalLink, ChevronDown, Users, Archive } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Repository } from "@/types/repository";
import { useState } from "react";

interface RepositoryCardProps {
  repository: Repository;
}

export const RepositoryCard = ({ repository }: RepositoryCardProps) => {
  const [isReferencesOpen, setIsReferencesOpen] = useState(false);
  const [isCategoriesExpanded, setIsCategoriesExpanded] = useState(false);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const formatNumber = (num: number | undefined | null): string => {
    if (num === undefined || num === null || isNaN(num)) {
      return '0';
    }
    return num.toLocaleString();
  };

  const getLanguageColor = (language: string | null) => {
    const colors: { [key: string]: string } = {
      JavaScript: "bg-yellow-400",
      TypeScript: "bg-blue-600",
      Python: "bg-green-600",
      Java: "bg-orange-600",
      "C#": "bg-purple-600",
      Go: "bg-cyan-600",
      Rust: "bg-orange-700",
      PHP: "bg-indigo-600",
      Ruby: "bg-red-600",
      C: "bg-gray-700",
      "C++": "bg-pink-600",
      Shell: "bg-green-700",
      HTML: "bg-orange-500",
      CSS: "bg-blue-500",
    };
    return colors[language || ""] || "bg-gray-500";
  };

  const getTrustLevelBadgeStyle = (trustLevel: string) => {
    switch (trustLevel) {
      case "Official":
        return "bg-green-100 text-green-800 border-green-200 font-semibold";
      case "Trusted":
        return "bg-blue-100 text-blue-800 border-blue-200 font-semibold";
      case "Community":
        return "bg-red-100 text-red-800 border-red-200 font-semibold";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200 font-semibold";
    }
  };

  return (
    <Card className="group h-full c8y-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-gray-200">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3 min-w-0 flex-1">
            <div className="min-w-0 flex-1">
              {/* Badges moved above the name with different styling */}
              <div className="flex items-center gap-2 mb-2">
                <Badge className={`border ${getTrustLevelBadgeStyle(repository.trust_level)}`}>
                  {repository.trust_level}
                </Badge>
                {repository.archived && (
                  <Badge className="bg-orange-100 text-orange-800 border-orange-200 font-semibold border">
                    <Archive className="h-3 w-3 mr-1" />
                    Archived
                  </Badge>
                )}
              </div>
              {/* Repository name - now has full width */}
              <h3 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors text-lg mb-1 break-words">
                {repository.name}
              </h3>
              <p className="text-sm text-gray-600">
                {repository.owner.login}
              </p>
            </div>
          </div>
          <a
            href={repository.url}
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-0 group-hover:opacity-100 transition-opacity p-2 hover:bg-gray-100 rounded-lg flex-shrink-0"
          >
            <ExternalLink className="h-4 w-4 text-gray-500" />
          </a>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Description */}
        <p className="text-gray-700 text-sm leading-relaxed line-clamp-3">
          {repository.desc || "No description available"}
        </p>

        {/* OS Categories */}
        {repository["os-categories"] && repository["os-categories"].length > 0 && (
          <div className="flex flex-wrap gap-2">
            {(isCategoriesExpanded ? repository["os-categories"] : repository["os-categories"].slice(0, 3)).map((category) => (
              <Badge 
                key={category} 
                className="c8y-badge c8y-badge-warning text-xs"
              >
                {category}
              </Badge>
            ))}
            {repository["os-categories"].length > 3 && (
              <Badge 
                variant="outline" 
                className="text-xs border-gray-300 text-gray-600 cursor-pointer hover:bg-gray-50"
                onClick={() => setIsCategoriesExpanded(!isCategoriesExpanded)}
              >
                {isCategoriesExpanded 
                  ? "Show less" 
                  : `+${repository["os-categories"].length - 3}`
                }
              </Badge>
            )}
          </div>
        )}

        {/* Tech Community References */}
        {repository.tc_references && repository.tc_references.length > 0 && (
          <Collapsible open={isReferencesOpen} onOpenChange={setIsReferencesOpen}>
            <CollapsibleTrigger className="flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600 transition-colors w-full p-2 hover:bg-gray-50 rounded">
              <Users className="h-4 w-4" />
              <span className="font-medium">Tech Community References ({repository.tc_references.length})</span>
              <ChevronDown className={`h-4 w-4 transition-transform ${isReferencesOpen ? 'rotate-180' : ''}`} />
            </CollapsibleTrigger>
            <CollapsibleContent className="mt-2">
              <div className="space-y-2 bg-gray-50 rounded-lg p-4 border border-gray-200">
                {repository.tc_references.map((reference, index) => (
                  <div key={index} className="text-sm">
                    <a
                      href={reference.topic_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 font-medium hover:underline"
                    >
                      {reference.title}
                    </a>
                    <div className="text-gray-500 text-xs mt-1">
                      #{reference.topic_id} • {reference.slug}
                    </div>
                  </div>
                ))}
              </div>
            </CollapsibleContent>
          </Collapsible>
        )}

        {/* Stats */}
        <div className="flex items-center justify-between text-sm text-gray-600">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 text-orange-500" />
              <span className="font-medium">{formatNumber(repository.stars)}</span>
            </div>
            <div className="flex items-center gap-1">
              <GitFork className="h-4 w-4 text-gray-500" />
              <span>{formatNumber(repository.forks)}</span>
            </div>
          </div>

          {/* Language */}
          {repository.lang && (
            <div className="flex items-center gap-2">
              <div 
                className={`w-3 h-3 rounded-full ${getLanguageColor(repository.lang)}`}
              />
              <span className="text-xs font-medium text-gray-700">{repository.lang}</span>
            </div>
          )}
        </div>

        {/* Updated Date */}
        <div className="flex items-center gap-1 text-xs text-gray-500 pt-3 border-t border-gray-100">
          <Calendar className="h-3 w-3" />
          <span>Updated {formatDate(repository.last_updated)}</span>
        </div>
      </CardContent>
    </Card>
  );
};
