---
layout: default
title: Shared Interface Options
parent: Interface Documentation
nav_exclude: true
---
## Overview

Some configuration options are available to all or most interface screens (dependent on the sub-category of interface, e.g. name generators).

{% include nc-image src="/assets/img/interface-documentation/shared/navigation.png" caption="The stage name as visible in the interview navigation" %}{: .macos-screenshot }

## Shared Configuration

All stages have a configurable name. This is shown in the navigation when conducting interviews, and in the timeline when constructing interviews. It can be used to set a memorable title or describe the purpose of a particular stage.

{% include nc-image src="/assets/img/interface-documentation/shared/shared-configuration.png" %}

### Entity Type

All stage types must select a single entity type, which defines the primary entity type for data collection. The one exception is the information screen, which does not collect any data.

Depending on the specific interface this will refer to either a *node* type, or an *edge* type.

### Filtering

This feature is available to *Sociogram* and *Name Interpreter* stage type categories. It allows further refinement of the selected entity type.

For example, a Sociogram may have a "Person" node type selected as the entity type. You may then use this option to narrow down to only those "Person" nodes which also have a specific attribute.

[Find out more about filtering](../key-concepts/filtering.md)

### Skip Logic

This feature is available to all stage types. The state of the participant network may be assessed in order to determine whether a stage should be shown or instead skipped.

[Find out more about skip logic](../key-concepts/skip-logic.md)