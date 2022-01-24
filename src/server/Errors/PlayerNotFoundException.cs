[System.Serializable]
public class PlayerNotFoundException : System.Exception
{
  public PlayerNotFoundException() { }
  public PlayerNotFoundException(string id) : base($"Player not found: {id}") { }
  public PlayerNotFoundException(string id, System.Exception inner) : base($"Player not found: {id}", inner) { }
  protected PlayerNotFoundException(
    System.Runtime.Serialization.SerializationInfo info,
    System.Runtime.Serialization.StreamingContext context) : base(info, context) { }
}
