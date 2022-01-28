using System;
using System.Threading.Tasks;
using Giphedit.Models;
using MongoDB.Driver;
using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;

namespace Giphedit.Stores;
public class MongoGameStore : IGameStore
{
  IMongoCollection<Game> _collection;
  public MongoGameStore(string host, string username, string password, string databaseName, string collectionName = "games")
  {
    var connectionString = $"mongodb+srv://{username}:{password}@{host}/{databaseName}?retryWrites=true&w=majority";
    var settings = MongoClientSettings.FromConnectionString(connectionString);
    var client = new MongoClient(settings);
    var db = client.GetDatabase(databaseName);
    _collection = db.GetCollection<Game>(collectionName);
  }
  public async Task<Game> Create(Game game)
  {
    await _collection.InsertOneAsync(game);

    return game;
  }

  public async Task<Game?> Get(string id)
  {
    var found = await _collection.FindAsync(g => g.Id == id);
    return found.First();
  }

  public async Task<Game?> Update(Game game)
  {
    var filter = Builders<Game>.Filter.Eq(g => g.Id, game.Id);
    var found = await _collection.FindOneAndReplaceAsync(filter, game);
    return found;
  }
}
