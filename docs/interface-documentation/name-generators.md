---
layout: default
title: Name Generators
parent: Interface Documentation
nav_exclude: true
---
## Overview

The Name Generator interface allows you to define prompts to elicit and collect the names, and other attribute data, of individuals who comprise the social network of your study participants.

There are four name generator options in Network Canvas which are detailed below. In each, you will define the stage name (i.e. a name to help you identify the stage in the timeline view of Architect and Network Canvas), the node type (e.g. person, place, etc.) to be generated on the stage, and the particular prompt(s) you use to elicit alter data from your participants.

{% include nc-image src="/assets/img/interface-documentation/name-generators/5.png" caption="Available Name Generator Interfaces in Network Canvas" %}{: .macos-screenshot }

## Name Generator (using Forms)

This name generator allows you to configure a [form](../key-concepts/forms.md) that your participant will complete for every node they create. This form can include one or multiple fields to capture specific attribute data on each node using a corresponding input control.

{% include nc-image src="/assets/img/interface-documentation/name-generators/ng-form.png" caption="An example form" %}{: .macos-screenshot }

For each field you configure, you will create a corresponding variable, prompt, and input control to collect the response. You also have the option of assigning validation for each field depending on the variable type to be collected. For example, you may configure a field within your form to elicit a name for which you might define the variable as "alter_name" and the prompt as "What is this person's name?" using a text input control. To ensure that this field is completed for every node nominated, you can assign a validation of "required".

## Name Generator (Quick Add)

This name generator allows study participants to rapidly create nodes using a single field form in response to the prompt(s) you define on this stage. To configure this interface, you will define a single "quick add variable" to store the value of the form. In most cases, you will call this variable "name."

{% include nc-image src="/assets/img/interface-documentation/name-generators/ng-quick.png" caption="A quick add Name Generator" %}{: .macos-screenshot }

You have the option to assign one or multiple additional variables to nodes nominated in response to a particular prompt within this interface. You may wish to do this either to help track where a node was elicited or to reflect a name interpreter element of your prompt (e.g. adding a variable called "close_friend" to a prompt asking about closeness).  

## Name Generator (roster small) and Name Generator (roster large)

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

## Side Panels

Side panels are an important feature available in both the name generator using forms or quick add. A side panel allows you to use network data from either the in-progress interview or from a network data file uploaded to your Architect asset library to assist with name generation activities.

For example, you might configure several prompts within your name generator that potentially have overlap in the participant’s social network. In this case, it might make sense to bring nodes previously nominated onto a subsequent screen so that a participant could easily list them again, if relevant.

{% include nc-image src="/assets/img/interface-documentation/name-generators/4.png" caption="Configuring a side panel" %}{: .macos-screenshot }

A side panel can also be created using a network data file (e.g. a roster) where you may want a participant to nominate nodes by selecting from a predetermined list. It is important to note that the exact same list will appear on subsequent side panels within the name generator unless you create a rule(s) to filter the data to be shown on the panel.
