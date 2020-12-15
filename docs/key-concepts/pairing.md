---
layout: default
title: Pairing
parent: Key Concepts
---
## Overview

Pairing is the process which enables secure communication between an Interviewer client and Server. If you have paired devices before using Bluetooth, you can think about pairing in Network Canvas as a similar process - one device initiates pairing by exchanging a password with another device in order to establish a trusted connection through which information can be shared. For further information on the technical implementation, see our [security model](../../technical-documentation/security-model) documentation.

Pairing is necessary for Interviewer clients to both retrieve information from Server (e.g. the protocol file) and transmit information back to Server automatically (e.g. send interview data without exporting the file from Interviewer and importing it into Server).

Note: in order to establish pairing, you will need access to both devices in question.

## Connecting to Server

### Automatic Discovery

Pairing can be accomplished manually or via the automatic discovery feature, which works using a technology called mDNS (also known as ZeroConf and Bonjour).

{% include tip-info.md content="If you are running macOS, the technology needed for automatic discovery is already installed. For Windows users, you will have been prompted during the installation to install the additional components required. You can reinstall them at any time by reinstalling Interviewer." markdown=true %}

Using this technology, Interviewer clients are able to "see" instances of Network Canvas Server that are running on the same local area network (LAN).

{% include nc-image src="assets/img/key-concepts/pairing/nc-found-server.png" caption="The automatic server discovery dialog" %}

Interviewer will automatically attempt to locate instances of Server running on the same network, and any that are available to pair with will be visible by scrolling to the bottom of the Interviewer's start screen, in the "Server Status" section. Ensure that the instance of Server you wish to pair with is open and connected to the same network as the Interviewer client so they can "see" each other.

Each instance of Server found is displayed as a card, with a hostname as a label. Click the instance of Server you wish to begin pairing with.

### Manual Connection Details

If you cannot utilize automatic discovery (either because it fails or is unavailable), you can also enter manual connection details for Server. To do this, follow the same steps as above (scroll to the bottom of the Interviewer start screen, to the "Server Status" section). Click the white button in the bottom right hand corner ("enter manual connection details").

{% include nc-image src="assets/img/key-concepts/pairing/nc-manual-pairing.png" caption="The manual connection details dialog." %}

In the manual connection dialog, you may enter in the IP address and port number of the Server with which you wish to pair. The Server IP address and port number can be found by clicking on the Network Status icon on the top right of the main interface in Server.

{% include nc-image src="assets/img/key-concepts/pairing/server-manual-details.png" caption="A Server protocol workspace, showing connection information at the top of the screen." %}

## The Pairing Process

Whether you use automatic or manual discovery to locate Server, the pairing process itself will be the same. Once you have attempted to connect to Server, and pairing request will be sent.

{% include nc-image src="assets/img/key-concepts/pairing/server-acknowledge.png" caption="Server showing an incoming pairing request." %}

To accept this request, click the "pair with device" button on the dialog that appears within Server. As soon as you accept the pairing request, a new dialog will open in Server with a unique sixteen letter pairing code.

A dialog will then appear in Interviewer on the client device where you will enter the code provided by Server into the sixteen empty fields. Then click the green "pair" button to establish pairing between the devices.

{% include nc-image src="assets/img/key-concepts/pairing/nc-pairing-code.png" caption="Enter the code displayed in Server into the dialog within Interviewer." %}

Once Interviewer and Server are securely paired, any protocols that have been uploaded to Server will be visible to the client. Selecting one of these protocols from the list will install it.

{% include nc-image src="assets/img/key-concepts/pairing/protocol-list.png" caption="A list of available protocols to install is displayed. Clicking the protocol begins the transfer." %}

## Troubleshooting

If you cannot reach Server using automatic or manual discovery following the steps above, please try the following:

* Make sure Server is running.
* Ensure both Server and Interviewer are connected to the same local network. If you wish to connect over the internet, ensure you have configured a VPN or similar.
* Restart Server and Interviewer on their respective devices. Note: restarting will not drop data.
* Contact your network administrator or refer to the details of the error message for further troubleshooting tips. Note: Server uses the Bonjour protocol and requires multicast DNS packets to be able to pass through the network.
* As a final step, please contact us by emailing `info@networkcanvas.com` with details of any error messages you may be receiving.
