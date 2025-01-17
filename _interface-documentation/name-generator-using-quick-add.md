---
title: Name Generators using Quick Add


image: /assets/img/interface-documentation/name-generators/ng-quick.png
type: Name Generator
creates: Creates nodes of a single type
uses_prompts: Yes
bad:
  - Avoid adding additional attribute variables to this Interface that could more accurately be collected elsewhere.
good:
  - Use this Interface when you want to elicit nodes quickly without the burden of collecting other attribute data at the same time. 
  - Use a variable called name as your "quick add variable" unless you have a good reason to use another. Keep in mind that Network Canvas will label nodes using this variable throughout the interview. 
---


Name Generators are one of the fundamental components of a network interview. They allow your participant to create alters, thereby describing one of the two main entities in your study's networks.

There are four name generator [Interfaces](../_key-concepts/interfaces.md) in Network Canvas that can be added to your study, all of which can be configured within Architect.

![Available Name Generator interfaces in Architect](/assets/img/interface-documentation/name-generators/add-screen.png){:standalone}

Each of these Interfaces is designed for a specific type of alter elicitation, with several associated advantages and disadvantages. Although they have some configuration options that are [shared with all other Network Canvas Interfaces](./shared.md), this article will focus on options specific to the main name generator interface, and a variant of it that uses a 'quick add' mode.

Using roster data in your study? Refer to our documentation on the [small roster name generator](./small-roster-name-generator.md) or [large roster name generator](./large-roster-name-generator.md).
{: .tip-box}

## Shared Interface Elements

Both the "Name Generator (Using Forms)" and the "Name Generator (Quick Add)" Interfaces share some common visual elements.

![Image](../../assets/img/interface-documentation/name-generators/preview.png)

The **prompt** area, where the task is explained to the participant (see: [prompts](../_key-concepts/prompts.md)), a **node list** area where alters that have been elicited are displayed, a **primary action button** that triggers the node elicitation process, and (optionally) one or more [Side Panels](#side-panels).

Beyond this, you have a choice about how precisely alters should be created - either using a full featured form, or using a simple "quick add" method.

### Side Panels

Both of these name generators can use Side Panels. Side panels are a powerful feature that allows you to use network data from either the in-progress interview or from a network data file uploaded to your Architect resource library to assist with name generation activities.

For example, when multiple prompts within a name generator have potential overlap in a participant's social network, it may be useful to bring nodes previously nominated onto a subsequent screen so that a participant can easily list them again.

![Configuring a side panel](/assets/img/interface-documentation/name-generators/side-panel.png){:standalone}

A side panel can also be created using a network data file (e.g. a roster) to allow a participant to select and nominate alters from a predetermined list. It is important to note that the exact same list will appear on subsequent side panels within the name generator unless a rule(s) is created to filter the data to be shown on the panel (see [network filtering](../_key-concepts/network-filtering.md)).

Side panels can be expanded or contracted in the interview by clicking on the heading.

## Using "Quick Add"

When using the "Name Generator (using quick add)" Interface, the primary action button will trigger a single field form that a participant must complete to create an alter. This Interface uses a single "quick add variable" to store the value of the form, which allows a participant to rapidly create alters.

![A quick add name generator](/assets/img/interface-documentation/name-generators/ng-quick.png){:standalone}

One or multiple [additional variables](../_key-concepts/additional-variables.md) can be added to alters nominated on this Interface. Capturing additional variables may be useful either to help track where a node was elicited or to reflect a name interpreter element of the prompt (e.g. adding a variable called "close_friend" to a prompt asking about closeness).  
