---
layout: default
parent: Tutorials
title: A Sample Network Canvas Protocol
nav_order: 1
last_modified_at: 2019-06-27
---

## Introduction to a Sample Network Canvas Protocol

This article will introduce you to Interviewer by walking through a sample Network Canvas protocol. The protocol we have created for this example gives an overview of the main features and tasks of the tool, which we hope will help orient you to the different types of studies that can be conducted with Interviewer.

You can download the protocol file for this demonstration yourself and import it into Interviewer to follow along. You can also open it within Architect to learn how it was configured and how to make changes. If you want to learn how to create this protocol from scratch, read the [building a protocol using architect](./building-using-architect.md) article.

To download this protocol, click [here](../../../protocols/Public Health Protocol.netcanvas). To follow along on your own device, you will need to import the protocol using either a downloaded copy of this file, or by entering the URL `https://documentation.networkcanvas.com/protocols/Public%20Health%20Protocol.netcanvas` into Interviewer. Detailed information about importing a protocol into Interviewer is provided in the [Server and Interviewer Workflows](./server-workflows.md) article.

From here onward, we will assume that the protocol is already installed within Interviewer.

## The Start Screen

First, we open the Interviewer application.

{% include nc-image src="/assets/img/introduction-images/start-screen.png" caption="The Interviewer Start Screen" %}{: .macos-screenshot }

We begin in an area we call the “start screen”. The start screen shows a welcome panel with buttons that allow you to watch an overview video of the project, visit our documentation website, and install a sample protocol in Interviewer. The welcome panel can be hidden by toggling the switch in the top right corner. To follow along in this tutorial, click the 'Install Sample Protocol' button. A notification will appear in the right hand corner of the screen confirming the protocol was successfully installed and a new panel will appear displaying a card for the newly installed protocol.

{% include nc-image src="/assets/img/introduction-images/new-interview.png" caption="The start a new interview panel" %}{: .macos-screenshot }

If you have more than one protocol installed in Interviewer, a selectable card stack will appear to the right side of the panel. To access all available protocols, select this card stack. A dialog will open with a list of cards representing each protocol currently stored in the app. The most recently installed protocol will always appear first on the left side of the panel. You can switch between protocol cards by opening this dialog and selecting the protocol you want to administer.

{% include nc-image src="/assets/img/introduction-images/select-protocol.png" caption="Select a protocol" %}{: .macos-screenshot }

With the Sample Protocol card visible, we click the card to trigger a new interview session by entering a Case ID. The Case ID is a label that you assign to an interview session to help you recognize it later. 

{% include nc-image src="/assets/img/introduction-images/case-id.png" caption="The new Case ID modal" %}{: .macos-screenshot }

The Case ID is shown in the "Select an Interview to Resume" screen, is visible in Server in the overview panel, and appears in the filename of exported data. For our interview we will use today's date as the Case ID.

{% include tip-caution.md content="There is no requirement that a Case ID be unique, since this would not be possible to ensure across multiple devices. Instead, Interviewer and Server use a separate unique ID to ensure that data is not lost if a Case ID is duplicated. Nevertheless, you should strongly consider a consistent system for naming cases that allows you to uniquely identify them." markdown=true %}

## The Information Interface

{% include nc-image src="/assets/img/introduction-images/welcome-info.png" caption="The Information Interface" %}{: .macos-screenshot }

The first thing we see after starting the interview is a welcome screen, which is configured using the Information Interface. The Information Interface is a display screen that is used to communicate information to a participant, such as a study description or instructions for completing a task on a subsequent screen. On this stage, we have added introductory text about the sample protocol and a logo image file for the project. We have used numerous Information Interfaces throughout this sample protocol to clarify the primary tasks performed in Interviewer, but we will not describe them in this article to avoid redundancy.

| Key Concept: The Interviewer general user interface                          |
| :----------------------------------------------------------- |
| The Interviewer user interface is designed to be simple and minimalistic. There are a few consistent elements that you should be aware of. <br /><br/>Firstly, there is a timeline running along the left edge of the screen, which shows progress through the interview. As we move forwards, the bar will fill up, and eventually turn green when we are finished.<br/><br/>Next (down arrow) and previous (up arrow) buttons are visible at the top and bottom of the timeline, which can be used by the participant or by the researcher to advance the interview. The next button at the bottom left of the screen is particularly important to explain to the participant.<br/><br/>More relevant to the researcher, there is a menu accessible by clicking on the three horizontal bars in the top left corner. This menu allows you to access device settings, such as font sizes and form display modes, navigate to specific "interview stages", and exit the interview. |
{: .key-concept }

## The Name Generator (using quick add) Interface

{% include nc-image src="/assets/img/introduction-images/quick-add.png" caption="The Name Generator (using quick add)" %}{: .macos-screenshot }

Clicking the next button, we encounter the first name generator stage of our interview, which is where the participant will name some alters. We have two prompts, with the first asking "who have you felt close to, or discussed important personal matters with", and the second asking "who have you discussed social networks research with". We add individuals by clicking the button on the bottom right, typing the name of the person, and clicking enter. 

On the second prompt, we see a side panel appear that contains all of the nodes named on the first prompt. We can drag and drop nodes from the side panel into the node list area or we can create new nodes by click on the add a node button in the bottom right right corner. 

{% include nc-image src="/assets/img/introduction-images/side-panel.png" caption="Side Panel on the Name Geneartor (using quick add)" %}{: .macos-screenshot }

