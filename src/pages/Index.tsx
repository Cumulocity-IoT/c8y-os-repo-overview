
import { useState, useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { SearchFilters } from "@/components/SearchFilters";
import { RepositoryCard } from "@/components/RepositoryCard";
import { fetchRepositories } from "@/services/githubService";
import { Repository } from "@/types/repository";

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("stars");
  const [selectedLanguage, setSelectedLanguage] = useState("all");
  const [trustLevel, setTrustLevel] = useState("Trusted");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const { data: repositories = [], isLoading, error } = useQuery<Repository[]>({
    queryKey: ['repositories'],
    queryFn: fetchRepositories,
  });

  console.log('Repositories data:', repositories);

  // Extract unique languages and categories from repositories
  const { languages, categories } = useMemo(() => {
    if (!Array.isArray(repositories)) {
      return { languages: [], categories: [] };
    }

    const uniqueLanguages = [...new Set(repositories
      .map((repo: Repository) => repo.lang)
      .filter(Boolean)
    )].sort();

    const uniqueCategories = [...new Set(repositories
      .flatMap((repo: Repository) => repo["os-categories"] || [])
    )].sort();

    return { languages: uniqueLanguages, categories: uniqueCategories };
  }, [repositories]);

  // Filter and sort repositories
  const filteredRepositories = useMemo(() => {
    if (!Array.isArray(repositories)) {
      return [];
    }

    let filtered = repositories.filter((repo: Repository) => {
      const matchesSearch = repo.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          (repo.desc && repo.desc.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesLanguage = selectedLanguage === "all" || repo.lang === selectedLanguage;
      
      // Updated trust level logic
      let matchesTrustLevel = false;
      switch (trustLevel) {
        case "Unofficial":
          // Show all repositories
          matchesTrustLevel = true;
          break;
        case "Trusted":
          // Show only Trusted and Official
          matchesTrustLevel = repo.trust_level === "Trusted" || repo.trust_level === "Official";
          break;
        case "Official":
          // Show only Official
          matchesTrustLevel = repo.trust_level === "Official";
          break;
        default:
          matchesTrustLevel = true;
      }
      
      const matchesCategory = selectedCategory === "all" || 
                            (repo["os-categories"] && repo["os-categories"].includes(selectedCategory));

      return matchesSearch && matchesLanguage && matchesTrustLevel && matchesCategory;
    });

    // Sort repositories
    filtered.sort((a: Repository, b: Repository) => {
      switch (sortBy) {
        case "stars":
          return (b.stars || 0) - (a.stars || 0);
        case "forks":
          return (b.forks || 0) - (a.forks || 0);
        case "updated":
          return new Date(b.last_updated).getTime() - new Date(a.last_updated).getTime();
        case "name":
          return a.name.localeCompare(b.name);
        default:
          return 0;
      }
    });

    return filtered;
  }, [repositories, searchTerm, sortBy, selectedLanguage, trustLevel, selectedCategory]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-c8y-background">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-c8y-primary"></div>
            <p className="mt-4 text-c8y-text-secondary">Loading repositories...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-c8y-background">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="text-center py-12">
            <p className="text-c8y-danger">Error loading repositories. Please try again.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-c8y-background">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-medium text-c8y-text-primary mb-2">
            Cumulocity Open-Source Explorer
          </h1>
          <p className="text-c8y-text-secondary">
            Discover and explore Cumulocity open-source repositories with advanced filtering and search capabilities
          </p>
        </div>

        {/* Search and Filters */}
        <SearchFilters
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          sortBy={sortBy}
          setSortBy={setSortBy}
          selectedLanguage={selectedLanguage}
          setSelectedLanguage={setSelectedLanguage}
          languages={languages}
          trustLevel={trustLevel}
          setTrustLevel={setTrustLevel}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          categories={categories}
        />

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-sm text-c8y-text-secondary">
            Showing {filteredRepositories.length} of {repositories.length} repositories
          </p>
        </div>

        {/* Repository Grid - Updated for wider cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredRepositories.map((repository: Repository) => (
            <RepositoryCard key={repository.id} repository={repository} />
          ))}
        </div>

        {/* No Results */}
        {filteredRepositories.length === 0 && (
          <div className="text-center py-12">
            <p className="text-c8y-text-secondary">No repositories found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
