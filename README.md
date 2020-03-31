# react-native-swift

Fixes a React Native Xcode project to permit Swift-based native components.

[![npm version](https://badge.fury.io/js/react-native-swift.svg?style=flat)](https://badge.fury.io/js/react-native-swift)
[![platform](https://img.shields.io/badge/platform-iOS-lightgrey.svg?style=flat)](https://github.com/rhdeck/react-native-swift)
[![GitHub license](https://img.shields.io/github/license/mashape/apistatus.svg?style=flat)](https://github.com/rhdeck/react-native-swift/blob/master/LICENSE)

## Requirements

- XCode 9.0 or newer.
- React Native 0.60 or newer (haven't tested it lower than that)

## NEW: Add react-native-swift-cli to simplify development!

_[react-native-swift-cli](https://npmjs.org/react-native-swift-cli/)_ includes a helper utility for initializing new swift-based components.

```bash
yarn global add react-native-swift-cli
```

To learn how it works:

```bash
react-native-swift --help
```

## Adding to your app

Even when not using _react-native-swift-cli_ you can add a Swift-based native module to you app relatively easily.

```bash
yarn add myproject
yarn add react-native-swift
react-native swiftify
```

The _react-native-swift_ package will, via react-native link, take care of compatibility between your react native and the Swift based component.
Done!

## How it works

Starting in XCode 9.0, you can create static libaries that contain swift code. [Just create swift code the way found on the react-native documentation](https://facebook.github.io/react-native/docs/native-modules-ios.html) and add it to a static library. For reasons unknown, a couple flags need to get set inside the Xcode project file for the app to work with the library. This package forces that issue by adding a blank swift file to the build phases of the app targets, and setting the swift version flag.

Future versions of Xcode may get less stupid and obviate the need for this package! Hopefully the templates remain a little helpful.

##

## Tips

If you create a swift-based native component on your own (e.g. without react-native-swift init) the best practice is to add "react-native-swift" to the peerDependencies object. Will help others know how to make your module "just work." It will have pretty much no effect if it is buried in the tree.

- See the repository [react-native-swift-demo-module](https://github.com/rhdeck/react-native-swift-demo-module) for an example that uses this as a peerDependency.

Time for me to confess that this is my first FOSS project. Let me know how it works for you! @ me: @ray_deck on twitter and rhdeck on Github.
