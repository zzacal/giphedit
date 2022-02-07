using Giphedit.Models;
using MongoDB.Driver;

namespace Giphedit.Stores;

public class MongoPlayerStore : IPlayerStore
{
  IMongoCollection<Player> _collection;
  public MongoPlayerStore(string host, string username, string password, string databaseName, string collectionName = "players")
  {
    var connectionString = $"mongodb+srv://{username}:{password}@{host}/{databaseName}?retryWrites=true&w=majority";
    Console.WriteLine("CONNECTION STRING");
    Console.WriteLine(connectionString);
    var settings = MongoClientSettings.FromConnectionString(connectionString);
    var client = new MongoClient(settings);
    var db = client.GetDatabase(databaseName);
    _collection = db.GetCollection<Player>(collectionName);
  }
  public async Task<Player> Create(string name)
  {
    var player = new Player(name);
    await _collection.InsertOneAsync(player);

    return player;
  }

  public async Task<Player?> Get(string id)
  {
    var found = await _collection.FindAsync(p => p.Id == id);
    return found.First();
  }

  public async Task<Player?> Update(Player player)
  {
    var filter = Builders<Player>.Filter.Eq(p => p.Id, player.Id);
    var found = await _collection.FindOneAndReplaceAsync(filter, player);
    return found;
  }
}
