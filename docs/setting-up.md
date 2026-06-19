## Setting Up UI For Mittens

Set up the UI To get started with mittens

VIEW ALL COMPONENTS IN API

# Example Client Script

```lua
-- EXAMPLE SCRIPT
local ReplicatedStorage = game:GetService("ReplicatedStorage")
local Players = game:GetService("Players")

local lib = require(PATH.TO.MITTENS) -- Put your path to mittens here!
local Mittens = lib :: any

local Screen = Instance.new("ScreenGui")
Screen.IgnoreGuiInset = true
Screen.Parent = Players.LocalPlayer:WaitForChild("PlayerGui")

-- 3. Build your UI
local label = Mittens.Label {
	Transparency = 1,
	Position = {0.5, 0.5},
	AnchorPoint = {0.5, 0.5},
	Size = {0.5, 0.2},
	Color = Color3.fromRGB(255, 255, 255),
} (nil) -- You Pass nil here and not Screen.Ptr because its not inside any of Mittens's UI Elements, if you want to Parent it inside a frame pass Frame.Ptr

Mittens.MountToScreen(label, Screen)
```