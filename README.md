# react-native-swift

[![npm version](https://badge.fury.io/js/react-native-swift.svg?style=flat)](https://badge.fury.io/js/react-native-swift)
[![platform](https://img.shields.io/badge/platform-iOS-lightgrey.svg?style=flat)](https://github.com/rhdeck/react-native-swift)
[![GitHub license](https://img.shields.io/github/license/mashape/apistatus.svg?style=flat)](https://github.com/rhdeck/react-native-swift/blob/master/LICENSE)

Fixes a React Native Xcode project to permit Swift-based native components. 

## Requirements
* XCode 9.0 or newer.
* React Native 0.49 or newer (haven't tested it lower than that)
* Your native module will need to be compiled as a static library like any other.

## How to use it
* npm install --save react-native-swift
* react-native link

Done! 

## How it works
Starting in XCode 9.0, you can create static libaries that contain swift code. Just create swift code the way found on the react-native documentation and add it to a static library. For reasons unknown, a couple flags need to get set inside the Xcode project file for the app to work with the library. This package forces that issue by adding a blank swift file to the build phases of the app targets, and setting the swift version flag. 

Future versions of Xcode may get less stupid and obviate the need for this package! 

## Tip 
* When you set up the package.json the library package, add "react-native-swift" to the peerDependencies object. Will help others know how to make your module "just work" It will have pretty much no effect if it is buried in the tree. 

Time for me to confess that this is my first FOSS project. Let me know how it works for you! @ me: @ray_deck on twitter and rhdeck on Github. 