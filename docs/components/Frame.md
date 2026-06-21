# Frame

full frame configuration.

```LuaU
local Frame = Shell.Frame({
	Position = {0.1, 0.1},
	Size = {0.8, 0.8},
	AnchorPoint = {0, 0},
	Color = Color3.fromRGB(30, 30, 30),
	Transparency = 0
})(nil)  -- PASS NIL HERE IF YOU ARE PARENTING THIS TO SCREEN GUI
```