
import { Search, Filter, SortAsc, Shield, Tag } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { SearchFiltersProps } from "@/types/repository";

export const SearchFilters = ({
  searchTerm,
  setSearchTerm,
  sortBy,
  setSortBy,
  selectedLanguage,
  setSelectedLanguage,
  languages,
  trustLevel,
  setTrustLevel,
  selectedCategory,
  setSelectedCategory,
  categories,
}: SearchFiltersProps) => {
  const trustLevels = ["Unofficial", "Trusted", "Official"];
  
  const handleTrustLevelChange = (value: number[]) => {
    setTrustLevel(trustLevels[value[0]]);
  };

  const getCurrentTrustIndex = () => {
    return trustLevels.indexOf(trustLevel);
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm mb-6">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          {/* Search Input */}
          <div className="relative flex-1 w-full">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              type="text"
              placeholder="Search repositories..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 border-gray-300 focus:border-blue-600 focus:ring-blue-100"
            />
          </div>

          {/* Sort Dropdown */}
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <SortAsc className="text-gray-500 h-4 w-4" />
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-full sm:w-[180px] border-gray-300 focus:border-blue-600">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent className="bg-white border-gray-200">
                <SelectItem value="stars">Most Stars</SelectItem>
                <SelectItem value="forks">Most Forks</SelectItem>
                <SelectItem value="updated">Recently Updated</SelectItem>
                <SelectItem value="name">Name (A-Z)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Language Filter */}
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <Filter className="text-gray-500 h-4 w-4" />
            <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
              <SelectTrigger className="w-full sm:w-[140px] border-gray-300 focus:border-blue-600">
                <SelectValue placeholder="Language" />
              </SelectTrigger>
              <SelectContent className="bg-white border-gray-200">
                <SelectItem value="all">All Languages</SelectItem>
                {languages.map((language) => (
                  <SelectItem key={language} value={language}>
                    {language}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Category Filter */}
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <Tag className="text-gray-500 h-4 w-4" />
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full sm:w-[140px] border-gray-300 focus:border-blue-600">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent className="bg-white border-gray-200">
                <SelectItem value="all">All Categories</SelectItem>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Trust Level Slider */}
        <div className="flex items-center gap-4 w-full pt-4 border-t border-gray-200">
          <div className="flex items-center gap-2">
            <Shield className="text-gray-500 h-4 w-4" />
            <span className="text-sm text-gray-700 font-medium">Trust Level:</span>
          </div>
          <div className="flex-1 max-w-xs">
            <Slider
              value={[getCurrentTrustIndex()]}
              onValueChange={handleTrustLevelChange}
              max={2}
              min={0}
              step={1}
              className="w-full"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-2">
              <span>Unofficial</span>
              <span>Trusted</span>
              <span>Official</span>
            </div>
          </div>
          <div className="text-sm font-medium text-gray-800 min-w-[80px]">
            {trustLevel}
          </div>
        </div>
      </div>
    </div>
  );
};
