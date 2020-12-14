---
layout: default
parent: Tutorials
title: Using Interviewer
nav_order: 1
last_modified_at: 2020-12-14
---

## Prerequisites

To get the most from this tutorial, you should have first read the [project overview](../project-overview.md). To follow along using your own computer or device, you should [download and install Interviewer](https://networkcanvas.com/download.html).

## Overview

This article will introduce you to Interviewer by walking through an example based on our sample protocol. We will explore the participant-facing interview experience, as well as discuss some of the researcher-facing functionality of the app. The sample protocol we will be using demonstrates all the main data collection features of the tool, which we hope will encourage you to imagine the many types of study that can be created using Network Canvas.

Please note that we have created a separate tutorial article covering creating this protocol, called [building a protocol using architect](./building-using-architect.md). We suggest you continue with the current tutorial before learning the more advanced concepts involved in protocol creation, but you can read this articles in any order you wish.

## The start screen

After opening Interviewer, the first thing you will see is the 'start screen'.

{% include nc-image src="/assets/img/sample-protocol/start-screen.png" caption="The Interviewer 'start screen'" %}{: .macos-screenshot }

The start screen is a 'back-stage' area of Interviewer, designed to enable the person conducting the study to be able to configure the device and manage its data. The start screen is divided into sections that group related tasks together, such as "starting an interview" or "exporting and managing interview data". The start screen is designed to intelligently show options that are appropriate, and to hide options when they are not applicable. Because of this, when we open interviewer for the first time, we see the three default sections:

![image](/assets/img/sample-protocol/welcome-section.png)

The **welcome section** which contains links to install the sample protocol, visit the documentation website, or watch an overview video. The welcome section can be hidden when no longer needed, using the toggle in the top right hand corner.

![image](/assets/img/sample-protocol/protocols-section.png)

The **protocols section** which allows you to quickly import a [Network Canvas protocol file](../key-concepts/the-protocol-file.md) from a URL or by choosing a file ( and later, also by importing from a computer running Server). Once you have installed one or more protocol files, this section will also contain a button that allows you to manage your installed protocols.

![image](/assets/img/sample-protocol/server-section.png)

The **server status section** which initially shows nearby computers running Server that you may wish to [pair with](../key-concepts/pairing.md), and once paired shows the communication status of the device with your paired Server.

As you use Interviewer to collect data, sections and options will appear that expose additional functionality as you need it.

## Installing and managing protocols

Interviewer must be programmed using one or more interview protocols before it can be used to collect data. Once you have authored a protocol file in Architect, there are three ways to import it into your devices running Interviewer. Which one you choose will depend on the needs of your study.

- **Importing a file directly**. This option can be accessed either from the file menu if running Interviewer on Windows/MacOS/Linux, or from the protocols section of the start screen. It provides a simple means to import a protocol file that is already stored on your device.
- **Importing from URL**. This option is accessed from the protocols section of the start screen, and allows you to download a protocol file directly from any URL that is accessible from the device running Interviewer. This option can be useful in circumstances where you have a study website or intranet, and need to quickly install a protocol on a device **but you do not wish to use Server** as part of your workflow (see ["which applications do I need?"](../project-overview.md#which-applications-do-i-need) for more on this).
- **Importing from Server**. When you have paired your device running Interviewer with a computer running Server, you can securely transfer a protocol file to your interview device by clicking the "Import from Server" option in the protocols section.

For the purposes of this tutorial, we will proceed using the built-in sample protocol. To follow along on your own device, **click the "install sample protocol" button in the welcome section of the app** to install the protocol that we will be using. Alternatively, [click here](../../../protocols/Sample Protocol v1.netcanvas) to download the file to this device, and then import it into Interviewer using the import from file method described above.

Once a protocol has been imported, a new section will appear on the start screen: the **start a new interview section**. Inside this section will be a protocol card, representing the protocol you imported.

![image](/assets/img/sample-protocol/start-new-section.png)

By default, this section will show the protocol card for the protocol that you last installed, or last conducted an interview with.

### Managing installed protocols

To help you to manage protocols that are installed in Interviewer, there is a dedicated overlay. This can be opened from the protocols section, which will now display a "manage installed protocols" button.

![image](/assets/img/sample-protocol/manage-installed-protocols.png)

Once you open this overlay, you can sort your installed protocols, as well as filter them by name.

To remove a protocol file from your device, drag its card into the bin that appears at the bottom of the screen.

![image](/assets/img/sample-protocol/delete-protocol.png)

## Starting an interview

Starting an interview involves tapping or clicking the protocol card of the protocol that you wish to use. By default, the last protocol you installed (or started an interview with) is displayed prominently in the start a new interview section, and can be tapped to immediately begin an interview.

With the Sample Protocol card visible, we click the card to start a new interview session.

### Using a different protocol

If you have more than one protocol installed in Interviewer, a card stack will appear to the right side of the start a new interview section. To access all available protocols, tap or click this card stack.

![image](/assets/img/sample-protocol/start-new-stacked.png)

A dialog will open with a list of protocols currently stored in the app. Scroll, filter, or sort the protocol card list to locate the protocol you wish to use for your interview, and tap or click it to begin. This protocol will then appear in the start a new interview section for quicker future access.

### Entering a case ID

In Network Canvas, interview sessions can be identified by a number of means. Interviewer and Server both keep track of interviews using a "universal unique identifier" (UUID), which as the name suggests uniquely identifies every interview on every device you are using, without needing to communicate with other devices. However, it is often more convinient to provide a label that identifies an interview session that is meaningful to the researcher. For this purpose, we developed the concept of the "case ID".

A case ID is entered at the start of every interview, and is entirely decided upon by the researcher. Its only purpose is to identify the interview session in a way that is meaningful to them. There is no requirement that a case ID be unique, since this would not be possible to ensure across multiple devices. Nevertheless, you should strongly consider a consistent system for naming cases that allows you to uniquely identify them. For example, you might consider:

- `INTERVIEWER_INITIALS-PARTICIPANT_ID-DATE` (e.g `JRM-12345-2020121`)
- `STUDY_ID-PARTICIPANT_NAME-VISIT_NUMBER` (e.g `NetCanvas-Joshua-4`)
- or simply `PARTICIPANT_NAME` (e.g `James Montgomery Williams`)

{% include nc-image src="/assets/img/sample-protocol/case-id.png" caption="The case ID modal" %}{: .macos-screenshot }

The case ID is shown in the "resume last interview" section, the "export and manage interview data" section, the session list in Server, and also appears in the default filename of exported data.

Enter a case ID, and click "start interview" to begin.

{% include tip-info.md content="The case ID of an interview can be changed from the menu when within the interview. Simply click the menu icon, and click the 'edit' button in the white session summary card that appears on the right." markdown=true %}

## Interviewer user-interface

Interviewer's user interface is designed to be simple, unobtrusive, and intuitive for participants. This has two main consequences: (1) much of the functionality researchers may wish to access is somewhat less discoverable than you might be used to, and (2) very little space is devoted to user interface elements that provide explanations about how to complete a task. This is because we assume that the researcher will be able to guide the participant through the interview process, as appropriate.

In terms of the user interface elements that are always visible when within the interview, there are several features of note.

![image](/assets/img/sample-protocol/interviewer-ui.png)

The **menu button** at the very top of the screen opens the primary app menu, which allows you to:

- Exit the interview
- See a summary of the session, including numbers of nodes and edges and current duration
- Open the device settings menu
- Open the stages menu (see below)

The large vertical bar is the interview **timeline**, which is a visual indicator of progress through the interview. As the participant progresses forwards the bar will fill up, and eventually turn green when the interview is finished. Tapping the timeline will reveal the "stages menu", which allows the researcher to quickly see precisely where they are within the interview, as well as to move to another location. The stages menu can also be opened from the main app menu.

Moving forwards and backwards through the interview is accomplished using the **next** (down arrow) and **previous** (up arrow) buttons are visible at the top and bottom of the timeline, which can be used by the participant or by the researcher to advance the interview. The next button at the bottom left of the screen is particularly important to explain to the participant.

## Interview walkthrough

### Stages and interfaces

Each interview is made up of a series of tasks that we call "stages". Think of stages as screens that your participant will see in sequence, where a task will be completed.

You can have as many stages in your interview as you feel you need, and as you will see in other articles, there are many ways to structure your interview.

Each stage is an instance of what we call an "interface". Interfaces are designed for a specific data collection task, such as generating names, collecting ordinal data, or showing a form. 

The "Name Generator" is an interface which collects the names and other information about the people or places (alters) with whom the participant is connected. The Name Generator is able to capture various types of data.  

### The information interface

{% include nc-image src="/assets/img/sample-protocol/welcome-info.png" caption="The Information Interface" %}{: .macos-screenshot }

The first thing we see after starting the interview is a welcome screen, which is configured using the Information Interface. The Information Interface is a display screen that is used to communicate information to a participant, such as a study description or instructions for completing a task on a subsequent screen. On this stage, we have added introductory text about the sample protocol and a logo image file for the project. We have used numerous Information Interfaces throughout this sample protocol to clarify the primary tasks performed in Interviewer, but we will not describe them in this article to avoid redundancy.

### Name Generators 

#### Quick add

Clicking the next button, we encounter the first name generator stage of our interview, which is where the participant will name some alters. Here, we use the "quick add" Name Generator, which shows a single text field for name required in order to create an alter. We have two prompts which ask, "Within the past 6 months, who have you felt close to, or discussed important personal matters with", followed by, "Within the past 6 months, who have you discussed social networks research with?" Note that you can reorder them by dragging the handle.

We add individuals (alters) by clicking the button on the bottom right, typing the name of the person, and clicking enter. When you are finished, either click the button again, or click away, to close the input.

{% include nc-image src="/assets/img/sample-protocol/quick-add.png" caption="The Name Generator (using quick add)" %}{: .macos-screenshot }

#### Side panels

On the second prompt, we see a side panel appear that contains all of the nodes named on the first prompt. We can drag and drop nodes from the side panel into the node list area or we can create new nodes by clicking on the button in the bottom right right corner. 

{% include nc-image src="/assets/img/sample-protocol/side-panel.png" caption="Side Panel on the Name Generator (using quick add)" %}{: .macos-screenshot }

This is the first data collection "stage" of our interview, and it uses an interface that we call the "Name Generator (using quick add)".

#### Forms

Clicking the next button, we encounter the second name generator stage of our interview, which uses forms to collect alter information. Instead of the node type person captured on the prior stage, this stage is collecting alter data on node type "Clinic". 

{% include nc-image src="/assets/img/sample-protocol/node-type-place.png" caption="A name generator for place" %}{: .macos-screenshot }

We have one prompt asking, "Within the past 12 months, which clinic or healthcare providers have you visited?" We add clinics by clicking the button on the bottom right, which shows a form we need to complete about each clinic or healthcare provider that is named.

{% include nc-image src="/assets/img/sample-protocol/using-forms.png" caption="A name generator form" %}{: .macos-screenshot }

#### Using roster data

Clicking the next button, we arrive at another name generator stage which allows a participant to nominate alters from a predetermined list (i.e., a roster). We have one prompt asking "please select any members of your degree class that you spend time with other than studying". Class members are added by selecting the appropriate "display card" on the scrollable roster. Multiple class members (alters) can be added at one time. Learn more about working with [roster data](../interface-documentation/roster-name-generators.md).

{% include nc-image src="/assets/img/sample-protocol/small-roster.png" caption="A small roster name generator" %}{: .macos-screenshot }

Clicking next will take us to a name generator stage using a large roster. Within this stage, we ask, "Which universities have you either visited or studied at?" To add a university, click the bottom right button and a search bar will display. Type the name of the university you want to add and select the card when it appears. Just as in the name generator using a small roster, you can nominate multiple alters at one time. Once you have selected all the universities you wish to add, click the plus button on the right side of the displayed roster.

{% include nc-image src="/assets/img/sample-protocol/large-roster.png" caption="A large roster name generator" %}{: .macos-screenshot }

### Form Interfaces

#### Ego data collection

While Interviewer is optimized to report information about other individuals, we also provide the ability for researchers to capture data about the participant (ego). As you will learn when constructing a protocol, it is not required that a Network Canvas protocol ask the participant about themselves, but it is a common approach within many network studies.

{% include nc-image src="/assets/img/sample-protocol/ego-form.png" caption="A Large Roster Name Generator" %}{: .macos-screenshot }

The Ego Form asks the participant to provide information about themselves. In this particular stage, we ask for a variety of individual level data using numerous input control types. The form includes validation, which requires you to enter the first and last name before proceeding onto the next screen. Such validations can be useful in preventing missing data.

#### The Per Alter Form Interface

By clicking next, we come to the Per Alter Form Interface. This stage is used to ask name interpreter questions about the alters the participant has nominated. In this particular Per Alter Form, we ask whether you visited or studied at the university you nominated and to indicate your level of satisfaction with the experience. The Per Alter Form stage will cycle through all nominated alters unless [skip logic](..key-concepts/skip-logic.md) or [network filtering](..key-concepts/filtering.md) have been implemented causing the stage to be skipped altogether or filtering only a subset of the alters on the stage, respectively. As with all [forms](../key-concepts/forms.md) used by Interviewer, the Per Alter Form allows you to capture different types of data in a series of fields utilizing a variety of input controls. 

{% include nc-image src="/assets/img/sample-protocol/per-alter-form.png" caption="A Per Alter Form" %}{: .macos-screenshot }

There is also a per alter edge version of this interface.

### The sociogram interface

Next, we encounter the Sociogram Interface. We first ask you to lay out the individuals which you nominated - asking you to place individuals who are friends with each other, closer to each other - and those you are closer to toward the center of the circles. In the example for this stage, we have used the default concentric circles background.

{% include nc-image src="/assets/img/sample-protocol/sociogram-positioning.png" caption="Positioning Nodes on Sociogram Interface" %}{: .macos-screenshot }

When we click to the next stage, we have another sociogram, but this one is using a customized background image. In the custom background image, we have quadrants labelled as "Friends", "Family", "Work Colleagues", and "Other" - four role categories of network members. We ask "please position the people you have named in the boxes according to which group you feel they most belong to". Depending on the data collection needs of your study, it may be more or less important to understand the placement and proximity of nodes to one another on the sociogram.

{% include nc-image src="/assets/img/sample-protocol/sociogram-background.png" caption="Custom Background on Sociogram Interface" %}{: .macos-screenshot }

### Creating edges

On the next stage, we return to the original placement of nodes on the Sociogram Interface with the concentric circle background to generate alter-alter ties (edges). First we ask "please connect any two people who might spend time together without you being there" followed by a second prompt asking "please connect any two people who have conflict or who don't get along well with each other". Each prompt generates a different edge type. In order to make a tie, tap one node and then tap a second node. Go through the process again to remove the tie.

{% include nc-image src="/assets/img/sample-protocol/sociogram-edges.png" caption="Edge Creation on the Sociogram" %}{: .macos-screenshot }

#### The Dyad Census for Classmates

Advancing to the next stage, we reach the Dyad Census Interface. On this stage, all previously named alters are paired with a single boolean prompt. In this example we ask, "To the best of your knowledge, do these two people spend time together outside of class?" By clicking the 'yes' button, a tie between the alters is formed, recorded as a value of 1. By clicking the 'no' button, the absence of a tie between the two alters is recorded as 0. All possible pairs within the network for a particular node type will appear, unless network filtering is implemented to only show alters with specific attributes (e.g., class members). The horizontal green bar along the bottom of the screen will fill from left to right indicating the progress on the stage.

{% include nc-image src="/assets/img/sample-protocol/dyad-census.png" caption="The Dyad Census Interface" %}{: .macos-screenshot }

The larger the network, the greater the response burden is for the Dyad Census. As demonstrated in the previous stages, the Sociogram Interface also allows for alter-alter edge creation but instead displays the whole network visually to allow a participant to confirm relationships where they exist rather than cycle through all possible connections. 

### Name Interpreter Techniques

Next, we return to the Sociogram Interface. Previously, we created edges between alters on this interface, but now we will use the name interpreter task on the Sociogram. We first ask, "Please select anyone who you have asked for advice within the previous 6 months", followed by, "Please select anyone who has supported you financially within the previous 6 months." To select a node, tap on it; to unselect it, tap a second time. We refer to this task on the Sociogram as "variable toggling." Selecting, or toggling, a node records a value of TRUE. Only boolean variables can be used for this task. 

{% include nc-image src="/assets/img/sample-protocol/variable-toggling.png" caption="Variable Toggling on the Sociogram" %}{: .macos-screenshot }

#### The Ordinal Bin Interface

Next, we come to an ordinal bin stage, where we ask more specific name interpreter type questions. The Ordinal Bin Interface allows you to drag nodes into a "bin" representing an ordinal variable value, and thereby to assign that value to the alter. This interface greatly improves response burden of "matrix type" questions, where the same question is asked for each alter that has been nominated.

Here, we ask, "When was the last time that you communicated with each of the people you named?" Drag any nodes you have named into the appropriate bin. If you decide that a node was placed incorrectly in a particular bin, you can move the node to the appropriate bin by dragging it into place. 

{% include nc-image src="/assets/img/sample-protocol/ordinal-bin.png" caption="The Ordinal Bin Interface" %}{: .macos-screenshot }

#### The Categorical Bin Interface

The next stage we reach is configured on the Categorical Bin Interface. The Categorical Bin is a name interpreter that allows you to drag nodes into colorful circles, each representing a categorical variable. When a node is placed within a circle the variable value is assigned to that alter. 

We ask, "Which of these options best describes how you know this person?" Drag each node to the appropriate colorful circle. You can view which nodes were placed in which circle by selecting the circle. This action allows you to move nodes from one circle to another, which may be necessary to correct an error or a reevaluation of the prompt.

{% include nc-image src="/assets/img/sample-protocol/cat-bin.png" caption="The Categorical Bin Interface" %}{: .macos-screenshot }

If 'Other' is designated as a category on this Interface, a dialog with a text field will appear asking you to specify.

{% include nc-image src="/assets/img/sample-protocol/cat-bin-other.png" caption="Specifying the Context for 'Other'" %}{: .macos-screenshot }

#### Skip Logic and Network Filtering on a Categorical Bin Stage

On the next screen we encounter another Categorical Bin stage, but this one has skip logic and network filtering implemented. 

The [skip logic](..key-concepts/skip-logic.md) configured uses a rule which directs the stage to be shown only if a participant has named any alters (type "Person") with whom they discuss social network research. Recall the **quick add** name generator on stage at the beginning of the interview that asked participants to list any people with whom they have discussed social networks research? On that stage is where those data would have been captured. If no alters were generated on that screen, the current categorical bin will be skipped. 

The [network filtering](..key-concepts/filtering.md) is configured using a rule which filters out all alters on this stage except those with whom the participant has discussed social networks research. 

The prompt on the stage asks, "You indicated that you've discussed social networks research with these people. Which category best describes your relationship with each person?" Drag each node into the color circles provided to indicate which category best describes your relationship to each alter. You may wish to navigate back and forth between the quick add name generator and this stage to see the skip logic and network filtering in action.

{% include nc-image src="/assets/img/sample-protocol/cat-bin-rules.png" caption="Categorical Bin Using Skip Logic and Network Filtering" %}{: .macos-screenshot }

{% include tip-caution.md content="At any time throughout the interview, may view a menu of all protocol stages by tapping on the three horizontal lines in the top left corner of the app. To navigate to any stage in the menu, merely click the card. Each stage contains the name given to it within the Architect." markdown=true %}

### The Narrative Interface

The next stage of the interview uses the Narrative Interface. The Narrative Interface is designed to elicit qualitative information by displaying aspects of the participant's network back to them. The stage is only for data visualization and does not collect any data within the app. 

{% include nc-image src="/assets/img/sample-protocol/narrative.png" caption="The Narrative Interface" %}{: .macos-screenshot }

There is a preset menu in the bottom right which displays all variables and edges that can be shown on the stage. In this example, we can see the two edge types we created previously ("know" and "conflict") and the boolean attributes we assigned during our variable toggling task on the Sociogram Interface. We can also see the categorical groupings collected on the Categorical Bin Interface. Each preset can be toggled on or off by tapping on the attribute or edge in the menu. 

Finally, you can annotate on the network visualization by dragging your mouse. The annotation will disappear in five seconds unless you click the freeze icon to the left of the preset menu. With the freeze button engaged, all annotations will remain until you advance to the next stage. To reset the screen to remove annotations while the freeze is on, click the refresh icon next to the freeze button.

{% include nc-image src="/assets/img/sample-protocol/narrative-annotation.png" caption="The Narrative Interface" %}{: .macos-screenshot }

### The Finish Screen

Finally we reach the end of this hypothetical interview, and we are presented with the "Finish Interview" screen.

{% include nc-image src="/assets/img/sample-protocol/finish.png" caption="The finish interview screen" %}{: .macos-screenshot }

Data management operations are covered in the [Server and Interviewer Workflows](./server-workflows.md) article, but for now note that it is possible to remotely transfer the interview data to an instance of Server (if your device running Interviewer and your device running Server are paired), or to export a GraphML file or CSV by navigating to the "Export & Manage Interview Data" panel on the start screen of Interviewer.

For now click "Finish" to return to the start screen.

## Managing and resuming sessions

## Exporting interview data

## Next Steps

Now that you have experienced the general flow of an interview in Network Canvas Interviewer from the participant perspective, you may wish to learn about how to begin to create your own protocol. For this, we suggest our article on [building a protocol using architect](./building-using-architect.md).
