---
layout: default
title: Assets
parent: Key Concepts
---
## Overview

In Architect, 'assets' are any external files that you use within your interview. These can be media files, such as audio, images, or even video. They can also be network data files that you can use as a roster. Careful use of assets can improve the interview experience for your participants, or enable different types of interview workflow.

Once added to your protocol in Architect, assets are stored within the `.netcanvas` file itself. Because of this, you will need to handle updating or removing assets from within Architect.

{% include tip-caution.md content="Asset use in Network Canvas interviews can **heavily** impact performance. This means that protocols take longer to install on devices, and some stages may take much longer to load. Special care must be taken to appropriately resize and compress your assets before importing them, and you must ensure that you have tested your protocol on your intended field devices to ascertain performance levels.<br><br>As a general guide, you should aim to have your total protocol file size be less than 20mb." markdown= true %}

## Adding Assets from a Stage

Many stages allow you to add assets directly while configuring them. This is designed to provide a more seamless flow when creating your interview protocol. Examples of this include background images on the Sociogram interface, roster files in either of the roster Name Generators, and media files on the Information interface.

If the stage you are supporting uses an asset it will provide an interface for you to add it directly, and will give instructions about which type of asset is required.

{% include nc-image src="/assets/img/key-concepts/assets/bg-asset.png" caption="Adding a background image to a Sociogram" %}

## Adding and Removing Assets from the Asset Manager

For a more broad overview of all assets within your current protocol, click the green 'manage assets' button in the upper right hand corner of the protocol overview card, when looking at the timeline. This will open the Asset Manager.

![image](/assets/img/key-concepts/assets/manage-assets-button.png)

Under the manage assets screen, you can browse, filter, and delete any existing assets, as well as add new ones. To add a new asset to the asset library, simply drag and drop a file into the designated area, or browse for the file you wish to import.

{% include nc-image src="/assets/img/key-concepts/assets/asset-library.png" caption="The asset library screen" %}

You will notice that existing assets that are unused show a red "unused" pill. This indicates that they are able to be deleted. Attempting to delete an asset that is in use within your interview will be prevented. You must first update or remove all uses of an asset before you can delete it.

## Supported File Types

### Image

Network Canvas supports JPEG, GIF, and PNG image file formats.

### Audio

Network Canvas supports MP3, AIFF, M4A, and MP4 audio file formats.

### Video

Network Canvas supports MP4 and MOV video file formats. Take special care when using video to make your files as small as possible.

### Network

Network Canvas supports network data in CSV format. the heading row will be used to set variable names for any nodes brought in to the interview. Ensure that you have a row called "name" to take advantage of automatic [node labelling](./node-labelling.md). Download a simple example csv file from [here](../../../assets/previousInterview.csv).
