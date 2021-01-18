---

title: Name Generators
parent: Interface Documentation
nav_exclude: true
---
## Overview

Name Generators are one of the fundamental components of a network interview. They allow your participant to create alters, thereby describing one of the two main entities in your study's networks.

There are four name generator [Interfaces](../key-concepts/interfaces.md) in Network Canvas that can be added to your study, all of which can be configured within Architect.

{% include nc-image src="/assets/img/interface-documentation/name-generators/add-screen.png" caption="Available Name Generator Interfaces in Architect" %}{: .macos-screenshot }

Each of these Interfaces is designed for a specific type of alter elicitation, with several associated advantages and disadvantages. Although they have some configuration options that are [shared with all other Network Canvas Interfaces](./shared.md), this article will focus on options specific to the main name generator interface, and a variant of it that uses a 'quick add' mode.

{% include tip-info.md content="Using roster data in your study? Refer to our article on [roster name generators](./roster-name-generators.md) for information about our dedicated roster interfaces." markdown=true %}

## Shared Interface Elements

Both the "Name Generator (Using Forms)" and the "Name Generator (Quick Add)" Interfaces share some common visual elements.

{% include nc-image src="/assets/img/interface-documentation/name-generators/preview.png" %}

The **prompt** area, where the task is explained to the participant (see: [prompts](../key-concepts/prompts.md)), a **node list** area where alters that have been elicited are displayed, a **primary action button** that triggers the node elicitation process, and (optionally) one or more [Side Panels](#side-panels).

Beyond this, you have a choice about how precisely alters should be created - either using a full featured form, or using a simple "quick add" method.

### Side Panels

Both of these name generators can use Side Panels. Side panels are a powerful feature that allows you to use network data from either the in-progress interview or from a network data file uploaded to your Architect resource library to assist with name generation activities.

For example, when multiple prompts within a name generator have potential overlap in a participant's social network, it may be useful to bring nodes previously nominated onto a subsequent screen so that a participant can easily list them again.

{% include nc-image src="/assets/img/interface-documentation/name-generators/4.png" caption="Configuring a side panel" %}{: .macos-screenshot }

A side panel can also be created using a network data file (e.g. a roster) to allow a participant to select and nominate alters from a predetermined list. It is important to note that the exact same list will appear on subsequent side panels within the name generator unless a rule(s) is created to filter the data to be shown on the panel (see [network filtering](../key-concepts/filtering.md)).

Side panels can be expanded or contracted in the interview by clicking on the heading.

## Using Forms

When using the "Name Generator (using forms)" Interface, the primary action button will trigger a form that participants must complete to create an alter. This form can include one or more fields to capture specific attribute data on each node (see our [key concepts article on forms](../key-concepts/forms.md) for further information on creating a form). This interface therefore combines the process of generating alters with the ability to do some basic attribute collection, or name interpreting, tasks.

{% include nc-image src="/assets/img/interface-documentation/name-generators/ng-form.png" caption="An example form" %}{: .macos-screenshot }

{: .no_toc}
### Do

{: .good-practices}
- Use this interface when you want to collect small amounts of attribute data at the same time as a node is elicited. This can be more efficient than adding additional [Per Alter Form](./per-alter-form.md) Interfaces, or dedicated name interpreter Interfaces later.
- Ensure you collect a value for a variable called `name` on your form, so that [node labelling](../key-concepts/node-labelling.md) works correctly.

{: .no_toc}
### Don't

{: .bad-practices}
- Resist the urge to create long forms with many items. This may discourage participants from naming additional alters, as it will make the task of nominating an alter more burdensome.
- Avoid attributes that might be better considered relative to other nodes in the network. For example, perceptual scales may benefit from using the [Ordinal Bin](./ordinal-bin.md) Interface.

## Using "Quick Add"

When using the "Name Generator (using quick add)" Interface, the primary action button will trigger a single field form that a participant must complete to create an alter. This Interface uses a single "quick add variable" to store the value of the form, which allows a participant to rapidly create alters. 

{% include nc-image src="/assets/img/interface-documentation/name-generators/ng-quick.png" caption="A quick add Name Generator" %}{: .macos-screenshot }

One or multiple additional variables can be added to alters nominated on this Interface. Capturing additional variables may be useful either to help track where a node was elicited or to reflect a name interpreter element of the prompt (e.g. adding a variable called "close_friend" to a prompt asking about closeness).  

{: .no_toc}
### Do

{: .good-practices}
- Use this Interface when you want to elicit nodes quickly without the burden of collecting other attribute data at the same time. 
- Use a variable called name as your "quick add variable" unless you have a good reason to use another. Keep in mind that Network Canvas will label nodes using this variable throughout the interview. 

{: .no_toc}
### Don't

{: .bad-practices}
- Avoid adding additional attribute variables to this Interface that could more accurately be collected elsewhere.
