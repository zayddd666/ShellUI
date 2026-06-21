# Button

full button configuration.

```LuaU
local Button = Shell.Button({
	Position = {0, 0},
	Size = {0.5, 0.15},
	AnchorPoint = {0.5, 0.5},
	Color = Color3.fromRGB(0, 120, 255),
	TextColor = Color3.fromRGB(255, 255, 255),
	Text = "Click Me",
	Transparency = 0
})(Frame.Ptr)
```