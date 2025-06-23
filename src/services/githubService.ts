
import { Repository } from "@/types/repository";

export const fetchCumulocityRepositories = async (): Promise<Repository[]> => {
  try {
    console.log("Fetching Cumulocity repositories from JSON endpoint...");
    
    const response = await fetch(
      "https://raw.githubusercontent.com/Cumulocity-IoT/cumulocity-os-repo-overview/refs/heads/main/repos.json"
    );
    
    if (!response.ok) {
      console.error("Failed to fetch repositories:", response.status);
      throw new Error("Failed to fetch repositories");
    }
    
    const data = await response.json();
    console.log(`Found ${data.length} repositories`);
    
    // Sort by stars (descending) as default
    return data.sort((a: Repository, b: Repository) => b.stars - a.stars);
    
  } catch (error) {
    console.error("Error fetching Cumulocity repositories:", error);
    throw new Error("Failed to fetch repositories");
  }
};

// Export with the expected name for compatibility
export const fetchRepositories = fetchCumulocityRepositories;
