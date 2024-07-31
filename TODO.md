# Plans


# To-Do

- [ ] Remake the basic game
  * [ ] Sidebar and the element List (with dynamic scrolling)
    - Should have 
  * [ ] The board and the elements
    - A `Component` object used for elements and other things, for example [TextOnBoard](https://github.com/InfiniteCraftCommunity/userscripts/tree/master/userscripts/TextOnBoard). This will allow for better compatibility between scripts, so, for example, if someone decides to make a mod for drawing on the board, it will automatically be compatible with board panning, saving etc.
  * [ ] Crafting
  * [ ] Use extension's unlimited storage to store elements and recipes.
  * [ ] When the user installs the extension for the first time, automatically import the old savefile. (including ICH's recipe data)
  * [ ] Settings Menu
  * [ ] Animted Background
  * [ ] Board panning
  * [ ] Preserve the board when you close the game and return back later
- [ ] Port [Save File Analyzer](https://infinibrowser.zptr.cc/analyzer)
  * [ ] Store the depth for all recipes and elements in the savefile.
    - Do not include it when exporting, as analyzer's algorithm is pretty good and can load a very large savefile in just a few seconds. The extension's storage is unlimited so it shouldn't matter much.
  * [ ] ICH-style menu on elements, allowing you to see both all the recipes for that element, and the lineage.

# Ideas

- [ ] Experience System
  * [ ] The player will have a level and the XP points.
    - Every next level needs more XP
  * [ ] Experience is rewarded for crafting useful elements
    - Should not count FDs, as they become really common and easy to get in late game.
    - Rarity?
    - Requested elements from the #bounty-board on Discord?
    - Bounty leaderboards? (for example, "longest element ever")
    - New contributions to InfiniBrowser?
  * [ ] Daily Objectives/Quests
    - For example, "Get X first discoveries", "Craft [some random element]", etc
    - If you complete daily quests everyday, your daily streak will increase
    - You will receive some rewards every 7 days?
  * [ ] Challenges?
    - Challenges will be unlockables that you will get from various rewards
    - The more challenges you've completed, the harder challenges you will get (but also, more XP)
    - Challenges will be pre-made, for example
      * "Get all base elements starting from just [some element]"
      * "Get all base elements starting in a different language?"
      * "Get [some element] in under [N] steps"
  * [ ] Account system and Leaderboards
    - Also, badges?
