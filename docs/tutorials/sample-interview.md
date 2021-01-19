---
layout: post
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

![The Interviewer Start Screen](/assets/img/sample-protocol/start-screen.png){:standalone}

![](/assets/img/sample-protocol/start-screen.png)

The start screen is a 'back-stage' area of Interviewer, designed to enable the person conducting the study to be able to configure the device and manage its data. The start screen is divided into sections that group related tasks together, such as "starting an interview" or "exporting and managing interview data". The start screen is designed to intelligently show options that are appropriate, and to hide options when they are not applicable. Because of this, when we open interviewer for the first time, we see the three default sections:

![image](/assets/img/sample-protocol/welcome-section.png)

The **welcome section** which contains links to install the sample protocol, visit the documentation website, or watch an overview video. The welcome section can be hidden when no longer needed, using the toggle in the top right hand corner. The welcome section also contains a button (the cog icon) that opens the main device settings screen. We encourage you to open the settings screen and explore the various options.

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

With the Sample Protocol card visible, click the card to start a new interview session.

### Using a different protocol

If you have more than one protocol installed in Interviewer, a card stack will appear to the right side of the start a new interview section. To access all available protocols, tap or click this card stack.

![image](/assets/img/sample-protocol/start-new-stacked.png)

A dialog will open with a list of protocols currently stored in the app. Scroll, filter, or sort the protocol card list to locate the protocol you wish to use for your interview, and tap or click it to begin. This protocol will then appear in the start a new interview section for quicker future access.

### Entering a case ID

In Network Canvas, interview sessions can be identified by a number of means. Interviewer and Server both keep track of interviews using a "universal unique identifier" (UUID), which as the name suggests uniquely identifies every interview on every device you are using, without needing to communicate with other devices. However, it is often more convenient to provide a label that identifies an interview session that is meaningful to the researcher. For this purpose, we developed the concept of the "case ID".

A case ID is entered at the start of every interview, and is entirely decided upon by the researcher. It can contain any combination of numbers and letters (including spaces) up to 30 characters. Its only purpose is to identify the interview session in a way that is meaningful to you. There is no requirement that a case ID be unique, since this would not be possible to ensure across multiple devices. Nevertheless, you should strongly consider a consistent system for naming cases that allows you to uniquely identify them. For example, you might consider:

- `INTERVIEWER_INITIALS PARTICIPANT_ID DATE` (e.g `JRM 12345 December 5th`)
- `STUDY_ID-PARTICIPANT_NAME-VISIT_NUMBER` (e.g `NetCanvas-Joshua-4`)
- or simply `PARTICIPANT_NAME` (e.g `James Montgomery Williams`)

![](/assets/img/sample-protocol/case-id.png)

The case ID is shown in the "resume last interview" section, the "export and manage interview data" section, the case management view in Server, and also appears in the default filename of exported data.

Enter a case ID, and click "start interview" to begin.

The case ID of an interview can be changed from the menu when within the interview. Simply click the menu icon, and click the 'edit' button in the white session summary card that appears on the right.
{: .tip-box}

## Interviewer user-interface

Interviewer's user interface is designed to be simple, unobtrusive, and intuitive for participants. This has two main consequences: (1) much of the functionality _researchers_ may wish to access is somewhat less discoverable than you might be used to, and (2) very little space is devoted to user interface elements that provide explanations about how to complete a task. This is because we assume that the researcher will be able to guide the participant through the interview process, as appropriate.

In terms of the user interface elements that are always visible when within the interview, there are several features of note.

![image](/assets/img/sample-protocol/interviewer-ui.png)

The **menu button** at the very top of the screen opens the primary app menu, which allows you to:

- Exit the interview
- See a summary of the session, including numbers of nodes and edges and current duration
- Open the device settings menu
- Open the stages menu (see below)

The large vertical bar is the interview **timeline**, which is a visual indicator of progress through the interview. As the participant progresses forwards the bar will fill up, and eventually turn green when the interview is finished. Tapping the timeline will reveal the "stages menu", which allows the researcher to quickly see precisely where they are within the interview, as well as to move to another location. The stages menu can also be opened from the main app menu.

