import { Client, TablesDB, ID, Query } from 'appwrite';
const DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID;
const TABLE_ID = import.meta.env.VITE_APPWRITE_COLLECTION_ID; // same env variable is fine
const PROJECT_ID = import.meta.env.VITE_APPWRITE_PROJECT_ID;

const client = new Client()
  .setEndpoint("https://nyc.cloud.appwrite.io/v1")
  .setProject(PROJECT_ID);

const database = new TablesDB(client);

export const updateSearchCount = async (searchTerm, movie) => {
  try {
    // 👇 same logic, new method names
    const result = await database.listRows({
      databaseId: DATABASE_ID,
      tableId: TABLE_ID,
      queries: [Query.equal("searchTerm", searchTerm)],
    });

    if (result.rows.length > 0) {
      const row = result.rows[0];
      await database.updateRow({
        databaseId: DATABASE_ID,
        tableId: TABLE_ID,
        rowId: row.$id,
        data: {
          count: row.count + 1,
        },
      });
    } else {
      await database.createRow({
        databaseId: DATABASE_ID,
        tableId: TABLE_ID,
        rowId: ID.unique(),
        data: {
          searchTerm: searchTerm,
          count: 1,
          movie_id: movie.id,
          poster_url: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
        },
      });
    }
  } catch (error) {
    console.error("Error updating search count:", error);
  }
};

export const getTrendingMovies = async()=>{
  try{
     const result = await database.listRows({
      databaseId: DATABASE_ID,
      tableId: TABLE_ID,
      queries: [Query.limit(5), Query.orderDesc("count")]
    });
    return result.rows;

  }catch(error){
    console.error("Error fetching trending movies:", error);

  }
}