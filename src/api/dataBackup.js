import { createClient } from "@sanity/client";
import fs from "fs";
import { generateQueries } from "./generateSanityQueries.js";

const client = createClient({
  projectId: 'hngtneus',
  dataset: "production", // Usually 'production'
  useCdn: true, // Set to true for production
  apiVersion: "2024-04-11",
});


const backupData = async (query) => {
  try {
    const data = await client.fetch(query);

    // Check if data is an array
    if (Array.isArray(data)) {
      // Iterate over each element of the array
      data.forEach((element, index) => {
        const backupFilePath = `src/api/backups/backup-${
          element._type
        }-${index}.json`;
        fs.writeFileSync(backupFilePath, JSON.stringify(element, null, 2));
      });
    } else {
      // If data is not an array, create a single JSON file
      const backupFilePath = `src/api/backups/backup-${
        data._type
      }.json`;
      fs.writeFileSync(backupFilePath, JSON.stringify(data, null, 2));
    }
  } catch (error) {
    console.error("Error:", error);
  } finally {
    // Update loading state when fetching is done
  }
};

const backupDataForLang = () => {
  const {
    navbarQuery,
    homeQuery,
    footerQuery,
    settingsQuery,
  } = generateQueries();
  
  backupData(navbarQuery);
  backupData(homeQuery);
  backupData(footerQuery);
  backupData(settingsQuery);

};

backupDataForLang()
