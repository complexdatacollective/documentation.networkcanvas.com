---
layout: default
title: Per Alter Form
parent: Interface Documentation
---
## Overview

{% include nc-image src="/assets/img/interface-documentation/per-alter-form/example.png" %}

The Per Alter Form is a _name interpreter_ interface that captures attribute data on the alters in a participant's network. When using the Per Alter Form, participants review an introductory panel which describes the tasks on the stage and then complete a [form](../key-concepts/forms.md) on each node in their network. These forms are customizable and can include one or multiple fields to collect specific attribute data using a variety of [input controls](../key-concepts/input-controls.md). 

test

## Configuring Per Alter Form

{% include nc-image src="/assets/img/interface-documentation/per-alter-form/add-screen.png" caption="Per Alter Form is a Name Interpreter interface" %}

A single edge type is selectable per screen. This screen supports [filtering](../key-concepts/filtering.md) for nodes that match the specified type.

{% include nc-image src="/assets/img/interface-documentation/per-alter-form/architect-node-type.png" %}{: .macos-screenshot }

The introduction screen is shown before any matching alters and can be used to introduce the task.

{% include nc-image src="/assets/img/interface-documentation/per-alter-form/architect-intro.png" caption="The introduction screen is configurable with a title and introduction text." %}{: .macos-screenshot }

Each node will be assigned [variables](../key-concepts/variable-types.md) using a configurable [form](../key-concepts/forms.md).

{% include nc-image src="/assets/img/interface-documentation/per-alter-form/architect-form.png" caption="Form fields can be re-ordered by dragging, and deleted by clicking the right hand 'x'" %}{: .macos-screenshot }

{: .no_toc}
#### Do

{: .good-practices}
- Use this Interface as a simple way to systematically collect data on alters. 
- Use the introductory panel to orient participants to the tasks within the form they will complete for each alter.


{: .no_toc}
#### Don't

{: .bad-practices}
- Avoid overloading this Interface with too many fields and/or text-heavy prompts. Instead, consider taking advantage of other more interactive Interfaces, such as the [Categorical Bin](./categorical-bin.md) and [Ordinal Bin](./ordinal-bin.md), to ease participant burden. 
