# TextInput

full TextInput configuration. (This is a TextBox)

```LuaU
local TextInput = Shell.TextInput({
	Position = {0, 0},
	Size = {0.5, 0.15},
	AnchorPoint = {0.5, 0.5},
	Color = Color3.fromRGB(50, 50, 50),
	TextColor = Color3.fromRGB(200, 200, 200),
	Text = "",
	Placeholder = "Enter username...",
	Transparency = 0
})(Frame.Ptr)
```