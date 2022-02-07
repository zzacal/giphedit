using Giphedit.Models;
using MongoDB.Driver;

namespace Giphedit.Stores;
public class MongoGameStore : IGameStore
{
  IMongoCollection<Game> _collection;
  public MongoGameStore(string host, string username, string password, string databaseName, string collectionName = "games")
  {
    var connectionString = $"mongodb+srv://{username}:{password}@{host}/{databaseName}?retryWrites=true&w=majority";
    Console.WriteLine("CONNECTION STRING");
    Console.WriteLine(connectionString);
    var settings = MongoClientSettings.FromConnectionString(connectionString);
    var client = new MongoClient(settings);
    var db = client.GetDatabase(databaseName);
    _collection = db.GetCollection<Game>(collectionName);
  }
  public async Task<Game> Create(Game game)
  {
    await _collection.InsertOneAsync(game);
    if(game.Id == null) {
      throw new Exception("Unable to get game id");
    }
    var result = await Get(game.Id);

    if(result == null) {
      throw new Exception("Unable to get game id");
    }

    return result;
  }

  public async Task<Game?> Find(string name)
  {
    var found = await _collection.FindAsync(g => g.Name == name);
    return await found.FirstOrDefaultAsync();
  }

  public async Task<Game?> Get(string id)
  {
    try
    {
      var found = await _collection.FindAsync(g => g.Id == id);
      return found.First();
    }
    catch
    {
      return null; 
    }
  }

  public async Task<Game?> Update(Game game)
  {
    var filter = Builders<Game>.Filter.Eq(g => g.Id, game.Id);
    var found = await _collection.FindOneAndReplaceAsync(filter, game);
    var result = await _collection.FindAsync(filter);

    return result.First();
  }
}
