# Installation

## Choose an Installation Method

### Rbxm

Only rbxm is available for now.

<button class="rbxm-download-btn">
  Download latest rbxm
</button>

<style scoped>
/* Styling for your clean, standalone button */
.rbxm-download-btn {
  display: inline-block;
  background-color: #1a7a88; /* The signature teal color */
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  font-weight: 600;
  font-size: 15px;
  text-decoration: underline; /* Keeps the text underlined */
  cursor: pointer;
  transition: background 0.2s ease;
  margin-top: 12px;
}

.rbxm-download-btn:hover {
  background-color: #228b9b;
}
</style>

:::tabs
==Wally
In your `wally.toml`, add the following lines to your dependencies.

```toml
conch = "alicesaidhi/conch@0.3.1"
conch_ui = "alicesaidhi/conch-ui@0.3.1"
```

==pesde
In your terminal, run the following commands.

```sh
pesde add alicesaidhi/conch
pesde add alicesaidhi/conch_ui
```

==rbxm
You can download the latest rbxm from [GitHub Releases](https://github.com/alicesaidhi/conch/releases/latest/) or by pressing the button below. All packages expect to be within the same folder.
You can drag the rbxm into Studio. You should place your packages somewhere where both the client and server can access it, ideally ReplicatedStorage.

<Button href="https://github.com/alicesaidhi/conch/releases/latest/download/standalone.rbxm" text="Download latest rbxm"></Button>

==git clone

soon:tm:

:::