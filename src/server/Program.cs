using Giphedit.Gifs;
using Giphedit.Hubs;
using Giphedit.Services;
using Giphedit.Stores;

var builder = WebApplication.CreateBuilder(args);

var configuration = builder.Configuration;

// Add services to the container.
builder.Services.AddSingleton<IGameStore>(
  new MongoGameStore(configuration["MongoDb:Host"],
    configuration["MongoDb:Username"],
    configuration["MongoDb:Password"],
    configuration["MongoDb:Database"]));

builder.Services.AddSingleton<IGameService, GameService>();

builder.Services.AddSingleton<IPlayerStore>(
  new MongoPlayerStore(configuration["MongoDb:Host"],
    configuration["MongoDb:Username"],
    configuration["MongoDb:Password"],
    configuration["MongoDb:Database"]));
builder.Services.AddSingleton<IPlayerService, PlayerService>();

builder.Services.AddSingleton<IGifClient>(new GiphyClient(configuration["Giphy:Key"]));
builder.Services.AddSingleton<ICardService, CardService>();

builder.Services.AddControllersWithViews();
builder.Services.AddSignalR();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
  // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
  app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();

var cliOrigins = configuration["ClientOrigins"]?.Split(",") ?? new string[0];
app.UseCors(builder => builder
    .AllowAnyHeader()
    .AllowAnyMethod()
    .WithOrigins(cliOrigins)
    .AllowCredentials()
  );
  
app.MapControllerRoute(
    name: "default",
    pattern: "{controller}/{action=Index}/{id?}");

app.MapHub<PlayHub>("/play");

app.MapFallbackToFile("index.html");


app.Run();
