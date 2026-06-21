# Label

full Label configuration. (This is a TextLabel)

```LuaU
local Label = Shell.Label({
	Position = {0, 0},
	Size = {0.6, 0.1},
	AnchorPoint = {0.5, 0.5},
	Color = Color3.fromRGB(255, 255, 255),
	TextColor = Color3.fromRGB(255, 255, 255),
	Text = "Status: Active",
	Transparency = 1
})(Frame.Ptr)
```