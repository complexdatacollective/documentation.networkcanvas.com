---

title: Per Alter Form
parent: Interface Documentation
image: /assets/img/interface-documentation/per-alter-form/example.png
type: Name Interpreter
creates: Attribute data on a single node type
uses_prompts: No
bad:
  - Avoid overloading this Interface with too many fields and/or text-heavy prompts. Instead, consider taking advantage of other more interactive Interfaces, such as the [Categorical Bin](./categorical-bin.md) and [Ordinal Bin](./ordinal-bin.md), to ease participant burden. 
good:
  - Use this Interface as a simple way to systematically collect data on alters. 
  - Use the introductory panel to orient participants to the tasks within the form they will complete for each alter.
---

The Per Alter Form is a _name interpreter_ interface that captures attribute data on the alters in a participant's network. When using the Per Alter Form, participants review an introductory panel which describes the tasks on the stage and then complete a [form](../reference/key-concepts/forms.md) on each node in their network. These forms are customizable and can include one or multiple fields to collect specific attribute data using a variety of [input controls](../reference/key-concepts/input-controls.md). 

## Configuring Per Alter Form

![](/assets/img/interface-documentation/per-alter-form/add-screen.png)

A single edge type is selectable per screen. This screen supports [filtering](../reference/key-concepts/filtering.md) for nodes that match the specified type.

![](/assets/img/interface-documentation/per-alter-form/architect-node-type.png)

The introduction screen is shown before any matching alters and can be used to introduce the task.

![](/assets/img/interface-documentation/per-alter-form/architect-intro.png)

Each node will be assigned [variables](../reference/key-concepts/variable-types.md) using a configurable [form](../reference/key-concepts/forms.md).

![](/assets/img/interface-documentation/per-alter-form/architect-form.png)
