---
layout: default
title: Pairing Devices
parent: Key Concepts
---
## Overview

Pairing is the process which enables communication between a Network Canvas client and Server. If you have paired devices before using Bluetooth, you can think about pairing in Network Canvas as a similar process - one device initiates pairing by exchanging a password with another device in order to establish a trusted connection through which information can be shared. Pairing is necessary for Network Canvas clients to both retrieve information from Server (e.g. the protocol file) and transmit information back to Server (e.g. interview data). Note: in order to establish pairing, you will need access to both devices in question.

## Pairing Devices

_Automatic Discovery_

Pairing can be accomplished manually or via the automatic discovery feature. If you are using a Windows machine, you must first install Apple's Bonjour software in order to enable the automatic discovery feature. You will be prompted to install this program when you open the Network Canvas app after installation. If you are using a machine operating macOS or iOS, Bonjour software is already built-in, so no additional installation is required. Note: the automatic discovery feature is not available for machines running Linux.

[screenshot of Bonjour installation request]

Bonjour functions as a "go-between" to facilitate communication between the Network Canvas client and Server over a local network (i.e. the same WiFi or wired Ethernet connection). Once installed, it works silently in the background to communicate information across a network. Note: you are not required to install Bonjour to use Network Canvas. However, without it you will not be able to use the automatic discovery option to pair with Server. 

To initiate automatic discovery, click the protocol icon in the bottom right hand corner of the Network Canvas home screen. A dialog will appear which provides your options for importing a protocol. Select the Server tab in the dialog. Network Canvas will automatically attempt to locate instances of Server running on the same network and any that are available to pair with will be visible in the dialog. Note: Ensure that the Server you wish to pair with is open and connected to the same network as the Network Canvas client so they can "see" each other. 

[screenshot of dialog showing automatic discovery search]

_Manual Discovery_

If you cannot utilize automatic discovery (it fails or is unavailable), you can also manually search for Server. To initiate manual discovery, follow the same steps as above (click the protocol icon on the bottom left hand corner of the Network Canvas home screen, then select the Server tab). In the dialog, click the white button in the bottom right hand corner ("enter manual connection details"). Another dialog will open where you will enter in the IP address and port number of the Server with which you wish to pair. The Server IP address and port number can be found on the overview screen of the Server application in the upper left hand corner. 

[screenshot of dialog manual discovery IP and port entered]]

## The Pairing Process

Whether you use automatic or manual discovery to locate Server, the pairing process itself will be the same. Once Network Canvas can "see" the instance of Server with which you wish to pair, select the appropriate Server icon in the dialog. With this action, Network Canvas will initiate a request to pair with Server. To accept this request, click the "pair with device" button on the dialog that appears within Server.

[screenshot of pair device request  in Server]

As soon as you accept the pairing request, a new dialog will open in Server with a unique sixteen letter pairing code (i.e. encryption key). 

[screenshot of pairing code from server]

A dialog will then appear in Network Canvas on the client device where you will enter the code provided by Server into the sixteen empty fields. Then click the green "pair" button to establish pairing between the devices. 

[screenshot of pairing code entered in Network Canvas]

Once Network Canvas and Server are securely paired, any protocols that have been uploaded to Server will be visible to and usable by the client. 

[screenshot of Network Canvas dialog showing pairing with Server and available protocols]

Troubleshooting Pairing

If you cannot reach Server using automatic or manual discovery following the steps above, please try the following:

* Make sure Server is open. 
* Restart Server and Network Canvas on their respective devices. Note: restarting will not drop data. 
* Contact your network administrator or refer to the details of the error message for further troubleshooting tips. Note: Server uses the Bonjour protocol and requires multicast DNS packets to be able to pass through the network.