Moving forwards and backwards through the interview is accomplished using the **next** (down arrow) and **previous** (up arrow) buttons visible at the top and bottom of the timeline, which can be used by the participant or by the researcher to advance the interview. The next button at the bottom left of the screen is particularly important to explain to the participant.

## Sample interview walkthrough

We will now continue through the sample interview protocol. If you are following along on your own device, make sure you have started a new interview, entered a case ID, and are looking at the first screen. To go forwards or backwards, use the next and previous buttons we discussed above.

### Stages and interfaces

With Network Canvas, each interview is made up of a series of screens that we call "stages", where a specific task is to be completed. You can have as many stages in your interview as you feel you need, and as you will see in other tutorials, there are many ways to structure your interview using different combinations of screens and different front or back loadings of tasks.

Each stage is an _instance_ of a category of task-based screen that we call an ["Interface"](../key-concepts/interfaces.md). That is to say that an Interface is the broad "type" of task, and a stage is the specifically configured version of that task embedded in your interview.

For example, Network Canvas has several "name generator" **Interfaces**, but the specific screen at the start of your interview may be called the "person name generator **stage**". Each Interface is designed for a specific data collection task, such as generating names, collecting ordinal data, or showing a form. Each Interface has [dedicated documentation](../interface-documentation/index.md) that tells you about its features, and gives hints about when and where you should use it.

### The information interface

![](/assets/img/sample-protocol/welcome-info.png)

The first thing we see after starting the interview is the welcome stage, which is configured using the [information interface](../interface-documentation/information.md). The information interface can be used to communicate information to a participant, such as a study description or instructions for completing a task on a subsequent screen. It can also contain media, such as audio, images or video. We have used numerous Information Interfaces throughout this sample protocol to clarify the primary tasks performed in Interviewer, but we will not describe them in this article to avoid redundancy.

### Name Generators

After clicking through the information screens, we encounter the first name generator stage of our interview, which is where the participant will name alters. Name generation is clearly a fundamental task in all network interviewing, and so Network Canvas offers [configurable and customizable](../interface-documentation/name-generator.md) behaviours to suit different research designs. We will now briefly discuss these in turn, in the context of the sample protocol.

#### Quick add

