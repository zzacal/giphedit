using System;
using Giphedit.Gifs;
using Giphedit.Services;
using Giphedit.Stores;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

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


app.MapControllerRoute(
    name: "default",
    pattern: "{controller}/{action=Index}/{id?}");

app.MapFallbackToFile("index.html");

app.Run();
