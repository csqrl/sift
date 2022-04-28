<!-- Links -->

[freddylist/llama]: https://github.com/freddylist/llama
[osyrisrblx/t]: https://github.com/osyrisrblx/t
[upliftgames/moonwave]: https://github.com/upliftgames/moonwave
[upliftgames/wally]: https://github.com/upliftgames/wally
[sift]: https://github.com/csqrl/sift
[sift/releases]: https://github.com/csqrl/sift/releases
[sift/wally]: https://wally.run/package/csqrl/sift
[sift/roblox]: https://www.roblox.com/library/9486684823
[sift/itch.io]: https://csqrl.itch.io/sift

<!-- Shields -->

[shields/github-release]: https://img.shields.io/github/v/release/csqrl/sift?label=latest+release&style=flat
[shields/wally]: https://img.shields.io/endpoint?url=https://runkit.io/clockworksquirrel/wally-version-shield/branches/master/csqrl/sift&color=blue&label=wally&style=flat

<!-- Badges -->

[badges/github]: https://raw.githubusercontent.com/gist/csqrl/56c5f18b229ca1e61feb6eb5fb149f43/raw/githubSource.svg
[badges/itch]: https://raw.githubusercontent.com/gist/csqrl/56c5f18b229ca1e61feb6eb5fb149f43/raw/itch.svg
[badges/npm]: https://raw.githubusercontent.com/gist/csqrl/56c5f18b229ca1e61feb6eb5fb149f43/raw/npm.svg
[badges/roblox]: https://raw.githubusercontent.com/gist/csqrl/56c5f18b229ca1e61feb6eb5fb149f43/raw/roblox.svg
[badges/roblox-small]: https://raw.githubusercontent.com/gist/csqrl/56c5f18b229ca1e61feb6eb5fb149f43/raw/robloxSmall.svg

# Sift

<div align="center">

[![Source code][badges/github]][sift] [![Itch.io store page][badges/itch]][sift/itch.io] [![Roblox library][badges/roblox]][sift/roblox]

[![Latest GitHub version][shields/github-release]][sift/releases] [![Latest Wally version][shields/wally]][sift/wally]

</div>

Immutable data library for Luau (Roblox).

Heavily based on [@freddylist's Llama][freddylist/llama] library, which is no longer maintained.

## Documentation

Documentation, powered by [moonwave][upliftgames/moonwave], is available at https://csqrl.github.io/sift.

## Quick Start

Sift is available from [Wally][sift/wally], [Itch.io][sift/itch.io], the [Roblox Library][sift/roblox], and [GitHub releases][sift/releases].

While Sift is 100% free and open source, if you feel like sponsoring, Sift is also available on [Itch.io][sift/itch.io].

### Wally

Wally is a CLI package manager (much like NPM, Yarn or Cargo) for Roblox by @UpliftGames. Find out more at https://github.com/upliftgames/wally.

```toml
# wally.toml

[dependencies]
Sift = "csqrl/sift@0.0.0"
```

```sh
$ wally install
```

### TypeScript

You shouldn't need to use Sift in TypeScript. Sift essentially brings the power of TypeScript's Array, Object and Set methods to Luau.

See more on MDN:

- [Arrays on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [Sets on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)
- [Objects on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)

### Manual Installation

Grab a copy [from the Roblox Library][sift/roblox] or [GitHub releases][sift/releases], and drop it into Studio.

## What's Changed?

As per the recommendations in [Llama's README][freddylist/llama], the following changes have been made:

- Sift utilises native Luau types. Llama used [@osyrisrblx/t][osyrisrblx/t] for type checking, which meant that types were only checked at runtime.
  - Sift _will not_ check types at runtime. If you're using the library wrong, you'll get errors at runtime anyway!
- Organised tests. `*.spec` files are now alongside their source files, making it easier to locate them.
- Documentation is now generated using [@upliftgames' moonwave][upliftgames/moonwave] (Docusaurus). This makes it quick and easy to add new documentation, and provides a pleasant experience for the user.

## What's New?

### Arrays (Lists)

- `at`: Get an element at a specific index (negative indices are supported).
- `freeze`: Freeze an array.
- `freezeDeep`: Freeze an array and all nested arrays.
- `shuffle`: Shuffle the elements of an array to a random order.

### Dictionaries

- `entries`: Get the entries of a dictionary as an array of key-value pairs.
- `freeze`: Freeze a dictionary.
- `freezeDeep`: Freeze a dictionary and all nested dictionaries.
- `fromEntries`: Create a dictionary from an array of key-value pairs.

### Sets

- `count`: Get the number of elements in a set.
