[System.Serializable]
public class GameNotFoundException : System.Exception
{
  public GameNotFoundException() { }
  public GameNotFoundException(string id) : base($"Game not found: {id}") { }
  public GameNotFoundException(string id, System.Exception inner) : base($"Game not found: {id}", inner) { }
  protected GameNotFoundException(
    System.Runtime.Serialization.SerializationInfo info,
    System.Runtime.Serialization.StreamingContext context) : base(info, context) { }
}
