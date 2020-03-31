---
layout: default
title: Name Generators
parent: Interface Documentation
nav_exclude: true
---
## Overview

Name Generators are one of the fundamental components of a network interview. They allow your participant to create alters, thereby describing one of the two main entities in your study's networks.

There are four name generator [Interfaces](../key-concepts/interfaces.md) in Network Canvas that can be added to your study, all of which can be configured within Architect.

{% include nc-image src="/assets/img/interface-documentation/name-generators/5.png" caption="Available Name Generator Interfaces in Architect" %}{: .macos-screenshot }

Each of these Interfaces is designed for a specific type of alter elicitation, with several associated advantages and disadvantages. Although they have some configuration options that are [shared with all other Network Canvas Interfaces](./shared.md), this article will focus on options specific to name generators.

## Quick Add, and Form based Name Generators

Both the "Name Generator (Using Forms)" and the "Name Generator (Quick Add)" Interfaces share some common visual elements.

{% include nc-image src="/assets/img/interface-documentation/name-generators/preview.png" %}

The **prompt** area, where the task is explained to the participant (see: [prompts](../key-concepts/prompts.md)), a **node list** area where alters that have been elicited are displayed, a **primary action button** that triggers the node elicitation process, and (optionally) one or more [Side Panels](#side-panels).

Beyond this, you have a choice about how precisely alters should be created - either using a full featured form, or using a simple "quick add" method.

### Using Forms

When using the "Name Generator (using forms)" Interface, the primary action button will trigger a form that participants must complete to create an alter. This form can include one or more fields to capture specific attribute data on each node (see our [key concepts article on forms](../key-concepts/forms.md) for further information on creating a form). This interface therefore combines the process of generating alters with the ability to do some basic attribute collection, or name interpreting, tasks.

{% include nc-image src="/assets/img/interface-documentation/name-generators/ng-form.png" caption="An example form" %}{: .macos-screenshot }

{: .no_toc}
#### Do

{: .good-practices}
- Use this interface when you want to collect small amounts of attribute data at the same time as a node is elicited. This can be more efficient than adding additional [Per Alter Form](./per-alter-form.md) Interfaces, or dedicated name interpreter Interfaces later.
- Ensure you collect a value for a variable called `name` on your form, so that [node labelling](../key-concepts/node-labelling.md) works correctly.

{: .no_toc}
#### Don't

{: .bad-practices}
- Resist the urge to create long forms with many items. This may discourage participants from naming additional alters, as it will make the task of nominating an alter more burdensome.
- Avoid attributes that might be better considered relative to other nodes in the network. For example, perceptual scales may benefit from using the [Ordinal Bin](./ordinal-bin.md) Interface.

### Quick Add

This name generator allows study participants to rapidly create nodes using a single field form in response to the prompt(s) you define on this stage. To configure this interface, you will define a single "quick add variable" to store the value of the form. In most cases, you will call this variable "name."

{% include nc-image src="/assets/img/interface-documentation/name-generators/ng-quick.png" caption="A quick add Name Generator" %}{: .macos-screenshot }

You have the option to assign one or multiple additional variables to nodes nominated in response to a particular prompt within this interface. You may wish to do this either to help track where a node was elicited or to reflect a name interpreter element of your prompt (e.g. adding a variable called "close_friend" to a prompt asking about closeness).

### Side Panels

Both of these name generators can use Side Panels. Side panels are a powerful feature that allows you to use network data from either the in-progress interview or from a network data file uploaded to your Architect asset library to assist with name generation activities.

For example, you might configure several prompts within your name generator that potentially have overlap in the participant’s social network. In this case, it might make sense to bring nodes previously nominated onto a subsequent screen so that a participant could easily list them again, if relevant.

{% include nc-image src="/assets/img/interface-documentation/name-generators/4.png" caption="Configuring a side panel" %}{: .macos-screenshot }

A side panel can also be created using a network data file (e.g. a roster) where you may want a participant to nominate nodes by selecting from a predetermined list. It is important to note that the exact same list will appear on subsequent side panels within the name generator unless you create a rule(s) to filter the data to be shown on the panel.

Side panels can be expanded or contracted in the interview by clicking on the heading.

## Small Roster Name Generator

These name generators are configured the same way, but accommodate different roster sizes. Datasets containing up to 100 nodes are suitable for use in the small roster name generator and those in excess of 100 nodes are suitable for the large roster name generator.

| Important considerations for large rosters                          |
| :----------------------------------------------------------- |
| We have tested a 60,000 node dataset in the large roster name generator with success, however, please be prepared for the loading and searchability functions to slow considerably the larger the dataset you use. The upper limit of this interface is largely dependent on both the device you use and your usability threshold, so a powerful laptop and some flexibility about the interface operating somewhat slower might be required particularly for larger datasets.<br/><br/> To configure either the small or large roster name generator, you will need to select a data file to use on this stage. Once selected, the title of the file will appear in the dark blue box and you will be able to update the asset by clicking the red "update asset" button to select or browse for a new file.|
{: .key-concept }

Next, you will define the card display options which determine how roster data is displayed to your participants. By default, cards will display the **name** attribute from your data file as the main card title. If you want additional attributes displayed on the cards, you will define them by clicking the green "add new" button and defining these relevant attributes.

{% include nc-image src="/assets/img/interface-documentation/name-generators/6.png" caption="Configuring card display options" %}{: .macos-screenshot }

If using the small roster name generator, you will next define how the cards containing the roster alter data will be sorted. You can establish an initial sort order that will determine the display of the cards to your participant. If you do not define this section, the default will be to sort the cards in the order the nodes are defined by your data file. 

{% include nc-image src="/assets/img/interface-documentation/name-generators/7.png" caption="Configuring card sorting options" %}{: .macos-screenshot }

If using the large roster name generator, you will next define the properties of the search function participants will use to locate nodes within the roster. You have the option of allowing participants to search for nodes using any or all of the attributes you have selected to display on the cards representing alter data. You also have the option of specifying the search accuracy used to determine how close the text a participant types must be to an attribute to be considered a match.

## Large Roster Name Generator