| Key Concept: Stages and Interfaces                          |
| :----------------------------------------------------------- |
| Each interview is made up of a series of tasks that we call "stages". Think of stages as screens that your participant will see in sequence, where a task will be completed.<br/><br/>You can have as many stages in your interview as you feel you need, and as you will see in other articles, there are many ways to structure your interview.<br/><br/>Each stage is an instance of what we call an "interface". Interfaces are designed for a specific data collection task, such as generating names, collecting ordinal data, or showing a form. <br/><br/>The "Name Generator" is an interface which collects the names and other information about the people or places (alters) with whom the participant is connected. The Name Generator is able to capture various types of data.  |
{: .key-concept }

This is the first data collection “stage” of our interview, and it uses an interface that we call the “Name Generator (using quick add)”.

## The Name Generator (using forms) Interface

{% include nc-image src="/assets/img/introduction-images/node-type-place.png" caption="A name generator for place" %}{: .macos-screenshot }

Clicking the next button, we encounter the second name generator stage of our interview, which uses forms to collect alter information. Instead of the node type person captured on the prior stage, this stage is collecting alter data on node type "Providers". We have one prompt asking "which clinic or healthcare providers have you visited". We add providers by clicking the button on the bottom right, which shows a form we need to complete about each provider that is named.

{% include nc-image src="/assets/img/introduction-images/using-forms.png" caption="A name generator form" %}{: .macos-screenshot }

## The Name Generator (small roster) Interface

Clicking the next button, we arrive to another name generator stage which allows a participant to nominate alters from a predetermined list. We have one prompt asking "please select any members of your degree class that you spend time with other than studying". Class members are added by selecting the appropriate "display card" on the scrollable roster. Multiple class members (alters) can be added at one time. Learn more about working with [roster data](../interface-documentation/roster-name-generators.md).

{% include nc-image src="/assets/img/introduction-images/small-roster.png" caption="A small roster name generator" %}{: .macos-screenshot }

Clicking next will take us to name generator stage using a large roster. Within this stage, we ask "which universities have you either visited or studied at". To add a university, click the bottom right button and a search bar will display. Type the name of the university you want to add and select the card when it appears. Just as in the name generator using a small roster, you can nominate multiple alters at one time. Once you have selected all the universities you wish to add, click the plus button on the right side of the displayed roster. 

{% include nc-image src="/assets/img/introduction-images/large-roster.png" caption="A large roster name generator" %}{: .macos-screenshot }

## The Ego Form Interface

While Interviewer is optimized to report information about other individuals, we also provide the ability for researchers to capture data about the participant (ego). As you will learn when constructing a protocol, it is not required that a Network Canvas protocol ask the participant about themselves, but it is a common approach within many network studies.

{% include nc-image src="/assets/img/introduction-images/ego-form.png" caption="A large roster name generator" %}{: .macos-screenshot }

The Ego Form asks the participant to provide information about themselves. In this particular stage, we ask for a variety of individual level data using numerous input control types. The form includes validation, which requires you to enter the first and last name before proceeding onto the next screen. Such validations can be useful in preventing missing data.

## The Per Alter Form Interface

By clicking next, we come to the Per Alter Form Interface. This stage is used to ask name interpreter questions about the alters the participant has nominated. In this particular Per Alter Form, we ask whether you visited or studied at the university you nominated and to indicate your level of satisfaction with the experience. The Per Alter Form stage will cycle through all nominated alters unless [skip logic](..key-concepts/skip-logic.md) or [network filtering](..key-concepts/filtering.md) have been implemented causing the stage to be skipped altogether or filtering only a subset of the alters on the stage, respectively. As with all [forms](../key-concepts/forms.md) used by Interviewer, the Per Alter Form allows you to capture different types of data in a series of fields utilizing a variety of input controls. 

{% include nc-image src="/assets/img/introduction-images/per-alter-form.png" caption="A Per Alter Form" %}{: .macos-screenshot }

# The Sociogram Interface

Next, we encounter the Sociogram Interface. We first ask you to lay out the individuals which you nominated - asking you to place individuals who are friends with each other, closer to each other - and those you are closer to toward the center of the circles. In the example for this stage, we have used the default concentric circles background.

{% include nc-image src="/assets/img/introduction-images/sociogram-positioning.png" caption="Positioning Nodes on Sociogram Interface" %}{: .macos-screenshot }

When we click to the next stage, we have another sociogram, but this one is using a customized background image. In the custom background image, we have quadrants labelled as "Friends", "Family", "Work Colleagues", and "Other" - four role categories of network members. We ask "please position the people you have named in the boxes according to which group you feel they most belong to". Depending on the data collection needs of your study, it may be more or less important to understand the placement and proximity of nodes to one another on the sociogram.

{% include nc-image src="/assets/img/introduction-images/sociogram-background.png" caption="Custom Background on Sociogram Interface" %}{: .macos-screenshot }

On the next stage, we return to the original placement of nodes on the sociogram interface with the concentric circle background to generate alter-alter ties (edges). First we ask "please connect any two people who might spend time together without you being there" followed by a second prompt asking "please connect any two people who have conflict or who don't get along well with each other". Each prompt generates a different edge type. In order to make a tie, tap one node and then tap a second node. Go through the process again to remove the tie.

## The Dyad Census Interface