Our first stage uses the ["quick add"](../interface-documentation/name-generator.md#using-quick-add) name generator Interface, which is designed to be ultra-low response burden, and only require that a participant provide a name or label to create a node. We add nodes by clicking the button on the bottom right, typing a name, and pressing enter (or clicking the node icon). When you are finished, either click the button again, or click away, to close the input.

![](/assets/img/sample-protocol/quick-add.png)

The stage is configured with a single [prompt](../key-concepts/prompts.md) ("Within the past 6 months, who have you felt close to, or discussed important personal matters with"). Prompts are defined by the researcher for a given stage, and frame the data collection task. Many Interfaces support the use of multiple prompts on a stage. If a stage is configured with multiple prompts, the "next" and "previous" buttons will move between them automatically.

#### Side panels

Clicking forwards into the next name generator stage, we see a side panel appear that contains all of the nodes named on the first stage. We can drag and drop nodes from the side panel into the node list area or we can create new nodes by clicking on the button in the bottom right right corner.

![](/assets/img/sample-protocol/side-panel.png)

The side panel functionality is available in both of our non-roster specific name generator Interfaces. It is designed for two specific scenarios:

1. To allow participants to nominate alters they have already mentioned _again_ in response to later prompts. For example, if a first prompt asks "Who are you close to?", and second prompt asks "Who are your family members?", the participant may wish to nominate existing close alters as also being family members. This is especially powerful when used in combination with the [assign additional variables](../key-concepts/additional-variables.md) feature.

2. As a container for displaying small amounts of roster data, where you still need to retain the ability for the participant to add network members not listed in the roster.

You can display up to two panels, with different content in each. More information about can panels can be [found here](../interface-documentation/name-generator.md#side-panels)

#### Forms

Moving forwards until you arrive at the next name generator, you will find a prompt asking about clinics or healthcare providers. This stage demonstrates two important concepts.

The first is that the name generators in Network Canvas can be configured to collect more in-depth node information at the time of elicitation. In this example, clicking the "add" button in the bottom right shows a form with three fields (name, visit date, and treatment summary). This is the ["form"](../interface-documentation/name-generator.md#using-forms) version of the name generator interface.

![](/assets/img/sample-protocol/using-forms.png)

The form you design for your name generator can collect whichever variables you wish, and is one of the key ways that a researcher can vary the front-facing response burden of naming alters. Collecting many variables as the node is created can allow for fewer overall stages in your interview, but can also condition the participant against naming large numbers of alters.

The second important concept illustrated on this stage is that Network Canvas interviews can collect data on as many node types as the researcher desires. In this case, our name generator will create "clinic" nodes, which are displayed in blue, as opposed to the red "person" nodes we saw previously. This is an element of the ontological flexibility discussed in our [project overview](../project-overview.md#ontological-flexibility), and allows for powerful research designs that model networks in sophisticated ways.

#### Using roster data

Continuing forwards through the sample protocol, we arrive at another name generator - but one that behaves differently to the others. 

![](/assets/img/sample-protocol/small-roster.png)

This stage allows a participant to nominate alters from a predetermined list (i.e., a roster). In this case, "classmate" nodes are added by selecting the appropriate "display card" on the scrollable roster. Multiple class members (alters) can be added at one time. Note that you are able to filter and sort the list. The sortable properties, as well as the information to be displayed on the cards, are all fully customizable by the researcher.

Once a member of the roster has been nominated, Interviewer creates a node in the network interview using data from the roster. This results in data files that contain only the nodes that the participant nominated.

Clicking next again will take us to a second roster-based name generator Interface, but this time designed to work for extremely large rosters. Here, we ask about universities visited or studied at, and our CSV roster data file contains approximately 9,300 nodes.

![](/assets/img/sample-protocol/large-roster.png)

Since this roster is so large, this Interface does not display the roster in its entirety. Instead, it offers a search box, and customizable levels of fuzzy matching, in order to help the participant quickly locate the nodes they wish to nominate.

What differentiates these Interfaces is the size of the roster data that they are designed to accommodate, and the user interface affordances offered to the participant to help them to locate the roster member they are looking for. Visit our dedicated page to [learn more about working with roster data](../interface-documentation/roster-name-generators.md).

### Ego data collection

While Interviewer is optimized for collecting data about network members from an ego-centric perspective, we also provide the ability for researchers to capture data about the participant (ego). As you will learn when constructing a protocol, it is not required that a Network Canvas protocol ask the participant about themselves, but it is a common approach within many network studies.

![](/assets/img/sample-protocol/ego-form.png)

The ego form Interface (stage 12 within the sample protocol), allows the researcher to show an arbitrary form to the participant, where responses will be stored in a dedicated section of the interview session devoted to ego data. In this particular stage, we ask for a variety of individual level data using numerous input control types. The form includes validation, which requires you to enter the first and last name before proceeding onto the next screen. Such validations can be useful in preventing missing data.

### General purpose form interfaces

For other situations where general purpose data collection is required, we provided form-based interfaces targeted at both nodes and edges. By clicking next, we come to a stage using the per-alter form Interface. This Interface can be used to ask name interpreter questions about alters the participant has nominated. The researcher is able to choose which alter type is used, as well as to define the form itself. Any data in these forms is stored directly on the alter as an attribute.

In this particular Per Alter Form, we ask whether you visited or studied at the university you nominated and to indicate your level of satisfaction with the experience. The Per Alter Form stage will cycle through all alters of a given type in the interview network, unless [skip logic](..key-concepts/skip-logic.md) or [network filtering](..key-concepts/filtering.md) have been implemented causing the stage to be skipped altogether or filtering only a subset of the alters on the stage, respectively. As with all [forms](../key-concepts/forms.md) used by Interviewer, the Per Alter Form allows you to capture different types of data in a series of fields utilizing a variety of input controls.

![](/assets/img/sample-protocol/per-alter-form.png)

There is also a per alter _edge_ version of this interface, which is identical except for dealing with edges between alters, rather than alters themselves. It can be used to ask edge interpreter questions about the quality of a given relation.

### The sociogram interface

Next is the [sociogram Interface](../interface-documentation/sociogram.md). Network Canvas has been heavily inspired by the long tradition of using visual methods in social networks research, which often features the sociogram as a means of presenting the network in a way that is intuitive to participants.

The sociogram in Interviewer is capable of three main tasks:

1. **Positioning nodes spatially** - this means allowing the participant to drag (with touch or using a mouse) nodes around the sociogram, and place them according to some criteria. The sample protocol demonstrates the use of different background types, with the first stage showing concentric circles, and the second using an image of the "political compass". 
2. **Creating edges or links between nodes** - by tapping consecutively on one node followed by another, a link representing an edge can be visually created. The sociogram can create and display multiple edge types.
3. **Nominating nodes as having an attribute** - when not in edge creation mode, the sociogram can be configured so that tapping a node toggles the value of a boolean variable. This powerful feature allows you to use the participant-defined spatial and structural dimensions of the network to reduce the response burden of finding and nominating members of the network.

As with other Interfaces, every aspect of theses three behaviours is customized by the researcher. The layout information is stored in a variable defined by the researcher, who also defines the prompts, the background image, the edge types, and the attributes to nominate.

![](/assets/img/sample-protocol/sociogram-positioning.png)

### Conducting a dyad census

Other research has preferred more systematic approaches to evaluating the presence of alter-alter relations in ego networks. Continuing to stage 19 in the sample protocol illustrates the dyad census Interface, which has been designed to accommodate these methods.

On this stage, all previously named alters are presented under a researcher-defined prompt and a simple "yes"/"no" user interface. By clicking the 'yes' button, a tie between the alters is created. By clicking the 'no' button, no edge is created. All possible pairs within the network for a particular node type will appear, unless network filtering is implemented to only show alters with specific attributes (e.g., class members). The horizontal green bar along the bottom of the screen will fill from left to right indicating the overall progress of the task.

![](/assets/img/sample-protocol/dyad-census.png)

The larger the network, the greater the response burden is for the Dyad Census. As demonstrated in the previous stages, the Sociogram Interface also allows for alter-alter edge creation but instead displays the whole network visually to allow a participant to confirm relationships where they exist rather than cycle through all possible connections.

### Ordinal and categorical data

Apart from general purpose form Interfaces, Interviewer also contains a variety of dedicated name-interpreter Interfaces that are designed to improve the experience of collecting a single variable on a per-alter basis. Stage 23 in the sample protocol is an example of the ordinal bin Interface, which as the name suggests deals specifically with ordinal variables.

![](/assets/img/sample-protocol/ordinal-bin.png)

The Ordinal Bin Interface allows you to drag nodes into a "bin" representing an ordinal variable value, and thereby to assign that value to the alter. This interface greatly improves response burden of "matrix type" questions, where the same question is asked for each alter that has been nominated.

Here, we ask, "When was the last time that you communicated with each of the people you named?" Drag any nodes you have named into the appropriate bin. If you decide that a node was placed incorrectly in a particular bin, you can move the node to the appropriate bin by dragging it into place. Once again, the key elements of the Interface are set by the researcher, including the alter type, the ordinal variable (and its categories), the color scheme of the bins, and the prompt(s).

The next stage uses the categorical bin Interface, which allows you to drag nodes into colorful circles, each representing a categorical variable value. When a node is placed within a circle the variable value is assigned to that alter. You can view which nodes were placed in which circle by selecting the circle. This action allows you to move nodes from one circle to another, which may be necessary to correct an error.

![](/assets/img/sample-protocol/cat-bin.png)

### Managing interview flow with skip logic and network filtering

One of the simplest ways to reduce response burden in an interview is to avoid showing the participant tasks that are not applicable or redundant based on earlier answers. In conventional survey software sections of an interview can be skipped based on responses, but Network Canvas extends this concept and allows the researcher to construct powerful queries built on the structure of the interview network itself. These queries can be applied to both [skip logic](..key-concepts/skip-logic.md) and stage level [network filtering](..key-concepts/filtering.md).

![](/assets/img/sample-protocol/catbin-other-rules.png)

On stage 26 we encounter another categorical bin task, but time time using these features to reduce response burden. Skip logic rules have been defined which direct that the stage should only be shown only if a participant has named any alters of type "Person" with whom they discuss social network research. Recall the **quick add** name generator on stage 6 that asked participants to list any people with whom they have discussed social networks research: nodes nominated on that stage were given an attribute which we have used to create this skip logic query. If no alters were generated on that screen, the current categorical bin will be skipped.

Similarly, network filtering is configured using a rule which filters out all alters on this stage except those with whom the participant has discussed social networks research. This minimizes the scope of the task, and removes the need to add a "not applicable" category.

You may wish to navigate back and forth between the quick add name generator and this stage to see the skip logic and network filtering in action.

Remember that at any time during the interview, you can view a menu of all protocol stages by tapping on the timeline. Tapping on a stage will navigate to it.
{: .tip-box}

### The Narrative Interface

The final stage of the sample protocol demonstrates an Interface that is designed for qualitative personal network's research. The [narrative ](../interface-documentation/narrative.md) Interface does not collect any additional data, but rather can map data collected elsewhere in the interview to aspects of the visual representation of the network. It therefore aims to represent aspects of the participant's network back to them, with the intent to facilitate narrative interrogation of the data in an interview setting.

![](/assets/img/sample-protocol/narrative.png)

The preset menu in the bottom right allows the researcher or the respondent to switch between different predefined visual styles. In this example, we can see the two edge types we created previously ("know" and "conflict") and the boolean attributes we assigned during our variable toggling task on the Sociogram Interface. We can also see the categorical groupings collected on the Categorical Bin Interface. Each preset can be toggled on or off by tapping on the attribute or edge in the menu.

The narrative Interface also supports free-form annotation using the mouse, a finger, or a stylus. The annotation will disappear in five seconds unless you click the freeze icon to the left of the preset menu. With the freeze button engaged, all annotations will remain until you disable the freeze function or use the reset annotation button. Although these annotations are not yet recorded by the software, you can optionally use additional screen recording and audio recording software to keep a record of the interactions on this Interface.

### The Finish Screen

Each interview protocol has a "finish" screen automatically inserted by Interviewer. This screen presents a single button that will exit the interview and return to the start screen. Clicking this button will also set, or update, the "finished at" property of the interview session. This property is exported along with your interview data, and can be used to calculate interview duration.

![](/assets/img/sample-protocol/finish.png)

For now click "Finish" to return to the start screen.

## Resuming, exporting, and managing interview sessions

Now that you have completed an interview, new sections and options will appear on the start screen for managing and resuming interview sessions.

![image](/assets/img/sample-protocol/resume-section.png)

The **resume section** (above) is displayed immediately below the start new interview section, and works in the same way. Clicking an interview session card will immediately resume the interview at the point that you left off. When multiple existing sessions exist on the device running Interviewer, a card stack icon will appear, that when clicked will allow you to choose between resuming any existing interview session.

Managing and exporting interview data takes place in a dedicated **export and manage interview data** section (below). To remove an interview session from the device, select it, and click the "delete selected" button.

![image](/assets/img/sample-protocol/export-section.png)

Data export operations are covered in greater detail in the [Server and Interviewer Workflows](./server-workflows.md) tutorial, but the process consists of selecting one or more sessions from this section, and clicking the "export selected to file" or "export selected to Server" button, as applicable. Settings for exported data can be found in the device settings in the welcome section.

## Next Steps

Now that you have experienced the general flow of an interview in Network Canvas Interviewer from the participant perspective, you may wish to learn about how to begin to create your own protocol. For this, we suggest our article on [building a protocol using architect](./building-using-architect.md).
