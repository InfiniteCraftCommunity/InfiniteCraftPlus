# Infinite Craft Plus

The new Infinite Craft.

> [!IMPORTANT]  
> This is a work-in-progress. 

- For contributing read [CONTRIBUTING.md](CONTRIBUTING.md)
- For the ToDo list read [TODO.md](TODO.md)

## Goals

- Re-make the game completely from scratch
- Provide a flexible API for developers to make their own mods and themes for Infinite Craft. Also our own catalouge of modifications and themes, allowing people to install them very easily.
- A lot of Quality of Life features that the original Infinite Craft does not have - better accessibility, customization (such as appearance settings or custom keybinds) and much more
- All features should be toggleable or configurable through the settings menu
- Our own gameplay elements (challenges, gamemodes, experience system, etc) to make the game more fun and replayable

## Ok, but why a browser extension? Why not a separate app?

While we would love to make our own separate website with our own desktop and mobile applications, there are a few issues.

Infinite Craft Plus aims to be a recreation of the game, while keeping all the elements and recipes of the original game.
This means that IC+ has to use the game's API when crafting, and it would be impossible to use it if it was a separate website:

- The API has bot protection, meaning only real players can use it. Besides that, the API has strict ratelimits, meaning if we made our own server that requests Neal's API, we would only be able to handle two crafts per second, which is really slow.
- The API is also restricted with CORS, meaning only Infinite Craft's original website can request it, and there's nothing we can do to bypass it unless we make our own extension rather than a website.
