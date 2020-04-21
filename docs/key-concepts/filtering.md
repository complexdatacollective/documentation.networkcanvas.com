---
layout: default
title: Network Filtering
parent: Key Concepts
---
## Overview

Network filtering is a configuration feature you will find in several areas of Architect. Simply put, it allows you to define one or more rules that determine which nodes or edges should be shown on a given stage (or in a side panel - [see below](#network-filtering-in-a-side-panel)). It can be used to only show a subset of the network.

This is particularly useful in cases where the content of the stage does not apply to all network entities. Consider the example of an interview protocol with two stages - a [Name Generator](../interface-documentation/name-generator.md), and an [Ordinal Bin](../interface-documentation/ordinal-bin.md). On the first stage, for each alter named the participant is asked if they play sports with the individual. The second stage asks "how often do you play sports with each of these people?". Filtering the network for this second stage to show only those alters with the "plays sports with" attribute will reduce the response burden of the task, and will make the interview protocol more efficient.

{% include tip-info.md content="Network filtering is different from [skip logic](./skip-logic.md)! Although the two sound similar in principle, they achieve very different design goals. Whereas network filtering determines which nodes to show *within* a stage, skip logic determines if a stage should be shown at all. Consult the article on [skip logic](./skip-logic.md) to learn more." %}

## Configuring Network Filtering on a Stage

To configure network filtering within a stage, open the stage from the timeline view, and expand the section called "Network Filtering". From here, you have the ability to create one or more **rules** (of type alter or edge), as well as to set the **join operator** by determining if "all rules", or "any rule" must match.

[screenshot of expanded section]

### Filtering Rules

Similar to skip logic rules, filtering rules have two types that can be targeted at either nodes or edges:

- **"Type" Rules**: These rules allow you to query if a given entity of a specified type exists in the network, using either the `exists` or `not exists` operator. This rule type is not generally useful for most typical filtering operations, but can be used when roster data contains nodes or edges of multiple types.
- **"Variable" Rules**: These rules allow you to query the value of a variable on a given entity type. For example, you may query the value of a variable called `age` on an alter type called 'Person'. You can evaluate the result using one of several logical operators, that vary depending on the variable type. For example, number variables will let you query using operators such as 'greater than' and 'less than'.

Unlike skip logic rules (which are aggregated into an overall boolean `true` or `false` value), filter rules are applied to each node and edge in the network, and are not aggregated. Instead, the nodes that remain are those that satisfy the rule constraints.

{% include tip-caution.md content="It is important to remember that filtering retains the validity of the network model: the returned network will not contain orphaned nodes when using an edge query, or partially disconnected edges, since these are not phenomenologically valid." %}

### The Join Operator

Rules are chained together (or 'joined') using either `AND` or `OR` logic, which is set in the network filter configuration section using the "Must match" options "all rules" and "any rules" respectively. These methods behave much as you might expect. In the context of a filter operation:

- `OR` signifies that if a node or edge meets _any_ individual rule criteria, it will be returned in the overall network.
- `AND` signifies that nodes and edges in the returned network should satisfy the criteria from _all_ rules.

This means that the choice of join operator can have an extremely significant impact on the way that your rules are collectively evaluated. You should be careful to only use the `AND` operator to chain together multiple required property values when all values are simultaneously required **on a single node**.

### Extended Example

Example here should cover edge rules, as these are more complex. Something like "nodes with attribute `drug_use = true` who have an edge of type sex".

## Network Filtering in a Side Panel

You also have the ability to filter the content of Name Generator [side panels](../interface-documentation/name-generator.md#side-panels) (where they are used). This features works exactly the same way as stage level network filtering, except that the results are only applied to the specific side panel you are configuring. Any filtering you set will apply across all prompts for that stage.

This feature can be particularly useful if you wish to filter elements of a roster. For example, your roster may contain an attribute that represents graduation year that you could use to filter the side panel content for a question about classmates known from a certain year group.
