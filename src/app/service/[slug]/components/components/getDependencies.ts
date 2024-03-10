export default function getDependenciesFromHookString(hookString) {
  // Define a regular expression to match dependencies enclosed in square brackets
  const dependencyRegex = /\[([^[\]]*)\]/g;

  // Extract dependencies from the hook string
  const matches = hookString.match(dependencyRegex);

  if (matches) {
    // If matches are found, parse the dependencies
    const dependencies = matches.map((match) => {
      // Remove square brackets and whitespace, then split by commas
      const dependencyList = match.replace(/\[|\]|\s/g, "").split(",");
      // Trim each dependency to remove leading/trailing whitespace
      return dependencyList.map((dep) => dep.trim());
    });

    // Flatten the array if needed (e.g., if you want a single array of dependencies)
    return dependencies.flat();
  }

  // Return an empty array if no matches were found
  return [];
}
